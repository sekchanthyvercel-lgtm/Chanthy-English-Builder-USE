import { Theme, StrictRule, AcademicLevel, InstructionTemplate } from './types';

export const INITIAL_MODULES = ['Grammar', 'Reading', 'Vocabulary'];

export const LANGUAGES = ['English', 'Khmer', 'Chinese', 'Korean', 'French'];

export const ACADEMIC_LEVELS: AcademicLevel[] = [
  'Kid' as any, 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 
  'Level 6', 'Level 7', 'Level 8', 'Level 9', 'Level 10', 'Level 11', 
  'Level 12', 'Level 13', 'Level 14', 'TOEFL' as any, 'IELTS' as any
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

export const GLOBAL_STRICT_COMMAND = `### DPSS NEURAL ARCHITECTURAL ENGINE: ELITE V5 ###
Objective: Execute three-layered cognitive construction for maximum diagnostic integrity.

--- LAYER 1: CORE ARCHITECTURE (PRIORITY 1 - NON-NEGOTIABLE) ---
1. [MCQ INTEGRITY]: Exactly ONE correct answer. Distractors MUST be plausible near-misses, partial truths, or opposite meanings. No giveaway options.
2. [CONTEXT MANDATE]: Every question MUST have a clear context sentence. blanks in a vacuum are FORBIDDEN.
3. [GRAMMAR INTEGRITY]: Apply [NO-FREE-VERB RULE] (move verb to options). Test situational logic (e.g., Must vs Have to) via situational evidence.
4. [ANSWER BUCKET]: Use [BUCKET RANDOMIZATION] (3A, 2B, 2C, 3D per 10). Max streak 2. Answer key must match exercise type.

--- LAYER 2: SKILL MODULES (PRIORITY 2 - COGNITIVE DEPTH) ---
5. [DISTRACTOR QUALITY]: All MCQs must include high-quality distractors. RULES: Exactly ONE correct answer. All others plausible but incorrect. TYPES: 1. Near-miss, 2. Partial truth, 3. Opposite, 4. Overgeneralization, 5. Detail confusion, 6. Paraphrase trap.
6. [READING MODULE]: [EXPERT EXAMINER MODE]. Paraphrase everything; no word-matching. For "One/Two Words", use IELTS style. For Level 10+, passages MUST be 750-950+ words. The total test for READING ALWAYS must have exactly 40 items.
7. [HUMANIZED REALISM]: For READING, break repetitive "To + verb" structures. Add slight natural imperfections in phrasing. Make distractors less symmetrical (varying lengths/complexity). Add "messy realism" (avoid perfectly balanced AI patterns).
8. [VOCABULARY SCALING]: Use simple, high-frequency vocabulary for lower levels (1-4). Focus on comprehension depth rather than extremely academic vocabulary across all levels.
9. [READING BALANCE]: If multiple exercise types are selected, divide the 40 items proportionally. For "Topic ID" and "Ending Inference", generate ONE UNIQUE PASSAGE PER QUESTION. Scale passage length by {{LEVEL}}.
10. [VOCABULARY MODULE]: [POS CONSISTENCY]. All distractors must be same part of speech. [SHUFFLE & DECOUPLE]: Randomize order, don't match Part A definitions.
11. [GRAMMAR MODULE]: [RULE EXHAUSTION]. Test every sub-rule of {{TOPIC}}. Use [POSITIONAL LOGIC] (Word order, comparative traps, adverb placement).

--- LAYER 3: NATURAL EXPRESSION (PRIORITY 3 - ANTI-ROBOT) ---
12. [SCENARIO VARIETY]: [SCENARIO CHAOS]. Unique, vivid scenarios (chef, cat, astronaut). Zero theme repetition. Shuffle all subjects.
13. [STYLE & BURSTINESS]: [LEXICAL PURGE]. Ban AI-hallmark words (vibrant, bustling). Use [SYNTATIC BURSTINESS] (alternate short/long sentences).
14. [COGNITIVE SCALING - ABSULUTE MANDATE]: Complexity and VOLUME MUST scale exponentially with {{LEVEL}}. Level 11+ must be a professional-grade gauntlet.

### PRIORITY: MCQ LAYOUT, 13-UNDERSCORE COMPLETE, LEXICAL PERSISTENCE, AND SUBJECT VARIETY ARE ABSOLUTE. ###
`;

export const DEFAULT_STRICT_RULES: StrictRule[] = [
  { id: 'rule-core-distractors', label: '1. CORE DISTRACTORS', description: 'Elite MCQ distractor logic.', promptInjection: '[MCQ INTEGRITY]: Exactly ONE correct answer. Distractors must be plausible near-misses, partial truths, or traps. No giveaway options.', active: true, priority: 'High', category: 'Core' },
  { id: 'rule-context-mandate', label: '2. CONTEXT MANDATE', description: 'Full context required.', promptInjection: '[CONTEXT MANDATORY]: Every single question MUST have a clear context sentence. Blanks in a vacuum are FORBIDDEN.', active: true, priority: 'High', category: 'Core' },
  { id: 'rule-grammar-integrity', label: '3. GRAMMAR INTEGRITY', description: 'No-free-verb & Situational logic.', promptInjection: '[GRAMMAR INTEGRITY]: Apply [NO-FREE-VERB RULE] (move verb to options). Test situational logic (e.g. Must vs Have to) via evidence.', active: true, priority: 'High', category: 'Core' },
  { id: 'rule-answer-architecture', label: '4. ANSWER ARCHITECTURE', description: 'Bucket optimization.', promptInjection: '[ANSWER BUCKET]: Use [BUCKET RANDOMIZATION] (3A, 2B, 2C, 3D per 10). Max streak 2. Key format must match task type.', active: true, priority: 'High', category: 'Core' },
  { id: 'rule-reading-module', label: '5. READING MODULE', description: 'Expert reading blueprint.', promptInjection: '[READING MODULE]: [EXPERT EXAMINER MODE]. Paraphrase; no word-matching. 40 items total. Break repetitive structures. Asymmetrical distractors. "Messy realism". Easy vocab for lower levels.', active: true, priority: 'High', category: 'Modules' },
  { id: 'rule-vocab-module', label: '6. VOCABULARY MODULE', description: 'POS & Shuffle rules.', promptInjection: '[VOCABULARY MODULE]: [POS CONSISTENCY]. All distractors must be same POS. [SHUFFLE & DECOUPLE]: Randomize order vs definitions.', active: true, priority: 'High', category: 'Modules' },
  { id: 'rule-grammar-module', label: '7. GRAMMAR MODULE', description: 'Positional logic & sub-rules.', promptInjection: '[GRAMMAR MODULE]: [RULE EXHAUSTION]. Test all sub-rules. Use [POSITIONAL LOGIC] (Word order, comparative traps).', active: true, priority: 'High', category: 'Modules' }
];

export const DEFAULT_MASTER_PROTOCOLS: StrictRule[] = [
  { id: 'mp-scenario-chaos', label: '8. SCENARIO CHAOS', description: 'Creative theme variety.', promptInjection: '[SCENARIO VARIETY]: [SCENARIO CHAOS]. Unique scenarios (chef, astronaut). Zero repetition. Shuffle all subjects.', active: true, priority: 'High', category: 'Style' },
  { id: 'mp-natural-style', label: '9. NATURAL STYLE', description: 'Lexical purge & burstiness.', promptInjection: '[STYLE & BURSTINESS]: [LEXICAL PURGE]. Ban AI words (vibrant/bustling). Use [SYNTATIC BURSTINESS] (alternate short/long).', active: true, priority: 'High', category: 'Style' },
  { id: 'mp-cognitive-scaling', label: '10. COGNITIVE SCALING', description: 'Difficulty gradient.', promptInjection: '[COGNITIVE SCALING]: Items 1-3 Confidence, 4-8 Standard, 9-10 Distinguishers. Complexity MUST scale with {{LEVEL}}.', active: true, priority: 'High', category: 'Style' },
  { id: 'mp-structural-inversion', label: '11. STRUCTURAL INVERSION', description: 'Clause flipping & adverb fronting.', promptInjection: '[STRUCTURAL INVERSION]: Flip clauses (Subordinate vs Main), rotate blank positions, and use adverbial fronting for structural variety.', active: true, priority: 'Medium', category: 'Style' }
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
    label: 'ONE/TWO WORDS', 
    professionalLabel: '<b>WRITE NO MORE THAN TWO WORDS AND/OR A NUMBER FOR EACH ANSWER.</b>', 
    prompt: 'IELTS style. Mix questions and statement gaps (e.g. "She is interested in _________"). MANDATORY: Heavy paraphrasing and synonyms. Stems use synonyms; answers MUST use exact words from text.', 
    columnCount: 1 
  },
  { 
    id: 'r_inferential_elite', 
    category: 'READING', 
    label: 'INFERENTIAL', 
    professionalLabel: '<b>INFERENTIAL COMPREHENSION ANALYSIS.</b>', 
    prompt: 'Ending Inference style. Items end the passage context with gaps or questions like: "what is he probably going to do?", "We can infer that...", "It suggests that...". Correct answer must be a logical conclusion, NOT directly stated.', 
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
  { 
    id: 'r_ending_inference_elite', 
    category: 'READING', 
    label: 'ENDING INFERENCE', 
    professionalLabel: '<b>CHOSE THE BEST LOGICAL ENDING FOR THE PASSAGE.</b>', 
    prompt: 'Assess ENDING INFERENCE. CRITICAL: Generate ONE UNIQUE PASSAGE PER QUESTION. Options must be subtle interpretations of the final sentence. No direct statements. Scale passage length by Level.', 
    columnCount: 1 
  },
  { 
    id: 'r_topic_identification_elite', 
    category: 'READING', 
    label: 'TOPIC ID', 
    professionalLabel: '<b>IDENTIFY THE BEST OVERALL TOPIC FOR THE PASSAGE.</b>', 
    prompt: 'Assess TOPIC IDENTIFICATION. CRITICAL: Generate ONE UNIQUE PASSAGE PER QUESTION. All 4 choices must belong to the SAME general topic but differ in scope (one too broad, one too narrow, one correct). Scale passage length by Level.', 
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
    label: 'SUMMARY BOX', 
    professionalLabel: '<b>COMPLETE THE SUMMARY BELOW USING THE WORDS FROM THE BOX.</b>', 
    prompt: 'IELTS style summary completion. 1. Generate a long passage. 2. Rewrite/Summarize a section of that passage into a shorter summary with gaps. 3. Provide an HTML box containing vocabulary options. MANDATORY: The box MUST contain more words (distractors) than there are blanks. Test ability to identify synonyms and summarized information.', 
    columnCount: 1 
  },
  { 
    id: 'r_header_matching_elite', 
    category: 'READING', 
    label: 'HEADER MATCHING', 
    professionalLabel: '<b>MATCH THE HEADINGS TO THE CORRECT PARAGRAPHS.</b>', 
    prompt: 'IELTS style heading matching. Provide a list of headings (i, ii, iii...) and a series of paragraphs (Section A, B, C...). Students must match them.', 
    columnCount: 1 
  },
  {
    id: 'r_mcq_3_elite',
    category: 'READING',
    label: 'MCQ (3 OPTIONS)',
    professionalLabel: '<b>CHOOSE THE CORRECT LETTER (A, B, or C).</b>',
    prompt: 'Reading MCQ with exactly 3 answer choices. Focus on precise meaning.',
    columnCount: 1
  },
  {
    id: 'r_mcq_4_elite',
    category: 'READING',
    label: 'MCQ (4 OPTIONS)',
    professionalLabel: '<b>CHOOSE THE CORRECT LETTER (A, B, C, or D).</b>',
    prompt: 'Reading MCQ with exactly 4 answer choices. Focus on complex detail.',
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