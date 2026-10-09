export interface RoadmapStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  actionTips: string[];
  keyOutcome: string;
  iconName: string;
}

export interface ResourceGuide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  keyPoints: string[];
  actionableTips: string[];
  dosAndDonts: {
    dos: string[];
    donts: string[];
  };
}

export interface ChecklistTask {
  id: string;
  text: string;
  details: string;
  category: string;
}

export interface OfficialResourceItem {
  id: string;
  name: string;
  domain: string;
  organization: string;
  url: string;
  badge: string;
  usefulFor: string;
  keyServices: string[];
}

export interface SuccessStoryItem {
  id: string;
  scenarioTitle: string;
  profileName: string;
  avatarSeed: string;
  domain: string;
  pathway: string;
  challenge: string;
  actionTaken: string;
  outcome: string;
  keyTakeaway: string;
  tagColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: 1,
    title: 'Discover Your Interests',
    subtitle: 'Uncover What Inspires You',
    description: 'Begin by observing which activities give you energy versus which drain you. Look at your hobbies, academic subjects, and problems you naturally love solving.',
    actionTips: [
      'Take our Career Assessment Quiz to identify your affinity areas.',
      'List 5 school/college projects or topics you genuinely enjoyed researching.',
      'Interview working professionals in different industries about their day-to-day work.'
    ],
    keyOutcome: 'A list of 3-4 broad career domains that match your natural curiosity.',
    iconName: 'Compass'
  },
  {
    step: 2,
    title: 'Identify Your Strengths',
    subtitle: 'Acknowledge Your Aptitudes',
    description: 'Recognize your analytical, interpersonal, creative, or organizational capabilities. Compare where your natural strengths overlap with market demand.',
    actionTips: [
      'Ask 3 trusted peers or mentors what they think your greatest strength is.',
      'Evaluate your past academic and extracurricular achievements objectively.',
      'Differentiate between fleeting interests and skills you enjoy practicing deeply.'
    ],
    keyOutcome: 'A realistic inventory of your technical, soft, and cognitive strengths.',
    iconName: 'Sparkles'
  },
  {
    step: 3,
    title: 'Explore Career Options',
    subtitle: 'Survey Market Roles',
    description: 'Investigate career trajectories, daily responsibilities, industry trends, and future growth trajectories for each shortlisted domain.',
    actionTips: [
      'Use the Career Explorer below to read detailed job specifications.',
      'Look up entry-level job descriptions on LinkedIn to understand what companies seek.',
      'Attend student career fairs or university webinars featuring industry leaders.'
    ],
    keyOutcome: 'Target 1-2 primary career paths and 1 backup secondary pathway.',
    iconName: 'Search'
  },
  {
    step: 4,
    title: 'Research Qualifications',
    subtitle: 'Chart Educational Requirements',
    description: 'Identify the required degrees, certifications, diploma options, or entrance examinations required to practice legally and competitively.',
    actionTips: [
      'Verify whether your target career requires mandatory licensing (e.g. Medicine, Law, Civil Engineering).',
      'Compare degree paths vs. vocational diploma or online certified tracks.',
      'Understand admission timelines, entrance exam syllabi, and eligibility standards.'
    ],
    keyOutcome: 'Clear academic milestones mapped across 1 to 4 years.',
    iconName: 'GraduationCap'
  },
  {
    step: 5,
    title: 'Learn Essential Skills',
    subtitle: 'Build Core Competence',
    description: 'Bridge skill gaps by systematically studying high-demand tools, software, methodologies, and communication practices.',
    actionTips: [
      'Dedicate 60–90 minutes daily to hands-on learning via free MOOCs like SWAYAM or YouTube tutorials.',
      'Focus on one primary technical skill at a time until you achieve solid proficiency.',
      'Practice soft skills like public speaking, active listening, and technical documentation.'
    ],
    keyOutcome: 'Verifiable competency in key industry tools and concepts.',
    iconName: 'Wrench'
  },
  {
    step: 6,
    title: 'Build Projects or Experience',
    subtitle: 'Demonstrate Real Capability',
    description: 'Theoretical knowledge without practical proof is difficult to demonstrate. Build proof of work: code repositories, design portfolios, or research articles.',
    actionTips: [
      'Build 2 to 3 substantive capstone projects solving a real community or business problem.',
      'Seek college club responsibilities, volunteer gigs, or micro-freelance tasks.',
      'Publish your progress openly on GitHub, Behance, or LinkedIn.'
    ],
    keyOutcome: 'A public portfolio or link demonstrating your applied abilities.',
    iconName: 'FolderGit2'
  },
  {
    step: 7,
    title: 'Prepare Your Resume',
    subtitle: 'Showcase Your Impact',
    description: 'Craft a clean, ATS-compliant single-page resume highlighting demonstrable results, projects, education, and relevant technical capabilities.',
    actionTips: [
      'Use action verbs (Built, Spearheaded, Designed, Analyzed) with quantitative metrics where possible.',
      'Keep formatting clean, legible, and devoid of distracting graphics or subjective ratings.',
      'Tailor your resume slightly for each specific internship or job opening.'
    ],
    keyOutcome: 'A polished, professional 1-page resume ready for submission.',
    iconName: 'FileText'
  },
  {
    step: 8,
    title: 'Apply for Opportunities',
    subtitle: 'Step Into the Professional World',
    description: 'Actively pursue internships, entry-level positions, campus drives, and mentorship opportunities through strategic networking.',
    actionTips: [
      'Network meaningfully with alumni working in your target industries.',
      'Apply to at least 5-10 quality internships or entry openings weekly with custom cover notes.',
      'Treat interview rejections as valuable feedback loops to refine your answers.'
    ],
    keyOutcome: 'Securing your initial internship or entry-level professional launchpad.',
    iconName: 'Send'
  }
];

export const RESOURCE_GUIDES: ResourceGuide[] = [
  {
    id: 'resume-writing',
    title: 'Resume Writing Guide',
    category: 'Application Materials',
    readTime: '6 min read',
    summary: 'Master the art of crafting clean, high-impact resumes that pass Applicant Tracking Systems (ATS) and catch recruiter attention within 10 seconds.',
    keyPoints: [
      'Single-page structure is ideal for students and fresh graduates.',
      'Focus on outcomes and metrics rather than generic responsibilities.',
      'Highlight relevant coursework, projects, tools, and verifiable credentials.'
    ],
    actionableTips: [
      'Formula for bullet points: "Accomplished [X] by implementing [Y], resulting in [Z] metric improvement".',
      'Place technical skills and GitHub / Portfolio links near the top of the resume.',
      'Export strictly as a clean PDF unless specifically requested otherwise.'
    ],
    dosAndDonts: {
      dos: [
        'Use standard font sizes (10-12pt) and generous margins (0.5 - 0.75 in).',
        'Proofread meticulously for grammatical and spelling errors.',
        'List projects with live demo URLs and GitHub source links.'
      ],
      donts: [
        'Do not include photo, marital status, or full street address on tech resumes.',
        'Avoid progress bars or subjective star ratings (e.g., "Python 85%").',
        'Avoid generic buzzwords like "hard worker" without concrete examples.'
      ]
    }
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    category: 'Interview Skills',
    readTime: '7 min read',
    summary: 'A structured blueprint to ace behavioral, technical, and situational interviews with calm confidence and authentic storytelling.',
    keyPoints: [
      'Use the STAR framework (Situation, Task, Action, Result) for behavioral questions.',
      'Research the organization, its mission, and its recent public news beforehand.',
      'Prepare 3 thoughtful questions to ask the interviewer at the close of the conversation.'
    ],
    actionableTips: [
      'Practice out loud in front of a mirror or record yourself on your smartphone to catch filler words.',
      'Prepare a crisp 90-second "Tell me about yourself" narrative highlighting your trajectory.',
      'When you don’t know an answer, clearly explain your reasoning process instead of guessing.'
    ],
    dosAndDonts: {
      dos: [
        'Arrive 10 minutes early (or log in 5 minutes early for virtual interviews).',
        'Maintain comfortable eye contact and active, engaged posture.',
        'Send a brief thank-you email within 24 hours of completing the interview.'
      ],
      donts: [
        'Do not criticize past professors, colleges, or previous employers.',
        'Avoid speaking continuously without pausing for interviewer reactions.',
        'Do not pretend to know technologies you have never touched.'
      ]
    }
  },
  {
    id: 'communication-skills',
    title: 'Communication Skills',
    category: 'Professional Soft Skills',
    readTime: '5 min read',
    summary: 'Hone the written and verbal communication techniques that make people take your ideas seriously in academic and corporate teams.',
    keyPoints: [
      'Conciseness is respect for the listener’s time.',
      'Active listening creates more trust than fast talking.',
      'Clear email formatting saves hours of unnecessary back-and-forth.'
    ],
    actionableTips: [
      'Use the "Bottom Line Up Front" (BLUF) method: state the conclusion or ask in your first sentence.',
      'Format emails with bullet points and bold action items rather than long prose blocks.',
      'Summarize action items and assigned deadlines at the end of meetings.'
    ],
    dosAndDonts: {
      dos: [
        'Acknowledge messages promptly, even if it is just "Received, reviewing this afternoon".',
        'Clarify ambiguities early rather than assuming and building the wrong thing.',
        'Adapt your vocabulary to the audience (avoid technical jargon with business peers).'
      ],
      donts: [
        'Do not send multi-paragraph walls of unstructured text on Slack or email.',
        'Avoid interrupting speakers before they have completed their thoughts.',
        'Never react with emotionally charged messages when stressed.'
      ]
    }
  },
  {
    id: 'internship-prep',
    title: 'Internship Preparation',
    category: 'Early Career',
    readTime: '5 min read',
    summary: 'How to land, succeed at, and convert college internships into full-time pre-placement offers (PPOs).',
    keyPoints: [
      'Internships are practical auditions: attitude and curiosity outshine raw knowledge.',
      'Document your accomplishments weekly to make end-of-internship reviews easy.',
      'Seek feedback proactively at the midpoint of your internship stint.'
    ],
    actionableTips: [
      'Keep a "brag sheet" noting down tasks completed, bugs solved, or docs written each Friday.',
      'Introduce yourself to teammates outside your immediate squad for coffee chats.',
      'Ask your manager: "What would an outstanding outcome look like for this project?"'
    ],
    dosAndDonts: {
      dos: [
        'Be eager to take notes in meetings and volunteer for documentation.',
        'Ask questions after spending 30 minutes trying to debug or find the answer yourself.',
        'Stay dependable: communicate delays before deadlines pass, not after.'
      ],
      donts: [
        'Do not stay silent when blocked on a task for days.',
        'Do not treat the internship as just a certificate-collecting exercise.',
        'Avoid browsing personal social media on work devices.'
      ]
    }
  },
  {
    id: 'portfolio-building',
    title: 'Portfolio Building',
    category: 'Proof of Work',
    readTime: '6 min read',
    summary: 'Build a persuasive proof-of-work portfolio that proves your capabilities better than any degree diploma can.',
    keyPoints: [
      'Depth beats quantity: 3 detailed, polished case studies beat 15 half-baked toy projects.',
      'Always explain the "Why": context, problem, trade-offs made, and measurable impact.',
      'Ensure every project has an accessible live link and responsive mobile styling.'
    ],
    actionableTips: [
      'Include a short 60-second video demo or GIF for each project on your portfolio page.',
      'Write README files on GitHub with installation instructions and architecture diagrams.',
      'Host your portfolio with a custom domain on free platforms like GitHub Pages or Vercel.'
    ],
    dosAndDonts: {
      dos: [
        'Clearly credit libraries and collaborators if it was a group effort.',
        'Include a contact form or clear email address on your homepage.',
        'Keep loading times fast by optimizing images and media.'
      ],
      donts: [
        'Do not just copy tutorial code and claim it as an original project.',
        'Avoid leaving broken demo links or unfinished placeholder "Lorem ipsum" text.',
        'Do not overcomplicate portfolio animations to the point of slowing navigation.'
      ]
    }
  },
  {
    id: 'job-search-basics',
    title: 'Job Search Basics',
    category: 'Career Launch',
    readTime: '5 min read',
    summary: 'Navigate job boards, alumni networks, and direct outreach effectively to land interviews in a competitive market.',
    keyPoints: [
      'Relying solely on "Easy Apply" yields low conversion; warm referrals convert 10x better.',
      'Quality targeted applications outperform 200 generic mass submissions.',
      'Follow up politely on submitted applications after 7 to 10 days.'
    ],
    actionableTips: [
      'Identify college alumni working at target companies and ask for a 15-minute informational chat.',
      'Follow department engineering/design blogs of companies you admire to reference in interviews.',
      'Track your applications in a simple spreadsheet with date, role, company, and contact person.'
    ],
    dosAndDonts: {
      dos: [
        'Personalize your connection requests with a polite 2-sentence note.',
        'Keep your LinkedIn profile headline specific (e.g., "B.Tech CS Student | React & TypeScript Developer").',
        'Prepare thoroughly before any informational interview.'
      ],
      donts: [
        'Do not message strangers asking bluntly "Please give me a job" or "Refer me" without rapport.',
        'Do not get discouraged by automated rejections—they are part of the process for everyone.',
        'Avoid applying to multiple incompatible roles at the same company simultaneously.'
      ]
    }
  }
];

export const CHECKLIST_ITEMS: ChecklistTask[] = [
  {
    id: 'check-1',
    text: 'Identify three career interests.',
    details: 'Explore different career cards, take the quiz, and note down 3 potential fields that match your curiosities.',
    category: 'Self Discovery'
  },
  {
    id: 'check-2',
    text: 'Research educational requirements.',
    details: 'Verify required degrees, college options, entrance tests, or certification standards for your target paths.',
    category: 'Education'
  },
  {
    id: 'check-3',
    text: 'List important skills.',
    details: 'Create a specific checklist of both technical software tools and communication skills required in that role.',
    category: 'Skills'
  },
  {
    id: 'check-4',
    text: 'Choose a learning resource.',
    details: 'Enroll in a structured MOOC (SWAYAM, Coursera, CS50, or textbook) and schedule regular study hours.',
    category: 'Preparation'
  },
  {
    id: 'check-5',
    text: 'Complete a small project.',
    details: 'Apply what you learned by building a real proof-of-work project or research paper from start to finish.',
    category: 'Execution'
  },
  {
    id: 'check-6',
    text: 'Prepare a resume.',
    details: 'Format a clean 1-page ATS-friendly resume highlighting your projects, education, and skills.',
    category: 'Materials'
  },
  {
    id: 'check-7',
    text: 'Explore internships or entry-level roles.',
    details: 'Research entry openings, campus recruitment calendars, or reach out to alumni for guidance and applications.',
    category: 'Career Launch'
  }
];

export const OFFICIAL_RESOURCES: OfficialResourceItem[] = [
  {
    id: 'ncs',
    name: 'National Career Service (NCS)',
    domain: 'ncs.gov.in',
    organization: 'Ministry of Labour & Employment, Govt of India',
    url: 'https://www.ncs.gov.in',
    badge: 'National Portal',
    usefulFor: 'Free national career counseling, verified job fairs, apprenticeship listings, and vocational guidance centers.',
    keyServices: ['Job seeker registration', 'Career counseling sessions', 'Apprenticeship notices', 'Skill training center finder']
  },
  {
    id: 'swayam',
    name: 'SWAYAM Portal',
    domain: 'swayam.gov.in',
    organization: 'Ministry of Education, Govt of India',
    url: 'https://swayam.gov.in',
    badge: 'Free Online Education',
    usefulFor: 'Free university-level online courses taught by premier faculty from IITs, IIMs, and Central Universities with transferable academic credits.',
    keyServices: ['Free video lectures & readings', 'Academic credit transfers', 'Proctored certification exams', 'High school to postgrad courses']
  },
  {
    id: 'aicte',
    name: 'AICTE Student Portal',
    domain: 'aicte-india.org',
    organization: 'All India Council for Technical Education',
    url: 'https://www.aicte-india.org',
    badge: 'Technical Education',
    usefulFor: 'Accreditation verification for engineering and management colleges, official scholarship schemes, and national internship portals.',
    keyServices: ['College accreditation directory', 'National Internship Portal', 'Pragati & Saksham scholarships', 'Approved curriculum models']
  },
  {
    id: 'ugc',
    name: 'UGC University Grants Commission',
    domain: 'ugc.ac.in',
    organization: 'Statutory Body, Govt of India',
    url: 'https://www.ugc.ac.in',
    badge: 'Higher Education Regulatory',
    usefulFor: 'Verification of recognized state, central, and deemed universities, National Eligibility Test (NET) rules, and degree validity guidelines.',
    keyServices: ['Recognized university registry', 'UGC-NET exam guidelines', 'Academic Bank of Credits (ABC)', 'Higher education policies']
  },
  {
    id: 'nptel',
    name: 'NPTEL (National Programme on Technology Enhanced Learning)',
    domain: 'nptel.ac.in',
    organization: 'IITs & IISc Joint Initiative',
    url: 'https://nptel.ac.in',
    badge: 'STEM Courses',
    usefulFor: 'Deep technical coursework in computer science, civil, electrical, aerospace, and basic sciences created by IIT professors.',
    keyServices: ['IIT faculty-led semester courses', 'Weekly graded assignments', 'In-person proctored exams', 'Industry recognized certificates']
  },
  {
    id: 'diksha',
    name: 'DIKSHA National Digital Infrastructure',
    domain: 'diksha.gov.in',
    organization: 'Ministry of Education & NCERT',
    url: 'https://diksha.gov.in',
    badge: 'School & Teacher Education',
    usefulFor: 'Interactive textbooks, teaching aids, and learning resources mapped directly to state and CBSE school curriculums.',
    keyServices: ['Digital NCERT textbooks', 'QR code linked interactive lessons', 'Teacher professional training', 'Multilingual resources']
  }
];

export const SUCCESS_STORIES: SuccessStoryItem[] = [
  {
    id: 'story-1',
    scenarioTitle: 'From Non-CS Background to Junior Software Developer',
    profileName: 'Aarav’s Journey (Illustrative Case)',
    avatarSeed: 'aarav',
    domain: 'Technology',
    pathway: 'Self-Directed Coding + College Capstone',
    challenge: 'Enrolled in a general sciences program with zero prior coding experience; felt intimidated by competitive programming.',
    actionTaken: 'Completed free CS50 lectures, built 3 full-stack React web apps, solved daily logic challenges, and contributed to an open-source college attendance tool.',
    outcome: 'Built a demonstrable GitHub portfolio and successfully landed an entry-level associate frontend developer role during graduation.',
    keyTakeaway: 'Consistent hands-on building and public proof-of-work matter more to many modern tech teams than high school grades.',
    tagColor: 'bg-purple-100 text-purple-700 border-purple-200'
  },
  {
    id: 'story-2',
    scenarioTitle: 'Disciplined Preparation for Public Sector Services',
    profileName: 'Priya’s Journey (Illustrative Case)',
    avatarSeed: 'priya',
    domain: 'Government & Public Services',
    pathway: 'Bachelor’s Degree + Structured Exam Prep',
    challenge: 'Faced a massive competitive syllabus, overwhelming current affairs, and high competition for administrative openings.',
    actionTaken: 'Created a rigid 18-month timetable, mastered NCERT foundation books, wrote daily 150-word editorial answers, and took 40+ timed mock test series.',
    outcome: 'Successfully cleared the State Public Service Commission examination with a high rank and entered administrative service.',
    keyTakeaway: 'Consistency, emotional resilience, and analyzing past question trends are the bedrock of competitive exam success.',
    tagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200'
  },
  {
    id: 'story-3',
    scenarioTitle: 'Crafting a Standout UI/UX Design Portfolio',
    profileName: 'Kavya’s Journey (Illustrative Case)',
    avatarSeed: 'kavya',
    domain: 'Creative Design',
    pathway: 'Humanities Graduate to Digital Product Designer',
    challenge: 'Transitioning from an English literature background into digital design without an expensive private design school degree.',
    actionTaken: 'Studied Figma, read classic UX heuristics books, conducted user interviews with local college students to redesign an inefficient transit app, and documented the complete case study.',
    outcome: 'Her detailed case study caught the eye of a design studio recruiter on Behance, leading to a paid product design apprenticeship.',
    keyTakeaway: 'A design portfolio that demonstrates user empathy and iterative problem solving is the best passport into creative agencies.',
    tagColor: 'bg-pink-100 text-pink-700 border-pink-200'
  },
  {
    id: 'story-4',
    scenarioTitle: 'Polytechnic Diploma to Field Engineering Supervisor',
    profileName: 'Rohan’s Journey (Illustrative Case)',
    avatarSeed: 'rohan',
    domain: 'Engineering & Construction',
    pathway: '3-Year Polytechnic Diploma + Industry Apprenticeship',
    challenge: 'Wanted to enter the workforce quickly to support family finances without waiting for a 4-year university engineering degree.',
    actionTaken: 'Completed a 3-year Civil Polytechnic Diploma, mastered AutoCAD and Total Station surveying tools, and completed a 6-month government road project apprenticeship.',
    outcome: 'Employed as a Junior Site Engineer at an infrastructure firm with corporate sponsorship for evening B.Tech lateral degree classes.',
    keyTakeaway: 'Vocational and diploma routes provide rapid practical employability along with pathways for continuing higher education.',
    tagColor: 'bg-amber-100 text-amber-700 border-amber-200'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I choose the right career?',
    answer: 'Start by examining the intersection of three factors: (1) what you are genuinely curious about, (2) your natural cognitive and personal strengths, and (3) realistic industry demand. Take our interactive career quiz, speak to working professionals in fields that interest you, and test the waters with small starter projects or introductory online courses before making high-stakes commitments.',
    category: 'Decision Making'
  },
  {
    id: 'faq-2',
    question: 'Which skills should students learn first?',
    answer: 'Regardless of your field, invest first in universal core competencies: clear written and verbal communication, digital literacy, problem-solving reasoning, and basic financial awareness. Once those foundations are steady, branch into field-specific hard skills such as programming, data analysis, CAD modeling, or visual design.',
    category: 'Skill Building'
  },
  {
    id: 'faq-3',
    question: 'What can I do after Class 12?',
    answer: 'Your options depend on your stream and career goals. Science students can pursue B.Tech, MBBS, B.Sc, or BCA; Commerce students often choose B.Com, BBA, CA, or CS; and Arts students can excel in B.A., Law (BA LLB), Journalism, or Design. You can also explore 3-year vocational diplomas, skill bootcamps, or defense services entrance tests (such as NDA).',
    category: 'Higher Education'
  },
  {
    id: 'faq-4',
    question: 'How can I find internships as a beginner student?',
    answer: 'Start with platforms like the AICTE Internship Portal, National Career Service, LinkedIn, and Internshala. Build a simple portfolio or GitHub profile showcasing 1-2 completed projects. Additionally, reach out politely to college alumni or local startups offering to help with specific tasks such as content, testing, or junior development.',
    category: 'Internships'
  },
  {
    id: 'faq-5',
    question: 'Is a formal degree necessary for every career?',
    answer: 'Not for every career, but it depends heavily on the industry. Fields like Medicine, Civil Engineering, Law, and Public Administration legally mandate accredited degrees and government licenses. In contrast, domains like Web Development, UI/UX Design, Digital Marketing, and Entrepreneurship place paramount value on proven skills, portfolio quality, and practical problem solving.',
    category: 'Qualifications'
  },
  {
    id: 'faq-6',
    question: 'How can I change my career path if I chose the wrong stream?',
    answer: 'Transitioning careers is common and feasible! Start by identifying transferable skills (e.g. communication, project management, logic). Next, dedicate evening or weekend hours to self-paced certifications or bootcamps in your new field. Build 2-3 tangible projects in the new domain to prove competence, and seek entry-level roles or internships that value cross-disciplinary perspectives.',
    category: 'Career Change'
  }
];
