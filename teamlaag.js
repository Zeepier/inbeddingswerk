// =============================================================
// RUIMTE VOOR PARTICIPATIE — teamlaag
// =============================================================
// Laadt een teamlaag (team.json) over de basisset uit content.js heen.
// Zie docs/ontwerp-lokale-uitbreiding.md voor het datamodel.
//
// Welke teamlaag?
//   - ?team=<url>   in de adresbalk (bijv. ?team=team.voorbeeld.json)
//   - anders:       team.json naast deze pagina. In de basisversie is dat een
//                   leeg bestand ({}); een teamkopie vervangt het door de eigen laag.
//
// Na laden staat de samengevoegde inhoud in dezelfde globale arrays
// (values, tensions, interventions, cases), zodat de pagina's er
// gewoon mee kunnen renderen. Pagina's wachten op `teamReady`.
//
// Kenmerken op kaarten na samenvoegen:
//   local: true          — eigen kaart van het team
//   adjusted: true       — basiskaart met lokaal aangepaste velden
//   orig: { veld: … }    — de originele basistekst van aangepaste velden
// =============================================================

// Set van een kaart ('v' | 't' | 'i' | 'c'), ook voor teamkaarten met prefix ('x-t1' -> 't')
const setKey = x => String(x.id || x).replace(/^[a-z0-9]+-/i, '')[0];

let teamLayer = null;            // de geladen teamlaag (of null)
const teamWarnings = [];         // meldingen bij het samenvoegen

const teamReady = (async () => {
  let url = null;
  try { url = new URLSearchParams(location.search).get('team'); } catch (e) {}
  const explicit = !!url;
  url = url || 'team.json';
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) {
      if (explicit) teamWarnings.push(`Teamlaag niet gevonden: ${url}`);
      return null;
    }
    const data = await res.json();
    if (!data || !Object.keys(data).length) return null;   // leeg team.json = geen teamlaag
    teamLayer = data;
    applyTeamLayer(teamLayer);
  } catch (e) {
    if (explicit) teamWarnings.push(`Teamlaag kon niet worden geladen (${url}): ${e.message}`);
  }
  if (teamWarnings.length) console.warn('Teamlaag:\n- ' + teamWarnings.join('\n- '));
  return teamLayer;
})();

function applyTeamLayer(layer) {
  const sets = { v: values, t: tensions, i: interventions, c: cases };
  const all = () => [...values, ...tensions, ...interventions, ...cases];
  const find = id => all().find(x => x.id === id);
  const uniq = arr => [...new Set(arr)];

  // 1. Eigen kaarten toevoegen — nummering loopt door na de basisset
  const add = layer.toevoegen || {};
  for (const [key, list] of [['values', values], ['tensions', tensions], ['interventions', interventions]]) {
    let nr = Math.max(0, ...list.map(x => x.nr || 0));
    for (const card of add[key] || []) {
      if (!card.id || find(card.id)) { teamWarnings.push(`Kaart overgeslagen: id "${card.id}" ontbreekt of bestaat al`); continue; }
      list.push({
        tensions: [], values: [], interventions: [], cases: [],
        ...(key === 'values' ? { group: 'beide' } : {}),
        ...card, nr: ++nr, local: true,
      });
    }
  }

  // 2. Verhalen als link
  for (const v of layer.verhalen || []) {
    if (!v.id || find(v.id)) { teamWarnings.push(`Verhaal overgeslagen: id "${v.id}" ontbreekt of bestaat al`); continue; }
    cases.push({
      id: v.id, local: true, link: true,
      title: v.title || '', location: v.locatie || '', summary: v.samenvatting || '', full: '',
      url: v.url || '', intranet: !!v.intranet, photo: v.foto || '',
      tensions: v.tensions || [], interventions: v.interventions || [],
    });
  }

  // 3. Basiskaarten aanpassen — originele tekst bewaren
  for (const [id, fields] of Object.entries(layer.aanpassen || {})) {
    const card = find(id);
    if (!card || card.local) { teamWarnings.push(`Aanpassing overgeslagen: basiskaart "${id}" bestaat niet`); continue; }
    card.orig = card.orig || {};
    for (const [f, val] of Object.entries(fields)) {
      if (!(f in card.orig)) card.orig[f] = card[f];
      card[f] = val;
    }
    card.adjusted = true;
  }

  // 4. Extra koppelingen tussen bestaande kaarten — opgeslagen aan de kant die de pagina's lezen:
  //    spanning–interventie op de spanning, verhaal–spanning/interventie op het verhaal,
  //    waarde–spanning op beide (zie stap 6)
  const field = { v: 'values', t: 'tensions', i: 'interventions', c: 'cases' };
  const kind = id => String(id).replace(/^[a-z0-9]+-/i, '')[0];
  const owner = { 'i>t': true, 't>c': true, 'i>c': true, 'v>c': true };   // deze paren omdraaien
  for (const { van, naar } of layer.koppelen || []) {
    let a = find(van), b = find(naar);
    if (!a || !b) { teamWarnings.push(`Koppeling overgeslagen: ${van} → ${naar}`); continue; }
    if (owner[kind(a.id) + '>' + kind(b.id)]) [a, b] = [b, a];
    const f = field[kind(b.id)];
    a[f] = [...(a[f] || []), b.id];
  }

  // 5. Basiskaarten verbergen
  const hidden = new Set(layer.verbergen || []);
  for (const id of hidden) if (!find(id)) teamWarnings.push(`Verbergen: kaart "${id}" bestaat niet`);
  for (const list of Object.values(sets)) {
    for (let k = list.length - 1; k >= 0; k--) if (hidden.has(list[k].id)) list.splice(k, 1);
  }

  // 6. Koppelingen in beide richtingen gelijk trekken en opschonen
  //    waarde <-> spanning (values/tensions), spanning -> verhaal (cases), verhaal -> spanning/interventie
  for (const v of values) for (const tid of v.tensions || []) {
    const t = tensions.find(x => x.id === tid); if (t) t.values = uniq([...(t.values || []), v.id]);
  }
  for (const t of tensions) for (const vid of t.values || []) {
    const v = values.find(x => x.id === vid); if (v) v.tensions = uniq([...(v.tensions || []), t.id]);
  }
  for (const c of cases) for (const tid of c.tensions || []) {
    const t = tensions.find(x => x.id === tid); if (t) t.cases = uniq([...(t.cases || []), c.id]);
  }
  for (const t of tensions) for (const cid of t.cases || []) {
    const c = cases.find(x => x.id === cid); if (c) c.tensions = uniq([...(c.tensions || []), t.id]);
  }
  const exists = new Set(all().map(x => x.id));
  for (const x of all()) {
    for (const f of ['values', 'tensions', 'interventions', 'cases']) {
      if (!Array.isArray(x[f])) continue;
      const kept = uniq(x[f]).filter(id => exists.has(id));
      const dropped = x[f].filter(id => !exists.has(id) && !hidden.has(id));
      if (dropped.length) teamWarnings.push(`${x.id}: verwijzing naar onbekende kaart(en) ${uniq(dropped).join(', ')}`);
      x[f] = kept;
    }
  }

  // 7. Waarschuwing bij meer dan 15 waarden (zie testrondes: liever niet boven de 15)
  if (values.length > 15) teamWarnings.push(`De teamversie heeft ${values.length} waarden — liever niet meer dan 15.`);
}
