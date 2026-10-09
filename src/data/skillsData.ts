export interface SkillItem {
  id: string;
  name: string;
  category: 'Technical Skills' | 'Soft Skills' | 'Business Skills' | 'Creative Skills';
  level: 'Foundational' | 'Intermediate' | 'Essential Everywhere';
  iconName: string;
  badgeColor: string;
  description: string;
  whyItMatters: string;
  beginnerPracticeIdeas: string[];
  suggestedActivities: string[];
}

export const SKILL_CATEGORIES = [
  'All Skills',
  'Technical Skills',
  'Soft Skills',
  'Business Skills',
  'Creative Skills',
] as const;

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'programming',
    name: 'Programming & Coding',
    category: 'Technical Skills',
    level: 'Foundational',
    iconName: 'Code2',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    description: 'The ability to write instructions that computers execute to automate workflows, build applications, and solve computational challenges.',
    whyItMatters: 'Every industry from healthcare to finance now relies on software. Learning to code empowers you to build tools, understand technical systems, and turn creative concepts into digital reality.',
    beginnerPracticeIdeas: [
      'Write simple Python scripts to calculate daily expenses or automate renaming files on your computer.',
      'Build a personal one-page portfolio website using HTML, modern CSS, and JavaScript.',
      'Solve beginner logic puzzles and code problems on platforms like LeetCode or Codewars.'
    ],
    suggestedActivities: [
      'Take Harvard’s free CS50 Introduction to Computer Science course.',
      'Contribute a typo fix or small documentation update to an open-source project on GitHub.',
      'Build an interactive quiz or calculator web app from scratch.'
    ]
  },
  {
    id: 'communication',
    name: 'Effective Communication',
    category: 'Soft Skills',
    level: 'Essential Everywhere',
    iconName: 'MessagesSquare',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    description: 'The capacity to convey complex ideas clearly, listen actively, write concisely, and persuade diverse audiences across verbal and written media.',
    whyItMatters: 'Even brilliant ideas fail if they cannot be articulated. Strong communicators lead teams smoothly, ace interviews, resolve misunderstandings, and inspire action.',
    beginnerPracticeIdeas: [
      'Practice explaining a complex academic topic to a friend who is completely unfamiliar with it.',
      'Summarize 20-page articles or reports into a crisp 3-bullet email summary.',
      'Record a 2-minute video pitch introducing yourself and review your pacing, eye contact, and clarity.'
    ],
    suggestedActivities: [
      'Join a local Toastmasters club or student debate society.',
      'Write short informative articles on LinkedIn or a personal blog explaining what you learned this week.',
      'Practice active listening: repeat back key takeaways before responding in group discussions.'
    ]
  },
  {
    id: 'critical-thinking',
    name: 'Critical Thinking',
    category: 'Soft Skills',
    level: 'Essential Everywhere',
    iconName: 'BrainCircuit',
    badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    description: 'Objectively analyzing claims, evaluating empirical evidence, identifying cognitive biases, and formulating reasoned conclusions.',
    whyItMatters: 'In an age inundated with misinformation and algorithmic feeds, critical thinking prevents hasty assumptions and leads to resilient, well-grounded choices.',
    beginnerPracticeIdeas: [
      'Read two contrasting perspectives on a controversial topic and outline the strengths and flaws of each argument.',
      'Apply the "5 Whys" methodology whenever you encounter an unexpected problem to discover its root cause.',
      'Question assumptions in everyday news headlines by checking original studies and source data.'
    ],
    suggestedActivities: [
      'Analyze historical case studies of organizational failures (e.g., how Kodak or Blockbuster missed digital shifts).',
      'Engage in structured peer debates where you argue in favor of the viewpoint opposite to your initial intuition.',
      'Take a short course on formal logic and cognitive biases.'
    ]
  },
  {
    id: 'problem-solving',
    name: 'Problem-Solving & Strategy',
    category: 'Business Skills',
    level: 'Essential Everywhere',
    iconName: 'Lightbulb',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
    description: 'Breaking down multifaceted challenges into digestible milestones, developing hypotheses, and methodically testing viable remedies.',
    whyItMatters: 'Employers value individuals who don’t merely complain about roadblocks but arrive with structured, actionable options to overcome them.',
    beginnerPracticeIdeas: [
      'Identify a bottleneck in your daily study routine and design a 7-day experiment to optimize it.',
      'Use decision matrix charts (weighing pros, cons, and probability) before committing to major academic choices.',
      'Practice solving real-world case interview questions published by management consulting clubs.'
    ],
    suggestedActivities: [
      'Participate in student hackathons, case competitions, or business ideation challenges.',
      'Create flowcharts mapping out common user bottlenecks on everyday websites you use.',
      'Read books like "Thinking, Fast and Slow" or "Bulletproof Problem Solving".'
    ]
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis & Literacy',
    category: 'Technical Skills',
    level: 'Foundational',
    iconName: 'TrendingUp',
    badgeColor: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    description: 'Inspecting, cleansing, transforming, and interpreting numerical data to uncover patterns and make evidence-backed projections.',
    whyItMatters: 'Decisions backed by rigorous data are far more convincing than guesswork. Data literacy is now required across marketing, management, healthcare, and engineering.',
    beginnerPracticeIdeas: [
      'Download a public dataset from Kaggle or data.gov and create clean bar and pie charts in Google Sheets.',
      'Learn basic spreadsheet functions: VLOOKUP/XLOOKUP, INDEX-MATCH, SUMIFS, and Pivot Tables.',
      'Write simple SQL queries using free sandboxes like SQLite or SQLZoo.'
    ],
    suggestedActivities: [
      'Complete the Google Data Analytics Certificate on Coursera.',
      'Build a visual interactive dashboard tracking your personal habits, fitness, or expense history.',
      'Learn exploratory data analysis using Python libraries like Pandas and Seaborn.'
    ]
  },
  {
    id: 'creativity',
    name: 'Creativity & Visual Design',
    category: 'Creative Skills',
    level: 'Foundational',
    iconName: 'Sparkles',
    badgeColor: 'bg-pink-100 text-pink-700 border-pink-200',
    description: 'Generating novel perspectives, synthesizing diverse concepts into artistic or practical assets, and thinking beyond conventional boundaries.',
    whyItMatters: 'Creativity is what differentiates human ingenuity from automated algorithms. It breathes personality into brands, solves unconventional dilemmas, and captures human attention.',
    beginnerPracticeIdeas: [
      'Redesign the promotional poster or social banner of your favorite local cafe or college club in Figma or Canva.',
      'Spend 15 minutes each day mind-mapping 10 alternative uses for an everyday object like a brick or a paperclip.',
      'Curate a mood board of inspirational typography and color schemes before starting any project.'
    ],
    suggestedActivities: [
      'Complete a "30-Day Daily UI / Design Challenge" creating mini visual assets each day.',
      'Learn basic vector illustration principles in Figma or Adobe Illustrator.',
      'Study classical design heuristics, Gestalt principles, and color psychology.'
    ]
  },
  {
    id: 'teamwork',
    name: 'Teamwork & Collaboration',
    category: 'Soft Skills',
    level: 'Essential Everywhere',
    iconName: 'Users',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    description: 'Working harmoniously toward shared objectives, respecting diverse perspectives, dividing duties equitably, and supporting peers.',
    whyItMatters: 'Large-scale innovations—from sending rovers to Mars to launching digital products—are collaborative team achievements, never solitary efforts.',
    beginnerPracticeIdeas: [
      'Volunteer to organize an event or study group for your college or community organization.',
      'Practice asynchronous collaboration tools like Notion, Trello, Slack, and Google Docs in team projects.',
      'Give timely, constructive praise to peers when they complete milestones.'
    ],
    suggestedActivities: [
      'Lead or coordinate a university club committee or sports team.',
      'Adopt Agile sprint standups in a group college project to review blockers and weekly goals.',
      'Read "Radical Candor" or "The Five Dysfunctions of a Team" to master constructive peer dynamics.'
    ]
  },
  {
    id: 'digital-literacy',
    name: 'Digital Literacy & Modern Tools',
    category: 'Technical Skills',
    level: 'Foundational',
    iconName: 'Laptop',
    badgeColor: 'bg-violet-100 text-violet-700 border-violet-200',
    description: 'Proficiency in utilizing cloud productivity suites, digital privacy protocols, online research tools, and emerging AI productivity assistants.',
    whyItMatters: 'Understanding digital platforms, cybersecurity basics, and generative productivity tools speeds up daily work tenfold and protects sensitive private assets.',
    beginnerPracticeIdeas: [
      'Enable two-factor authentication (2FA) and password managers across all your personal digital accounts.',
      'Learn keyboard shortcuts for your operating system and web browser to double your workflow speed.',
      'Practice writing structured, clear prompts for AI assistants to research study materials effectively.'
    ],
    suggestedActivities: [
      'Set up a cloud-synchronized knowledge base using Obsidian or Notion for your career notes.',
      'Take a short introductory module on internet safety and privacy rights.',
      'Explore collaborative whiteboards like Miro or FigJam for remote brainstorming sessions.'
    ]
  }
];
