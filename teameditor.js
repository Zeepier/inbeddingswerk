// =============================================================
// RUIMTE VOOR PARTICIPATIE — teameditor (beheer-modus)
// =============================================================
// Wordt alleen geladen met ?beheer in de adresbalk (zie teamlaag.js).
// Werkt op de werkversie van de teamlaag in deze browser (localStorage):
//   - kaarten toevoegen, bewerken, verwijderen (waarden, spanningen,
//     interventies, verhalen)
//   - basiskaarten aanpassen (met originele tekst), verbergen, weer tonen
//   - koppelingen leggen en weghalen (koppelingen uit de basisset staan vast)
//   - exporteren als team.json, importeren, printkaarten openen
// Datamodel: docs/ontwerp-lokale-uitbreiding.md. Alles in het Nederlands.
// =============================================================
(function () {
  let draft = loadTeamDraft() || { team: { naam: '' } };
  const ID_PREFIX = 'tm-';

  // ---------- helpers ----------
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const clone = o => JSON.parse(JSON.stringify(o));
  const allCards = () => [...values, ...tensions, ...interventions, ...cases];
  const findCard = id => allCards().find(x => x.id === id);
  const baseCard = id => [...TEAM_BASE.values, ...TEAM_BASE.tensions, ...TEAM_BASE.interventions, ...TEAM_BASE.cases].find(x => x.id === id);
  const SET_NAME = { v: 'waarde', t: 'spanning', i: 'interventie', c: 'verhaal' };
  const SET_LIST = { v: () => values, t: () => tensions, i: () => interventions, c: () => cases };
  const ADD_KEY = { v: 'values', t: 'tensions', i: 'interventions' };
  const words = s => (String(s || '').trim().match(/\S+/g) || []).length;

  function ensure() {
    draft.team = draft.team || { naam: '' };
    draft.toevoegen = draft.toevoegen || {};
    for (const k of ['values', 'tensions', 'interventions']) draft.toevoegen[k] = draft.toevoegen[k] || [];
    draft.verhalen = draft.verhalen || [];
    draft.verbergen = draft.verbergen || [];
    draft.aanpassen = draft.aanpassen || {};
    draft.koppelen = draft.koppelen || [];
  }
  ensure();

  // Eigen kaart in de werkversie (niet de samengevoegde kopie)
  function ownEntry(id) {
    if (setKey(id) === 'c') return draft.verhalen.find(x => x.id === id);
    return (draft.toevoegen[ADD_KEY[setKey(id)]] || []).find(x => x.id === id);
  }
  function newId(k) {
    const used = new Set(allCards().map(x => x.id).concat(draft.verhalen.map(x => x.id)));
    let n = 1;
    while (used.has(`${ID_PREFIX}${k}${n}`)) n++;
    return `${ID_PREFIX}${k}${n}`;
  }

  // ---------- koppelingen ----------
  // Waar een koppeling 'natuurlijk' op een eigen kaart staat (zelfde velden als in content.js)
  const NATURAL = { v: ['t'], t: ['v', 'i', 'c'], c: ['t', 'i'], i: [] };
  const FIELD = { v: 'values', t: 'tensions', i: 'interventions', c: 'cases' };
  // Huidige koppelingen van een kaart met een andere set (zoals de site ze toont)
  function linksOf(card, k) {
    const ck = setKey(card);
    if (ck === 'i' && k === 't') return tensions.filter(t => (t.interventions || []).includes(card.id)).map(t => t.id);
    if (ck === 'i' && k === 'c') return cases.filter(c => (c.interventions || []).includes(card.id)).map(c => c.id);
    if (ck === 'v' && k === 'c') return [];
    return [...(card[FIELD[k]] || [])];
  }
  // Koppelingen die uit de basisset komen staan vast
  function baseLinks(id, k) {
    const b = baseCard(id);
    if (!b) return [];
    const ck = setKey(id);
    if (ck === 'i' && k === 't') return TEAM_BASE.tensions.filter(t => (t.interventions || []).includes(id)).map(t => t.id);
    if (ck === 'i' && k === 'c') return TEAM_BASE.cases.filter(c => (c.interventions || []).includes(id)).map(c => c.id);
    if (ck === 't' && k === 'c') return [...new Set([...(b.cases || []), ...TEAM_BASE.cases.filter(c => (c.tensions || []).includes(id)).map(c => c.id)])];
    if (ck === 'c' && k === 't') return [...new Set([...(b.tensions || []), ...TEAM_BASE.tensions.filter(t => (t.cases || []).includes(id)).map(t => t.id)])];
    return [...(b[FIELD[k]] || [])];
  }
  function addLink(a, b) {
    const ka = setKey(a), kb = setKey(b);
    const ea = ownEntry(a), eb = ownEntry(b);
    if (ea && NATURAL[ka].includes(kb)) { ea[FIELD[kb]] = [...new Set([...(ea[FIELD[kb]] || []), b])]; return; }
    if (eb && NATURAL[kb].includes(ka)) { eb[FIELD[ka]] = [...new Set([...(eb[FIELD[ka]] || []), a])]; return; }
    if (!draft.koppelen.some(x => (x.van === a && x.naar === b) || (x.van === b && x.naar === a))) draft.koppelen.push({ van: a, naar: b });
  }
  function removeLink(a, b) {
    for (const [x, y] of [[a, b], [b, a]]) {
      const e = ownEntry(x);
      const f = FIELD[setKey(y)];
      if (e && Array.isArray(e[f])) e[f] = e[f].filter(id => id !== y);
    }
    draft.koppelen = draft.koppelen.filter(x => !((x.van === a && x.naar === b) || (x.van === b && x.naar === a)));
  }

  // ---------- opslaan en opnieuw tekenen ----------
  function persist(dirty = true) {
    ensure();
    saveTeamDraft(draft, dirty);
    refresh();
  }
  function refresh() {
    rebuildTeam(draft, { keepHidden: true });
    sortCards();
    showTeamLine(draft);
    applyLang(lang);         // tekent alles opnieuw; daarna roept de site afterSiteRender() aan
  }

  // ---------- beheerbalk ----------
  const css = `
  .ed-bar { position: sticky; top: 0; z-index: 150; background: #1F2A26; color: #fff; padding: 10px 20px;
    display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-family: Inter, sans-serif; font-size: 13px; }
  .ed-bar .ed-ttl { font-weight: 600; }
  .ed-bar input.ed-name { font: inherit; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2);
    color: #fff; border-radius: 6px; padding: 5px 8px; width: 220px; }
  .ed-bar input.ed-name::placeholder { color: rgba(255,255,255,0.45); }
  .ed-sep { width: 1px; height: 22px; background: rgba(255,255,255,0.2); }
  .ed-btn { font: inherit; font-size: 12.5px; font-weight: 600; border-radius: 100px; padding: 6px 12px;
    border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #fff; cursor: pointer; }
  .ed-btn:hover { background: rgba(255,255,255,0.1); }
  .ed-btn.solid { background: #E27A60; border-color: #E27A60; }
  .ed-btn.ghost { border-color: transparent; color: rgba(255,255,255,0.7); }
  .ed-status { width: 100%; font-size: 12px; color: rgba(255,255,255,0.75); display: flex; gap: 14px; flex-wrap: wrap; }
  .ed-status b.dirty { color: #FFD9A8; }
  .ed-status b.clean { color: #A8E0C0; }
  .ed-warn { background: #FBEFE6; border-bottom: 1px solid #F0C9B6; color: #8A3A26; padding: 8px 20px; font-size: 13px; font-family: Inter, sans-serif; }
  .ed-warn:empty { display: none; }
  .switcher-wrap { top: var(--ed-bar-h, 0px) !important; }
  @media (max-width: 900px) {
    .ed-bar { position: static; }
    .ed-bar input.ed-name { width: 100%; order: -1; }
  }

  .ed-wrap { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
  .ed-wrap > button { flex: 1; }
  .ed-wrap:has(> .hidden) { display: none; }
  .ed-acts { display: flex; gap: 6px; flex-wrap: wrap; }
  .ed-act { font: inherit; font-family: Inter, sans-serif; font-size: 11.5px; font-weight: 600; color: var(--ink-soft);
    background: #fff; border: 1px solid var(--line); border-radius: 100px; padding: 3px 10px; cursor: pointer; }
  .ed-act:hover { border-color: var(--ink-soft); color: var(--ink); }
  .ed-act.danger:hover { border-color: #8A3A26; color: #8A3A26; }
  .ed-wrap.is-hidden > button { opacity: 0.4; border-style: dashed; }
  .ed-acts { align-items: center; }
  .ed-wrap .ed-tag { font-family: Inter, sans-serif; font-size: 10.5px; font-weight: 600; color: var(--ink-muted); margin-left: auto; }
  .ed-wrap.is-hidden .ed-tag { color: #fff; background: var(--ink-muted); border-radius: 100px; padding: 1px 8px; }

  .ed-drawer { position: fixed; top: 0; right: 0; bottom: 0; width: min(460px, 100vw); background: #fff; z-index: 300;
    box-shadow: -10px 0 30px rgba(31,42,38,0.18); overflow-y: auto; padding: 22px 24px 32px; font-family: Inter, sans-serif;
    transform: translateX(105%); transition: transform 0.25s ease; }
  .ed-drawer.open { transform: none; }
  .ed-drawer .ed-eyebrow { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 700; color: var(--ed-c, var(--ink-muted)); margin-bottom: 4px; }
  .ed-drawer h3 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 28px; margin-bottom: 18px; color: var(--ink); }
  .ed-x { position: absolute; top: 16px; right: 16px; width: 34px; height: 34px; border-radius: 50%; border: none; background: var(--bg-soft); cursor: pointer; font-size: 16px; }
  .ed-f { margin-bottom: 15px; }
  .ed-f > label { display: flex; justify-content: space-between; gap: 10px; font-size: 12px; font-weight: 600; margin-bottom: 5px; color: var(--ink); }
  .ed-f > label small { font-weight: 400; color: var(--ink-muted); text-align: right; }
  .ed-f > label small.warn { color: #8A3A26; font-weight: 600; }
  .ed-in { width: 100%; font: inherit; font-size: 13.5px; border: 1px solid var(--line); border-radius: 6px; padding: 8px 10px; background: var(--bg); color: var(--ink); }
  .ed-in:focus { outline: none; border-color: var(--green); background: #fff; }
  .ed-in.big { font-family: 'Cormorant Garamond', serif; font-size: 19px; }
  textarea.ed-in { min-height: 70px; resize: vertical; line-height: 1.45; }
  .ed-orig { font-size: 11.5px; color: var(--ink-muted); margin-top: 4px; font-style: italic; }
  .ed-opts { display: flex; gap: 6px; flex-wrap: wrap; }
  .ed-opt { font-size: 12.5px; border: 1px solid var(--line); border-radius: 100px; padding: 5px 11px; cursor: pointer; user-select: none; background: #fff; }
  .ed-opt.on { background: var(--ed-c, var(--green)); border-color: var(--ed-c, var(--green)); color: #fff; font-weight: 600; }
  .ed-check { display: flex; align-items: center; gap: 8px; font-size: 13px; }
  .ed-pick { border: 1px solid var(--line); border-radius: 6px; padding: 6px; background: var(--bg); display: flex; flex-wrap: wrap; gap: 5px; align-items: center; }
  .ed-chip { display: inline-flex; align-items: center; gap: 5px; font-size: 12px; border-radius: 100px; padding: 3px 6px 3px 9px; background: #EAE5DA; color: var(--ink); }
  .ed-chip.k-v { background: #E3ECE6; color: #23402F; } .ed-chip.k-t { background: #F6EBD3; color: #6E4C0B; }
  .ed-chip.k-i { background: #E1EAF2; color: #234A6C; } .ed-chip.k-c { background: #EEE6F1; color: #4F3360; }
  .ed-chip button { border: none; background: none; cursor: pointer; font-weight: 700; opacity: 0.55; padding: 0 3px; font-size: 13px; }
  .ed-chip button:hover { opacity: 1; }
  .ed-chip .lock { opacity: 0.45; font-size: 10px; padding-right: 3px; }
  .ed-pick input { border: none; background: transparent; font: inherit; font-size: 12.5px; padding: 4px; flex: 1; min-width: 140px; outline: none; }
  .ed-dd { border: 1px solid var(--line); border-radius: 6px; background: #fff; margin-top: 4px; box-shadow: 0 6px 18px rgba(0,0,0,0.08); max-height: 210px; overflow-y: auto; }
  .ed-dd:empty { display: none; }
  .ed-dd div { padding: 6px 10px; font-size: 12.5px; border-bottom: 1px solid #F1ECE2; cursor: pointer; }
  .ed-dd div:hover, .ed-dd div.hl { background: #F6F1E6; }
  .ed-dd .n { display: inline-block; min-width: 30px; color: var(--ink-muted); }
  .ed-hint { font-size: 11.5px; color: var(--ink-muted); margin-top: 4px; }
  .ed-sub { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: var(--ink-muted); margin: 22px 0 10px; padding-top: 14px; border-top: 1px solid var(--line); }
  .ed-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
  .ed-actions button { font: inherit; font-size: 13px; font-weight: 600; border-radius: 100px; padding: 8px 16px; cursor: pointer; border: 1px solid var(--line); background: #fff; color: var(--ink); }
  .ed-actions .primary { background: var(--green); border-color: var(--green); color: #fff; }
  .ed-actions .right { margin-left: auto; }
  .ed-err { color: #8A3A26; font-size: 12.5px; margin-top: 10px; }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  const bar = document.createElement('div');
  bar.className = 'ed-bar';
  bar.innerHTML = `
    <span class="ed-ttl">Beheer teamversie</span>
    <input class="ed-name" id="edName" placeholder="Naam van het team" aria-label="Naam van het team">
    <span class="ed-sep"></span>
    <button class="ed-btn" data-add="v">+ Waarde</button>
    <button class="ed-btn" data-add="t">+ Spanning</button>
    <button class="ed-btn" data-add="i">+ Interventie</button>
    <button class="ed-btn" data-add="c">+ Verhaal</button>
    <span class="ed-sep"></span>
    <button class="ed-btn" id="edImport">Importeer…</button>
    <button class="ed-btn solid" id="edExport">Exporteer teamversie</button>
    <button class="ed-btn" id="edPrint">Printkaarten (PDF)</button>
    <button class="ed-btn ghost" id="edReset" title="Werkversie weggooien en opnieuw beginnen vanaf de gepubliceerde teamversie">Opnieuw beginnen</button>
    <button class="ed-btn ghost" id="edStop">Beheer sluiten</button>
    <input type="file" id="edFile" accept=".json,application/json" hidden>
    <div class="ed-status" id="edStatus"></div>`;
  const warn = document.createElement('div');
  warn.className = 'ed-warn';
  warn.id = 'edWarn';
  document.body.prepend(warn);
  document.body.prepend(bar);
  // Sticky balk: de modulekiezer schuift eronder; op smalle schermen scrolt de balk gewoon mee
  const setBarHeight = () => document.documentElement.style.setProperty('--ed-bar-h',
    (getComputedStyle(bar).position === 'sticky' ? bar.offsetHeight : 0) + 'px');
  window.addEventListener('resize', setBarHeight);

  const nameIn = bar.querySelector('#edName');
  nameIn.value = (draft.team && draft.team.naam) || '';
  nameIn.addEventListener('change', () => { draft.team.naam = nameIn.value.trim(); persist(); });
  bar.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => openForm(b.dataset.add, null)));
  bar.querySelector('#edExport').addEventListener('click', exportDraft);
  bar.querySelector('#edImport').addEventListener('click', () => bar.querySelector('#edFile').click());
  bar.querySelector('#edFile').addEventListener('change', importDraft);
  bar.querySelector('#edPrint').addEventListener('click', () => window.open('speelkaarten.html?team=draft', '_blank'));
  bar.querySelector('#edReset').addEventListener('click', () => {
    if (!confirm('De werkversie in deze browser weggooien en opnieuw beginnen vanaf de gepubliceerde teamversie? Exporteer eerst als je wijzigingen wilt bewaren.')) return;
    try { localStorage.removeItem(TEAM_DRAFT_KEY); localStorage.removeItem(TEAM_DIRTY_KEY); } catch (e) {}
    location.reload();
  });
  bar.querySelector('#edStop').addEventListener('click', () => {
    if (teamDraftDirty() && !confirm('Er zijn wijzigingen die nog niet zijn geëxporteerd. Ze blijven bewaard in deze browser. Beheer sluiten?')) return;
    const u = new URL(location.href); u.searchParams.delete('beheer'); location.href = u.toString();
  });

  function updateStatus() {
    ensure();
    const own = draft.toevoegen.values.length + draft.toevoegen.tensions.length + draft.toevoegen.interventions.length;
    const parts = [
      `${own} eigen kaart${own === 1 ? '' : 'en'}`,
      `${draft.verhalen.length} eigen verha${draft.verhalen.length === 1 ? 'al' : 'len'}`,
      `${draft.verbergen.length} verborgen`,
      `${Object.keys(draft.aanpassen).length} aangepast`,
      `${draft.koppelen.length} extra koppeling${draft.koppelen.length === 1 ? '' : 'en'}`,
    ];
    const dirty = teamDraftDirty();
    bar.querySelector('#edStatus').innerHTML = parts.map(esc).join(' · ') +
      ` · ${dirty ? '<b class="dirty">niet geëxporteerd</b>' : '<b class="clean">alles geëxporteerd</b>'}` +
      ` · <span>werkversie wordt bewaard in deze browser</span>`;
    warn.textContent = teamWarnings.length ? 'Let op: ' + teamWarnings.join(' · ') : '';
    setBarHeight();
  }

  // ---------- acties op kaarten ----------
  const GRIDS = ['#valuesGrid .vcard', '#tensionsGrid .tcard', '#interventionsGrid .icard', '#casesGrid .ccard'];
  window.afterSiteRender = function () {
    for (const sel of GRIDS) {
      document.querySelectorAll(sel).forEach(card => {
        if (card.parentElement.classList.contains('ed-wrap')) return;
        const id = card.dataset.id;
        const x = findCard(id);
        if (!x) return;
        const wrap = document.createElement('div');
        wrap.className = 'ed-wrap' + (x.teamHidden ? ' is-hidden' : '');
        card.replaceWith(wrap);
        wrap.appendChild(card);
        const acts = document.createElement('div');
        acts.className = 'ed-acts';
        const btn = (label, fn, cls = '') => {
          const b = document.createElement('button');
          b.type = 'button'; b.className = 'ed-act ' + cls; b.textContent = label;
          b.addEventListener('click', e => { e.stopPropagation(); fn(); });
          acts.appendChild(b);
        };
        let tag = '';
        if (x.local) {
          tag = 'eigen kaart';
          btn('✎ Bewerken', () => openForm(setKey(x), id));
          btn('Verwijderen', () => deleteOwn(id), 'danger');
        } else if (x.teamHidden) {
          tag = 'verborgen';
          btn('↺ Weer tonen', () => { draft.verbergen = draft.verbergen.filter(h => h !== id); persist(); });
        } else {
          if (x.adjusted) tag = 'lokaal aangepast';
          btn('✎ Aanpassen', () => openForm(setKey(x), id));
          btn('Verbergen', () => { draft.verbergen = [...new Set([...draft.verbergen, id])]; persist(); });
          if (x.adjusted) btn('↺ Origineel', () => { delete draft.aanpassen[id]; persist(); });
        }
        if (tag) { const s = document.createElement('span'); s.className = 'ed-tag'; s.textContent = tag; acts.appendChild(s); }
        wrap.appendChild(acts);
      });
    }
    updateStatus();
  };

  function deleteOwn(id) {
    const x = findCard(id);
    if (!confirm(`"${x ? x.title : id}" verwijderen uit de teamversie?`)) return;
    const k = setKey(id);
    if (k === 'c') draft.verhalen = draft.verhalen.filter(e => e.id !== id);
    else draft.toevoegen[ADD_KEY[k]] = draft.toevoegen[ADD_KEY[k]].filter(e => e.id !== id);
    // verwijzingen opruimen
    for (const list of [...Object.values(draft.toevoegen), draft.verhalen]) {
      for (const e of list) for (const f of ['values', 'tensions', 'interventions', 'cases']) {
        if (Array.isArray(e[f])) e[f] = e[f].filter(r => r !== id);
      }
    }
    draft.koppelen = draft.koppelen.filter(e => e.van !== id && e.naar !== id);
    persist();
  }

  // ---------- formulier ----------
  // Tekstvelden per set: [veld, label, soort, hint]
  const TEXT_FIELDS = {
    v: [['title', 'Titel', 'title'], ['desc', 'Toelichting', 'area', 'één zin; staat op de kaart-achterkant en de website']],
    t: [['title', 'Titel', 'title'], ['short', 'Korte zin', 'area', 'voor de kaart-achterkant'], ['body', 'Toelichting', 'area', 'alleen op de website · optioneel']],
    i: [['title', 'Titel', 'title'], ['short', 'Korte tekst', 'area', 'voor de kaart-achterkant'], ['when', 'Wanneer in te zetten', 'area', 'website'], ['example', 'Voorbeeld uit de praktijk', 'area', 'website'], ['watch', 'Waar op te letten', 'area', 'website']],
    c: [['title', 'Titel', 'title'], ['location', 'Locatie', 'text', 'optioneel'], ['summary', 'Samenvatting', 'area', 'een of twee zinnen'], ['full', 'Verhaal', 'area', 'optioneel · lege regel = nieuwe alinea'], ['url', 'Link naar het voorbeeld', 'text', 'optioneel · bijv. de voorbeeldenbank'], ['photo', 'Foto (link)', 'text', 'optioneel']],
  };
  // Teamverhalen gebruiken in team.json Nederlandse veldnamen
  const STORY_FIELD = { title: 'title', location: 'locatie', summary: 'samenvatting', full: 'tekst', url: 'url', photo: 'foto', intranet: 'intranet' };
  // Koppelingen per set: [doelset, label]
  const LINKS = {
    v: [['t', 'Speelt in spanningen']],
    t: [['v', 'Mogelijk botsende waarden'], ['i', 'Passende interventies'], ['c', 'Verhalen']],
    i: [['t', 'Past bij spanningen'], ['c', 'Toegepast in verhalen']],
    c: [['t', 'Spanningen die speelden'], ['i', 'Ingezette interventies']],
  };
  const COLOR = { v: 'var(--mod-waarden)', t: 'var(--mod-spanningen)', i: 'var(--mod-interventies)', c: 'var(--mod-verhalen)' };
  const PHASES = [['aanloop', 'Aanloop'], ['doorloop', 'Doorloop'], ['afloop', 'Afloop']];
  const GROUPS = [['bewoners', 'Vaak vanuit bewoners'], ['beide', 'Beide'], ['gemeente', 'Vaak vanuit gemeente']];
  const CATS = [['mediating', 'Afstemmen'], ['puzzling', 'Verbinden'], ['powering', 'Doorzetten']];

  const drawer = document.createElement('aside');
  drawer.className = 'ed-drawer';
  drawer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(drawer);
  const closeForm = () => { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); };
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('open')) closeForm(); });

  function openForm(k, id) {
    const card = id ? findCard(id) : null;
    const isOwn = !card || card.local;
    const isBase = card && !card.local;
    const entry = id && isOwn ? ownEntry(id) : null;
    const read = f => {
      if (!card) return '';
      if (k === 'c' && entry) return entry[STORY_FIELD[f]] ?? '';
      return card[f] ?? '';
    };
    drawer.style.setProperty('--ed-c', COLOR[k]);

    const textHtml = TEXT_FIELDS[k].map(([f, label, kind, hint]) => {
      const val = read(f);
      const orig = isBase && card.orig && f in card.orig ? card.orig[f] : null;
      const input = kind === 'area'
        ? `<textarea class="ed-in" data-f="${f}">${esc(val)}</textarea>`
        : `<input class="ed-in${kind === 'title' ? ' big' : ''}" data-f="${f}" value="${esc(val)}">`;
      const right = kind === 'title' ? `<small data-count="${f}"></small>` : (hint ? `<small>${esc(hint)}</small>` : '');
      return `<div class="ed-f"><label>${label}${right}</label>${input}${orig != null ? `<div class="ed-orig">Origineel: ${esc(orig)}</div>` : ''}</div>`;
    }).join('');

    // Keuzes die alleen voor eigen kaarten te wijzigen zijn
    let optsHtml = '';
    if (isOwn && (k === 't' || k === 'i')) {
      const on = new Set(String(read('phase') || (k === 't' ? 'aanloop' : 'doorloop')).split(' ').filter(Boolean));
      optsHtml += `<div class="ed-f"><label>Fase <small>een of meer</small></label><div class="ed-opts" data-multi="phase">${PHASES.map(([v, l]) => `<span class="ed-opt${on.has(v) ? ' on' : ''}" data-v="${v}">${l}</span>`).join('')}</div></div>`;
    }
    if (isOwn && k === 'i') {
      const cur = read('category') || 'mediating';
      optsHtml += `<div class="ed-f"><label>Strategie</label><div class="ed-opts" data-single="category">${CATS.map(([v, l]) => `<span class="ed-opt${cur === v ? ' on' : ''}" data-v="${v}">${l}</span>`).join('')}</div></div>`;
    }
    if (isOwn && k === 'v') {
      const cur = read('group') || 'beide';
      optsHtml += `<div class="ed-f"><label>Perspectief <small>bepaalt de tint van de kaart</small></label><div class="ed-opts" data-single="group">${GROUPS.map(([v, l]) => `<span class="ed-opt${cur === v ? ' on' : ''}" data-v="${v}">${l}</span>`).join('')}</div></div>`;
    }
    if (isOwn && k === 'c') {
      optsHtml += `<div class="ed-f"><label class="ed-check"><input type="checkbox" data-f="intranet"${read('intranet') ? ' checked' : ''}> Alleen bereikbaar via het intranet</label></div>`;
    }

    const linkHtml = LINKS[k].map(([tk, label]) => `
      <div class="ed-f"><label>${label}</label>
        <div class="ed-pick" data-pick="${tk}"></div><div class="ed-dd" data-dd="${tk}"></div>
      </div>`).join('');

    const nrTxt = card ? `${card.nr ? card.nr + (card.local ? ' ◆' : '') : ''}` : 'nieuw';
    drawer.innerHTML = `
      <button class="ed-x" type="button" aria-label="Sluiten">×</button>
      <div class="ed-eyebrow">${isBase ? 'Basiskaart' : 'Eigen ' + SET_NAME[k]} · ${esc(nrTxt)}</div>
      <h3>${!card ? 'Nieuwe ' + SET_NAME[k] : isBase ? SET_NAME[k][0].toUpperCase() + SET_NAME[k].slice(1) + ' aanpassen' : SET_NAME[k][0].toUpperCase() + SET_NAME[k].slice(1) + ' bewerken'}</h3>
      ${isBase ? '<p class="ed-hint" style="margin:-10px 0 16px">Wijzigingen gelden alleen voor jullie teamversie. De originele tekst blijft bewaard en is terug te zetten.</p>' : ''}
      ${textHtml}${optsHtml}
      <div class="ed-sub">Koppelingen</div>
      ${linkHtml}
      ${isBase ? '<p class="ed-hint">Koppelingen met een slotje komen uit de basisset en staan vast.</p>' : '<p class="ed-hint">Koppelingen werken in beide richtingen.</p>'}
      <div class="ed-err" id="edErr"></div>
      <div class="ed-actions">
        <button type="button" class="primary" id="edSave">Opslaan</button>
        <button type="button" id="edCancel">Annuleren</button>
        ${isBase && card.adjusted ? '<button type="button" class="right" id="edRestore">↺ Originele tekst</button>' : ''}
      </div>`;

    // titel-teller
    drawer.querySelectorAll('[data-count]').forEach(sm => {
      const inp = drawer.querySelector(`[data-f="${sm.dataset.count}"]`);
      const upd = () => {
        const n = words(inp.value);
        sm.textContent = `${n} woord${n === 1 ? '' : 'en'} · max. ~8`;
        sm.className = n > 8 ? 'warn' : '';
      };
      inp.addEventListener('input', upd); upd();
    });
    // keuzes
    drawer.querySelectorAll('[data-multi] .ed-opt').forEach(o => o.addEventListener('click', () => {
      o.classList.toggle('on');
      if (!o.parentElement.querySelector('.on')) o.classList.add('on');   // minstens één fase
    }));
    drawer.querySelectorAll('[data-single] .ed-opt').forEach(o => o.addEventListener('click', () => {
      o.parentElement.querySelectorAll('.ed-opt').forEach(x => x.classList.remove('on'));
      o.classList.add('on');
    }));

    // koppelingenkiezers
    const picked = {};
    const locked = {};
    for (const [tk] of LINKS[k]) {
      picked[tk] = card ? linksOf(card, tk) : [];
      locked[tk] = isBase ? baseLinks(id, tk) : [];
      setupPicker(tk, picked, locked);
    }

    drawer.querySelector('.ed-x').addEventListener('click', closeForm);
    drawer.querySelector('#edCancel').addEventListener('click', closeForm);
    const restore = drawer.querySelector('#edRestore');
    if (restore) restore.addEventListener('click', () => { delete draft.aanpassen[id]; closeForm(); persist(); });
    drawer.querySelector('#edSave').addEventListener('click', () => save(k, id, card, picked));

    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    drawer.scrollTop = 0;
    const first = drawer.querySelector('[data-f="title"]');
    if (first) setTimeout(() => first.focus(), 260);
  }

  function setupPicker(tk, picked, locked) {
    const box = drawer.querySelector(`[data-pick="${tk}"]`);
    const dd = drawer.querySelector(`[data-dd="${tk}"]`);
    const label = x => `${x.nr ? x.nr + (x.local ? '◆' : '') + ' ' : ''}${x.title}`;
    function draw() {
      box.innerHTML = picked[tk].map(rid => {
        const x = findCard(rid);
        if (!x) return '';
        const isLocked = locked[tk].includes(rid);
        return `<span class="ed-chip k-${tk}">${esc(label(x))}${isLocked ? '<span class="lock" title="Uit de basisset">🔒</span>' : `<button type="button" data-rm="${esc(rid)}" aria-label="Weghalen">×</button>`}</span>`;
      }).join('') + `<input placeholder="Zoek op nummer of titel…" aria-label="Koppeling toevoegen">`;
      box.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => {
        picked[tk] = picked[tk].filter(r => r !== b.dataset.rm); draw();
      }));
      const inp = box.querySelector('input');
      inp.addEventListener('input', () => suggest(inp.value));
      inp.addEventListener('focus', () => suggest(inp.value));
      inp.addEventListener('blur', () => setTimeout(() => { dd.innerHTML = ''; }, 150));
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); const first = dd.querySelector('div'); if (first) first.dispatchEvent(new MouseEvent('mousedown')); }
      });
    }
    function suggest(q) {
      q = q.trim().toLowerCase();
      const opts = SET_LIST[tk]().filter(x => !x.teamHidden && !picked[tk].includes(x.id))
        .filter(x => !q || String(x.nr) === q.replace('◆', '') || String(x.title).toLowerCase().includes(q))
        .slice(0, 12);
      dd.innerHTML = opts.map(x => `<div data-id="${esc(x.id)}"><span class="n">${x.nr ? esc(x.nr + (x.local ? '◆' : '')) : '↗'}</span>${esc(x.title)}</div>`).join('');
      dd.querySelectorAll('div').forEach(d => d.addEventListener('mousedown', e => {
        e.preventDefault();
        picked[tk] = [...picked[tk], d.dataset.id];
        draw();
        box.querySelector('input').focus();
      }));
    }
    draw();
  }

  function save(k, id, card, picked) {
    const err = drawer.querySelector('#edErr');
    const val = f => { const el = drawer.querySelector(`[data-f="${f}"]`); return el ? (el.type === 'checkbox' ? el.checked : el.value.trim()) : undefined; };
    if (!val('title')) { err.textContent = 'Geef de kaart een titel.'; return; }
    const isBase = card && !card.local;

    if (isBase) {
      // Alleen gewijzigde tekstvelden opslaan, ten opzichte van de originele basistekst
      const b = baseCard(id);
      const changes = {};
      for (const [f] of TEXT_FIELDS[k]) {
        const v = val(f);
        if (v !== undefined && v !== String(b[f] ?? '').trim()) changes[f] = v;
      }
      if (Object.keys(changes).length) draft.aanpassen[id] = changes; else delete draft.aanpassen[id];
    } else {
      let entry = id ? ownEntry(id) : null;
      if (!entry) {
        id = newId(k);
        entry = { id };
        if (k === 'c') draft.verhalen.push(entry); else draft.toevoegen[ADD_KEY[k]].push(entry);
      }
      for (const [f] of TEXT_FIELDS[k]) {
        const v = val(f);
        const key = k === 'c' ? STORY_FIELD[f] : f;
        if (v) entry[key] = v; else delete entry[key];
      }
      if (k === 'c') { if (val('intranet')) entry.intranet = true; else delete entry.intranet; }
      const multi = drawer.querySelector('[data-multi="phase"]');
      if (multi) entry.phase = [...multi.querySelectorAll('.on')].map(o => o.dataset.v).join(' ');
      drawer.querySelectorAll('[data-single]').forEach(g => { entry[g.dataset.single] = g.querySelector('.on').dataset.v; });
    }

    // Koppelingen: verschil tussen gekozen en huidige (na opnieuw samenvoegen bijwerken)
    const current = {};
    for (const [tk] of LINKS[k]) current[tk] = card ? linksOf(card, tk) : [];
    for (const [tk] of LINKS[k]) {
      for (const rid of picked[tk]) if (!current[tk].includes(rid)) addLink(id, rid);
      for (const rid of current[tk]) if (!picked[tk].includes(rid)) removeLink(id, rid);
    }
    closeForm();
    persist();
  }

  // ---------- export / import ----------
  function exportDraft() {
    ensure();
    const out = clone(draft);
    out.basisVersie = 'v3';
    out.bijgewerkt = new Date().toISOString().slice(0, 10);
    // lege onderdelen weglaten
    for (const k of Object.keys(out.toevoegen)) if (!out.toevoegen[k].length) delete out.toevoegen[k];
    for (const k of ['toevoegen', 'aanpassen']) if (!Object.keys(out[k]).length) delete out[k];
    for (const k of ['verhalen', 'verbergen', 'koppelen']) if (!out[k].length) delete out[k];
    const blob = new Blob([JSON.stringify(out, null, 2) + '\n'], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'team.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    saveTeamDraft(draft, false);
    updateStatus();
  }
  function importDraft(e) {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      let data;
      try { data = JSON.parse(reader.result); } catch (err) { alert('Dit bestand is geen geldige teamversie (geen JSON).'); return; }
      if (!data || typeof data !== 'object' || Array.isArray(data)) { alert('Dit bestand is geen geldige teamversie.'); return; }
      if (teamDraftDirty() && !confirm('De huidige werkversie heeft niet-geëxporteerde wijzigingen. Toch vervangen door het geïmporteerde bestand?')) return;
      draft = data;
      ensure();
      nameIn.value = draft.team.naam || '';
      persist(false);
    };
    reader.readAsText(file);
  }

  // Eerste keer tekenen gebeurt door de site (applyLang na het laden van dit script)
  setBarHeight();
})();
