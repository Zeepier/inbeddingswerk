// =============================================================
// RUIMTE VOOR PARTICIPATIE — inhoud
// =============================================================
// Dit bestand bevat alle inhoud van de tool: spanningen,
// interventies en verhalen.
//
// HOE TE BEWERKEN
// ───────────────
// Open dit bestand in VS Code (of een andere tekstverwerker).
// Elke sectie heeft zijn eigen array. Pas tekst aan, voeg items
// toe of verwijder items. Sla op en herlaad de browser.
//
// KOPPELINGEN
// ───────────
// Spanningen verwijzen naar interventies via interventions: ['i1','i2',...]
// Spanningen verwijzen naar verhalen via cases: ['c1','c2',...]
// Spanningen verwijzen naar de botsende waarden via values: ['v1','v8',...]
// Waarden verwijzen naar spanningen via tensions: ['t1','t2',...]
// Verhalen verwijzen terug via tensions: [...] en interventions: [...]
// Omgekeerde koppelingen (vanuit interventies naar spanningen) worden
// automatisch berekend — die hoef je niet bij te houden.
//
// IDS
// ───
// Waarden:      v1, v2, v3, ... (voeg toe als v17, v18, enz.)
// Spanningen:   t1, t2, t3, ... (voeg toe als t14, t15, enz.)
// Interventies: i1, i2, i3, ... (voeg toe als i21, i22, enz.)
// Verhalen:     c1, c2, c3, ... (voeg toe als c5, c6, enz.)
//
// WAARDE-VELDEN
// ─────────────
// group: 'bewoners' (paars) | 'gemeente' (geel) | 'beide' (gradient)
//   getoond als Bewoners / Gemeente / "Gemeente & Bewoners"
// desc:  één zin die de waarde toelicht (gebruikt op de speelkaarten)
//
// INTERVENTIE-VELDEN
// ──────────────────
// phase:    'aanloop' | 'doorloop' | 'afloop'
//   (mag ook meerdere fases, gescheiden door een spatie: 'doorloop afloop')
// category: 'powering' | 'puzzling' | 'mediating'
//   (getoond als Doorzetten / Verbinden / Afstemmen; boundary-spanning
//    strategie, Nederhand et al. 2018)
// =============================================================


// -------------------------------------------------------------
// WAARDEN (16) — de fundamentele bouwstenen
// Spanningen zijn conflicten tussen twee (of meer) waarden.
// -------------------------------------------------------------

const values = [

  { id: 'v1',  title: 'Invloed van bewoners',                   group: 'bewoners', tensions: ['t1','t2','t5','t7','t12','t13'],
    desc: 'Bewoners kunnen daadwerkelijk iets veranderen aan de uitkomst, niet alleen hun mening geven.' },
  { id: 'v2',  title: 'Meenemen lokale kennis',                 group: 'bewoners', tensions: ['t8'],
    desc: 'De kennis en ervaring van bewoners over hun eigen buurt telt mee in de afweging.' },
  { id: 'v3',  title: 'Erkenning perspectief bewoners',         group: 'bewoners', tensions: ['t6'],
    desc: 'De manier waarop bewoners de situatie beleven wordt serieus genomen, ook als die afwijkt van het officiële beeld.' },
  { id: 'v4',  title: 'Bevorderen sociale cohesie in de buurt', group: 'bewoners', tensions: ['t12'],
    desc: 'Het proces versterkt de onderlinge verbondenheid en het contact tussen bewoners.' },
  { id: 'v5',  title: 'Een open gesprek mogelijk maken',        group: 'bewoners', tensions: ['t3','t9','t11'],
    desc: 'Er is ruimte voor een eerlijk gesprek, ook over lastige of ongemakkelijke onderwerpen.' },

  { id: 'v6',  title: 'Uitvoeren staand beleid',                group: 'gemeente', tensions: ['t2','t6','t11'],
    desc: 'Vastgesteld beleid en eerder gemaakte afspraken worden nageleefd.' },
  { id: 'v7',  title: 'Ambtelijke loyaliteit',                  group: 'gemeente', tensions: ['t3'],
    desc: 'Ambtenaren handelen in lijn met de koers en besluiten van bestuur en organisatie.' },
  { id: 'v8',  title: 'Politiek risico beheersen',              group: 'gemeente', tensions: ['t1','t3','t9'],
    desc: 'Bestuurlijke en politieke gevoeligheden worden tijdig herkend en beheerst.' },
  { id: 'v9',  title: 'Domeinoverstijgende samenwerking',       group: 'gemeente', tensions: ['t4'],
    desc: 'Verschillende afdelingen en beleidsterreinen werken samen in plaats van los van elkaar.' },
  { id: 'v10', title: 'Efficiëntie & effectiviteit bevorderen', group: 'gemeente', tensions: ['t7','t12'],
    desc: 'Tijd, geld en inzet worden zo besteed dat ze daadwerkelijk resultaat opleveren.' },
  { id: 'v11', title: 'Betaalbaarheid bewaken',                 group: 'gemeente', tensions: ['t5'],
    desc: 'De kosten van het proces en de uitkomsten blijven binnen haalbare grenzen.' },
  { id: 'v12', title: 'Vakkennis tot zijn recht laten komen',   group: 'gemeente', tensions: ['t4','t8'],
    desc: 'De expertise van vakspecialisten weegt mee in de uiteindelijke keuzes.' },

  { id: 'v13', title: '(Sociaal) leren',                        group: 'beide',    tensions: [],
    desc: 'Betrokkenen worden door het proces wijzer over zichzelf, elkaar en de opgave.' },
  { id: 'v14', title: 'Ruimte (maken) voor tegenspraak',        group: 'beide',    tensions: ['t3'],
    desc: 'Afwijkende meningen en kritische geluiden kunnen naar voren komen zonder dat het proces daardoor vastloopt.' },
  { id: 'v15', title: 'Gelijke behandeling bewoners',           group: 'beide',    tensions: ['t13'],
    desc: 'Alle bewoners worden op eenzelfde manier behandeld, ongeacht wie het hardst laat horen.' },
  { id: 'v16', title: 'Navolgbaar overheidshandelen',           group: 'beide',    tensions: [],
    desc: 'Het is voor bewoners te volgen en te begrijpen hoe en waarom de gemeente tot een besluit komt.' },

];


// -------------------------------------------------------------
// SPANNINGEN (12)
// -------------------------------------------------------------

const tensions = [

  { id: 't1',
    title: 'Verschil in interpretatie van ruimte voor invloed',
    body: 'Deelnemers en organisatie hanteren verschillende beelden van wat "meedoen" betekent. Wat voor de één raadpleging is, is voor de ander medebeslissen. Zonder expliciete afstemming groeit dit verschil tijdens het traject uit tot teleurstelling. In termen van de participatieladder zit hier vaak een onuitgesproken sprong tussen "informeren" en "coproduceren".',
    interventions: ['i13','i1','i12','i14'],
    cases: ['c3'],
    values: ['v1','v8'], phase: 'aanloop' },

  { id: 't2',
    title: 'Impact van een ontwikkeling niet passend bij ruimte voor invloed',
    body: 'De voorgenomen ingreep raakt mensen ingrijpend in hun woon- of leefkwaliteit, terwijl de aangeboden invloed beperkt is tot bijvoorbeeld inrichtingsdetails. De mismatch tussen impact en zeggenschap voedt wantrouwen en maakt de uitkomst kwetsbaar voor procedureel verzet (zienswijzen, beroep).',
    interventions: ['i6','i14','i7','i20'],
    cases: ['c2','c3'],
    values: ['v1','v6'], phase: 'aanloop' },

  { id: 't3',
    title: 'Wijze van omgang met weerstand en conflict',
    body: 'Weerstand wordt vaak gezien als hindernis, terwijl het waardevolle informatie bevat over wat er werkelijk speelt. Hoe zorg je dat conflict productief wordt benut zonder dat het proces vastloopt of escaleert in de pers?',
    interventions: ['i2','i7','i19','i14'],
    cases: ['c4'],
    values: ['v5','v14','v8','v7'], phase: 'doorloop' },

  { id: 't4',
    title: 'Tegenstrijdig beleid of wetgeving maakt keuzes lastig',
    body: 'Wettelijke kaders en beleidsdoelen botsen in dezelfde opgave — denk aan woningbouwopgave versus klimaatadaptatie of stikstofruimte. Keuzes worden uitgesteld omdat geen enkel kader leidend is, en juridische onzekerheid stuurt het proces.',
    interventions: ['i8','i6','i11','i14'],
    cases: ['c2'],
    values: ['v9','v12'], phase: 'aanloop' },

  { id: 't5',
    title: 'Gekaderde financiering maakt beweegruimte ingewikkeld',
    body: 'Subsidies en budgetten zijn vaak geoormerkt voor specifieke doelen, terwijl participatie juist vraagt om reageren op wat opkomt. Wat doe je als de bewonersinbreng buiten de financiële kaders valt — van de subsidie of zelfs van de begrotingsperiode?',
    interventions: ['i17','i10','i1','i11'],
    cases: ['c1'],
    values: ['v1','v11'], phase: 'aanloop' },

  { id: 't6',
    title: 'Scope van beleid niet passend bij belangen in het leefgebied',
    body: 'Beleid is vaak thematisch georganiseerd (groen, mobiliteit, wonen, sociaal), terwijl bewoners hun leefomgeving integraal beleven. Gemeentelijke afdelingen werken langs elkaar heen en plekken vallen tussen wal en schip.',
    interventions: ['i8','i6','i3','i11'],
    cases: ['c2'],
    values: ['v3','v6'], phase: 'aanloop' },

  { id: 't7',
    title: 'Timing van participatie niet passend bij fase van ontwikkeling',
    body: 'Participatie wordt te laat georganiseerd — na een principebesluit waar nauwelijks meer aan te schroeven valt — of juist te vroeg, zonder concreet aangrijpingspunt. Beide leiden tot frustratie aan beide kanten van de tafel.',
    interventions: ['i16','i13','i7'],
    cases: ['c3'],
    values: ['v1','v10'], phase: 'aanloop' },

  { id: 't8',
    title: 'Beleving in praktijk tegengesteld met perspectief van experts',
    body: 'Bewoners ervaren iets anders dan rapporten of metingen aangeven — denk aan geluidsoverlast die "binnen de norm" valt, of veiligheid die statistisch is verbeterd maar gevoelsmatig niet. Het rationele bewijs staat haaks op de geleefde werkelijkheid.',
    interventions: ['i7','i14','i12','i8'],
    cases: ['c4'],
    values: ['v2','v12'], phase: 'doorloop' },

  { id: 't9',
    title: 'Behoefte aan transparantie bij gesloten besluitvorming',
    body: 'Sommige besluiten worden om bestuurlijke, juridische of onderhandelingstechnische redenen achter gesloten deuren genomen. Hoe communiceer je daar transparant over zonder vertrouwen te verliezen — en zonder de onderhandelingsruimte weg te geven?',
    interventions: ['i12','i14','i1'],
    cases: ['c3'],
    values: ['v5','v8'], phase: 'doorloop afloop' },

  { id: 't10',
    title: 'Bestuurlijke of ambtelijke wisselingen in langlopende ontwikkeling',
    body: 'Wethouders, projectleiders of dossierhouders wisselen tijdens het traject — zeker rond verkiezingen of reorganisaties. Afspraken raken in de mist en deelnemers moeten hun verhaal opnieuw vertellen aan een nieuwe gesprekspartner.',
    interventions: ['i1','i12'],
    cases: ['c4'],
    values: [], phase: 'doorloop afloop' },

  { id: 't11',
    title: 'Geschiedenis en context omgeving van invloed op nieuwe initiatieven',
    body: 'Eerdere mislukkingen, breuken in vertrouwen of onopgeloste kwesties uit het verleden bepalen hoe nieuwe initiatieven worden ontvangen — vaak voordat ze überhaupt zijn gestart. Wat eruit ziet als weerstand tegen het nieuwe plan, is soms een echo van het oude.',
    interventions: ['i7','i16','i12'],
    cases: ['c1'],
    values: ['v5','v6'], phase: 'aanloop' },

  { id: 't12',
    title: 'Beperkt responsief samenwerken door prestatiegerichte aanpak',
    body: 'KPI\'s, deadlines en verantwoordingseisen sturen het werk zo strak dat er weinig ruimte is om te reageren op wat opkomt. Het traject loopt door volgens planning, ook als signalen aangeven dat het niet meer klopt.',
    interventions: ['i16','i17','i10','i1'],
    cases: ['c1'],
    values: ['v1','v4','v10'], phase: 'doorloop afloop' },

  { id: 't13',
    title: 'Invloed geven versus iedereen gelijk behandelen',
    body: 'Wie meedoet aan participatie krijgt invloed — maar dat roept de vraag op of de overheid daarmee de actieve, mondige bewoners voortrekt boven de zwijgende meerderheid. Hoe geef je ruimte aan participatie zonder de rechtsgelijkheid van alle inwoners uit het oog te verliezen?',
    interventions: ['i14','i18','i19','i12'],
    cases: ['c3'],
    values: ['v1','v15'], phase: 'doorloop' },

];


// -------------------------------------------------------------
// INTERVENTIES (18)
// -------------------------------------------------------------

const interventions = [

  { id: 'i1',
    title: 'Bestuurlijke rugdekking',
    short: 'Gezamenlijke visie met draagvlak en mandaat van eindverantwoordelijke bestuurders op de beoogde aanpak.',
    when: 'Aan het begin van een traject, en bij elk kantelpunt waar de aanpak fundamenteel verandert.',
    example: 'Een wethouder die in een collegebrief expliciet ruimte geeft voor een open zoekproces zonder vooraf vastgestelde uitkomst — en dat ook in de raad ondertekent.',
    watch: 'Rugdekking is geen eenmalig moment. Bestuurders wisselen, prioriteiten verschuiven. Onderhoud de afspraak.',
    phase: 'aanloop', category: 'powering' },

  { id: 'i2',
    title: 'Tegenspraak opzoeken',
    short: 'Op zoek naar potentieel kritische stemmen binnen de gemeente — wie verwacht je weerstand van? Ga met hen in gesprek en neem hun twijfels mee.',
    when: 'In de voorbereidende fase, vóór je een aanpak vaststelt — niet om te overtuigen, maar om de redenering te begrijpen.',
    example: 'Een procesbegeleider die een uur reserveert met de jurist die altijd "nee" zegt, om de redenering te begrijpen en mee te wegen.',
    watch: 'Tegenspraak organiseren is geen vinkjes-ritueel. Echte tegenspraak voelt oncomfortabel.',
    phase: 'aanloop', category: 'mediating' },

  { id: 'i3',
    title: 'Bondgenoten opzoeken',
    short: 'Zoeken naar potentieel sympathieke stemmen binnen de organisatie — van welke afdelingen heb je steun nodig? Maak vroeg de connectie.',
    when: 'Vroeg in het traject, en steeds wanneer je een nieuwe fase ingaat.',
    example: 'Een collega bij Beheer & Onderhoud die later betrokken raakt — al vroeg meenemen voorkomt verrassingen bij oplevering.',
    watch: 'Bondgenoten worden geen mede-verantwoordelijken zonder dat ze daar iets voor terugzien.',
    phase: 'aanloop doorloop', category: 'mediating' },

  { id: 'i4',
    title: 'Vernieuwende werkwijze',
    short: 'Experimenteren met een vernieuwde werkwijze en verkennen van nieuwe samenwerkingsvormen of constructies.',
    when: 'Wanneer bestaande routines aantoonbaar niet werken voor deze opgave — en niemand iets verliest bij een experiment.',
    example: 'Een gemeente die een wijkraad omvormt tot een rotatie-comité waar elk kwartaal nieuwe bewoners aanschuiven, om diversiteit te borgen.',
    watch: 'Experimenteren vraagt om expliciete afspraken: wat leren we, en wanneer evalueren we?',
    phase: 'doorloop', category: 'puzzling' },

  { id: 'i5',
    title: 'Scenariovorming',
    short: 'Het ontwikkelen van verschillende toekomstscenario\'s om keuzes en gevolgen inzichtelijk te maken.',
    when: 'Bij complexe opgaven waar één toekomstbeeld te beperkend is en de keuze nog open ligt.',
    example: 'Drie scenario\'s voor een herontwikkeling — verdichten, vergroenen, mengen — met per scenario de consequenties voor wonen, verkeer en groen.',
    watch: 'Scenario\'s mogen geen verkapte voorkeursoptie zijn. Twee fictieve naast één echte ondermijnt het instrument.',
    phase: 'doorloop', category: 'puzzling' },

  { id: 'i6',
    title: 'Wenkend perspectief',
    short: 'Articuleren van een visie op de opgave waarin de belangen en perspectieven van verschillende afdelingen verwerkt zijn.',
    when: 'Wanneer afdelingen langs elkaar heen werken of de opgave fragmentarisch oogt.',
    example: 'Een visiedocument van twee A4 dat ruimtelijk, sociaal en economisch beleid bij elkaar brengt rond één plek — geschreven mét de afdelingen, niet voor hen.',
    watch: 'Een wenkend perspectief verliest zijn werking als het te abstract blijft. Maak het concreet aan een plek of moment.',
    phase: 'aanloop doorloop', category: 'puzzling' },

  { id: 'i7',
    title: 'Meenemen in belevingswereld',
    short: 'Weg van bureau en vergaderkamer — naar het persoonlijk beleven van een situatie en het zien van ontwikkelingen in een gebied.',
    when: 'Wanneer er een groot verschil is tussen rapport-werkelijkheid en geleefde werkelijkheid.',
    example: 'Een wandeling met wethouder, ambtenaar en bewoners op een vrijdagavond — om te ervaren waar het over gaat in plaats van te lezen waar het over gaat.',
    watch: 'Niet ensceneren. De waarde zit in wat je niet had verwacht tegen te komen.',
    phase: 'doorloop', category: 'mediating' },

  { id: 'i8',
    title: 'Beleidsspiegel',
    short: 'Het inzichtelijk maken van al het beleid dat in een gebied samenkomt, om zo een nieuw integraal perspectief te scheppen.',
    when: 'In gebieden waar veel beleid samenvalt en niemand het overzicht heeft.',
    example: 'Een visualisatie waarin alle beleidsdoelen voor één plein over elkaar liggen — woonvisie, mobiliteitsplan, klimaatadaptatie, economisch beleid. Schuringen worden zichtbaar.',
    watch: 'Een beleidsspiegel kan verlammend werken als hij zonder duiding wordt gepresenteerd. Zorg voor begeleiding bij het lezen.',
    phase: 'doorloop', category: 'puzzling' },

  { id: 'i10',
    title: 'Opplussen',
    short: 'Organiseren van benodigde extra capaciteit, expertise, betrokkenheid, geld of tijd op het moment dat blijkt dat de basisopzet ontoereikend is.',
    when: 'Wanneer duidelijk wordt dat de basisopzet niet toereikend is voor de complexiteit.',
    example: 'Een externe procesbegeleider inhuren voor een halfjaar, omdat de interne capaciteit niet volstaat voor de gevraagde zorgvuldigheid.',
    watch: 'Opplussen is geen oplossing voor onduidelijkheid over de opgave. Eerst scherper, dan opschalen.',
    phase: 'doorloop', category: 'powering' },

  { id: 'i11',
    title: 'Beleidshaakjes zoeken',
    short: 'Het verbinden van nieuwe initiatieven aan bestaand beleid om ze beter te verankeren in financiering, mandaat en uitvoeringsagenda\'s.',
    when: 'Bij initiatieven die buiten de gangbare kaders vallen maar wel passen bij ambities.',
    example: 'Een bewonerscoöperatie voor groenbeheer koppelen aan de uitvoeringsagenda biodiversiteit — hetzelfde initiatief krijgt zo legitimiteit en budget.',
    watch: 'Een haakje is geen volledige inbedding. Houd in de gaten of het haakje stevig genoeg is.',
    phase: 'doorloop afloop', category: 'puzzling' },

  { id: 'i12',
    title: 'Opbrengst inzichtelijk maken',
    short: 'Het duidelijk en herleidbaar communiceren van de perspectieven, inzichten en context uit het participatieproces — zodat de inbreng traceerbaar is.',
    when: 'Na elke participatieronde, vóór bestuurlijke besluitvorming.',
    example: 'Een opbrengstrapport dat niet alleen meningen samenvat, maar ook patronen, dilemma\'s en gemaakte afwegingen — leesbaar voor bewoners en bestuur.',
    watch: 'Opbrengst zonder traceerbaarheid (wat is er met welke inbreng gedaan?) verliest zijn functie.',
    phase: 'doorloop afloop', category: 'puzzling' },

  { id: 'i13',
    title: 'Kaders formuleren',
    short: 'Het vaststellen van duidelijke grenzen en richtlijnen waarbinnen het proces plaatsvindt — wat ligt vast, wat is onderhandelbaar.',
    when: 'Aan het begin van een traject. Kaders die later komen voelen als verschuiving.',
    example: 'Vooraf benoemen: "het besluit over de hoogte ligt vast, maar over inrichting en functies kunnen we samen beslissen". Helderheid schept vertrouwen.',
    watch: 'Kaders moeten te dragen zijn. Te strakke kaders maken participatie schijn; te losse kaders zorgen voor teleurstelling achteraf.',
    phase: 'aanloop', category: 'powering' },

  { id: 'i14',
    title: 'Dilemma\'s op tafel',
    short: 'Het expliciet benoemen en bespreken van lastige keuzes of tegenstrijdige belangen op het moment dat ze zichtbaar worden — niet later.',
    when: 'Op het moment dat een schuring zichtbaar wordt — niet later.',
    example: 'In een raadsbrief expliciet maken: "we kunnen niet én alle parkeerplaatsen behouden én de vergroening realiseren — hoe wegen we?".',
    watch: 'Dilemma\'s presenteren als zwart-wit keuzes versimpelt de werkelijkheid. Toon de gradaties.',
    phase: 'doorloop afloop', category: 'puzzling' },

  { id: 'i16',
    title: 'Vertraging als investering',
    short: 'Het bewust vertragen van het proces om meer tijd te nemen voor ontwikkeling, kwaliteit en draagvlak — en die keuze publiek verantwoorden.',
    when: 'Wanneer de planning de inhoud begint te dicteren en kwaliteit eronder lijdt.',
    example: 'Een projectleider die de oplevering met drie maanden uitstelt om een tweede gespreksronde te doen — en die keuze publiek verantwoordt.',
    watch: 'Vertraging zonder duidelijk doel ondermijnt vertrouwen. Maak het verschil tussen "stilstand" en "investering" expliciet.',
    phase: 'doorloop', category: 'puzzling' },

  { id: 'i17',
    title: 'Breed inzetbaar budget',
    short: 'Het beschikbaar stellen van flexibele middelen die voor verschillende doelen binnen het proces kunnen worden gebruikt — om te kunnen reageren op wat opkomt.',
    when: 'In open trajecten waar je vooraf niet weet wat nodig is.',
    example: 'Een stelpost van 50.000 euro voor "wat opkomt in het traject" — met een lichte verantwoordingsstructuur achteraf.',
    watch: 'Flexibele budgetten vragen om vertrouwen vanuit de organisatie. Bouw dat vertrouwen actief op.',
    phase: 'aanloop', category: 'powering' },

  { id: 'i18',
    title: 'Afgevaardigd comité',
    short: 'Het vormen van een groep vertegenwoordigers die namens een bredere groep meedenkt of beslist — met mandaat en terugkoppelingsstructuur.',
    when: 'In trajecten waar continu intensief overleg met de hele groep niet werkbaar is.',
    example: 'Een bewonerscomité van zeven mensen, gekozen uit een open oproep, dat namens de straat met de gemeente aan tafel zit.',
    watch: 'Vertegenwoordiging vraagt om mandaat én terugkoppeling. Zonder dat verliest het comité legitimiteit.',
    phase: 'doorloop', category: 'mediating' },

  { id: 'i19',
    title: 'Deliberatie als ingreep',
    short: 'Het organiseren van gestructureerde discussies — bijvoorbeeld in de vorm van een burgerberaad — om tot gezamenlijke inzichten en oplossingen te komen.',
    when: 'Bij vraagstukken waar verschillende waarden tegenover elkaar staan en de gemeente niet alleen mag of wil beslissen.',
    example: 'Een burgerberaad over de energietransitie in een wijk — vijftig willekeurig getrokken bewoners, drie weekenden, met experts en uitkomstplicht voor het college.',
    watch: 'Deliberatie is geen toverstaf. Zonder bestuurlijk commitment vooraf wordt het een dure exercitie.',
    phase: 'doorloop', category: 'mediating' },

  { id: 'i20',
    title: 'Powerplay',
    short: 'Het strategisch inzetten van politieke invloed op het juiste moment — zelden, maar wanneer een principiële kwestie op het spel staat.',
    when: 'Zelden — maar wanneer een principiële kwestie op het spel staat en andere wegen niet werken.',
    example: 'Een wethouder die in de raad bewust een politieke confrontatie aangaat om bewonersafspraken overeind te houden tegen ambtelijke druk in.',
    watch: 'Powerplay verbruikt politiek kapitaal. Te vaak inzetten ondermijnt geloofwaardigheid; te zelden inzetten ondermijnt afspraken.',
    phase: 'afloop', category: 'powering' },

];


// -------------------------------------------------------------
// VERHALEN (4) — echte casussen uit het Kennisknooppunt-rapport
// "Inbeddingswerk" (concept, 2026). Personen: alleen functie
// (geanonimiseerd, in afwachting van goedkeuring respondenten).
// Koppelingen (tensions/interventions) dateren van de eerdere
// fictieve versies en zijn nog niet opnieuw gevalideerd tegen
// de echte verhalen — nog te controleren.
// photo: leeg gelaten; voeg later rechtenvrije foto's toe.
// -------------------------------------------------------------

const cases = [

  { id: 'c1',
    location: 'Vreeswijkpad, Amsterdam-Zuidoost',
    title: 'Een beheercoöperatie als nieuwe vorm van sociale huur',
    photo: 'https://www.rochdale.nl/media/5vsdublb/vreeswijkpad-1.jpg',
    summary: 'Bij de vernieuwing van een scholencluster werden sociale huurwoningen verhuurd aan leden van een nieuw op te zetten beheercoöperatie. Toen de woningcorporatie meer tijd nodig had, dreigde een juridisch precedent het experiment te laten stranden.',
    full: 'Omwonenden hadden zorgen geuit over nog meer sociale huur in een buurt met al een hoge concentratie. De projectmanager bij Grond & Ontwikkeling bedacht met het Team Zelfbouw een creatief plan: de woningen verhuren aan leden van een beheercoöperatie die zelf verantwoordelijkheid namen voor het beheer — betrokken bewoners zorgen voor minder overlast, en het was meteen een experiment met een nieuwe vorm van participatie.\n\nWoningcorporatie Rochdale won de tender en selecteerde met co-creatiebureau Open Kaart zes bewonersgroepen. Toen de exclusiviteitstermijn afliep, lukte het Rochdale niet om op tijd af te ronden vanwege de complexiteit van de coöperatie, en vroeg het uitstel aan.\n\nEen jurist wilde dat eerst niet steunen, uit vrees voor precedentwerking richting andere ontwikkelaars. De projectmanager legde de kwestie voor aan zijn senior projectmanager en escaleerde naar de directeur, met het argument dat de gemeente zélf de benodigde tijd verkeerd had ingeschat bij dit unieke experiment — er was dus geen gevaar voor ongewenste precedentwerking. Terwijl de notitie werd voorbereid, vond de jurist alsnog ruimte in het contract om het uitstel te steunen.',
    tensions: ['t5','t11','t12'],
    interventions: ['i17','i1','i11'] },

  { id: 'c2',
    location: 'Joris Ivensplein, Nijmegen',
    title: 'De beleidsstapel als hefboom voor een integrale aanpak',
    photo: 'https://www.noviomagus.nl/Vrij/Ivens/DSC03709.jpg',
    summary: 'Een opdracht om met bewoners te praten over het verwijderen van parkeerplaatsen bleek te smal. Door alle beleidsopgaven rond het plein in kaart te brengen, ontstond ruimte voor een veel breder gesprek.',
    full: 'Het Joris Ivensplein kampte met overlast en een gebrek aan sociale veiligheid. De betrokken planoloog kreeg de opdracht om, in lijn met de ambities van het college, het verwijderen van parkeerplaatsen voor te bereiden en daarover met bewoners in gesprek te gaan. Hij zag al snel dat een gesprek over alleen parkeren weinig zin had: dat was vooral slecht nieuws, terwijl er rond het plein tal van andere opgaven speelden.\n\nDaarom bracht hij — samen met een projectmanager — alle relevante beleid in kaart: een flinke stapel, verspreid over afdelingen, van ondergrondse kabels tot gebiedsontwikkeling, parkeren, sociale veiligheid en groen. Met die beleidsstapel voerden ze "eigenwijze, kokeroverstijgende" gesprekken met vakafdelingen om intern draagvlak te creëren voor een integrale aanpak.\n\nVervolgens adviseerden ze het college om de scope te verbreden naar het hele gebied, inclusief het Kronenburgerpark en de tunnel. Zo ontstond afwegingsruimte die een zinvol gesprek met bewoners mogelijk maakte. De aftrap — een enquête begin 2025 — leverde meer dan 400 reacties op, en ruim 100 bewoners wilden actief betrokken blijven.',
    tensions: ['t4','t6','t2'],
    interventions: ['i8','i6','i14','i7'] },

  { id: 'c3',
    location: 'Centrum-Noord, Den Haag',
    title: 'Coproductie met bewoners en ondernemers',
    photo: 'https://bereikbarestad.denhaag.nl/wp-content/uploads/2024/06/Centrum-Noord-11-scaled-e1718874471371.jpg',
    summary: 'In een gebied met veel uitgesproken belangen ontwikkelden bewoners en ondernemers zélf een pakket mobiliteitsmaatregelen, binnen heldere kaders van de gemeente.',
    full: 'Na een initiatiefvoorstel van de Haagse Stadspartij gaf het college in 2018 opdracht om in coproductie met belangengroepen tot maatregelen te komen voor de luchtkwaliteit en leefbaarheid van het noordelijke centrum. Een traditionele aanpak — de gemeente bedenkt, bewoners reageren — zou hier waarschijnlijk op grote weerstand stuiten.\n\nDaarom ontwikkelden werkgroepen van bewoners en ondernemers zelf oplossingen, die de gemeente vervolgens op haalbaarheid toetste. De werkgroepen kregen wel duidelijke kaders mee: een reductie van 15% in verkeersdrukte, en een budget van 10 miljoen euro.\n\nDe projectleider was vanaf het begin betrokken. Het bestaande collegebesluit hielp om aarzelende collega\'s mee te krijgen, en het feit dat het geld in een "zeer algemeen gelabelde" pot zat — en niet uit bestaande potjes hoefde te komen — nam veel weerstand weg. Wel wisselden de ingehuurde vakdeskundigen vaak; dat vroeg steeds om bijpraten, maar zorgde er ook voor dat eventuele weerstand zelden lang aanhield.',
    tensions: ['t1','t2','t7','t9'],
    interventions: ['i13','i12','i14','i6'] },

  { id: 'c4',
    location: 'Poortgebouw, Amsterdam-Zuidoost',
    title: 'Een coalitie die het Poortgebouw voor de buurt behield',
    photo: 'https://zoiszuidoost.nl/wp-content/uploads/2026/06/AfbeeldingLogoPoortgebouw.jpg',
    summary: 'Toen een markant leegstaand gebouw in Reigersbos plotseling te huur kwam, bleek een eerder opgebouwde coalitie met de buurt sterk genoeg om er maatschappelijke voorzieningen te realiseren.',
    full: 'In Reigersbos waren middelen beschikbaar voor nieuwe maatschappelijke voorzieningen. In plaats van de gebruikelijke werkwijze — de gemeente bepaalt volgens vaste normen en besteedt uit — stelde de projectleider sociaal voor om dit samen met de buurt vorm te geven. Hij bracht lokale initiatieven samen in het Kernteam Maatschappelijke Voorzieningen.\n\nToen het al jaren leegstaande Poortgebouw begin 2024 onverwacht werd opgekocht door een vastgoedpartij die snel huurders zocht, moest er plots tempo gemaakt worden. De contractpartijen in het sociaal domein wilden de afwijkende constructie eerst niet financieren, en de vastgoedeigenaar zag een lappendeken van huurders niet zitten.\n\nDe projectleider sociaal escaleerde naar hogere bestuurslagen en zocht een constructie waarin de gemeente hoofdhuurder werd en het risico droeg. Hij koppelde het Poortgebouw bovendien handig aan een lopende "Roadshow" van de afdeling Gemeentelijk Vastgoed, die juist actiever wilde worden in Zuidoost. Dat was een schot in de roos: de afdeling haakte aan en wist scherp te onderhandelen met behoud van de community-visie. Vanaf januari 2025 zijn onder andere het Buurtteam en platform Reigers in het pand gevestigd.',
    tensions: ['t3','t8','t10','t11'],
    interventions: ['i7','i16','i19'] },

];


// -------------------------------------------------------------
// REFLECTIEVRAGEN (3)
// BELANGRIJK: verander de id's (q1, q2, q3) NIET —
// de matching-engine gebruikt ze intern.
// -------------------------------------------------------------

const reflectQuestions = [
  { id: 'q1', text: 'Wat speelt er in jouw opgave — welke belangen botsen, en bij wie?' },
  { id: 'q2', text: 'Welke ruimte heb je nu, en welke ruimte verwacht je nodig te hebben om de opbrengst tot zijn recht te laten komen?' },
  { id: 'q3', text: 'Wat staat het beoogde resultaat het meest in de weg — en welk patroon herken je daarin?' },
];
