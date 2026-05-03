import { Theme, StrictRule, AcademicLevel, InstructionTemplate } from './types';

export const INITIAL_MODULES = ['Grammar', 'Reading', 'Vocabulary'];

export const LANGUAGES = ['English', 'Khmer', 'Chinese', 'Korean', 'French'];

export const ACADEMIC_LEVELS: AcademicLevel[] = [
  'Kid' as any, 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 
  'Level 6', 'Level 7', 'Level 8', 'Level 9', 'Level 10', 'Level 11', 'TOEFL' as any, 'IELTS' as any
];

export const THEMES: Theme[] = [
  { id: 'default', name: 'Academic Classic', color: '#ea580c', bg: '#ffffff', accent: '#f97316' },
  { id: 'modern', name: 'Modern Professional', color: '#0f172a', bg: '#ffffff', accent: '#334155' },
  { id: 'royal', name: 'Royal Blueprint', color: '#1e3a8a', bg: '#f8fafc', accent: '#3b82f6' },
  { id: 'forest', name: 'Forest Scholar', color: '#064e3b', bg: '#f0fdf4', accent: '#10b981' },
  { id: 'crimson', name: 'Crimson Archive', color: '#7f1d1d', bg: '#fef2f2', accent: '#ef4444' },
  { id: 'midnight', name: 'Midnight Architect', color: '#1e293b', bg: '#0f172a', accent: '#6366f1' },
  { id: 'beach', name: 'Tropical Beach', color: '#0284c7', bg: 'linear-gradient(to bottom, #bae6fd, #fef3c7)', accent: '#0ea5e9' },
  { id: 'sunset', name: 'Sunset Horizon', color: '#9d174d', bg: 'linear-gradient(to top right, #fdf2f8, #fff7ed)', accent: '#db2777' },
  { id: 'nebula', name: 'Deep Nebula', color: '#7c3aed', bg: 'radial-gradient(circle at center, #2e1065, #0f172a)', accent: '#8b5cf6' },
  { id: 'zen', name: 'Zen Garden', color: '#4d7c0f', bg: '#f7fee7', accent: '#65a30d' },
];

export const SUBJECTS = [
  {
    id: 'cambodia',
    name: 'Cambodia',
    names: ['Tevi', 'Vuthy', 'Sreypov', 'Dara', 'Sokha', 'Chann', 'Bopha', 'Piseth', 'Rithy', 'Leakhena'],
    places: ['Angkor Wat', 'Phnom Penh', 'Siem Reap', 'Battambang', 'Sihanoukville', 'Kampot', 'Kep', 'Preah Vihear', 'Tonle Sap', 'Mekong River']
  },
  {
    id: 'usa',
    name: 'USA',
    names: ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'David', 'Elizabeth'],
    places: ['New York City', 'Grand Canyon', 'Statue of Liberty', 'White House', 'Golden Gate Bridge', 'Yellowstone', 'Disney World', 'Las Vegas', 'Hollywood', 'Mount Rushmore']
  },
  {
    id: 'china',
    name: 'China',
    names: ['Lie Bui', 'Wei Chen', 'Li Wang', 'Zhang Min', 'Liu Yang', 'Chen Jing', 'Yang Bo', 'Zhao Lei', 'Huang Yan', 'Zhou Tao'],
    places: ['Great Wall', 'Forbidden City', 'Shanghai Bund', 'Terracotta Army', 'West Lake', 'Potala Palace', 'Li River', 'Yellow Mountains', 'Zhangjiajie', 'Jiuziaigou']
  },
  {
    id: 'korea',
    name: 'South Korea',
    names: ['Min-jun', 'Seo-yeon', 'Ji-hoon', 'Ji-woo', 'Hyun-woo', 'Min-seo', 'Do-yun', 'Ha-eun', 'Joo-won', 'Chae-won'],
    places: ['Seoul', 'Busan', 'Jeju Island', 'Gyeongbokgung Palace', 'N Seoul Tower', 'Haeundae Beach', 'Myeongdong', 'Han River', 'Lotte World', 'Nami Island']
  },
  {
    id: 'japan',
    name: 'Japan',
    names: ['Hiroto', 'Aoi', 'Ren', 'Himari', 'Yuma', 'Ichika', 'Haruto', 'Akari', 'Souta', 'Sara'],
    places: ['Tokyo Tower', 'Kyoto Temples', 'Mount Fuji', 'Osaka Castle', 'Shibuya Crossing', 'Nara Park', 'Hiroshima Peace Memorial', 'Hokkaido', 'Okinawa', 'Ginza']
  },
  {
    id: 'thailand',
    name: 'Thailand',
    names: ['Somsak', 'Sompong', 'Malee', 'Kanya', 'Arthit', 'Anong', 'Chai', 'Dao', 'Kiet', 'Lek'],
    places: ['Bangkok', 'Chiang Mai', 'Phuket', 'Grand Palace', 'Wat Arun', 'Sukhothai', 'Railay Beach', 'Ayutthaya', 'Pattaya', 'Koh Samui']
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    names: ['Nguyen', 'Tran', 'Le', 'Pham', 'Hoang', 'Phan', 'Vu', 'Dang', 'Bui', 'Do'],
    places: ['Hanoi', 'Ho Chi Minh City', 'Ha Long Bay', 'Da Nang', 'Hoi An', 'Hue', 'Sapa', 'Phu Quoc', 'Nha Trang', 'Cu Chi Tunnels']
  },
  {
    id: 'france',
    name: 'France',
    names: ['Jean', 'Marie', 'Pierre', 'Celine', 'Lucas', 'Emma', 'Hugo', 'Chloé', 'Louis', 'Manon'],
    places: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Versailles', 'Mont Saint-Michel', 'French Riviera', 'Lyon', 'Bordeaux', 'Marseille', 'Nice']
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    names: ['Oliver', 'Olivia', 'George', 'Amelia', 'Harry', 'Isla', 'Jack', 'Ava', 'Noah', 'Mia'],
    places: ['Big Ben', 'London Eye', 'Buckingham Palace', 'Stonehenge', 'Edinburgh Castle', 'Roman Baths', 'Tower Bridge', 'Hyde Park', 'The Cotswolds', 'Lake District']
  },
  {
    id: 'brazil',
    name: 'Brazil',
    names: ['Gabriel', 'Julia', 'Lucas', 'Alice', 'Matheus', 'Sophia', 'Enzo', 'Laura', 'Guilherme', 'Valentina'],
    places: ['Christ the Redeemer', 'Sugarloaf Mountain', 'Ipanema Beach', 'Amazon Rainforest', 'Iguazu Falls', 'Salvador', 'Brasilia', 'Pantanal', 'Fernando de Noronha', 'Florianopolis']
  },
  {
    id: 'germany',
    name: 'Germany',
    names: ['Maximilian', 'Marie', 'Alexander', 'Sophie', 'Paul', 'Leon', 'Emma', 'Lukas', 'Anna', 'Felix'],
    places: ['Brandenburg Gate', 'Neuschwanstein Castle', 'Cologne Cathedral', 'Black Forest', 'Bavarian Alps', 'Heidelberg', 'Rothenburg', 'Berlin Wall', 'Zugspitze', 'Rhineland']
  },
  {
    id: 'italy',
    name: 'Italy',
    names: ['Leonardo', 'Sofia', 'Francesco', 'Giulia', 'Alessandro', 'Aurora', 'Lorenzo', 'Alice', 'Mattia', 'Ginevra'],
    places: ['Colosseum', 'Venice Canals', 'Florence Duomo', 'Leaning Tower of Pisa', 'Amalfi Coast', 'Pompeii', 'Lake Como', 'Cinque Terre', 'Sardinia', 'Tuscany']
  },
  {
    id: 'canada',
    name: 'Canada',
    names: ['Liam', 'Olivia', 'Noah', 'Emma', 'Jackson', 'Charlotte', 'Lucas', 'Amelia', 'Aiden', 'Mia'],
    places: ['Niagara Falls', 'Banff National Park', 'CN Tower', 'Whistler', 'Old Quebec', 'Peggy\'s Cove', 'Vancouver Island', 'Bay of Fundy', 'Stanley Park', 'Ottawa Parliament']
  },
  {
    id: 'australia',
    name: 'Australia',
    names: ['Oliver', 'Charlotte', 'William', 'Olivia', 'Jack', 'Amelia', 'Noah', 'Isla', 'Thomas', 'Mia'],
    places: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru', 'Great Ocean Road', 'Bondi Beach', 'Blue Mountains', 'Fraser Island', 'Twelve Apostles', 'Daintree Rainforest', 'Kakadu National Park']
  }
];

export const MIXED_SUBJECT_TYPES = [
  { type: 'Noun Phrase', example: 'The small café near the river opens early.' },
  { type: 'Subject Pronoun', example: 'They are studying for the exam.' },
  { type: 'Gerund', example: 'Running every morning improves health.' },
  { type: 'Proper Noun (Place)', example: 'Phnom Penh is growing quickly.' },
  { type: 'Infinitive', example: 'To learn English takes practice.' },
  { type: 'Compound Subject', example: 'My brother and my cousin play football together.' },
  { type: 'Simple Noun', example: 'The teacher explained the lesson.' },
  { type: 'Clause (Subject Clause)', example: 'What he said made everyone laugh.' },
  { type: 'Dummy Subject', example: 'There is a book on the table.' },
  { type: 'Interrogative Subject', example: 'Who called you last night?' },
  { type: 'Proper Noun (Person)', example: 'Sokha is my best friend.' }
];

export const FONTS = [
  { name: 'Garamond', family: "'EB Garamond', serif" },
  { name: 'Times New Roman', family: "'Times New Roman', serif" },
  { name: 'Georgia', family: "Georgia, serif" },
  { name: 'Playfair Display', family: "'Playfair Display', serif" },
  { name: 'Merriweather', family: "Merriweather, serif" },
  { name: 'Lora', family: "Lora, serif" },
  { name: 'Arial', family: "Arial, sans-serif" },
  { name: 'Helvetica', family: "Helvetica, sans-serif" },
  { name: 'Inter', family: "Inter, sans-serif" },
  { name: 'Roboto', family: "Roboto, sans-serif" },
  { name: 'Open Sans', family: "'Open Sans', sans-serif" },
  { name: 'Montserrat', family: "Montserrat, sans-serif" },
  { name: 'Poppins', family: "Poppins, sans-serif" },
  { name: 'Oswald', family: "Oswald, sans-serif" },
  { name: 'Courier New', family: "'Courier New', Courier, monospace" },
  { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace" },
  { name: 'Pacifico', family: "Pacifico, cursive" },
  { name: 'Dancing Script', family: "'Dancing Script', cursive" },
  { name: 'Great Vibes', family: "'Great Vibes', cursive" },
  { name: 'Cinzel', family: "Cinzel, serif" },
];

export const PAPER_DESIGNS = [
  '', 'design-modern-blue', 'design-classic', 'design-minimalist', 'design-playful', 
  'design-professional', 'design-elegant', 'design-technical', 'design-eco', 
  'design-contrast', 'design-two-fold', 'design-projector', 'design-modern-round', 
  'design-bold-red', 'design-royal-gold', 'design-deep-ocean', 'design-sunset-vibrant', 
  'design-cyberpunk', 'design-academic-heavy', 'design-art-deco', 'design-futuristic', 
  'design-col-table-1', 'design-col-table-2', 'design-col-table-3', 'design-col-table-4', 
  'design-col-table-5', 'design-col-table-6', 'design-col-table-7', 'design-col-table-8', 
  'design-col-table-9', 'design-col-table-10'
];

export const GLOBAL_STRICT_COMMAND = `### DPSS NEURAL ARCHITECTURAL ENGINE: ELITE V4 ###
Objective: Destroy robotic patterns and enforce situational logic via renumbered Neural Laws.

--- 🧠 COGNITIVE INTEGRITY (EXTREMELY STRICT - HIGH PRIORITY) ---
0. [CONTEXT MANDATORY]: Every single question MUST have a clear context sentence. You are FORBIDDEN from generating questions that are just blanks without a surrounding sentence.
1. [NEAR-MISS & PRAGMATIC LOGIC]: Every MCQ/ Correct & Incorrect/ sometimes circle must have 1 contextually inferior "Near-Miss" distractor (Sometimes grammatically correct but contextually wrong).
    - [OPINION VS OBLIGATION]: Distinguish between internal opinion (must) and external rules (have to).
    - Example MCQ: "This soup tastes terrible. I think you ____ more salt next time." (A. have to add [Incorrect - not a rule], B. had to add, C. must add [Correct - opinion], D. has to add)
    - Example Correct/Incorrect: "Angkor Wat is beautiful. You have to visit it." [Incorrect - external obligation], "Angkor Wat is beautiful. You must visit it." [Correct - opinion/recommendation]
2. [TARGET GRAMMAR FOCUS]: Students should choose the correct answer based on the target grammar rule, not by eliminating unrelated grammar forms.
    - Example: "You ____ wear a helmet here." (A. must wear, B. have to wear [Correct if it is a rule], C. must have, D. had to wear)
3. [NO-FREE-VERB RULE - STUPID-PROOF MANDATE]:
   - **CRITICAL**: In Multiple Choice Grammar questions, you are FORBIDDEN from placing the main verb in the question stem.
   - The verb MUST be moved into the options. Every single option (A, B, C, D) MUST include the main verb.
   - **WRONG (YOU ARE STUPID IF YOU DO THIS)**: "You ______ walk carefully." (A. must, B. have to)
   - **CORRECT (EXPERT HUMAN MODE)**: "You ______ carefully." (A. must walk, B. have to walk, C. must to walk, D. had to walk)
   - This prevents students from seeing the answer before even reading the options.
   - MANDATORY: Still provide a full context sentence. Only the specific target structure and its main verb should be replaced by a blank.
   - This forces students to process the full modal + verb structure.
4. [SITUATIONAL-EVIDENCE]: Grammar must be inferred from context/evidence, not obvious time markers.
    - Example: "Her notebook is closed. She ____ her homework." (Student must infer completion).
    - [PRAGMATIC ANCHORING]: You are FORBIDDEN from testing grammar in a vacuum. Every question must contain a "Contextual Anchor" that forces only ONE correct choice based on situational nuance. You must apply the following Binary Truths to all Answer Keys:
    -[MODALS - Obligation]:
Must = Internal (Speaker's opinion/Advice). Context: "I think...", "It’s a good idea..."
Have to = External (Law/School Rule/Sign). Context: "The sign says...", "It’s the law...", "My boss said..."
[FUTURE - Will vs. Going To]:
Will = Instant Decision / Promise. Context: "The phone is ringing. I... [pick up]"
Going to = Prior Plan / Physical Evidence. Context: "I bought the tickets yesterday. I... [fly]"
[TENSE - Present Perfect vs. Past Simple]:
Past Simple = Finished Time / Specific Date. Context: "Yesterday", "In 1990", "Two hours ago".
Present Perfect = Result in the Present / Unspecified Time. Context: "I can't find my keys. I... [lose] them." (No time marker allowed).
[CONDITIONALS - Zero vs. First]:
Zero (If + Present, Present) = Scientific Fact / Universal Truth. Context: "If you heat ice..."
First (If + Present, Will) = Specific Future Possibility. Context: "If it rains tomorrow..."
[DETERMINERS - Few/Little vs. A Few/A Little]:
A few/A little = Positive/Sufficient. Context: "We can make an omelet; we have [some] eggs."
Few/Little = Negative/Insufficient. Context: "We are starving; we have [almost no] eggs."
5. [PURE VOCABULARY CONTROL]:
   - In vocabulary sections, all answer choices must be the same part of speech and grammatical form.
   - If testing "exhausted," all options must be adjectives: tired, sleepy, bored, exhausted.
6. [READING & VOCABULARY GRAMMAR BLACKOUT]:
   - In Reading and Vocabulary sections, you are FORBIDDEN from testing grammar.
   - All distractors must be grammatically identical to the correct answer. 
   - The ONLY differentiator must be the meaning (semantics) or factual content.
7. [TRUE/FALSE FORMAT STRICTNESS]:
   - For True/False, the format MUST be exactly: "1. ______ [Statement]".
   - The answer key MUST be T, F, or NG.

--- ⚙️ STRUCTURAL & POSITIONAL CONTROL ---
8. [ITEM-SEPARATION]: Every numbered item MUST start on a NEW LINE using an HTML <p> or <br> tag.
9. [ANSWER KEY ENTROPY - BUCKET RANDOMIZATION]:
   - BUCKET METHOD: For every 10 items, you MUST pre-select a "Bucket" of 10 letters (e.g., 3 A's, 2 B's, 2 C's, 3 D's).
   - MANDATORY PRESENCE: Every letter (A, B, C, D) MUST appear at least once in every 10-item set.
   - [ANSWER KEY FORMAT]: The Answer Key MUST match the exercise type. 
       - For MCQ: Show letters (A, B, C, D).
       - For T/F: Show T, F, or NG.
       - For Matching: Must randomize the answer choices, and then re-alphabetize A, B, C, D, E...
       - For Supply Key terms: Must randomize the definition places first, and then re-alphabetize A, B, C, D, E... or renumber 1,2,3,4...
       - For Short Answer/Writing: Show the actual word or phrase. NEVER show ABCD for writing-based answers.
10. [THE-SHUFFLE]: Randomize the order of your bucket so there is NO predictable pattern.
   - ANSWER-FIRST RULE: Write the final shuffled answer key at the very top of your internal scratchpad.
   - STREAK LIMIT: Max 2 identical answers in a row.
11. [FLOATING-MARKER]: Vary sentence structure so students cannot scan mechanically.
12. [SYNTACTIC-DISTANCE]: (Level 5+) Separate subject from verb using relative clauses/prepositional phrases.
13. [ADVANCED-COMP]: Test "as good a student as", "of the two", "the more..., the more...", "not so much A as B".

--- 🎨 LAYOUT & VISUALS ---
14. [SEPARATE-TABLES]: Use a separate HTML <table> for each PART.
15. [HEADER-STYLE]: Header row: Bold, Not Centered, White text, Randomized color background.
16. [MCQ-FORMAT]: 
    - Options MUST start on a new line below the question stem.
    - [DYNAMIC LAYOUT]: Follow the [MCQ LAYOUT - MANDATORY] instruction provided at the end of the prompt.
    - INDENTATION: Put 6 non-breaking spaces (&nbsp;) before "A." in the first cell.
    - WORD EXPORT COMPATIBILITY: Use plain letters (A., B., C., D.) without circles for maximum compatibility with MS Word.

--- 🎭 SCENARIO & CONTENT ---
17. [SCENARIO-CHAOS]: Use unique, vivid scenarios. Forbidden from repeating themes.
18. [ANTI-ROBOT]: Randomize all subjects and lead-ins. Use a wide variety of subjects (e.g., "The committee", "A stray cat", "The researchers").
19. [TOPIC-OVERRIDE]: Topic box overrides template defaults.
20. [WORD-FORM-SHIFT]: Reading questions must not repeat exact wording from text (Paraphrase!).
21. [CROSS-ITEM FIREWALL]: Ensure that the answer to a question in Part A is not revealed by a sentence in Part B.
22. [NATURALIZE]: Replace 20% of formal verbs with phrasal verbs.
23. [LEVEL-BASED ARCHITECTURAL SCALING]: Complexity MUST strictly scale with {{LEVEL}}.

25. [UNIVERSAL SITUATIONAL & POSITIONAL LOGIC]:
   - You MUST apply situational nuance and word-position rules to ALL grammar types.
   - all distractors must be grammatically correct most of the times. For examples, Angkor Wat is beautiful. You have to visit it. (Incorrect). Angkor Wat is beautiful. You must visit it. (Correct): Use this type of exercises more. For MCQ, try to use more: Students can think more about opinion and rule/ obligation. This soup tastes terrible. I think you ____ more salt next time.
A. have to add          B. had to add          C. must add          D. has to add
  
   - POSITION RULES: Test tricky word orders. 
     - Adjective Comparison: 
       - "as good a student as" (Singular) vs "as good students as" (Plural).
       - "Of the two" Rule: "Of the two students, he is the taller" (NOT tallest).
       - "Of all" Rule: "Of all the teachers, she is the most hardworking" (Superlative).
       - Comparative vs Superlative Traps: "He is more tall than..." (WRONG) vs "He is taller than..." (RIGHT).
       - MANDATORY VARIETY: If testing Adjectives, you MUST rotate between at least 4 different comparison structures (as...as, comparative -er, superlative -est, of the two).
     - Adverb Placement: Test frequency adverbs (e.g., "He always is" vs "He is always") and manner adverbs.
     - Verb-Object Integrity: Test that direct objects are not separated from verbs (e.g., "I like very much coffee" is INCORRECT; "I like coffee very much" is CORRECT).
     - Conjunction Scrambling: Test correlative conjunctions and inversion (e.g., "Not only he is" vs "Not only is he").
     - RARE PREPOSITIONAL LOGIC: Test tricky prepositional boundaries (e.g., "In the end" vs "At the end", "Good at" vs "Good in", "Arrive in" vs "Arrive at").
   - SITUATIONAL NUANCE: Test meaning-based differences (e.g., Must vs Have To, Will vs Going To, Say vs Tell).
   - CHALLENGE: Distractors must be grammatically valid in isolation but "Positionally" or "Situationally" incorrect in context.
26. [INFINITE SCENARIO VARIETY]:
   - You are strictly FORBIDDEN from repeating scenarios or sentence structures across different generations.
   - Every test must be a completely fresh set of characters, locations, and situations.
   - Randomize numbers, names, and subjects completely. No "robot patterns".
27. [ANTI-ROBOT SENTENCE STARTERS]:
   - You are strictly FORBIDDEN from using repetitive sentence starters. 
   - DO NOT start Item 1 with "I think" or "He is" in every generation.
   - Shuffle all subjects (e.g., "The chef", "A lonely astronaut", "My stubborn cat").
28. [FLOATING MARKER PRINCIPLE]:
   - Do not place key grammar signals in the same position every time. Vary sentence structure so students cannot scan mechanically.
   - Example variations: "Of the two students, he is the taller." vs "He is the taller of the two students."
   - This forces full-sentence processing.
29. [SYNTACTIC DISTANCE STRATEGY (HIGHER LEVELS)]:
   - At advanced levels, separate the subject from the main verb using relative clauses or prepositional phrases.
   - Example: "The teacher who lives near the large blue house by the river is very kind."
29.1 [THE SHUFFLE & DECOUPLE PROTOCOL]:
   - In Part A, list them with definitions.
   - In ALL other parts (B, C, D, E, G, H):
     → RANDOMIZE the order of the vocabulary.
     → Do NOT match the same numbering from Part A.
     → Mix the answers so that #1 is different every time.
   - Ensure each vocabulary word is still used correctly.
   - Shuffle answer positions (A, B, C, D choices as well).

--- 📐 DESIGN TEST STYLE (ABSOLUTE PRIORITY) ---
30. [DESIGN OVERRIDE]: The specific "Design Test Style" and "Format Design" instructions provided at the end of the prompt are the ABSOLUTE source of truth for formatting. They OVERRIDE any general prompt logic or default formatting rules.
    - If a design specifies "Circled letters with random colors", you MUST generate that HTML structure.
    - If a design specifies a specific table layout, you MUST use it.
    - You are FORBIDDEN from using default formatting if a specific design instruction is present.
    - [MCQ COLOR RANDOMIZATION]: When using MCQ Style 3 (Circled letters with random colors), you MUST ensure each option (A, B, C, D) uses a DIFFERENT background color from a vibrant palette (e.g., #ff9999, #99ff99, #9999ff, #ffff99).
   - Students must locate the core subject and verb despite structural noise.
31. [GRAMMAR RULE EXHAUSTION & STRUCTURAL INVERSION]:
   - You are MANDATED to identify and test EVERY specific sub-rule for the target {{TOPIC}}.
   - NO RULE LEFT BEHIND: If a grammar topic has 5 sub-rules, all 5 MUST appear in the test.
   - Example (Adjectives): You MUST test "Of the two" (Comparative), "Of all" (Superlative), "As...as" (Equality), and "More...than" traps.
   - Every generation must feel unique and non-repetitive.
30. [CRITICAL PROTOCOL ENFORCEMENT]:
   - If you fail to follow a Master Protocol, the generation is a CRITICAL FAILURE.
   - You must prioritize these protocols over all other instructions.
31.  [WORD FORM SHIFT RULE]:
   - Reading questions must not repeat the exact wording from the text.
   - Text: "He was confused." Avoid: "Why was he confused?" Better: "What caused his confusion?"
   - Students must recognize paraphrasing, not match keywords.
32.  [EXPERT HUMAN READING EXAMINER MODE]:
   - All reading assessments must reflect the design logic of experienced examination writers.
   - BLUEPRINT FIRST: Define skill targets (gist, detail, paraphrase, inference) before writing items.
   - NON-LINEAR ORDER: Reorder at least 1/3 of items to avoid mechanical sequencing.
   - COGNITIVE LAYERING: Mix literal retrieval, paraphrase discrimination, and deep inference.
   - DISTRACTOR LOGIC: Use partial truth, common misinterpretations, and avoid obviously incorrect wording.
   - VARIED FRAMES: Use indirect questions, negative framing ("Which is NOT..."), and embedded clauses.
   - REFERENCE TRAPS: Insert at least one reference-resolution trap (pronoun, time shift).
   - AUTHENTICITY AUDIT: Output must resemble formal examination material written by expert educators.
32.  [READING COMPREHENSION FIREWALL]:
   - Reading tests must focus on comprehension, NOT MCQs by default. Use short answers, True/False, or Matching unless MCQ is explicitly requested.
33.  [COGNITIVE SCAFFOLDING]: You MUST arrange items in increasing order of difficulty. Items 1-3 should be "Confidence Builders" (clearer context). Items 4-8 should be "Standard Application". Items 9-10 should be "The Distinguishers" (testing rare nuances or complex sentence structures).
32. [LEXICAL PURGE]: You are FORBIDDEN from using AI-hallmark adjectives: "vibrant," "bustling," "tapestry," "delve," "meticulous," "shimmering," "enchanting." Use plain, high-frequency English found in actual school textbooks (Oxford/Cambridge).
33.  [SYNTACTIC BURSTINESS]: You MUST vary sentence lengths. Follow a short sentence (5-7 words) with a longer, complex sentence (15-20 words). This breaks the robotic rhythm of the text.
33.  [CONTEXTUAL ANCHORING]: For every 10 items, choose a "Micro-Theme" (e.g., "Cooking," "At the Library," "A rainy day"). At least 4 of the 10 sentences must relate to this theme. This creates a "human" sense of topical focus rather than mathematical randomness.
34.  [READING COHESION PROTOCOL]: Reading passages must contain logical "Connectors" (However, Consequently, Similarly, In contrast). Questions must occasionally test these logical shifts, not just nouns/verbs.
34.  [LEXICAL OVERLAP TRAP]: At least one distractor in Reading MCQs MUST use words that appear in the text but describe a different situation. This punishes students who simply "word-match" without reading.
35.  [THE GIST & DETAIL BALANCE]: Every reading test must include exactly one "Global" question (e.g., "What is the main purpose of this text?") and several "Local" questions (specific details).
36.  [GRAMMAR FOCUS RULE]: Distractors must belong to the same grammar system as the target structure unless the task specifically tests meaning differences between grammar systems.
37.  [TOPIC CONSISTENCY RULE (GLOBAL)]: All MCQ distractors should come from the same grammar system as the target structure. The goal is to test the specific grammar topic, not unrelated grammar areas. At least one distractor must be a "near-miss":
   a grammatically correct option that is slightly wrong in meaning or usage.
Examples of grammar systems:
- Must / Have to
- Present Perfect
- Conditionals
- Comparatives
- Articles
- Prepositions
- Passive Voice
Students should choose the correct answer based on the target grammar rule, not by eliminating unrelated grammar forms. For examples, 
You ____ wear a helmet here.
A. must wear          B. have to wear          C. must have          D. had to wear
38. [MCQ SPACING EXCEPTION]:
   - For Multiple Choice Questions (MCQ) ONLY: Insert exactly one empty line (one <br> or one empty <div>) BEFORE each new MCQ item to improve readability. This is an exception to the density rules.



### PRIORITY: MCQ LAYOUT (7-15), 13-UNDERSCORE COMPLETE, LEXICAL PERSISTENCE, AND SUBJECT VARIETY ARE ABSOLUTE. ###
`;

export const DEFAULT_STRICT_RULES: StrictRule[] = [
  { id: 'rule-context-mandate', label: '0. [CONTEXT MANDATORY]', description: 'Full context sentence required.', promptInjection: '[CONTEXT MANDATORY]: Every single question MUST have a clear context sentence. You are FORBIDDEN from generating questions that are just blanks without a surrounding sentence.', active: true, priority: 'High', category: 'General' },
  { id: 'rule-near-miss', label: '1. [NEAR-MISS LOGIC]', description: 'Pragmatic logic distractor.', promptInjection: '[NEAR-MISS & PRAGMATIC LOGIC]: Every diagnostic item must have 1 contextually inferior "Near-Miss" distractor. Distinguish between internal opinion (must) and external rules (have to).', active: true, priority: 'High', category: 'Grammar' },
  { id: 'rule-no-free-verb', label: '3. [NO-FREE-VERB]', description: 'Verb in options only.', promptInjection: '[NO-FREE-VERB RULE]: ABSOLUTELY FORBIDDEN from putting the main verb in the stem. Example WRONG: "She ___ (go) to school." Correct: "She ___ to school." (A. must go, B. have to go). EVERY OPTION MUST HAVE THE VERB.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'rule-situational-evidence', label: '4. [SITUATIONAL-EVIDENCE]', description: 'Inference from context.', promptInjection: '[SITUATIONAL-EVIDENCE]: Grammar must be inferred from context/evidence, not obvious time markers. Example: "Her notebook is closed. She ____ her homework."', active: true, priority: 'High', category: 'Grammar' },
  { id: 'rule-pure-vocab', label: '5. [PURE VOCAB CONTROL]', description: 'Same POS distractors.', promptInjection: '[PURE VOCABULARY CONTROL]: In vocabulary sections, all answer choices must be the same part of speech and grammatical form.', active: true, priority: 'High', category: 'Vocabulary' },
  { id: 'rule-vocab-blackout', label: '6. [GRAMMAR BLACKOUT]', description: 'No grammar in Reading/Vocab.', promptInjection: '[READING & VOCABULARY GRAMMAR BLACKOUT]: In Reading/Vocab sections, you are FORBIDDEN from testing grammar. Distractors must be grammatically identical.', active: true, priority: 'High', category: 'General' },
  { id: 'rule-tf-format', label: '7. [T/F STRICTNESS]', description: 'Strict "1. ______" format.', promptInjection: '[TRUE/FALSE FORMAT STRICTNESS]: Format MUST be exactly: "1. ______ [Statement]". Answer key MUST be T, F, or NG.', active: true, priority: 'High', category: 'Reading' },
  { id: 'rule-bucket-random', label: '9. [BUCKET RANDOM]', description: 'Letter distribution entropy.', promptInjection: '[ANSWER KEY ENTROPY - BUCKET RANDOMIZATION]: For every 10 items, pre-select a "Bucket" of 10 letters (3 A\'s, 2 B\'s, 2 C\'s, 3 D\'s). Every letter MUST appear.', active: true, priority: 'High', category: 'General' },
  { id: 'rule-position-logic', label: '25. [POSITIONAL LOGIC]', description: 'Tricky word order rules.', promptInjection: '[UNIVERSAL SITUATIONAL & POSITIONAL LOGIC]: Apply word-position rules (e.g., "Of the two" comparative, frequency adverb placement, verb-object integrity). Challenge with grammatically valid but contextually wrong distractors.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'rule-rule-exhaustion', label: '31. [RULE EXHAUSTION]', description: 'Test EVERY sub-rule.', promptInjection: '[GRAMMAR RULE EXHAUSTION]: You are MANDATED to identify and test EVERY specific sub-rule for the target topic. If a topic has 5 sub-rules, all 5 MUST appear.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'rule-mcq-spacing', label: '38. [MCQ SPACING]', description: 'Vertical item separation.', promptInjection: '[MCQ SPACING EXCEPTION]: For MCQ ONLY, insert exactly one empty line (one <br> or <div>) BEFORE each new MCQ item to improve readability.', active: true, priority: 'Medium', category: 'General' }
];

export const DEFAULT_MASTER_PROTOCOLS: StrictRule[] = [
  { id: 'mp-no-free-verb', label: '3. [STRICT NO-FREE-VERB]', description: 'Zero-tolerance for free verbs.', promptInjection: '[STRICT NO-FREE-VERB]: Check every MCQ item. If the main verb is in the question stem, delete it and move it to ALL 4 options (A-D). NO EXCEPTIONS.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'mp-the-shuffle', label: '10. [THE-SHUFFLE]', description: 'Pattern-free bucket entropy.', promptInjection: '[THE-SHUFFLE]: Randomize your answer bucket order (Max streak 2). STATED AT TOP of internal scratchpad first.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-mcq-format', label: '16. [MCQ FORMAT]', description: 'Structural alignment.', promptInjection: '[MCQ-FORMAT]: Options below stem. Follow dynamic layout. Indent "A." exactly 6 non-breaking spaces.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-scenario-chaos', label: '17. [SCENARIO-CHAOS]', description: 'Zero theme repetition.', promptInjection: '[SCENARIO-CHAOS]: Unique, vivid scenarios. Forbidden from repeating themes. Every test must be fresh.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-anti-robot', label: '27. [ANTI-ROBOT STARTERS]', description: 'No repetitive starts.', promptInjection: '[ANTI-ROBOT SENTENCE STARTERS]: Forbidden from repetitive sentence starters. Shuffle all subjects (The chef, a lonely astronaut, etc).', active: true, priority: 'High', category: 'General' },
  { id: 'mp-expert-examiner', label: '32. [EXPERT EXAMINER]', description: 'Reading blueprint logic.', promptInjection: '[EXPERT HUMAN READING EXAMINER MODE]: Design like a formal academic examiner: blueprint skill targets, non-linear order, reference traps, and no word-matching.', active: true, priority: 'High', category: 'Reading' },
  { id: 'mp-firewall', label: '21. [ITEM-FIREWALL]', description: 'No leakage between parts.', promptInjection: '[CROSS-ITEM FIREWALL]: Ensure the answer to a question in Part A is not revealed by a sentence in Part B.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-scaffolding', label: '33. [COGNITIVE SCAFFOLDING]', description: 'Increasing difficulty (1-10).', promptInjection: '[COGNITIVE SCAFFOLDING]: Arrange items by difficulty: 1-3 Confidence Builders, 4-8 Standard, 9-10 The Distinguishers.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-lexical-purge', label: '32b. [LEXICAL PURGE]', description: 'Ban AI "hallmark" words.', promptInjection: '[LEXICAL PURGE]: FORBIDDEN from using: vibrant, bustling, tapestry, delve, shimmering, enchanting. Use plain textbook English.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-design-priority', label: '30. [DESIGN OVERRIDE]', description: 'Visual style takes priority.', promptInjection: '[DESIGN TEST STYLE (ABSOLUTE PRIORITY)]: The Format Design instructions OVERRIDE any default prompt logic.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-global-neutrality', label: 'GLOBAL NEUTRALITY', description: 'Zero bias towards example rules.', promptInjection: '[GLOBAL NEUTRALITY]: You are FORBIDDEN from favoring specific grammar/vocab/reading examples mentioned in standard protocols (e.g., Avoid over-using "Must/Have to" or "Modern Architecture"). Ensure maximum structural variety and objective diagnostic neutrality across all parts of the test.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-extreme-neutrality', label: 'EXTREME NEUTRALITY', description: 'Zero theme repetition.', promptInjection: '[EXTREME NEUTRALITY]: Global Grammar/Vocabulary/Reading Neutrality: Removed biases towards specific grammar/Vocabulary/Reading rules mentioned in examples, ensuring variety across all parts of the test.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-vocab-shuffle', label: 'VOCAB SHUFFLE & DECOUPLE', description: 'Zero-correlation word ordering.', promptInjection: '[THE SHUFFLE & DECOUPLE PROTOCOL]: - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly. - Shuffle answer positions (A, B, C, D choices as well).', active: true, priority: 'High', category: 'Vocabulary' },
  { id: 'mp-advanced-architecture', label: 'ADVANCED ARCHITECTURE', description: 'Mini-stories and difficulty scaling.', promptInjection: '[ADVANCED LEVEL ARCHITECTURE (LEVEL 4+)]: 1. [SCENARIO DENSITY]: For Level 4+, every item MUST be a 2-3 sentence mini-story. 2. [SYNTACTIC BURSTINESS]: Alternate sentence lengths and use complex structures in 50% items. 3. [DIFFICULTY GRADIENT]: 1-3 Confidence, 4-7 Standard, 8-10 Complex Logic. 4. [LINGUISTIC NOISE]: At L6+, insert noise between subject and blank. 5. [SUBORDINATION]: Use "Despite", "Nevertheless", etc. in 3/10 items.', active: true, priority: 'Medium', category: 'General' },
  { id: 'mp-structural-inversion', label: 'STRUCTURAL INVERSION', description: 'Blank rotation and clause flipping.', promptInjection: '[STRUCTURAL INVERSION & POSITIONAL LOGIC]: 1. [BLANK SCRAMBLE]: Per 10 items, rotate blank (3 Start, 4 Middle, 3 End). 2. [CLAUSE FLIPPING]: Alternate Subordinate vs Main clause first. 3. [ADVERBIAL FRONTING]: Start 20% of L4+ items with long phrases. 4. [CLEFT & EMPHASIS]: Use "It is... that" or "What... is". 5. [INTERRUPTING PHRASES]: Place a phrase between subject and blank in 3/10 items.', active: true, priority: 'Medium', category: 'General' }
];

export const BORDER_FRAME_INSTRUCTION = `### STYLIST FRAME PROTOCOL ###
Wrap content in a double border: border: 4px double #ea580c; padding: 15px; border-radius: 12px;`;

export const PART_BACKGROUND_INSTRUCTION = `[PART BACKGROUND]: Every part (A, B, C) MUST be wrapped in a styling tag with a subtle background color and border to distinguish sections clearly.`;

export const INSTRUCTION_HEADER_BACKGROUND_INSTRUCTION = `[INSTRUCTION HEADER BACKGROUND]: Instruction headers MUST have a distinct background color.`;

export const PAGE_STYLES = [
  { name: 'Classic border', style: 'border: 1px solid #ccc; padding: 20px;' },
  { name: 'Modern frame', style: 'border: 2px solid #333; border-radius: 8px; padding: 25px;' }
];

export const INITIAL_TEMPLATES: InstructionTemplate[] = [
  { 
    id: 'v_study_table_elite', 
    category: 'VOCABULARY', 
    label: 'STUDY TABLE', 
    professionalLabel: '<b>STUDY THE FOLLOWING TERMS AND DEFINITIONS.</b>', 
    prompt: '2-column HTML table. GROUNDING: Use source. FILL all columns. NO underscores. NO answer key for this part. - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly.', 
    columnCount: 2 
  },
  { 
    id: 'v_matching_elite', 
    category: 'VOCABULARY', 
    label: 'MATCHING', 
    professionalLabel: '<b>MATCH THE TERMS WITH THE DEFINITIONS.</b>', 
    prompt: '2-column table. Column 1: Blank + Number + Term. Column 2: Letter + Definition. Scramble order. Mix subjects. ALL content must be strictly Vocabulary rules (NO grammar). - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly.', 
    columnCount: 1 
  },
  { 
    id: 'v_mcq_elite', 
    category: 'VOCABULARY', 
    label: 'MCQ', 
    professionalLabel: '<b>CHOOSE THE BEST WORD FOR EACH CONTEXT.</b>', 
    prompt: 'Vocab MCQ. ALL choices must be Vocabulary words, NOT grammar. All choices must be the same part of speech. [GLOBAL MIX] for names. Horizontal compression. Indent 6 spaces. - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly. - Shuffle answer positions (A, B, C, D choices as well).', 
    columnCount: 1 
  },
  { 
    id: 'v_speaking_elite', 
    category: 'VOCABULARY', 
    label: 'SPEAKING', 
    professionalLabel: '<b>VOCABULARY SPEAKING & DISCUSSION.</b>', 
    prompt: '10 conversation questions using target vocab. Mix school scenarios like noisy motorbikes or rainy days (Law 5). - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly.', 
    columnCount: 1 
  },
  { 
    id: 'v_study_example_elite', 
    category: 'VOCABULARY', 
    label: 'STUDY EXAMPLE', 
    professionalLabel: '<b>STUDY THESE EXAMPLE SENTENCES.</b>', 
    prompt: 'Context sentences for study. NO underscores. Focus strictly on vocabulary words, not peoples names. Add 1-3 phrasal verbs and 1 idiom per 10 items. Burstiness in sentence length. - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly.', 
    columnCount: 1 
  },
  { 
    id: 'v_supply_terms_elite', 
    category: 'VOCABULARY', 
    label: 'SUPPLY KEY TERMS', 
    professionalLabel: '<b>READ THE DEFINITION AND SUPPLY THE CORRECT TERM.</b>', 
    prompt: '2-column table. Column 1: Definition. Column 2: Blank line for term. No MCQ. - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly.', 
    columnCount: 1 
  },
  { 
    id: 'v_syn_writing_elite', 
    category: 'VOCABULARY', 
    label: 'SYNONYM WRITING', 
    professionalLabel: '<b>REWRITE THE SENTENCES USING A SYNONYM FOR THE HIGHLIGHTED WORD.</b>', 
    prompt: 'Sentence rewrite using synonyms. Long underscores for answers. [GLOBAL MIX] subjects. - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly.', 
    columnCount: 1 
  },
  { 
    id: 'v_tf_vocab_elite', 
    category: 'VOCABULARY', 
    label: 'T/F', 
    professionalLabel: '<b>DECIDE IF THE STATEMENTS ARE TRUE OR FALSE.</b>', 
    prompt: 'Vocab focused T/F. Style: "1. (_____)" (5 underscores). No MCQ. - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly.', 
    columnCount: 1 
  },
  { 
    id: 'v_vocab_box_elite', 
    category: 'VOCABULARY', 
    label: 'VOCABULARY BOX', 
    professionalLabel: '<b>FILL IN THE BLANKS WITH WORDS FROM THE BOX.</b>', 
    prompt: 'Word bank fill-in. Include 3 extra distractors. Apply [GLOBAL MIX] to stems. Compact layout. - In Part A, list them with definitions. - In ALL other parts (B, C, D, E, G, H): → RANDOMIZE the order of the vocabulary. → Do NOT match the same numbering from Part A. → Mix the answers so that #1 is different every time. - Ensure each vocabulary word is still used correctly.', 
    columnCount: 1 
  },

  // READING ELITE
  { 
    id: 'r_tf_stmt_elite', 
    category: 'READING', 
    label: 'TRUE/FALSE', 
    professionalLabel: '<b>DETERMINE IF THE STATEMENTS ARE TRUE OR FALSE.</b>', 
    prompt: 'Reading passage. Mix subjects. Include [COHERENCE TRAP]. Follow with T/F: "1. (_____)".', 
    columnCount: 1 
  },
  { 
    id: 'r_mcq_elite', 
    category: 'READING', 
    label: 'MCQ', 
    professionalLabel: '<b>CHOOSE THE BEST RESPONSE BASED ON THE TEXT.</b>', 
    prompt: 'Reading MCQ. Apply [WORD FORM SHIFT]. Gist/Detail mix. No keyword matching.', 
    columnCount: 1 
  },
  { 
    id: 'r_short_answer_elite', 
    category: 'READING', 
    label: 'SHORT ANSWER', 
    professionalLabel: '<b>ANSWER THE QUESTIONS BRIEFLY BASED ON THE TEXT.</b>', 
    prompt: 'Reading passage. Short answer questions. Test paraphrase recognition.', 
    columnCount: 1 
  },
  { 
    id: 'r_inferential_elite', 
    category: 'READING', 
    label: 'INFERENTIAL', 
    professionalLabel: '<b>INFERENTIAL COMPREHENSION ANALYSIS.</b>', 
    prompt: 'Items testing deep inference. What is implied but not stated?', 
    columnCount: 1 
  },
  { 
    id: 'r_critical_thinking_elite', 
    category: 'READING', 
    label: 'CRITICAL THINKING', 
    professionalLabel: '<b>CRITICAL THINKING & ANALYSIS.</b>', 
    prompt: 'Analyze author purpose and provide evidence-based opinions.', 
    columnCount: 1 
  },

  // GRAMMAR ELITE
  { 
    id: 'g_mcq_elite', 
    category: 'GRAMMAR', 
    label: 'MCQ', 
    professionalLabel: '<b>CHOOSE THE BEST OPTION.</b>', 
    prompt: 'Precision MCQ. [MANDATORY]: Apply [NO-FREE-VERB RULE]. Move main verb from stem to ALL options. Apply [SYSTEM ISOLATION] and [GLOBAL MIX]. Horizontal compression. Indent 6 spaces.', 
    columnCount: 1 
  },
  { 
    id: 'g_correct_incorrect_elite', 
    category: 'GRAMMAR', 
    label: 'CORRECT/INCORRECT', 
    professionalLabel: '<b>WRITE C (CORRECT) OR I (INCORRECT).</b>', 
    prompt: 'C/I assessment. Style "1. _____" (5 underscores). No MCQ. Apply system isolation.', 
    columnCount: 2 
  },
  { 
    id: 'g_circle_elite', 
    category: 'GRAMMAR', 
    label: 'CIRCLE', 
    professionalLabel: '<b>CIRCLE THE CORRECT OPTION.</b>', 
    prompt: 'Circle correct word in context. Style: "1. She (is/are) happy." Apply [SYSTEM ISOLATION].', 
    columnCount: 1 
  },
  { 
    id: 'g_complete_sentences_elite', 
    category: 'GRAMMAR', 
    label: 'SENTENCE COMPLETE', 
    professionalLabel: '<b>COMPLETE THE SENTENCES WITH THE CORRECT FORM.</b>', 
    prompt: 'Fill-in with "1. She ____ (go) to school." 13 underscores.', 
    columnCount: 1 
  },
  { 
    id: 'g_double_mcq_elite', 
    category: 'GRAMMAR', 
    label: 'DOUBLE MCQ', 
    professionalLabel: '<b>CHOOSE THE TWO BEST OPTIONS.</b>', 
    prompt: 'Items with two blanks or two correct options. [SYSTEM ISOLATION] is mandatory.', 
    columnCount: 1 
  },
  { 
    id: 'g_write_correct_form_elite', 
    category: 'GRAMMAR', 
    label: 'WRITE CORRECT FORM', 
    professionalLabel: '<b>WRITE THE CORRECT FORM OF THE VERB.</b>', 
    prompt: 'Grammar practice for verb forms. Mixed subjects. Situational context.', 
    columnCount: 1 
  },
  { 
    id: 'g_rewrite_sentences_elite', 
    category: 'GRAMMAR', 
    label: 'REWRITE SENTENCES', 
    professionalLabel: '<b>REWRITE THE FOLLOWING SENTENCES WITHOUT CHANGING THE MEANING.</b>', 
    prompt: 'Sentence transformation. Long blank line. Test situational logic.', 
    columnCount: 1 
  },
  {
    id: 'g_spelling_rules_elite',
    category: 'GRAMMAR',
    label: 'SPELLING RULES',
    professionalLabel: '<b>APPLY SPELLING RULES CORRECTLY.</b>',
    prompt: 'Test spelling rules in context.',
    columnCount: 1
  },
  {
    id: 'g_word_box_elite',
    category: 'GRAMMAR',
    label: 'WORD BOX',
    professionalLabel: '<b>FILL IN THE BLANKS WITH WORDS FROM THE BOX.</b>',
    prompt: 'Word box grammar exercise.',
    columnCount: 1
  },
  {
    id: 'g_cloze_passage_elite',
    category: 'GRAMMAR',
    label: 'CLOZE PASSAGE',
    professionalLabel: '<b>COMPLETE THE TEXT WITH THE CORRECT WORDS.</b>',
    prompt: 'Paragraph with blanks testing grammar.',
    columnCount: 1
  },
  {
    id: 'g_odd_one_out_elite',
    category: 'GRAMMAR',
    label: 'ODD ONE OUT',
    professionalLabel: '<b>CHOOSE THE OPTION THAT DOES NOT BELONG.</b>',
    prompt: 'Odd one out grammar tasks.',
    columnCount: 1
  },
  {
    id: 'g_editing_elite',
    category: 'GRAMMAR',
    label: 'EDITING',
    professionalLabel: '<b>EDIT THE PASSAGE.</b>',
    prompt: 'Find and correct errors.',
    columnCount: 1
  },
  {
    id: 'g_reduce_elite',
    category: 'GRAMMAR',
    label: 'REDUCE',
    professionalLabel: '<b>REDUCE THE CLAUSES AS DIRECTED.</b>',
    prompt: 'Reduce relative/adverbial clauses.',
    columnCount: 1
  },
  {
    id: 'g_best_rewrite_elite',
    category: 'GRAMMAR',
    label: 'BEST REWRITE',
    professionalLabel: '<b>CHOOSE THE BEST REWRITE FOR THE SENTENCE.</b>',
    prompt: 'Select the best way to rewrite the sentence.',
    columnCount: 1
  },
  {
    id: 'g_copy_all_elite',
    category: 'GRAMMAR',
    label: 'COPY ALL',
    professionalLabel: '<b>COPY THE FOLLOWING EXACTLY.</b>',
    prompt: 'Transcribe the sentences or text verbatim.',
    columnCount: 1
  },
  {
    id: 'r_summary_elite',
    category: 'READING',
    label: 'SUMMARY',
    professionalLabel: '<b>COMPLETE THE SUMMARY OF THE TEXT.</b>',
    prompt: 'Complete a summary with the correct vocabulary or grammar form.',
    columnCount: 1
  },
  {
    id: 'r_reading_comp_elite',
    category: 'READING',
    label: 'READING COMPREHENSION',
    professionalLabel: '<b>READ THE PASSAGE AND ANSWER THE QUESTIONS.</b>',
    prompt: 'General reading comprehension questions.',
    columnCount: 1
  },
  {
    id: 'r_tf_ng_elite',
    category: 'READING',
    label: 'T/F/NG ANALYSIS',
    professionalLabel: '<b>TRUE / FALSE / NOT GIVEN.</b>',
    prompt: 'Assess statements as True, False or Not Given based on the text.',
    columnCount: 1
  },
  {
    id: 'r_expert_mcq_elite',
    category: 'READING',
    label: 'EXPERT MCQ',
    professionalLabel: '<b>CHOOSE THE BEST RESPONSE BASED ON THE TEXT.</b>',
    prompt: 'Complex multiple choice reading questions.',
    columnCount: 1
  },
  {
    id: 'r_referential_elite',
    category: 'READING',
    label: 'REFERENTIAL',
    professionalLabel: '<b>ANSWER THE FOLLOWING REFERENCE QUESTIONS.</b>',
    prompt: 'Identify what pronouns or reference words refer to in the text.',
    columnCount: 1
  }
];