export interface CourseStream {
  id: string;
  title: string;
  iconName: string;
  badge: string;
  colorScheme: {
    bgLight: string;
    border: string;
    accent: string;
    badgeBg: string;
  };
  shortSummary: string;
  relevantSubjects: string[];
  possibleQualifications: string[];
  exampleCareerOptions: string[];
  skillsToDevelop: string[];
  durationTypical: string;
  deepDive: {
    overview: string;
    topInstitutes: string[];
    curriculumHighlights: string[];
    recommendedCertifications: string[];
  };
}

export interface EducationStage {
  stageId: string;
  title: string;
  badge: string;
  subtitle: string;
  options: {
    name: string;
    duration: string;
    description: string;
    nextSteps: string;
  }[];
}

export const COURSE_STREAMS: CourseStream[] = [
  {
    id: 'computer-science',
    title: 'Computer Science & IT',
    iconName: 'Cpu',
    badge: 'High In-Demand',
    colorScheme: {
      bgLight: 'bg-purple-50/70',
      border: 'border-purple-200',
      accent: 'text-purple-700',
      badgeBg: 'bg-purple-100 text-purple-700'
    },
    shortSummary: 'Study computational theory, software design, algorithmic logic, artificial intelligence, and network systems.',
    relevantSubjects: ['Data Structures', 'Operating Systems', 'Discrete Mathematics', 'Database Systems', 'Algorithms'],
    possibleQualifications: ['B.Tech / B.E. in CS / IT', 'BCA (Computer Applications)', 'B.Sc. in Computer Science', 'MCA / M.Tech in CS'],
    exampleCareerOptions: ['Software Developer', 'Full Stack Engineer', 'Cloud Architect', 'Cybersecurity Specialist', 'DevOps Engineer'],
    skillsToDevelop: ['Object-Oriented Programming', 'Git Version Control', 'Algorithm Analysis', 'System Architecture'],
    durationTypical: '3 - 4 Years (Undergraduate)',
    deepDive: {
      overview: 'Computer Science equips students with foundational algorithmic knowledge and hands-on programming skills to create transformative software solutions across international industries.',
      topInstitutes: ['IITs & NITs', 'BITS Pilani', 'IIIT Hyderabad & Bangalore', 'Top Central & State Universities'],
      curriculumHighlights: ['Algorithms & Data Structures', 'Computer Networks & Distributed Systems', 'Machine Learning & AI', 'Software Engineering Practices'],
      recommendedCertifications: ['AWS Certified Solutions Architect', 'Google Cloud Certified Professional', 'Meta Front-End / Back-End Developer']
    }
  },
  {
    id: 'engineering',
    title: 'Engineering & Technology',
    iconName: 'Wrench',
    badge: 'Foundational Industry',
    colorScheme: {
      bgLight: 'bg-indigo-50/70',
      border: 'border-indigo-200',
      accent: 'text-indigo-700',
      badgeBg: 'bg-indigo-100 text-indigo-700'
    },
    shortSummary: 'Apply physics, mathematics, and material science to conceive, design, build, and maintain machines and structures.',
    relevantSubjects: ['Mechanical Systems', 'Civil Infrastructure', 'Electronics & Circuit Design', 'Thermodynamics', 'Applied Calculus'],
    possibleQualifications: ['B.Tech / B.E. (Mechanical / Civil / Electrical / Electronics)', 'Diploma in Engineering (Polytechnic)', 'M.Tech / M.E.'],
    exampleCareerOptions: ['Civil Engineer', 'Mechanical Design Engineer', 'Robotics Specialist', 'Electrical Grid Planner'],
    skillsToDevelop: ['CAD Modeling', 'Structural Stress Analysis', 'Project Management', 'Quality Assurance'],
    durationTypical: '4 Years (Degree) / 3 Years (Diploma)',
    deepDive: {
      overview: 'Engineering disciplines transform natural resources and scientific laws into machines, structures, circuits, and sustainable public infrastructure.',
      topInstitutes: ['Indian Institutes of Technology (IITs)', 'National Institutes of Technology (NITs)', 'Government Engineering Colleges'],
      curriculumHighlights: ['Applied Engineering Mathematics', 'Mechanics of Solids & Fluids', 'Manufacturing & Prototyping Labs', 'Industrial Project Internships'],
      recommendedCertifications: ['AutoCAD Certified Professional', 'SolidWorks Associate (CSWA)', 'Project Management Professional (PMP / CAPM)']
    }
  },
  {
    id: 'commerce',
    title: 'Commerce & Finance',
    iconName: 'DollarSign',
    badge: 'Economic Engines',
    colorScheme: {
      bgLight: 'bg-emerald-50/70',
      border: 'border-emerald-200',
      accent: 'text-emerald-700',
      badgeBg: 'bg-emerald-100 text-emerald-700'
    },
    shortSummary: 'Master corporate finance, investment markets, financial accounting, taxation, and international trade economies.',
    relevantSubjects: ['Financial Accounting', 'Cost & Management Accounting', 'Corporate Law', 'Micro & Macro Economics', 'Taxation Laws'],
    possibleQualifications: ['B.Com (General / Honours)', 'Chartered Accountancy (CA)', 'Company Secretary (CS)', 'CMA / CFA / M.Com'],
    exampleCareerOptions: ['Chartered Accountant', 'Financial Analyst', 'Investment Banker', 'Tax Consultant', 'Auditor'],
    skillsToDevelop: ['Financial Modeling', 'Balance Sheet Analysis', 'Tax Compliance', 'Valuation Methodologies'],
    durationTypical: '3 Years (B.Com) + Professional exams',
    deepDive: {
      overview: 'Commerce disciplines provide rigorous training in financial stewardship, auditing regulations, capital allocation, and corporate taxation.',
      topInstitutes: ['SRCC, Delhi University', 'St. Xavier’s College', 'Loyola College', 'ICAI / ICSI Professional Institutes'],
      curriculumHighlights: ['Advanced Financial Reporting', 'Direct & Indirect Taxes (GST)', 'Auditing & Assurance', 'Capital Markets & Securities Law'],
      recommendedCertifications: ['Chartered Financial Analyst (CFA)', 'Certified Public Accountant (CPA)', 'NSE / NISM Financial Market Certifications']
    }
  },
  {
    id: 'arts-humanities',
    title: 'Arts & Humanities',
    iconName: 'BookOpen',
    badge: 'Culture & Thought',
    colorScheme: {
      bgLight: 'bg-rose-50/70',
      border: 'border-rose-200',
      accent: 'text-rose-700',
      badgeBg: 'bg-rose-100 text-rose-700'
    },
    shortSummary: 'Explore literature, historical contexts, philosophy, sociology, linguistics, and human behavioral societies.',
    relevantSubjects: ['Psychology', 'Sociology', 'English Literature', 'Political Science', 'History & Archaeology'],
    possibleQualifications: ['B.A. (Honours)', 'B.A. in Psychology / Journalism', 'Master of Arts (M.A.)', 'Ph.D. / Research Fellowship'],
    exampleCareerOptions: ['Civil Services Officer', 'Journalist / Editor', 'Clinical Psychologist', 'Policy Researcher', 'Public Relations Specialist'],
    skillsToDevelop: ['Critical Analysis', 'Compelling Writing', 'Social Research Methods', 'Cultural Context Literacy'],
    durationTypical: '3 - 4 Years (Undergraduate)',
    deepDive: {
      overview: 'Humanities foster empathetic inquiry, nuanced analytical reasoning, and exceptional narrative communication indispensable in public leadership and culture.',
      topInstitutes: ['Delhi University (St. Stephen’s, Miranda House)', 'JNU', 'Ashoka University', 'Tata Institute of Social Sciences (TISS)'],
      curriculumHighlights: ['Qualitative Research Methods', 'Political & Philosophical Theories', 'Linguistic Analysis & Communication', 'Global Historical Studies'],
      recommendedCertifications: ['UGC-NET Lectureship', 'Content Strategy & Editorial Writing Certifications', 'Public Policy Analysis Credentials']
    }
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medicine',
    iconName: 'Stethoscope',
    badge: 'Life-Saving Impact',
    colorScheme: {
      bgLight: 'bg-sky-50/70',
      border: 'border-sky-200',
      accent: 'text-sky-700',
      badgeBg: 'bg-sky-100 text-sky-700'
    },
    shortSummary: 'Dedicated to medical diagnosis, pharmaceutical therapy, biomedical science, nursing, and clinical healthcare systems.',
    relevantSubjects: ['Human Anatomy', 'Pathology', 'Pharmacology', 'Biochemistry', 'Microbiology', 'Clinical Physiology'],
    possibleQualifications: ['MBBS', 'BDS (Dental)', 'B.Pharm (Pharmacy)', 'B.Sc. Nursing', 'BPT (Physiotherapy)', 'MD / MS'],
    exampleCareerOptions: ['Medical Doctor', 'Surgeon', 'Pharmacologist', 'Physiotherapist', 'Hospital Clinical Director'],
    skillsToDevelop: ['Clinical Diagnosis', 'Patient Compassion', 'Emergency Protocol Handling', 'Pharmaceutical Knowledge'],
    durationTypical: '4 to 5.5 Years + Internship',
    deepDive: {
      overview: 'Healthcare programs combine rigorous bio-scientific theory with intense clinical bedside internships to prepare doctors, dentists, nurses, and pharmacists.',
      topInstitutes: ['AIIMS New Delhi', 'CMC Vellore', 'JIPMER', 'Kasturba Medical College (KMC)'],
      curriculumHighlights: ['Systemic Anatomy & Dissection', 'General Pathology & Microbiology', 'Forensic & Community Medicine', 'Clinical Surgery & Medicine Rotations'],
      recommendedCertifications: ['Advanced Cardiac Life Support (ACLS)', 'Basic Life Support (BLS)', 'Medical Council Clinical Registration']
    }
  },
  {
    id: 'management',
    title: 'Management & Business',
    iconName: 'TrendingUp',
    badge: 'Strategic Leadership',
    colorScheme: {
      bgLight: 'bg-blue-50/70',
      border: 'border-blue-200',
      accent: 'text-blue-700',
      badgeBg: 'bg-blue-100 text-blue-700'
    },
    shortSummary: 'Develop organizational leadership, team administration, operational workflows, business strategies, and marketing.',
    relevantSubjects: ['Organizational Behavior', 'Strategic Management', 'Marketing Management', 'Operations & Logistics', 'Managerial Economics'],
    possibleQualifications: ['BBA / BMS (Bachelor of Business Administration)', 'Integrated MBA', 'MBA / PGDM (Postgraduate)', 'Executive Leadership'],
    exampleCareerOptions: ['Business Analyst', 'Product Manager', 'Management Consultant', 'Brand Strategy Director', 'Operations Manager'],
    skillsToDevelop: ['Team Leadership', 'Strategic Decision Making', 'Negotiation', 'Financial P&L Modeling'],
    durationTypical: '3 Years (BBA) / 2 Years (MBA)',
    deepDive: {
      overview: 'Management education prepares future leaders to direct teams, analyze operational efficiency, orchestrate marketing campaigns, and drive corporate profitability.',
      topInstitutes: ['IIMs (Ahmedabad, Bangalore, Calcutta)', 'XLRI Jamshedpur', 'ISB Hyderabad', 'FMS Delhi'],
      curriculumHighlights: ['Case Method Problem Solving', 'Corporate Finance & Strategy', 'Supply Chain & Operations Optimization', 'Marketing & Consumer Psychology'],
      recommendedCertifications: ['PMP (Project Management Professional)', 'Scrum Master (CSM)', 'Six Sigma Green Belt']
    }
  },
  {
    id: 'design',
    title: 'Design & Visual Arts',
    iconName: 'Palette',
    badge: 'Creative & Digital',
    colorScheme: {
      bgLight: 'bg-fuchsia-50/70',
      border: 'border-fuchsia-200',
      accent: 'text-fuchsia-700',
      badgeBg: 'bg-fuchsia-100 text-fuchsia-700'
    },
    shortSummary: 'Combine aesthetic creativity with functionality in UI/UX design, visual communication, fashion, animation, and industrial design.',
    relevantSubjects: ['Visual Communication', 'Typography & Layout', 'Design Thinking & Research', 'Interaction Prototyping', '3D Modeling'],
    possibleQualifications: ['Bachelor of Design (B.Des)', 'BFA (Bachelor of Fine Arts)', 'B.Sc. in Animation & VFX', 'M.Des'],
    exampleCareerOptions: ['UI/UX Designer', 'Brand Identity Specialist', 'Graphic Designer', 'Motion Graphics Animator', 'Product Stylist'],
    skillsToDevelop: ['Figma / Adobe Creative Suite', 'User Empathy', 'Design System Architecture', 'Portfolio Curation'],
    durationTypical: '3 - 4 Years (Undergraduate)',
    deepDive: {
      overview: 'Design education cultivates creative problem solving, visual storytelling, and human-centered design to craft products, websites, and interfaces.',
      topInstitutes: ['National Institute of Design (NID)', 'IDC School of Design, IIT Bombay', 'NIFT (Fashion & Communication)', 'Srishti Institute of Art & Design'],
      curriculumHighlights: ['Design Thinking Methodologies', 'User Interface & Interaction Principles', 'Color Theory & Typography Mastery', 'Live Industry Design Studios'],
      recommendedCertifications: ['Google UX Design Professional Certificate', 'Nielsen Norman Group UX Master Certified', 'Adobe Certified Professional']
    }
  },
  {
    id: 'vocational-education',
    title: 'Vocational & Applied Skills',
    iconName: 'Hammer',
    badge: 'Practical Career Ready',
    colorScheme: {
      bgLight: 'bg-amber-50/70',
      border: 'border-amber-200',
      accent: 'text-amber-700',
      badgeBg: 'bg-amber-100 text-amber-700'
    },
    shortSummary: 'Career-focused hands-on training tailored for immediate industry readiness in specialized technical trades and operations.',
    relevantSubjects: ['Automotive Mechanics', 'Electrical Installation', 'Culinary & Hospitality Arts', 'Digital Media Production', 'Renewable Energy Systems'],
    possibleQualifications: ['B.Voc (Bachelor of Vocation)', 'ITI Certificates (National Trade Certificate)', 'NSQF Aligned Diplomas', 'Apprenticeships'],
    exampleCareerOptions: ['Automotive Technician', 'Industrial Electrician', 'Hospitality Supervisor', 'Network Field Technician'],
    skillsToDevelop: ['Hands-on Tool Mastery', 'Equipment Diagnostics', 'Safety Protocols & Compliance', 'Field Operations'],
    durationTypical: '6 Months to 3 Years',
    deepDive: {
      overview: 'Vocational education emphasizes 60-70% practical workshops and on-the-job apprenticeships, giving students direct skills demanded by industrial and technical sectors.',
      topInstitutes: ['Government Industrial Training Institutes (ITIs)', 'State Technical Boards', 'National Skill Development Corporation (NSDC) Centers'],
      curriculumHighlights: ['Industrial Workshop Practice', 'Safety Regulations & Equipment Handling', 'Blueprint Reading & Diagnostic Testing', 'Apprenticeship with Partner Industries'],
      recommendedCertifications: ['National Trade Certificate (NTC)', 'NSDC Sector Skill Council Certifications', 'Certified Maintenance & Reliability Technician']
    }
  }
];

export const EDUCATION_STAGES: EducationStage[] = [
  {
    stageId: 'after-10',
    title: 'After Class 10',
    badge: 'Foundational Decision Point',
    subtitle: 'Choose your academic stream or direct technical training pathway based on interest and aptitudes.',
    options: [
      {
        name: 'Higher Secondary (Class 11 & 12)',
        duration: '2 Years',
        description: 'Choose between Science (PCM/PCB), Commerce (with/without Math), or Humanities/Arts according to future aspirations.',
        nextSteps: 'Prepares you for university entrance exams, undergraduate degree colleges, and professional diplomas.'
      },
      {
        name: 'Polytechnic Diploma',
        duration: '3 Years',
        description: 'Practical, industry-oriented technical diploma in Mechanical, Civil, Electrical, or Computer Engineering.',
        nextSteps: 'Enables direct lateral entry into 2nd year of B.Tech / B.E. or immediate junior technical employment.'
      },
      {
        name: 'Industrial Training Institute (ITI)',
        duration: '1 - 2 Years',
        description: 'Hands-on trade training in electrical, machining, plumbing, electronics, and automotive repair.',
        nextSteps: 'Leads to National Trade Certificate (NTC) and apprenticeship programs with public/private manufacturers.'
      }
    ]
  },
  {
    stageId: 'after-12',
    title: 'After Class 12',
    badge: 'Undergraduate Exploration',
    subtitle: 'Transition into professional degree programs, university honours, or integrated courses.',
    options: [
      {
        name: 'Professional Degrees (B.Tech, MBBS, B.Des, B.Arch)',
        duration: '4 - 5.5 Years',
        description: 'Rigorous specialized curriculum requiring entrance examinations (JEE, NEET, UCEED, NATA) with clinical or engineering focus.',
        nextSteps: 'Direct entry into specialized professional sectors or postgraduate research.'
      },
      {
        name: 'Undergraduate Degrees (B.Sc, B.Com, B.A, BCA, BBA)',
        duration: '3 - 4 Years (Under NEP)',
        description: 'Comprehensive study with major and minor combinations, offering both core subject mastery and interdisciplinary flexibility.',
        nextSteps: 'Leads to corporate campus hiring, master’s degrees, or competitive civil exams.'
      },
      {
        name: 'Integrated Master’s Programs (BS-MS, Integrated MBA)',
        duration: '5 Years',
        description: 'Combined bachelor and master qualification under a single cohesive syllabus, eliminating the need for a separate PG admission.',
        nextSteps: 'Fast-tracks entry into leadership and academic research labs.'
      }
    ]
  },
  {
    stageId: 'diploma',
    title: 'Diploma Programs',
    badge: 'Skill-Oriented Fast Track',
    subtitle: 'Focused, cost-effective courses that concentrate heavily on practical application.',
    options: [
      {
        name: 'Engineering Polytechnic Diplomas',
        duration: '3 Years',
        description: 'Laboratory and workshop intensive training in mechanical, electrical, computer, and civil domains.',
        nextSteps: 'Direct entry into industry supervisor jobs or lateral admission into Bachelor of Engineering.'
      },
      {
        name: 'Post-Graduate Diplomas (PGD)',
        duration: '1 - 2 Years',
        description: 'Targeted upskilling diplomas in digital marketing, journalism, data analytics, or supply chain.',
        nextSteps: 'Enhances employability for graduates wanting quick industry transition.'
      }
    ]
  },
  {
    stageId: 'undergraduate',
    title: 'Undergraduate Degree',
    badge: 'Core College Foundation',
    subtitle: 'The primary launchpad for professional careers, leadership, and higher academic research.',
    options: [
      {
        name: 'Four-Year Honors Degree with Research',
        duration: '4 Years',
        description: 'Modern university framework incorporating internships, research dissertations, and major-minor specialization.',
        nextSteps: 'Enables direct eligibility for Master’s programs abroad or fast-track Ph.D. pathways.'
      },
      {
        name: 'Campus Placements & Internships',
        duration: 'Final 2 Semesters',
        description: 'On-campus recruitment drives, technical and aptitude tests, and pre-placement corporate offers.',
        nextSteps: 'Launches your full-time professional career in industry.'
      }
    ]
  },
  {
    stageId: 'postgraduate',
    title: 'Postgraduate Degree',
    badge: 'Specialized Expertise',
    subtitle: 'Deepen domain expertise, lead organizational strategy, or advance scientific research.',
    options: [
      {
        name: 'Master of Technology / Master of Science (M.Tech / M.Sc)',
        duration: '2 Years',
        description: 'Advanced technical specialization in robotics, AI, structural engineering, or bio-sciences.',
        nextSteps: 'R&D careers in multinational labs or doctoral studies (Ph.D.).'
      },
      {
        name: 'Master of Business Administration (MBA)',
        duration: '2 Years',
        description: 'Leadership, strategic finance, product marketing, operations, and organizational consulting.',
        nextSteps: 'Executive roles, strategy consulting, investment banking, and startup management.'
      }
    ]
  },
  {
    stageId: 'skill-based',
    title: 'Skill-based Learning',
    badge: 'Continuous Lifelong Upskilling',
    subtitle: 'Certifications, bootcamps, and micro-credentials that directly adapt to emerging technologies.',
    options: [
      {
        name: 'Industry Certification Bootcamps',
        duration: '3 - 6 Months',
        description: 'Intense project-based learning in web development, cloud computing, UX design, or data analytics.',
        nextSteps: 'Portfolio-first hiring, freelance contracting, or role transitions.'
      },
      {
        name: 'Government SWAYAM / NPTEL MOOCs',
        duration: '8 - 12 Weeks',
        description: 'Free high-quality courses taught by premier IIT and university professors with proctored certificate exams.',
        nextSteps: 'Earn verified academic credits and verifiable certificates.'
      }
    ]
  }
];
