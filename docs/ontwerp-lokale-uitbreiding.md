# Ontwerp: lokale uitbreiding per team

*Status: ontwerpvoorstel, nog niet gebouwd. Oktober 2026.*

## 1. Doel

Een team van adviseurs (bijvoorbeeld het participatieteam van een gemeente) kan een **eigen versie** van Ruimte voor Participatie maken. In die versie kan het team:

- eigen **waarden, spanningen en interventies** toevoegen, met koppelingen;
- eigen **verhalen** toevoegen als links (bijvoorbeeld naar de voorbeeldenbank op het intranet);
- **basiskaarten verbergen** die lokaal niet passen;
- **teksten van basiskaarten lokaal aanpassen**, bijvoorbeeld naar eigen jargon.

Alle adviseurs van dat team gebruiken dezelfde versie: website én printkaarten.

**Buiten scope (voor nu):**

- persoonlijke lagen per adviseur;
- realtime samen bewerken;
- inloggen.

## 2. Uitgangspunten

1. **De basisset blijft van het onderzoek.** `content.js` wordt alleen door de beheerder van de basisset (Jelle) aangepast. Updates daarvan moeten bij elk team aankomen, zonder dat lokale aanpassingen verloren gaan.
2. **Lokaal is herleidbaar, maar subtiel.**
   - Eigen kaarten hoeven aan tafel niet opvallend gemarkeerd te worden; een subtiel onderscheid volstaat (besluit okt 2026).
   - Aangepaste basiskaarten krijgen een klein label "lokaal aangepast", en de originele tekst blijft opvraagbaar.
   - Zo blijft na te gaan wat uit het onderzoek komt en wat niet.
3. **Geen server nodig om te beginnen.** De site blijft statisch (GitHub Pages of intranet). Er is geen database en er zijn geen accounts. Dat is privacyvriendelijk en vraagt geen IT-traject.
4. **Laagdrempelig voor de beheerder van het team.** Bewerken gebeurt in de site zelf, via formulieren. Niemand hoeft code te schrijven of Git te gebruiken.

## 3. Rollen

| Rol | Wie | Doet |
|---|---|---|
| **Beheerder basisset** | Jelle | Onderhoudt `content.js`, de gedeelde site en de printkaarten |
| **Teambeheerder** | 1–2 mensen per team | Stelt de teamlaag samen in de editor en publiceert die voor het team |
| **Adviseur** | Iedereen in het team | Gebruikt de teamversie; kan voorstellen doen aan de teambeheerder |

## 4. Datamodel: basis + teamlaag

De site laadt eerst `content.js` (de basis) en daarna `team.json` (de teamlaag). De teamlaag is een overlay: hij wijzigt niets aan de basis zelf.

```jsonc
{
  "team": { "naam": "Participatieteam Gemeente X", "contact": "…" },
  "basisVersie": "v3",            // tegen welke basisversie is deze laag gemaakt
  "bijgewerkt": "2026-11-01",

  // 1. Eigen kaarten — zelfde velden als in content.js
  "toevoegen": {
    "values":        [ { "id": "x-v1", "title": "…", "desc": "…", "group": "beide", "tensions": ["t3", "x-t1"] } ],
    "tensions":      [ { "id": "x-t1", "title": "…", "short": "…", "body": "…", "values": ["v1", "x-v1"],
                         "interventions": ["i13", "x-i1"], "phase": "aanloop" } ],
    "interventions": [ { "id": "x-i1", "title": "…", "short": "…", "when": "…", "example": "…",
                         "watch": "…", "phase": "doorloop", "category": "mediating" } ]
  },

  // 2. Verhalen als link — aan basis- of eigen kaarten te koppelen
  "verhalen": [
    { "id": "x-c1", "title": "…", "samenvatting": "…", "url": "https://intranet…/voorbeeld-123",
      "tensions": ["t5"], "interventions": ["i17", "x-i1"] }
  ],

  // 3. Basiskaarten verbergen
  "verbergen": ["v13", "i20"],

  // 4. Basiskaarten lokaal aanpassen — alleen de gewijzigde velden
  "aanpassen": {
    "t7": { "title": "…", "short": "…" }
  },

  // 5. Extra koppelingen tussen bestaande kaarten
  "koppelen": [ { "van": "t4", "naar": "i25" } ]
}
```

**Regels:**

- **Ids.** Eigen kaarten krijgen een teamprefix (`x-v1`, `x-t1`, `x-i1`). Ze kunnen dus nooit botsen met nieuwe basiskaarten.
- **Nummering.** Eigen kaarten nummeren door na de basisset, met een subtiel onderscheid (zie 7). Basisnummers verschuiven nooit.
- **Koppelingen** mogen wijzen naar basis- én eigen kaarten. Koppelingen naar een verborgen kaart worden niet getoond.
- **Aanpassen** gaat per veld. De site toont het label "lokaal aangepast" met een knop "toon originele tekst".
- **Waarschuwing:** komt het totaal aan zichtbare waarden boven de 15, dan waarschuwt de editor. Hij blokkeert niet (zie de testrondes).

### Wat er gebeurt bij een update van de basisset

| Situatie | Gedrag |
|---|---|
| Nieuwe basiskaart | Verschijnt gewoon in de teamversie (tenzij later verborgen) |
| Basistekst gewijzigd, team had die kaart **niet** aangepast | Team ziet de nieuwe tekst |
| Basistekst gewijzigd, team **had** die kaart aangepast | Teamtekst blijft. De editor meldt "basis is gewijzigd sinds jouw aanpassing" |
| Basiskaart verwijderd | Verwijzingen ernaar in de teamlaag worden gemarkeerd als "verweesd" in de editor |

Daarvoor slaat de teamlaag bij elke aanpassing ook de **originele tekst** op waarop die aanpassing is gebaseerd.

## 5. Bewerken en delen

### Fase 1–3: editor in de site + gepubliceerd bestand (zonder server)

1. De teambeheerder opent de site en zet **"Beheer"** aan.
2. Alle kaarten krijgen dan knoppen: *aanpassen*, *verbergen*, *verhaal koppelen*. Er komen ook knoppen *nieuwe waarde / spanning / interventie / verhaal*.
3. Wijzigingen zijn direct zichtbaar. Ze worden tussentijds bewaard in de browser van de beheerder.
4. Met **"Exporteer teamversie"** downloadt de beheerder `team.json`.
5. **Publiceren** gebeurt op één van twee manieren:
   - **a. Eigen kopie van de site.** Het team heeft een kopie van de site op GitHub Pages of het intranet. De beheerder vervangt daar `team.json`. Adviseurs openen gewoon die URL. Dit is de "lokale branch".
   - **b. Gedeelde site + bestand.** De gedeelde site leest een team-bestand via een link, bijvoorbeeld `…/Ruimte_voor_participatie.html?team=https://…/team.json`. Dit vraagt geen eigen kopie, maar het bestand moet wel online staan.
6. **Import:** de beheerder kan een bestaand `team.json` inladen om verder te bewerken, ook vanaf een andere computer.

De printkaarten (`speelkaarten.html`) lezen dezelfde teamlaag:

- eigen kaarten worden meegeprint, met het kenmerk;
- verborgen kaarten vallen weg;
- aangepaste teksten worden gebruikt.

### Fase 4 (alleen als het nodig blijkt): gedeelde online opslag

Hier staat de teamlaag centraal opgeslagen en kunnen meerdere beheerders tegelijk bewerken, zonder export en publiceren. Dat vraagt:

- hosting;
- inloggen;
- een privacy- en IT-toets binnen de gemeente.

Eerst kijken of fase 1–3 in de praktijk volstaat.

## 6. Gefaseerd plan

| Fase | Inhoud | Resultaat |
|---|---|---|
| **1. Datalaag** | Site en printkaarten laden `team.json` en verwerken toevoegen / verbergen / aanpassen / koppelen / verhalen; markering van lokale kaarten; handgeschreven voorbeeld-`team.json` | Teamversie werkt al, alleen nog met handmatig bewerken van het bestand |
| **2. Editor** | Beheer-modus met formulieren, koppelingenkiezer, verbergen, aanpassen met originele tekst, export/import, validatie (ids, verweesde koppelingen, waarschuwing > 15 waarden) | Teambeheerder kan zonder code werken |
| **3. Publiceren** | Handleiding "een teamversie maken": kopie maken (a) of team-link (b); updates van de basis binnenhalen | Herhaalbare route voor andere gemeenten |
| **4. (optioneel) Online opslag** | Centrale opslag + inloggen | Samen bewerken zonder bestanden |

Fase 1 is klein en laat al zien of het model klopt. Fase 2 is het meeste werk.

## 7. Besluiten en open vragen

**Besluiten (oktober 2026):**

- **Kenmerk eigen kaarten:** niet nodig om op te vallen; een subtiel onderscheid volstaat (bijvoorbeeld een klein teken in de balk of op de website een fijne lijn).
- **Taal:** eigen kaarten alleen in het Nederlands.
- **Intranetlinks:** toegestaan, met een melding "alleen bereikbaar via intranet" waar dat geldt.
- **Terugstromen naar de basis:** ja, goede teamkaarten kunnen worden voorgedragen voor de basisset.

**Nog open:**

- **Aanpassen van basiskaarten.** Mag elk veld, of alleen titel en korte tekst? (Minder velden = minder kans dat de kaart iets anders gaat betekenen.)
- **Voordragen voor de basis:** hoe gaat dat in zijn werk, en hoe verhoudt het zich tot het onderzoek (bron, toestemming)?
- **Onderzoek.** De teamlagen zelf zijn interessante data: welke kaarten voegen adviseurs toe, welke verbergen ze? Afspraken over inzage en toestemming moeten we vooraf maken.
