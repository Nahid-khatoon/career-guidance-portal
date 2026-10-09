export interface QuizOption {
  id: string;
  text: string;
  description?: string;
  categoryScores: {
    technology?: number;
    healthcare?: number;
    engineering?: number;
    business?: number;
    creative?: number;
    governance?: number;
  };
}

export interface QuizQuestion {
  id: number;
  topic: string;
  question: string;
  context: string;
  options: QuizOption[];
}

export interface CareerCategoryResult {
  key: string;
  title: string;
  description: string;
  topRoles: string[];
  suggestedSteps: string[];
  color: string;
}

export const CATEGORY_DETAILS: Record<string, CareerCategoryResult> = {
  technology: {
    key: 'technology',
    title: 'Technology & Computing',
    description: 'You enjoy logical problem solving, building digital systems, and automating workflows with code and data.',
    topRoles: ['Software Developer', 'Data Analyst', 'Cybersecurity Analyst', 'Cloud Engineer'],
    suggestedSteps: [
      'Learn a versatile programming language like Python or JavaScript.',
      'Build hands-on coding mini-projects and host them on GitHub.',
      'Explore CS fundamentals such as data structures, algorithms, and networks.'
    ],
    color: 'from-purple-600 to-indigo-600'
  },
  creative: {
    key: 'creative',
    title: 'Creative Design & Visual Arts',
    description: 'You are imaginative, visually expressive, and enjoy crafting appealing user experiences and artistic assets.',
    topRoles: ['UI/UX Designer', 'Graphic Designer', 'Brand Strategist', 'Motion Animator'],
    suggestedSteps: [
      'Master industry tools like Figma and Adobe Creative Suite.',
      'Study color theory, typography, and human-computer interaction.',
      'Create 2-3 portfolio case studies showcasing your problem-solving and visual polish.'
    ],
    color: 'from-fuchsia-600 to-pink-600'
  },
  business: {
    key: 'business',
    title: 'Business & Entrepreneurship',
    description: 'You are commercially minded, enjoy strategic decision making, market growth, and leadership.',
    topRoles: ['Business Analyst', 'Entrepreneur / Founder', 'Digital Marketer', 'Product Manager'],
    suggestedSteps: [
      'Learn basic financial statements, budgeting, and unit economics.',
      'Practice data-driven market research and digital campaign management.',
      'Lead student initiatives, start a small side venture, or intern at an early-stage startup.'
    ],
    color: 'from-indigo-600 to-blue-600'
  },
  engineering: {
    key: 'engineering',
    title: 'Engineering & Infrastructure',
    description: 'You like tangible mechanics, physical structures, designing systems, and understanding how real-world machines operate.',
    topRoles: ['Civil Engineer', 'Mechanical Engineer', 'Robotics Specialist', 'Project Engineer'],
    suggestedSteps: [
      'Deepen math and physics fundamentals including statics and mechanics.',
      'Learn CAD drafting tools like AutoCAD, SolidWorks, or Revit.',
      'Pursue hands-on laboratory workshops and construction site or plant visits.'
    ],
    color: 'from-amber-600 to-orange-600'
  },
  healthcare: {
    key: 'healthcare',
    title: 'Healthcare & Life Sciences',
    description: 'You have a deep compassion for living beings, medical science, diagnostic diagnosis, and human wellness.',
    topRoles: ['Medical Doctor (MBBS)', 'Clinical Specialist', 'Pharmacist', 'Biomedical Researcher'],
    suggestedSteps: [
      'Focus deeply on biology, chemistry, and organic sciences.',
      'Shadow healthcare professionals or volunteer at community health clinics.',
      'Prepare methodically for medical entrance examinations.'
    ],
    color: 'from-sky-600 to-teal-600'
  },
  governance: {
    key: 'governance',
    title: 'Public Governance & Education',
    description: 'You care about social welfare, civic laws, imparting knowledge, mentoring others, and systemic public impact.',
    topRoles: ['Government Services Officer', 'Teacher / Educator', 'Policy Analyst', 'Academic Researcher'],
    suggestedSteps: [
      'Develop habit of regular newspaper analysis and constitutional literacy.',
      'Practice structured essay writing and public speaking.',
      'Prepare for structured competitive examinations (UPSC, SSC, State PSC, or B.Ed).'
    ],
    color: 'from-emerald-600 to-teal-700'
  }
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Interests & Curiosity',
    question: 'When you have free time on the internet, which topic are you most excited to explore?',
    context: 'Understanding your spontaneous curiosity helps pinpoint your natural inclinations.',
    options: [
      {
        id: '1a',
        text: 'How websites, mobile apps, or artificial intelligence algorithms are built.',
        categoryScores: { technology: 3, engineering: 1 }
      },
      {
        id: '1b',
        text: 'Aesthetic visuals, visual branding, animations, typography, or video editing.',
        categoryScores: { creative: 3, business: 1 }
      },
      {
        id: '1c',
        text: 'How businesses make money, marketing psychology, and startups.',
        categoryScores: { business: 3, technology: 1 }
      },
      {
        id: '1d',
        text: 'How the human body functions, cures for diseases, or biology discoveries.',
        categoryScores: { healthcare: 3 }
      },
      {
        id: '1e',
        text: 'Social policies, national governance, history, or teaching concepts to others.',
        categoryScores: { governance: 3 }
      },
      {
        id: '1f',
        text: 'Massive bridges, architectural structures, airplanes, and heavy machinery.',
        categoryScores: { engineering: 3 }
      }
    ]
  },
  {
    id: 2,
    topic: 'Preferred Activities',
    question: 'Which of the following projects would give you the greatest sense of accomplishment?',
    context: 'The type of output you enjoy creating reflects the nature of your future daily work.',
    options: [
      {
        id: '2a',
        text: 'Writing code that automates a tedious manual process with zero errors.',
        categoryScores: { technology: 3, business: 1 }
      },
      {
        id: '2b',
        text: 'Designing a beautiful, intuitive interface that users praise for ease of use.',
        categoryScores: { creative: 3, technology: 1 }
      },
      {
        id: '2c',
        text: 'Diagnosing an underlying physical health problem and helping someone recover.',
        categoryScores: { healthcare: 3 }
      },
      {
        id: '2d',
        text: 'Launching a profitable product campaign or starting a college enterprise.',
        categoryScores: { business: 3 }
      },
      {
        id: '2e',
        text: 'Drafting an impactful public policy or teaching a student to master a tough concept.',
        categoryScores: { governance: 3 }
      },
      {
        id: '2f',
        text: 'Overseeing the physical construction of a bridge or testing a mechanical prototype.',
        categoryScores: { engineering: 3 }
      }
    ]
  },
  {
    id: 3,
    topic: 'Problem-Solving Style',
    question: 'When faced with a complex roadblock, how do you naturally approach solving it?',
    context: 'Every career domain employs distinct problem-solving frameworks.',
    options: [
      {
        id: '3a',
        text: 'Break it into discrete algorithmic steps, test hypotheses, and debug line-by-line.',
        categoryScores: { technology: 3, engineering: 1 }
      },
      {
        id: '3b',
        text: 'Brainstorm creative sketches, experiment with moodboards, and re-imagine the presentation.',
        categoryScores: { creative: 3 }
      },
      {
        id: '3c',
        text: 'Look at the financial numbers, cost-benefit tradeoffs, and operational efficiencies.',
        categoryScores: { business: 3 }
      },
      {
        id: '3d',
        text: 'Gather biological evidence, examine symptoms, and consult clinical research.',
        categoryScores: { healthcare: 3 }
      },
      {
        id: '3e',
        text: 'Analyze systemic causes, historical precedents, and ethical fairness for all people involved.',
        categoryScores: { governance: 3 }
      },
      {
        id: '3f',
        text: 'Apply mathematical physics formulas, measure physical tolerances, and inspect stress loads.',
        categoryScores: { engineering: 3 }
      }
    ]
  },
  {
    id: 4,
    topic: 'Creativity & Expression',
    question: 'How do you prefer expressing your personal creativity?',
    context: 'Creativity takes many forms—from visual artistry to strategic innovation.',
    options: [
      {
        id: '4a',
        text: 'Visual art, color palettes, sleek UI mockups, and typography arrangements.',
        categoryScores: { creative: 3 }
      },
      {
        id: '4b',
        text: 'Building neat scripts, game mechanics, or automated technological pipelines.',
        categoryScores: { technology: 3 }
      },
      {
        id: '4c',
        text: 'Pitching creative business ideas, catchy marketing slogans, and monetization hooks.',
        categoryScores: { business: 3, creative: 1 }
      },
      {
        id: '4d',
        text: 'Designing physical mechanisms, structural layouts, and functional blueprint prototypes.',
        categoryScores: { engineering: 3 }
      },
      {
        id: '4e',
        text: 'Creating engaging learning activities, mentoring sessions, and storytelling speeches.',
        categoryScores: { governance: 2, creative: 1 }
      },
      {
        id: '4f',
        text: 'Discovering novel ways to educate patients on wellness and preventative care.',
        categoryScores: { healthcare: 2, governance: 1 }
      }
    ]
  },
  {
    id: 5,
    topic: 'Working with People',
    question: 'What kind of interpersonal dynamic do you find most energizing?',
    context: 'Some careers are collaborative or customer-facing, while others emphasize focused technical work.',
    options: [
      {
        id: '5a',
        text: 'One-on-one compassionate care, helping people directly through emotional and physical challenges.',
        categoryScores: { healthcare: 3 }
      },
      {
        id: '5b',
        text: 'Mentoring, leading group discussions, and inspiring students or community members.',
        categoryScores: { governance: 3 }
      },
      {
        id: '5c',
        text: 'Leading teams, negotiating partnerships, pitching clients, and closing business deals.',
        categoryScores: { business: 3 }
      },
      {
        id: '5d',
        text: 'Small, agile team collaboration with developers and designers focusing on digital features.',
        categoryScores: { technology: 2, creative: 1 }
      },
      {
        id: '5e',
        text: 'Coordinating on-site technicians, contractors, and safety compliance personnel.',
        categoryScores: { engineering: 3 }
      },
      {
        id: '5f',
        text: 'Collaborating closely with clients to understand their aesthetic brand aspirations.',
        categoryScores: { creative: 2, business: 1 }
      }
    ]
  },
  {
    id: 6,
    topic: 'Technology & Tools',
    question: 'What is your comfort and excitement level regarding digital technology?',
    context: 'Technology plays different roles across different professions.',
    options: [
      {
        id: '6a',
        text: 'Very high: I love coding, terminal shells, server setups, and new software frameworks.',
        categoryScores: { technology: 3 }
      },
      {
        id: '6b',
        text: 'High: I love creative software like Figma, Photoshop, 3D blender, or video suites.',
        categoryScores: { creative: 3 }
      },
      {
        id: '6c',
        text: 'Moderate: I use analytics, spreadsheets, CRM tools, and AI to achieve business objectives.',
        categoryScores: { business: 3 }
      },
      {
        id: '6d',
        text: 'Specialized: I prefer technical simulation tools, CAD software, and hardware sensors.',
        categoryScores: { engineering: 3 }
      },
      {
        id: '6e',
        text: 'Medical: I appreciate high-precision medical diagnostic equipment and laboratory assays.',
        categoryScores: { healthcare: 3 }
      },
      {
        id: '6f',
        text: 'Balanced: I value human relationships, teaching materials, and constitutional books above machines.',
        categoryScores: { governance: 3 }
      }
    ]
  },
  {
    id: 7,
    topic: 'Communication & Impact',
    question: 'How do you like to see your work make a difference in society?',
    context: 'Aligning career goals with personal values fuels long-term career satisfaction.',
    options: [
      {
        id: '7a',
        text: 'Directly saving lives, alleviating pain, and fostering community healthcare resilience.',
        categoryScores: { healthcare: 3 }
      },
      {
        id: '7b',
        text: 'Ensuring honest governance, empowering students with education, and social equality.',
        categoryScores: { governance: 3 }
      },
      {
        id: '7c',
        text: 'Creating software that billions of people use to make their daily life effortless.',
        categoryScores: { technology: 3 }
      },
      {
        id: '7d',
        text: 'Constructing resilient bridges, green energy grids, and durable smart cities.',
        categoryScores: { engineering: 3 }
      },
      {
        id: '7e',
        text: 'Building companies that create jobs, economic value, and groundbreaking market services.',
        categoryScores: { business: 3 }
      },
      {
        id: '7f',
        text: 'Inspiring people through emotional visuals, memorable stories, and intuitive interfaces.',
        categoryScores: { creative: 3 }
      }
    ]
  },
  {
    id: 8,
    topic: 'Preferred Work Environment',
    question: 'Which daily workplace setting sounds most appealing to you?',
    context: 'Physical and cultural environments have a huge influence on day-to-day happiness.',
    options: [
      {
        id: '8a',
        text: 'A modern tech office or flexible remote setup with dual monitors and quiet focus.',
        categoryScores: { technology: 2, creative: 1 }
      },
      {
        id: '8b',
        text: 'A vibrant creative studio surrounded by sketches, moodboards, and design critique walls.',
        categoryScores: { creative: 3 }
      },
      {
        id: '8c',
        text: 'A hospital ward, clinic, or diagnostic lab with active patient interaction.',
        categoryScores: { healthcare: 3 }
      },
      {
        id: '8d',
        text: 'A dynamic corporate boardroom, client meetings, or bustling startup co-working space.',
        categoryScores: { business: 3 }
      },
      {
        id: '8e',
        text: 'A lively school classroom, university lecture hall, or district administrative office.',
        categoryScores: { governance: 3 }
      },
      {
        id: '8f',
        text: 'A blend of on-site field visits, engineering test rigs, and drafting workstations.',
        categoryScores: { engineering: 3 }
      }
    ]
  }
];
