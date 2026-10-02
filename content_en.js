// =============================================================
// RUIMTE VOOR PARTICIPATIE — Engelse vertaling
// =============================================================
// Dit bestand bevat de Engelse versie van de inhoud. De koppelingen,
// fases en categorieën staan alleen in content.js — hier staan
// uitsluitend teksten, per id.
//
// LET OP: pas je een tekst aan in content.js, werk dan ook de
// Engelse tekst hier bij. Ontbreekt een id of veld hier, dan toont
// de Engelse versie de Nederlandse tekst.
//
// staticEN bevat de vaste teksten van de pagina (koppen, handleiding,
// begrippen). De sleutels corresponderen met data-i18n="..." in
// Ruimte_voor_participatie.html.
// =============================================================

const contentEN = {

  // ----- WAARDEN / VALUES -----
  v1:  { title: 'Resident influence',
         desc: 'Residents’ input genuinely affects municipal planning or decision-making.' },
  v2:  { title: 'Drawing on local knowledge and history',
         desc: 'Residents’ knowledge and experience of their neighbourhood, and what has happened earlier in this place and in previous participation, are known and taken into account.' },
  v3:  { title: 'Recognising residents’ perspective',
         desc: 'How residents experience the situation is taken seriously, even when it differs from the official picture.' },
  v4:  { title: 'Fostering social cohesion in the neighbourhood',
         desc: 'The process strengthens connection and contact among residents.' },
  v5:  { title: 'Room for open conversation and dissent',
         desc: 'There is room for an honest conversation, including about difficult or uncomfortable topics, and for dissenting opinions and critical voices.' },
  v6:  { title: 'Implementing existing policy',
         desc: 'Adopted policy and previously made agreements are carried out.' },
  v7:  { title: 'Civil-service loyalty',
         desc: 'Civil servants act in line with the direction and decisions of the executive and the organisation.' },
  v8:  { title: 'Managing political risk',
         desc: 'Administrative and political sensitivities arising from participation are recognised and managed in time.' },
  v9:  { title: 'Cross-domain collaboration',
         desc: 'Different departments and policy areas work on the task in an integrated way rather than separately.' },
  v10: { title: 'Using time and money wisely',
         desc: 'Time, effort and money are spent so that they deliver as much as possible, and the costs of the process and its outcomes stay within feasible limits.' },
  v12: { title: 'Doing justice to professional expertise',
         desc: 'The expertise of specialists carries weight in the final choices.' },
  v13: { title: '(Social) learning',
         desc: 'Through the process, those involved grow wiser about themselves, each other and the task.' },
  v15: { title: 'Equal treatment of residents',
         desc: 'The input of all residents carries equal weight, whether or not they are visible in the (participation) process.' },
  v16: { title: 'Traceable government action',
         desc: 'Residents can follow and understand how and why the municipality arrives at a decision.' },
  v17: { title: 'Trust',
         desc: 'Residents and municipality can rely on each other: agreements are kept and input is not asked for in vain.' },

  // ----- SPANNINGEN / TENSIONS -----
  t1:  { title: 'Differing interpretations of the room for influence',
         short: 'What is consultation to one is co-decision to the other — and that difference often goes unspoken.',
         body: 'Participants and the organisation hold different ideas of what “taking part” means. What is consultation to one is co-decision to the other. Without explicit alignment, this gap grows into disappointment over the course of the process. In terms of the participation ladder, there is often an unspoken leap here between “informing” and “co-producing”.' },
  t2:  { title: 'Impact out of proportion to influence',
         short: 'The development deeply affects people’s homes or surroundings, but the influence on offer goes no further than details.',
         body: 'The planned development deeply affects people’s housing or quality of life, while the influence on offer is limited to, say, design details. The mismatch between impact and say fuels distrust and leaves the outcome vulnerable to procedural opposition (formal objections, appeals).' },
  t3:  { title: 'Room for dissent versus administrative calm',
         short: 'Criticism and resistance show what is really going on, but also bring political risk — how much room do you give them?',
         body: 'Resistance is often seen as an obstacle, while it holds valuable information about what is really going on. How do you make productive use of conflict without the process stalling or escalating in the press?' },
  t4:  { title: 'Conflicting policy or legislation makes choices difficult',
         short: 'Legal frameworks and policy goals clash, and no single framework takes precedence.',
         body: 'Legal frameworks and policy goals clash within the same task — think of housing targets versus climate adaptation or nitrogen capacity. Choices are postponed because no single framework takes precedence, and legal uncertainty drives the process.' },
  t5:  { title: 'Earmarked money limits room for manoeuvre',
         short: 'Budgets are earmarked, while participation calls for responding to what comes up.',
         body: 'Grants and budgets are often earmarked for specific goals, while participation calls for responding to whatever comes up. What do you do when residents’ input falls outside the financial frameworks — of the grant, or even of the budget period?' },
  t6:  { title: 'Policy works in silos, the living environment doesn’t',
         short: 'Policy is organised by theme, while residents experience their surroundings as a whole.',
         body: 'Policy is often organised by theme (green space, mobility, housing, social), while residents experience their surroundings as a whole. Municipal departments work past each other and places fall between the cracks.' },
  t7:  { title: 'Participation comes too early or too late',
         short: 'Participation comes after a decision that leaves little room for change, or before there is anything concrete.',
         body: 'Participation is organised too late — after an in-principle decision that leaves little room for change — or too early, without anything concrete to engage with. Both lead to frustration on both sides of the table.' },
  t8:  { title: 'Experiential knowledge clashes with professional expertise',
         short: 'What residents experience doesn’t match what reports, measurements or specialists say.',
         body: 'Residents experience something different from what reports, measurements or specialists indicate — think of noise nuisance that falls “within the norm”, or safety that has improved statistically but not in how it feels. Rational evidence runs counter to lived reality.' },
  t9:  { title: 'Need for transparency amid closed decision-making',
         short: 'Some decisions are taken behind closed doors — how do you stay transparent about that?',
         body: 'Some decisions are taken behind closed doors for administrative, legal or negotiating reasons. How do you communicate transparently about this without losing trust — and without giving away your negotiating room?' },
  t10: { title: 'Changes of administrators or officials',
         short: 'Aldermen, project leaders or case officers change, and agreements get lost in the fog.',
         body: 'Aldermen, project leaders or case officers change during the process — especially around elections or reorganisations. Agreements get lost in the fog and participants have to tell their story again to a new counterpart.' },
  t11: { title: 'The past colours how new plans land',
         short: 'Past failures and breaches of trust determine how a new plan is received.',
         body: 'Past failures, breaches of trust or unresolved issues determine how new initiatives are received — often before they have even started. What looks like resistance to the new plan is sometimes an echo of the old one.' },
  t12: { title: 'Process pressure leaves little room to adjust',
         short: 'KPIs, deadlines and accountability steer so tightly that there is little room to respond to what comes up.',
         body: 'KPIs, deadlines and accountability requirements steer the work so tightly that there is little room to respond to what comes up. The process carries on according to plan, even when signals show it no longer fits.' },
  t13: { title: 'Granting influence versus treating everyone equally',
         short: 'Those who take part gain influence — but how much weight does the voice of those who don’t take part carry?',
         body: 'Those who take part in participation gain influence — but that raises the question of whether government thereby favours active, vocal residents over the silent majority. How do you make room for participation without losing sight of the equal treatment of all residents?' },

  t14: { title: 'Municipality, residents and departments talk past each other',
         short: 'Everyone uses the same words but means something different by them.',
         body: 'Municipality and residents — and departments among themselves — use the same words but mean different things by them. What one person calls “area development” or “participation” means something quite different to another. As long as this goes undiscussed, people talk past each other and there seems to be an agreement that isn’t there.' },

  // ----- INTERVENTIES / INTERVENTIONS -----
  i1:  { title: 'Administrative backing',
         short: 'A shared vision on the intended approach, with the support and mandate of the ultimately responsible administrators.',
         when: 'At the start of a process, and at every turning point where the approach fundamentally changes.',
         example: 'An alderman who, in a letter from the executive, explicitly allows room for an open-ended search without a predetermined outcome — and also puts their name to it in the council.',
         watch: 'Backing is not a one-off moment. Administrators change, priorities shift. Maintain the agreement.' },
  i2:  { title: 'Seeking out dissent',
         short: 'Looking for potentially critical voices within the municipality — from whom do you expect resistance? Talk to them and take their doubts on board.',
         when: 'In the preparatory phase, before you settle on an approach — not to persuade, but to understand the reasoning.',
         example: 'A process facilitator who sets aside an hour with the lawyer who always says “no”, to understand and weigh up the reasoning.',
         watch: 'Organising dissent is not a box-ticking ritual. Real dissent feels uncomfortable.' },
  i3:  { title: 'Finding allies',
         short: 'Looking for potentially sympathetic voices within the organisation — which departments do you need support from? Make the connection early.',
         when: 'Early in the process, and whenever you enter a new phase.',
         example: 'A colleague at Maintenance & Management who will get involved later on — bringing them in early prevents surprises at handover.',
         watch: 'Allies won’t become co-owners unless they get something in return.' },
  i4:  { title: 'Innovative way of working',
         short: 'Experimenting with a new way of working and exploring new forms or structures of collaboration.',
         when: 'When existing routines demonstrably don’t work for this task — and nobody loses out from an experiment.',
         example: 'A municipality that turns a neighbourhood council into a rotating committee that new residents join every quarter, to safeguard diversity.',
         watch: 'Experimenting calls for explicit agreements: what are we learning, and when do we evaluate?' },
  i5:  { title: 'Scenario building',
         short: 'Developing different future scenarios to make choices and consequences visible.',
         when: 'For complex tasks where a single vision of the future is too limiting and the choice is still open.',
         example: 'Three scenarios for a redevelopment — densify, green, mix — each showing the consequences for housing, traffic and green space.',
         watch: 'Scenarios must not be a disguised preferred option. Two fictional ones alongside one real one undermines the instrument.' },
  i6:  { title: 'Inspiring perspective',
         short: 'Articulating a vision of the task that incorporates the interests and perspectives of different departments.',
         when: 'When departments work past each other or the task looks fragmented.',
         example: 'A two-page vision document that brings spatial, social and economic policy together around one place — written with the departments, not for them.',
         watch: 'An inspiring perspective loses its effect if it stays too abstract. Make it concrete by tying it to a place or moment.' },
  i7:  { title: 'Stepping into lived experience',
         short: 'Away from the desk and the meeting room — towards experiencing a situation personally and seeing developments in an area first-hand.',
         when: 'When there is a large gap between the reality in reports and lived reality.',
         example: 'A walk with the alderman, civil servant and residents on a Friday evening — to experience what it is about instead of reading about it.',
         watch: 'Don’t stage it. The value lies in what you didn’t expect to encounter.' },
  i8:  { title: 'Policy mirror',
         short: 'Mapping all the policy that converges in an area, to create a new, integrated perspective.',
         when: 'In areas where a lot of policy coincides and nobody has the overview.',
         example: 'A visualisation overlaying all the policy goals for a single square — housing vision, mobility plan, climate adaptation, economic policy. The friction points become visible.',
         watch: 'A policy mirror can be paralysing if presented without interpretation. Provide guidance in reading it.' },
  i10: { title: 'Scaling up',
         short: 'Arranging the extra capacity, expertise, involvement, money or time — or a missing role — needed once it becomes clear the basic set-up falls short.',
         when: 'When it becomes clear that the basic set-up isn’t adequate for the complexity.',
         example: 'Hiring an external process facilitator for six months because internal capacity isn’t enough for the care the process requires. Or adding a role that is missing, such as someone who knows the neighbourhood well or a specialist who brings in a missing perspective.',
         watch: 'Scaling up is no fix for a lack of clarity about the task. Sharpen first, then scale up.' },
  i11: { title: 'Finding policy hooks',
         short: 'Linking new initiatives to existing policy to anchor them more firmly in funding, mandate and implementation agendas.',
         when: 'For initiatives that fall outside the usual frameworks but do fit with ambitions.',
         example: 'Linking a residents’ cooperative for green-space management to the biodiversity implementation agenda — the same initiative thus gains legitimacy and budget.',
         watch: 'A hook is not full embedding. Keep an eye on whether the hook is strong enough.' },
  i12: { title: 'Making the outcomes visible',
         short: 'Communicating the perspectives, insights and context from the participation process clearly and traceably — so that the input can be traced.',
         when: 'After each round of participation, before administrative decision-making.',
         example: 'An outcomes report that doesn’t just summarise opinions, but also patterns, dilemmas and the trade-offs made — readable for residents and administrators alike.',
         watch: 'Outcomes without traceability (what was done with which input?) lose their purpose.' },
  i13: { title: 'Setting frameworks',
         short: 'Establishing clear boundaries and guidelines within which the process takes place — what is fixed, what is negotiable.',
         when: 'At the start of a process. Frameworks that come later feel like moving the goalposts.',
         example: 'Stating upfront: “the decision on building height is fixed, but we can decide together on layout and functions”. Clarity builds trust.',
         watch: 'Frameworks must be workable. Frameworks that are too tight turn participation into a sham; frameworks that are too loose lead to disappointment afterwards.' },
  i14: { title: 'Dilemmas on the table',
         short: 'Explicitly naming and discussing difficult choices or conflicting interests at the moment they become visible — not later.',
         when: 'The moment friction becomes visible — not later.',
         example: 'Making it explicit in a letter to the council: “we cannot both keep all the parking spaces and deliver the greening — how do we weigh this up?”.',
         watch: 'Presenting dilemmas as black-and-white choices oversimplifies reality. Show the shades of grey.' },
  i16: { title: 'Delay as investment',
         short: 'Deliberately slowing the process down to take more time for development, quality and support — and publicly accounting for that choice.',
         when: 'When the schedule starts to dictate the content and quality suffers.',
         example: 'A project leader who postpones delivery by three months to hold a second round of conversations — and publicly accounts for that choice.',
         watch: 'Delay without a clear purpose undermines trust. Make the difference between “standstill” and “investment” explicit.' },
  i17: { title: 'Flexible budget',
         short: 'Making flexible resources available that can be used for various purposes within the process — so you can respond to what comes up.',
         when: 'In open-ended processes where you don’t know in advance what will be needed.',
         example: 'A contingency budget of 50,000 euros for “whatever comes up in the process” — with light accountability afterwards.',
         watch: 'Flexible budgets require trust from within the organisation. Actively build that trust.' },
  i18: { title: 'Delegated committee',
         short: 'Forming a group of representatives who think along or decide on behalf of a wider group — with a mandate and a feedback structure.',
         when: 'In processes where continuous, intensive consultation with the whole group isn’t workable.',
         example: 'A residents’ committee of seven people, chosen through an open call, who sit at the table with the municipality on behalf of the street.',
         watch: 'Representation requires both a mandate and feedback. Without these, the committee loses legitimacy.' },
  i19: { title: 'Deliberation as intervention',
         short: 'Organising structured discussions — for example in the form of a citizens’ assembly — to arrive at shared insights and solutions.',
         when: 'For issues where different values are at odds and the municipality cannot or will not decide alone.',
         example: 'A citizens’ assembly on the energy transition in a neighbourhood — fifty randomly selected residents, three weekends, with experts and an obligation for the executive to act on the outcome.',
         watch: 'Deliberation is no magic wand. Without administrative commitment upfront, it becomes an expensive exercise.' },
  i20: { title: 'Power play',
         short: 'Strategically deploying political influence at the right moment — rarely, but when a matter of principle is at stake.',
         when: 'Rarely — but when a matter of principle is at stake and other routes don’t work.',
         example: 'An alderman who deliberately enters into a political confrontation in the council to uphold agreements with residents against pressure from within the civil service.',
         watch: 'Power play uses up political capital. Using it too often undermines credibility; using it too rarely undermines agreements.' },

i21: { title: 'Open spots in the design',
         short: 'Deliberately leaving parts of the design open, so there is still room to give the outcomes of participation a place.',
         when: 'When the design is already well advanced, but participation is still under way or has yet to begin.',
         example: 'A street redesign in which the location of play facilities and benches is deliberately left undrawn, so that residents can help decide on them in a later round.',
         watch: 'An open spot must genuinely be open — and small enough to remain feasible. Agree in advance when and by whom it will be filled in.' },
  i22: { title: 'Splitting up',
         short: 'Dividing the project into parts that each have their own pace, so that what is fixed can proceed and what needs room gets more time.',
         when: 'When a tight schedule and room for participation cannot be combined in a single process.',
         example: 'An area development in which housing construction proceeds on schedule, while a separate phase with its own participation is set up for the ground floors and public space.',
         watch: 'Splitting up can also fragment. Keep sight of how the parts fit together, and make clear to residents which part the conversation is about.' },
  i23: { title: 'Go/no-go moment',
         short: 'Building in an explicit decision point in advance, at which it is decided whether the process continues as planned, is adjusted or stops.',
         when: 'When the schedule is optimistic and it is uncertain whether there is enough time for a careful process.',
         example: 'At the start, a project team agrees to decide again after the first residents’ meeting: continue as planned, take more time, or adjust the scope.',
         watch: 'A go/no-go without a real “no” is a sham. Agree in advance on what basis you will decide, and who decides.' },
  i24: { title: 'Pressure-cooker session',
         short: 'An intensive working session in which the project team and experts go through all the outcomes together and produce scenarios or design proposals on the spot.',
         when: 'When there are a lot of outcomes, but little time to process them carefully.',
         example: 'An afternoon in which the project team, designer and a traffic specialist go through the results of a survey and neighbourhood conversations and immediately sketch two options for the redesign.',
         watch: 'Preparation is everything: who needs to be there, what needs to be on the table, and what should you walk away with?' },
  i25: { title: 'Finding a key figure',
         short: 'Finding someone who knows the history of the place and of earlier participation — and bringing them into the process.',
         when: 'When you step into an area with a history you don’t know yourself.',
         example: 'A community worker who has worked in the neighbourhood for years and explains what was promised and went wrong in earlier processes — after which that history is given a place in the participation plan.',
         watch: 'One key figure is one perspective. Check the story with others.' },

  // ----- VERHALEN / STORIES -----
  c1: { location: 'Vreeswijkpad, Amsterdam-Zuidoost',
        title: 'A management cooperative as a new form of social housing',
        summary: 'During the renewal of a school cluster, the municipality let new social rental homes to members of a management cooperative that was yet to be founded. When housing association Rochdale needed more time to form that cooperative, fear of a legal precedent threatened to derail the experiment.',
        full: 'During earlier consultation, local residents had voiced concerns about additional social housing in a neighbourhood that already had a high concentration of it. The project manager at Land & Development (G&O) came up with a creative plan together with the Self-Build Team: let the new homes to members of a management cooperative who would take responsibility for the building themselves. Engaged residents would cause less nuisance — and it would also be an experiment with a new form of participation.\n\nHousing association Rochdale won the tender with this condition and, from 2022 onwards, selected six groups of residents together with co-creation agency Open Kaart. Their involvement led to unusual design choices, such as a shared workshop for all residents and cluster homes for groups living together. When the exclusivity period expired in 2025, Rochdale could not finish in time because of the complexity of the cooperative, and asked for an extension.\n\nA lawyer from Legal Affairs was initially unwilling to support this, fearing it would set a precedent for other developers. The project manager raised the matter with his senior project manager: “It would be a huge waste if you’ve asked a housing association to do something very difficult, they commit to it fully, and it falls apart at the last moment.” They submitted a request to the director of G&O, arguing that the municipality itself had misjudged the time needed for this unique experiment. While that memo was being prepared, the lawyer did find room in the contract to support the extension after all. In May 2026, construction of the Vreeswijkpad complex began.' },

  c2: { location: 'Joris Ivensplein, Nijmegen',
        title: 'The policy stack as a lever for an integrated approach',
        summary: 'A brief to talk with residents only about removing parking spaces turned out to be too narrow for a square with many underlying problems. Mapping all the policy tasks created room for a much broader conversation.',
        full: 'Joris Ivensplein lies on the edge of Nijmegen’s city centre, wedged between a city park that feels unsafe at night, a street-prostitution zone and a busy through road. A renovation in 2017 had done little to reduce the nuisance, and in 2022 the city council adopted a motion to take a fresh look at social safety. Around that time, the planner involved was tasked — in line with the executive’s ambitions — with preparing the removal of parking spaces and discussing this with residents.\n\nThe planner soon saw that a conversation about parking alone made little sense: he would mostly have bad news for residents, while many other issues were at play around the square. Together with the project manager, he therefore mapped all the relevant policy — a hefty stack, spread across departments, from underground cables to area development, parking, social safety and green space. With this “policy stack” under their arm, they held headstrong conversations across departmental silos to build internal support for an integrated approach.\n\nThey then advised the executive to widen the scope to the whole area, including Kronenburgerpark and the street-prostitution zone. This created room for trade-offs that made a meaningful conversation with residents possible. When the planner’s assignment ended, the project manager was able to continue with that broader mandate: the kick-off — a survey in early 2025 — drew more than 400 responses, and over a hundred residents wanted to stay actively involved in what followed.' },

  c3: { location: 'Centrum-Noord, The Hague',
        title: 'Co-production with residents and business owners',
        summary: 'In an area with many outspoken interests, residents and business owners themselves developed a package of mobility measures, within clear frameworks set by the municipality.',
        full: 'Following an initiative proposal by the Haagse Stadspartij in 2016, the executive commissioned in 2018 that measures to improve air quality and liveability in the northern city centre be developed in co-production with residents’ and business groups. Even before that decision, the project leader had talked extensively with stakeholders in the area and concluded that a strongly participatory approach had the best chance of success — an unusual choice for a project of this size in The Hague.\n\nWorking groups of residents and business owners developed solutions themselves, which the municipality then assessed for feasibility. They were, however, given clear frameworks: a 15% reduction in traffic volume, and a budget of 10 million euros. Not all colleagues were immediately convinced — some would rather have come up with solutions themselves — but because the executive’s decision was already in place, it was relatively easy to bring them on board.\n\nIt also helped that the budget sat in a “very generally labelled” pot from the outset, rather than having to come out of existing budgets. The contracted specialists from the departments involved did change regularly, though — mobility experts were often hired for a year or two. Each time, it took time to bring new colleagues up to speed, but it also had an upside: any resistance to the approach rarely lasted long.' },

  c4: { location: 'Poortgebouw, Amsterdam-Zuidoost',
        title: 'A coalition that kept the Poortgebouw for the neighbourhood',
        summary: 'When a striking, long-vacant building in Reigersbos suddenly became available to rent, a coalition built earlier with the neighbourhood proved strong enough to establish community facilities there.',
        full: 'In Reigersbos, a neighbourhood on the edge of Amsterdam-Zuidoost, the construction of 700 new homes also freed up funds for community facilities. Instead of the usual approach — the municipality decides according to fixed standards and outsources — the district’s social project leader saw opportunities to shape this together with the neighbourhood. He brought local initiatives together, including the Residents’ Platform, cultural hub De Kazerne and the Neighbourhood Team, in the Core Group for Community Facilities.\n\nWhen the Poortgebouw, vacant for years, was unexpectedly acquired in early 2024 by property company Hoorne, which was looking for tenants quickly, things suddenly had to move fast. Contract holders in the social domain were initially unwilling to fund the unusual rental arrangement, and Hoorne in turn saw nothing in a patchwork of different head tenants.\n\nThe project leader escalated to higher levels of management and, together with the district director and an area-development project manager, sought an arrangement in which the municipality itself became head tenant and bore the financial risk. He also linked the Poortgebouw to an ongoing “Roadshow” by the Municipal Real Estate department, which was keen to become more active in Zuidoost — a bull’s-eye. The department came on board and negotiated sharply while preserving the Core Group’s community vision. Since January 2025, the Neighbourhood Team and the Reigers platform, among others, have been based in the building.' },

  // ----- REFLECTIEVRAGEN / REFLECTION QUESTIONS -----
  q1: { text: 'What is at play in your task — which interests clash, and for whom?' },
  q2: { text: 'What room do you have now, and what room do you expect to need to do justice to the outcomes?' },
  q3: { text: 'What stands most in the way of the intended result — and what pattern do you recognise in it?' },

};


// =============================================================
// VASTE PAGINATEKSTEN (data-i18n="...")
// =============================================================

const staticEN = {

  logo: `<span class="logo-mark"></span>Room for participation`,
  sub: `A conversation aid for anticipating the embedding of participation — so that residents’ input genuinely finds a place in policy and decision-making later on.`,
  hint: `Choose a card set below. Each set works on its own — the links take you from values to tensions and interventions, with the stories as the foundation.`,
  'btn-handleiding': `<span class="hl-badge">?</span> Guide`,
  'btn-begrippen': `<span class="hl-badge">G</span> Glossary`,
  'btn-verhalen': `<span class="hl-badge">S</span> Stories`,
  'mb-waarden': `Values`,
  'mb-spanningen': `Tensions`,
  'mb-interventies': `Interventions`,

  'waarden-title': `Values <span class="em">as building blocks</span>`,
  'waarden-lead': `Which values matter most in this participation process? Select the values that are central.`,
  'f-alle': `All`,
  'waarden-hint': `Click a value to see the tensions it plays a part in`,

  'spanningen-title': `Tensions <span class="em">in practice</span>`,
  'spanningen-lead': `Which tensions between these values do you foresee?`,
  'f-fase': `Phase`,
  'f-aanloop': `Preparation`,
  'f-doorloop': `Engagement`,
  'f-afloop': `Follow-up`,
  'spanningen-hint': `Click a tension to see the clashing values, interventions and stories`,

  'interventies-title': `Interventions <span class="em">for practice</span>`,
  'interventies-lead': `Which interventions appeal to you?`,
  'f-strategie': `Strategy`,
  'f-mediating': `Mediating`,
  'f-puzzling': `Puzzling`,
  'f-powering': `Powering`,
  'interventies-hint': `Click an intervention for an explanation, linked tensions and stories`,

  'verhalen-title': `Stories <span class="em">from practice</span>`,
  'verhalen-lead': `The foundation of the tool: practice cases to which the tensions and interventions are linked. Source and inspiration — you will mostly arrive here via the links in the cards, but you can also browse the stories on their own.`,

  'handleiding-title': `Guide <span class="em">for the coach</span>`,
  'handleiding-lead': `How do you use this tool in a coaching session?`,

  'handleiding-body': `
    <div class="hl-step">
      <div class="hl-step-num">01</div>
      <h3>What is this?</h3>
      <p>When we ask citizens to think along with us, we also need room to do something with their ideas. But that embedding space often turns out to be limited after the fact, and as a result too little is done with the outcomes of participation processes. So when we organise participation, we need to ensure not only a good process, but also that this embedding space exists.</p>
      <p>Yet it is inherent to participation that we don’t know exactly what residents will tell us – if we did, we wouldn’t need to ask them. That is why it is important to anticipate residents’ possible input. What embedding space would be needed to give that input a place? And how can we create that space?</p>
      <p><strong>Room for Participation</strong> was developed to have this conversation. With the tool you can explore which <button class="ilink m-waarden" onclick="switchModule('waarden')">values</button> matter to the municipality and to residents, which <button class="ilink m-spanningen" onclick="switchModule('spanningen')">tensions</button> can be expected, and which <button class="ilink m-interventies" onclick="switchModule('interventies')">interventions</button> can help to create room. The tool is fed by <button class="ilink m-verhalen" onclick="switchModule('verhalen')">stories</button> from practice, and leads you naturally to the <button class="ilink m-verhalen" onclick="switchModule('verhalen')">stories</button> in which you can find inspiration for your project.</p>
      <p>The tool is designed for one coach and one or more participants.</p>
      <ul>
        <li>Intended as a <strong>conversation aid</strong> in discussions about embedding participation.</li>
        <li><strong>Modular.</strong> The three modules – <button class="ilink m-waarden" onclick="switchModule('waarden')">values</button>, <button class="ilink m-spanningen" onclick="switchModule('spanningen')">tensions</button> and <button class="ilink m-interventies" onclick="switchModule('interventies')">interventions</button> – are linked to one another, but can also be used separately for shorter sessions. The <button class="ilink m-verhalen" onclick="switchModule('verhalen')">stories</button> form the foundation to which tensions and interventions are linked.</li>
        <li><strong>Online and physical.</strong> The physical component consists of a card deck per module, with the story cards as the foundation. During a session, participants and coach can work with these together. The online component is this site. During a session, the coach can use it as a reference. Afterwards, a participant can use it to explore further or to read relevant case stories.</li>
      </ul>

      <div class="hl-sub">The three modules</div>
      <div class="flow" role="group" aria-label="The three modules">
        <button class="flow-step fs-waarden" onclick="switchModule('waarden')">
          <span class="fs-num">01</span>
          <span class="fs-title">Values</span>
          <span class="fs-q">Which values matter most?</span>
        </button>
        <div class="flow-link" aria-hidden="true"><span class="fl-label">clash into</span><svg viewBox="0 0 40 12"><path d="M0 6 H36 M30 1 L36 6 L30 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <button class="flow-step fs-spanningen" onclick="switchModule('spanningen')">
          <span class="fs-num">02</span>
          <span class="fs-title">Tensions</span>
          <span class="fs-q">Which tensions between these values do you foresee?</span>
        </button>
        <div class="flow-link" aria-hidden="true"><span class="fl-label">call for</span><svg viewBox="0 0 40 12"><path d="M0 6 H36 M30 1 L36 6 L30 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <button class="flow-step fs-interventies" onclick="switchModule('interventies')">
          <span class="fs-num">03</span>
          <span class="fs-title">Interventions</span>
          <span class="fs-q">Which interventions appeal to you?</span>
        </button>
        <div class="flow-link" aria-hidden="true"><span class="fl-label">lead to</span><svg viewBox="0 0 40 12"><path d="M0 6 H36 M30 1 L36 6 L30 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="flow-step fs-leer flow-end">
          <span class="fs-num">↳</span>
          <span class="fs-title">Learning questions</span>
          <span class="fs-q">What do you want to explore further?</span>
        </div>
      </div>
      <div class="flow-base">
        <button class="flow-base-card" onclick="switchModule('verhalen')">
          <span class="fb-eyebrow">Foundation</span>
          <span class="fb-title">Stories</span>
          <span class="fb-q">Practice cases to which the tensions and interventions are linked — source and inspiration.</span>
        </button>
      </div>
      <p class="flow-note">You can start with any module; each module also works on its own. The stories lie underneath as a source.</p>
    </div>

    <div class="hl-step">
      <div class="hl-step-num">02</div>
      <h3>How does it work?</h3>
      <p>You start from a concrete project. Often there is already a participation plan; that forms the starting point of the conversation. <strong>Room for Participation</strong> complements it: where the plan describes the process, this tool helps you look ahead to what is needed to give the outcomes of that process a place later on.</p>
      <p>You don’t have to start at the beginning. It usually helps to explore which <button class="ilink m-waarden" onclick="switchModule('waarden')">values</button> are at play — for the municipality and for residents — and where they clash. Such a clash is a <button class="ilink m-spanningen" onclick="switchModule('spanningen')">tension</button>. Click a <button class="ilink m-spanningen" onclick="switchModule('spanningen')">tension</button> and the tool immediately shows which <button class="ilink m-waarden" onclick="switchModule('waarden')">values</button> underlie it, which <button class="ilink m-interventies" onclick="switchModule('interventies')">interventions</button> can help, and in which <button class="ilink m-verhalen" onclick="switchModule('verhalen')">stories</button> you can see something similar.</p>
      <p>Every <button class="ilink m-spanningen" onclick="switchModule('spanningen')">tension</button> and <button class="ilink m-interventies" onclick="switchModule('interventies')">intervention</button> belongs to a phase: preparation, engagement or follow-up. This lets you anticipate together — where in the process does this play out, and what can you do right now to make room for it?</p>
      <p>The tool doesn’t prescribe a route. You decide what suits the conversation and the time available — one card deck as a <span data-nogloss>short intervention</span>, or the three modules one after another. And you don’t finish with a solved problem, but with curiosity: what do you want to find out more about, and what can you already set in motion?</p>

      <div class="hl-sub">In a session — how to go about it</div>
      <p class="hl-note">Allow about half an hour per module.</p>
      <ol class="hl-do">
        <li><strong>Read the project’s participation plan beforehand</strong>, so you know what is going on.</li>
        <li><strong>Open a module</strong> that suits the conversation — usually <button class="ilink m-waarden" onclick="switchModule('waarden')">Values</button> or <button class="ilink m-spanningen" onclick="switchModule('spanningen')">Tensions</button>.</li>
        <li><strong>Together, choose a few <button class="ilink m-spanningen" onclick="switchModule('spanningen')">tensions</button></strong> that are recognisable for this project. Filter by phase (preparation, engagement, follow-up) to focus.</li>
        <li><strong>Click a <button class="ilink m-spanningen" onclick="switchModule('spanningen')">tension</button></strong> to see the clashing <button class="ilink m-waarden" onclick="switchModule('waarden')">values</button>, possible <button class="ilink m-interventies" onclick="switchModule('interventies')">interventions</button> and related <button class="ilink m-verhalen" onclick="switchModule('verhalen')">stories</button>.</li>
        <li><strong>For each <button class="ilink m-spanningen" onclick="switchModule('spanningen')">tension</button>, discuss:</strong> which <button class="ilink m-interventies" onclick="switchModule('interventies')">intervention</button> fits here, and in which phase? What can you do right now to make room?</li>
        <li><strong>Close with curiosity:</strong> what does the participant want to explore further or already set in motion?</li>
      </ol>
    </div>`,

  'begrippen-title': `Glossary <span class="em">for this tool</span>`,
  'begrippen-lead': `What do we mean by the terms that come up in the tool?`,

  'begrippen-body': `
    <div class="gl-group c-kern">
      <div class="gl-group-label">What it is about</div>
      <div class="gl-group-intro">The concepts the tool revolves around: embedding the outcomes of participation, and the room this requires.</div>
      <details class="gl-term" id="gl-inbedding">
        <summary>Embedding</summary>
        <div class="gl-def">The work required to anchor the (expected) outcome of a participation process in policy and decision-making.</div>
      </details>
      <details class="gl-term" id="gl-inbeddingsruimte">
        <summary>Embedding space</summary>
        <div class="gl-def">The available and expected opportunities to embed the outcomes of participation.</div>
      </details>
      <details class="gl-term" id="gl-participatie">
        <summary>Participation</summary>
        <div class="gl-def">Participation is a process in which individuals, groups and organisations exert influence on, and share control over, collective issues, decisions or services that affect them.<span class="gl-source"><a href="https://kennisknooppuntparticipatie.nl/themas/definitie-van-participatie" target="_blank" rel="noopener">Source: Kennisknooppunt Participatie (in Dutch) ↗</a></span></div>
      </details>
    </div>

    <div class="gl-group c-werk">
      <div class="gl-group-label">What you work with</div>
      <div class="gl-group-intro">The three building blocks you work with: values clash into tensions, and tensions call for interventions.</div>
      <details class="gl-term" id="gl-waarden">
        <summary>Values</summary>
        <div class="gl-def">What you want to achieve with the participation process: the interests and motivations that are central, seen from the perspective of residents, the municipality or both. Values are the building blocks — by naming them upfront, you can see where tensions are to be expected.<span class="gl-muse">Often several values matter within a single process, and they are not necessarily compatible.</span><a class="gl-golink m-waarden" onclick="switchModule('waarden')">Open the Values card set →</a></div>
      </details>
      <details class="gl-term" id="gl-spanningen">
        <summary>Tensions</summary>
        <div class="gl-def">What can arise where two values clash, for example a value held by residents against one held by the municipality. A tension is not a standalone item, but the friction between two things that both matter.<span class="gl-muse">These tensions are challenges in a process, but also important clues: they tell you where the existing embedding space may not match what residents consider important. That way you can anticipate them in advance.</span><a class="gl-golink m-spanningen" onclick="switchModule('spanningen')">Open the Tensions card set →</a></div>
      </details>
      <details class="gl-term" id="gl-interventies">
        <summary>Interventions</summary>
        <div class="gl-def">What you can do to deal with an (expected) tension. Not a prescription, but a step that professionals in similar projects have actually taken — one that helps you look ahead to what is needed to create room. Organised by the strategy behind it (mediating, puzzling or powering) and the phase in which it plays out.<a class="gl-golink m-interventies" onclick="switchModule('interventies')">Open the Interventions card set →</a></div>
      </details>
    </div>

    <div class="gl-group c-strat">
      <div class="gl-group-label">Strategies for making room</div>
      <div class="gl-group-intro">We distinguish three kinds of strategy you can use to create embedding space: mediating, puzzling and powering. Each intervention falls under one of these strategies.</div>
      <details class="gl-term" id="gl-afstemmen">
        <summary>Mediating</summary>
        <div class="gl-def">Making room through relationships: building trust and shared meaning early on, and bringing parties together around a shared interest.</div>
      </details>
      <details class="gl-term" id="gl-verbinden">
        <summary>Puzzling</summary>
        <div class="gl-def">Making room by thinking ahead: reframing outcomes and linking them to upcoming policy opportunities and windows, so that you stay ahead of barriers.</div>
      </details>
      <details class="gl-term" id="gl-doorzetten">
        <summary>Powering</summary>
        <div class="gl-def">Making room through formal power or position: escalating in time, making a decisive call or breaking through a barrier, so that an expected outcome will have a place.</div>
      </details>
      <div class="gl-source gl-group-source"><a href="https://doi.org/10.1080/03003930.2018.1546172" target="_blank" rel="noopener">Source: Nederhand, Van der Steen &amp; Van Twist (2018), Local Government Studies ↗</a></div>
    </div>

    <div class="gl-group c-fase">
      <div class="gl-group-label">Phases in the process</div>
      <div class="gl-group-intro">When does something play out? Each tension and intervention belongs to one or more phases of the participation process.</div>
      <details class="gl-term" id="gl-fasen">
        <summary>Preparation, engagement and follow-up</summary>
        <div class="gl-def">The phases of a participation process. <strong>Preparation</strong> is the phase before the (planned) interactions with residents begin, <strong>engagement</strong> is during those interactions, and <strong>follow-up</strong> is after they have ended and the outcomes need to be processed.<span class="gl-source"><a href="https://kennisknooppuntparticipatie.nl/publicaties/competentie-overzichten" target="_blank" rel="noopener">Source: Kennisknooppunt Participatie (in Dutch) ↗</a></span><span class="gl-muse">In many processes these phases are not easy to separate: processing outcomes often already begins during engagement, for example, or some exploratory conversations already take place during preparation. Moreover, projects often go through several cycles of preparation, engagement and follow-up, for instance in the different stages of a planning process.</span></div>
      </details>
    </div>`,

  footer: `Room for participation · Coach tool · Preview version · Made for reflection and conversation`,

};
