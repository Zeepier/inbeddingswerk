// =============================================================
// RUIMTE VOOR PARTICIPATIE — inhoud
// =============================================================
// Dit bestand bevat alle inhoud van de tool: spanningen,
// interventies, verhalen en reflectievragen.
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
// Verhalen verwijzen terug via tensions: [...] en interventions: [...]
// Omgekeerde koppelingen (vanuit interventies naar spanningen) worden
// automatisch berekend — die hoef je niet bij te houden.
//
// IDS
// ───
// Spanningen:   t1, t2, t3, ... (voeg toe als t13, t14, enz.)
// Interventies: i1, i2, i3, ... (voeg toe als i21, i22, enz.)
// Verhalen:     c1, c2, c3, ... (voeg toe als c5, c6, enz.)
// Reflectievragen: q1, q2, q3  (IDs NIET wijzigen)
//
// INTERVENTIE-VELDEN
// ──────────────────
// phase: 'vroeg' | 'midden' | 'laat'
// kind:  'bestuurlijk' | 'relationeel' | 'inhoudelijk' | 'proces'
// =============================================================


// -------------------------------------------------------------
// SPANNINGEN (12)
// -------------------------------------------------------------

const tensions = [

  { id: 't1',
    title: 'Verschil in interpretatie van ruimte voor invloed',
    body: 'Deelnemers en organisatie hanteren verschillende beelden van wat "meedoen" betekent. Wat voor de één raadpleging is, is voor de ander medebeslissen. Zonder expliciete afstemming groeit dit verschil tijdens het traject uit tot teleurstelling. In termen van de participatieladder zit hier vaak een onuitgesproken sprong tussen "informeren" en "coproduceren".',
    interventions: ['i13','i1','i12','i14'],
    cases: ['c3'] },

  { id: 't2',
    title: 'Impact van een ontwikkeling niet passend bij ruimte voor invloed',
    body: 'De voorgenomen ingreep raakt mensen ingrijpend in hun woon- of leefkwaliteit, terwijl de aangeboden invloed beperkt is tot bijvoorbeeld inrichtingsdetails. De mismatch tussen impact en zeggenschap voedt wantrouwen en maakt de uitkomst kwetsbaar voor procedureel verzet (zienswijzen, beroep).',
    interventions: ['i6','i14','i7','i20'],
    cases: ['c2','c3'] },

  { id: 't3',
    title: 'Wijze van omgang met weerstand en conflict',
    body: 'Weerstand wordt vaak gezien als hindernis, terwijl het waardevolle informatie bevat over wat er werkelijk speelt. Hoe zorg je dat conflict productief wordt benut zonder dat het proces vastloopt of escaleert in de pers?',
    interventions: ['i2','i7','i19','i14'],
    cases: ['c4'] },

  { id: 't4',
    title: 'Tegenstrijdig beleid of wetgeving maakt keuzes lastig',
    body: 'Wettelijke kaders en beleidsdoelen botsen in dezelfde opgave — denk aan woningbouwopgave versus klimaatadaptatie of stikstofruimte. Keuzes worden uitgesteld omdat geen enkel kader leidend is, en juridische onzekerheid stuurt het proces.',
    interventions: ['i8','i6','i11','i14'],
    cases: ['c2'] },

  { id: 't5',
    title: 'Gekaderde financiering maakt beweegruimte ingewikkeld',
    body: 'Subsidies en budgetten zijn vaak geoormerkt voor specifieke doelen, terwijl participatie juist vraagt om reageren op wat opkomt. Wat doe je als de bewonersinbreng buiten de financiële kaders valt — van de subsidie of zelfs van de begrotingsperiode?',
    interventions: ['i17','i10','i1','i11'],
    cases: ['c1'] },

  { id: 't6',
    title: 'Scope van beleid niet passend bij belangen in het leefgebied',
    body: 'Beleid is vaak thematisch georganiseerd (groen, mobiliteit, wonen, sociaal), terwijl bewoners hun leefomgeving integraal beleven. Gemeentelijke afdelingen werken langs elkaar heen en plekken vallen tussen wal en schip.',
    interventions: ['i8','i6','i3','i11'],
    cases: ['c2'] },

  { id: 't7',
    title: 'Timing van participatie niet passend bij fase van ontwikkeling',
    body: 'Participatie wordt te laat georganiseerd — na een principebesluit waar nauwelijks meer aan te schroeven valt — of juist te vroeg, zonder concreet aangrijpingspunt. Beide leiden tot frustratie aan beide kanten van de tafel.',
    interventions: ['i9','i16','i13','i7'],
    cases: ['c3'] },

  { id: 't8',
    title: 'Beleving in praktijk tegengesteld met perspectief van experts',
    body: 'Bewoners ervaren iets anders dan rapporten of metingen aangeven — denk aan geluidsoverlast die "binnen de norm" valt, of veiligheid die statistisch is verbeterd maar gevoelsmatig niet. Het rationele bewijs staat haaks op de geleefde werkelijkheid.',
    interventions: ['i7','i14','i12','i8'],
    cases: ['c4'] },

  { id: 't9',
    title: 'Behoefte aan transparantie bij gesloten besluitvorming',
    body: 'Sommige besluiten worden om bestuurlijke, juridische of onderhandelingstechnische redenen achter gesloten deuren genomen. Hoe communiceer je daar transparant over zonder vertrouwen te verliezen — en zonder de onderhandelingsruimte weg te geven?',
    interventions: ['i12','i14','i1','i9'],
    cases: ['c3'] },

  { id: 't10',
    title: 'Bestuurlijke of ambtelijke wisselingen in langlopende ontwikkeling',
    body: 'Wethouders, projectleiders of dossierhouders wisselen tijdens het traject — zeker rond verkiezingen of reorganisaties. Afspraken raken in de mist en deelnemers moeten hun verhaal opnieuw vertellen aan een nieuwe gesprekspartner.',
    interventions: ['i1','i12','i15','i9'],
    cases: ['c4'] },

  { id: 't11',
    title: 'Geschiedenis en context omgeving van invloed op nieuwe initiatieven',
    body: 'Eerdere mislukkingen, breuken in vertrouwen of onopgeloste kwesties uit het verleden bepalen hoe nieuwe initiatieven worden ontvangen — vaak voordat ze überhaupt zijn gestart. Wat eruit ziet als weerstand tegen het nieuwe plan, is soms een echo van het oude.',
    interventions: ['i7','i9','i16','i12'],
    cases: ['c1'] },

  { id: 't12',
    title: 'Beperkt responsief samenwerken door prestatiegerichte aanpak',
    body: 'KPI\'s, deadlines en verantwoordingseisen sturen het werk zo strak dat er weinig ruimte is om te reageren op wat opkomt. Het traject loopt door volgens planning, ook als signalen aangeven dat het niet meer klopt.',
    interventions: ['i16','i17','i10','i1'],
    cases: ['c1'] },

];


// -------------------------------------------------------------
// INTERVENTIES (20)
// -------------------------------------------------------------

const interventions = [

  { id: 'i1',
    title: 'Bestuurlijke rugdekking',
    short: 'Gezamenlijke visie met draagvlak en mandaat van eindverantwoordelijke bestuurders op de beoogde aanpak.',
    when: 'Aan het begin van een traject, en bij elk kantelpunt waar de aanpak fundamenteel verandert.',
    example: 'Een wethouder die in een collegebrief expliciet ruimte geeft voor een open zoekproces zonder vooraf vastgestelde uitkomst — en dat ook in de raad ondertekent.',
    watch: 'Rugdekking is geen eenmalig moment. Bestuurders wisselen, prioriteiten verschuiven. Onderhoud de afspraak.',
    phase: 'vroeg', kind: 'bestuurlijk' },

  { id: 'i2',
    title: 'Tegenspraak opzoeken',
    short: 'Op zoek naar potentieel kritische stemmen binnen de gemeente — wie verwacht je weerstand van? Ga met hen in gesprek en neem hun twijfels mee.',
    when: 'In de voorbereidende fase, vóór je een aanpak vaststelt — niet om te overtuigen, maar om de redenering te begrijpen.',
    example: 'Een procesbegeleider die een uur reserveert met de jurist die altijd "nee" zegt, om de redenering te begrijpen en mee te wegen.',
    watch: 'Tegenspraak organiseren is geen vinkjes-ritueel. Echte tegenspraak voelt oncomfortabel.',
    phase: 'vroeg', kind: 'relationeel' },

  { id: 'i3',
    title: 'Bondgenoten opzoeken',
    short: 'Zoeken naar potentieel sympathieke stemmen binnen de organisatie — van welke afdelingen heb je steun nodig? Maak vroeg de connectie.',
    when: 'Vroeg in het traject, en steeds wanneer je een nieuwe fase ingaat.',
    example: 'Een collega bij Beheer & Onderhoud die later betrokken raakt — al vroeg meenemen voorkomt verrassingen bij oplevering.',
    watch: 'Bondgenoten worden geen mede-verantwoordelijken zonder dat ze daar iets voor terugzien.',
    phase: 'vroeg', kind: 'relationeel' },

  { id: 'i4',
    title: 'Vernieuwende werkwijze',
    short: 'Experimenteren met een vernieuwde werkwijze en verkennen van nieuwe samenwerkingsvormen of constructies.',
    when: 'Wanneer bestaande routines aantoonbaar niet werken voor deze opgave — en niemand iets verliest bij een experiment.',
    example: 'Een gemeente die een wijkraad omvormt tot een rotatie-comité waar elk kwartaal nieuwe bewoners aanschuiven, om diversiteit te borgen.',
    watch: 'Experimenteren vraagt om expliciete afspraken: wat leren we, en wanneer evalueren we?',
    phase: 'midden', kind: 'proces' },

  { id: 'i5',
    title: 'Scenariovorming',
    short: 'Het ontwikkelen van verschillende toekomstscenario\'s om keuzes en gevolgen inzichtelijk te maken.',
    when: 'Bij complexe opgaven waar één toekomstbeeld te beperkend is en de keuze nog open ligt.',
    example: 'Drie scenario\'s voor een herontwikkeling — verdichten, vergroenen, mengen — met per scenario de consequenties voor wonen, verkeer en groen.',
    watch: 'Scenario\'s mogen geen verkapte voorkeursoptie zijn. Twee fictieve naast één echte ondermijnt het instrument.',
    phase: 'midden', kind: 'inhoudelijk' },

  { id: 'i6',
    title: 'Wenkend perspectief',
    short: 'Articuleren van een visie op de opgave waarin de belangen en perspectieven van verschillende afdelingen verwerkt zijn.',
    when: 'Wanneer afdelingen langs elkaar heen werken of de opgave fragmentarisch oogt.',
    example: 'Een visiedocument van twee A4 dat ruimtelijk, sociaal en economisch beleid bij elkaar brengt rond één plek — geschreven mét de afdelingen, niet voor hen.',
    watch: 'Een wenkend perspectief verliest zijn werking als het te abstract blijft. Maak het concreet aan een plek of moment.',
    phase: 'vroeg', kind: 'inhoudelijk' },

  { id: 'i7',
    title: 'Meenemen in belevingswereld',
    short: 'Weg van bureau en vergaderkamer — naar het persoonlijk beleven van een situatie en het zien van ontwikkelingen in een gebied.',
    when: 'Wanneer er een groot verschil is tussen rapport-werkelijkheid en geleefde werkelijkheid.',
    example: 'Een wandeling met wethouder, ambtenaar en bewoners op een vrijdagavond — om te ervaren waar het over gaat in plaats van te lezen waar het over gaat.',
    watch: 'Niet ensceneren. De waarde zit in wat je niet had verwacht tegen te komen.',
    phase: 'midden', kind: 'relationeel' },

  { id: 'i8',
    title: 'Beleidsspiegel',
    short: 'Het inzichtelijk maken van al het beleid dat in een gebied samenkomt, om zo een nieuw integraal perspectief te scheppen.',
    when: 'In gebieden waar veel beleid samenvalt en niemand het overzicht heeft.',
    example: 'Een visualisatie waarin alle beleidsdoelen voor één plein over elkaar liggen — woonvisie, mobiliteitsplan, klimaatadaptatie, economisch beleid. Schuringen worden zichtbaar.',
    watch: 'Een beleidsspiegel kan verlammend werken als hij zonder duiding wordt gepresenteerd. Zorg voor begeleiding bij het lezen.',
    phase: 'midden', kind: 'inhoudelijk' },

  { id: 'i9',
    title: 'Kleine tussentijdse besluiten',
    short: 'Het nemen van kleinere beslissingen tijdens het proces om voortgang te boeken en vertrouwen op te bouwen.',
    when: 'In langlopende trajecten waar alles "in samenhang" wordt opgehouden tot het eindbesluit.',
    example: 'Tijdens een tweejarig gebiedsproces alvast een tijdelijke speeltuin realiseren — zichtbaar resultaat geeft energie en vertrouwen voor het grotere geheel.',
    watch: 'Tussentijdse besluiten mogen het grotere proces niet overrulen. Maak helder wat wel en niet bij dit besluit hoort.',
    phase: 'midden', kind: 'proces' },

  { id: 'i10',
    title: 'Opplussen',
    short: 'Organiseren van benodigde extra capaciteit, expertise, betrokkenheid, geld of tijd op het moment dat blijkt dat de basisopzet ontoereikend is.',
    when: 'Wanneer duidelijk wordt dat de basisopzet niet toereikend is voor de complexiteit.',
    example: 'Een externe procesbegeleider inhuren voor een halfjaar, omdat de interne capaciteit niet volstaat voor de gevraagde zorgvuldigheid.',
    watch: 'Opplussen is geen oplossing voor onduidelijkheid over de opgave. Eerst scherper, dan opschalen.',
    phase: 'midden', kind: 'proces' },

  { id: 'i11',
    title: 'Beleidshaakjes zoeken',
    short: 'Het verbinden van nieuwe initiatieven aan bestaand beleid om ze beter te verankeren in financiering, mandaat en uitvoeringsagenda\'s.',
    when: 'Bij initiatieven die buiten de gangbare kaders vallen maar wel passen bij ambities.',
    example: 'Een bewonerscoöperatie voor groenbeheer koppelen aan de uitvoeringsagenda biodiversiteit — hetzelfde initiatief krijgt zo legitimiteit en budget.',
    watch: 'Een haakje is geen volledige inbedding. Houd in de gaten of het haakje stevig genoeg is.',
    phase: 'midden', kind: 'inhoudelijk' },

  { id: 'i12',
    title: 'Opbrengst inzichtelijk maken',
    short: 'Het duidelijk en herleidbaar communiceren van de perspectieven, inzichten en context uit het participatieproces — zodat de inbreng traceerbaar is.',
    when: 'Na elke participatieronde, vóór bestuurlijke besluitvorming.',
    example: 'Een opbrengstrapport dat niet alleen meningen samenvat, maar ook patronen, dilemma\'s en gemaakte afwegingen — leesbaar voor bewoners en bestuur.',
    watch: 'Opbrengst zonder traceerbaarheid (wat is er met welke inbreng gedaan?) verliest zijn functie.',
    phase: 'laat', kind: 'proces' },

  { id: 'i13',
    title: 'Kaders formuleren',
    short: 'Het vaststellen van duidelijke grenzen en richtlijnen waarbinnen het proces plaatsvindt — wat ligt vast, wat is onderhandelbaar.',
    when: 'Aan het begin van een traject. Kaders die later komen voelen als verschuiving.',
    example: 'Vooraf benoemen: "het besluit over de hoogte ligt vast, maar over inrichting en functies kunnen we samen beslissen". Helderheid schept vertrouwen.',
    watch: 'Kaders moeten te dragen zijn. Te strakke kaders maken participatie schijn; te losse kaders zorgen voor teleurstelling achteraf.',
    phase: 'vroeg', kind: 'proces' },

  { id: 'i14',
    title: 'Dilemma\'s op tafel',
    short: 'Het expliciet benoemen en bespreken van lastige keuzes of tegenstrijdige belangen op het moment dat ze zichtbaar worden — niet later.',
    when: 'Op het moment dat een schuring zichtbaar wordt — niet later.',
    example: 'In een raadsbrief expliciet maken: "we kunnen niet én alle parkeerplaatsen behouden én de vergroening realiseren — hoe wegen we?".',
    watch: 'Dilemma\'s presenteren als zwart-wit keuzes versimpelt de werkelijkheid. Toon de gradaties.',
    phase: 'midden', kind: 'inhoudelijk' },

  { id: 'i15',
    title: 'Prestatieafspraken',
    short: 'Het maken van concrete afspraken over wat er bereikt moet worden en wie waarvoor verantwoordelijk is — vooral nuttig bij wisselingen.',
    when: 'Bij overgangen tussen fases en bij wisseling van personen.',
    example: 'Een document met vier mijlpalen, daarachter naam, datum en verwachte uitkomst — geactualiseerd bij elke wisseling.',
    watch: 'Prestatieafspraken kunnen het responsieve karakter van participatie verstikken. Houd ze ruim genoeg.',
    phase: 'vroeg', kind: 'proces' },

  { id: 'i16',
    title: 'Vertraging als investering',
    short: 'Het bewust vertragen van het proces om meer tijd te nemen voor ontwikkeling, kwaliteit en draagvlak — en die keuze publiek verantwoorden.',
    when: 'Wanneer de planning de inhoud begint te dicteren en kwaliteit eronder lijdt.',
    example: 'Een projectleider die de oplevering met drie maanden uitstelt om een tweede gespreksronde te doen — en die keuze publiek verantwoordt.',
    watch: 'Vertraging zonder duidelijk doel ondermijnt vertrouwen. Maak het verschil tussen "stilstand" en "investering" expliciet.',
    phase: 'midden', kind: 'proces' },

  { id: 'i17',
    title: 'Breed inzetbaar budget',
    short: 'Het beschikbaar stellen van flexibele middelen die voor verschillende doelen binnen het proces kunnen worden gebruikt — om te kunnen reageren op wat opkomt.',
    when: 'In open trajecten waar je vooraf niet weet wat nodig is.',
    example: 'Een stelpost van 50.000 euro voor "wat opkomt in het traject" — met een lichte verantwoordingsstructuur achteraf.',
    watch: 'Flexibele budgetten vragen om vertrouwen vanuit de organisatie. Bouw dat vertrouwen actief op.',
    phase: 'vroeg', kind: 'bestuurlijk' },

  { id: 'i18',
    title: 'Afgevaardigd comité',
    short: 'Het vormen van een groep vertegenwoordigers die namens een bredere groep meedenkt of beslist — met mandaat en terugkoppelingsstructuur.',
    when: 'In trajecten waar continu intensief overleg met de hele groep niet werkbaar is.',
    example: 'Een bewonerscomité van zeven mensen, gekozen uit een open oproep, dat namens de straat met de gemeente aan tafel zit.',
    watch: 'Vertegenwoordiging vraagt om mandaat én terugkoppeling. Zonder dat verliest het comité legitimiteit.',
    phase: 'midden', kind: 'relationeel' },

  { id: 'i19',
    title: 'Deliberatie als ingreep',
    short: 'Het organiseren van gestructureerde discussies — bijvoorbeeld in de vorm van een burgerberaad — om tot gezamenlijke inzichten en oplossingen te komen.',
    when: 'Bij vraagstukken waar verschillende waarden tegenover elkaar staan en de gemeente niet alleen mag of wil beslissen.',
    example: 'Een burgerberaad over de energietransitie in een wijk — vijftig willekeurig getrokken bewoners, drie weekenden, met experts en uitkomstplicht voor het college.',
    watch: 'Deliberatie is geen toverstaf. Zonder bestuurlijk commitment vooraf wordt het een dure exercitie.',
    phase: 'midden', kind: 'proces' },

  { id: 'i20',
    title: 'Powerplay',
    short: 'Het strategisch inzetten van politieke invloed op het juiste moment — zelden, maar wanneer een principiële kwestie op het spel staat.',
    when: 'Zelden — maar wanneer een principiële kwestie op het spel staat en andere wegen niet werken.',
    example: 'Een wethouder die in de raad bewust een politieke confrontatie aangaat om bewonersafspraken overeind te houden tegen ambtelijke druk in.',
    watch: 'Powerplay verbruikt politiek kapitaal. Te vaak inzetten ondermijnt geloofwaardigheid; te zelden inzetten ondermijnt afspraken.',
    phase: 'laat', kind: 'bestuurlijk' },

];


// -------------------------------------------------------------
// VERHALEN (4) — momenteel fictief, te vervangen door echte cases
// -------------------------------------------------------------

const cases = [

  { id: 'c1',
    location: 'Vreeswijkpad, Amsterdam',
    title: 'Een nieuwe vorm van beheercoöperatie',
    photo: 'https://images.unsplash.com/photo-1574165791370-9d68d88471cd?w=900&q=80',
    summary: 'Bewoners in een naoorlogse buurt namen het beheer van het collectieve groen over via een coöperatieve structuur. De gemeente stelde een meerjarig flexibel budget beschikbaar en kreeg in ruil een actief netwerk dat ook signaleerde wat er in de buurt speelde.',
    full: 'Het Vreeswijkpad-traject begon met onvrede over verwaarloosd groen en eindigde met een formele beheerafspraak waarin bewoners zelf bepaalden wat er gebeurde — binnen brede budgettaire en kwaliteitskaders. De crux zat in het loslaten van prestatie-indicatoren door de gemeente: niet sturen op aantal vierkante meters geknipte heg, maar op tevredenheid en biodiversiteit. Dat vroeg om interne strijd binnen Beheer & Onderhoud, die uiteindelijk werd gewonnen door bestuurlijke rugdekking en zichtbare resultaten in de eerste maanden.',
    tensions: ['t5','t11','t12'],
    interventions: ['i17','i1','i9','i11'] },

  { id: 'c2',
    location: 'Joris Ivensplein, Nijmegen',
    title: 'Beleidsspiegel voor een integrale aanpak',
    photo: 'https://images.unsplash.com/photo-1568724794676-a6dbfb6e3100?w=900&q=80',
    summary: 'Op één plein kwamen wonen, mobiliteit, klimaatadaptatie en sociaal beleid samen — elk met eigen doelen die elkaar tegenspraken. Een beleidsspiegel maakte de schuringen zichtbaar en dwong tot afstemming.',
    full: 'Het Joris Ivensplein was zo\'n plek waar geen enkele afdeling alleen verantwoordelijk was, en daardoor niemand. Door alle beleidsdoelen voor het plein letterlijk over elkaar heen te leggen — als transparante kaarten — werd voor het eerst zichtbaar dat verdichten en vergroenen op deze schaal niet allebei kon. Het wenkend perspectief dat daaruit ontstond was scherper dan elk afzonderlijk beleidsdocument: het accepteerde de keuze in plaats van haar te verdoezelen.',
    tensions: ['t4','t6','t2'],
    interventions: ['i8','i6','i14','i7'] },

  { id: 'c3',
    location: 'Centrum-Noord, Den Haag',
    title: 'Coproductie met alle belanghebbenden',
    photo: 'https://images.unsplash.com/photo-1625313499615-8a4a67d0f807?w=900&q=80',
    summary: 'In een complex stedelijk gebied werd een ontwerptraject georganiseerd waarin bewoners, ondernemers, gemeente en ontwikkelaar samen aan tafel zaten — vanaf het eerste moment, niet pas bij de inspraakronde.',
    full: 'Coproductie betekent in dit geval dat het ontwerpteam niet eerst een plan maakte en dat liet beoordelen, maar dat alle partijen vanaf de eerste schets meedeelden in zowel de inhoud als de afwegingen. Dat vroeg om expliciete kaders ("over de hoogte beslis je niet mee, over de plinten en pleinen wel") en om opbrengstdocumenten die per ronde lieten zien wat met welke inbreng was gedaan. Het traject duurde langer, maar leverde een plan op waar het draagvlak in de structuur verankerd was.',
    tensions: ['t1','t2','t7','t9'],
    interventions: ['i13','i12','i14','i6'] },

  { id: 'c4',
    location: 'Poortgebouw, Amsterdam',
    title: 'Community building voor gedeeld eigenaarschap',
    photo: 'https://images.unsplash.com/photo-1723238746740-07254366e21b?w=900&q=80',
    summary: 'Bij de herbestemming van een markant gebouw werd niet eerst een programma ontwikkeld, maar eerst een gemeenschap gebouwd. De gebruikers en buurt bepaalden samen wat het gebouw moest worden.',
    full: 'Het Poortgebouw had een geladen geschiedenis — eerdere herontwikkelingen waren stukgelopen op wantrouwen. In plaats van opnieuw met een visie te komen, organiseerde de gemeente een jaar lang ontmoetingen, gesprekken en kleine experimenten in het gebouw. Pas toen er een groep met gedeeld eigenaarschap was, werd het ontwerptraject gestart. De vertraging bleek een investering: het uiteindelijke plan kon sneller besluitvaardig worden vastgesteld dan eerdere pogingen.',
    tensions: ['t3','t8','t10','t11'],
    interventions: ['i7','i16','i9','i19'] },

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
