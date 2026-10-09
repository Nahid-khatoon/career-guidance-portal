export interface CareerItem {
  id: string;
  title: string;
  category: 'Technology' | 'Healthcare' | 'Engineering' | 'Education' | 'Business' | 'Creative Careers' | 'Government Careers';
  shortDescription: string;
  iconName: string;
  badgeColor: string;
  skills: string[];
  educationPathway: string;
  overview: string;
  responsibilities: string[];
  requiredSkills: {
    technical: string[];
    soft: string[];
  };
  qualifications: string[];
  learningRoadmap: {
    step: number;
    title: string;
    description: string;
  }[];
  exampleJobRoles: string[];
  relatedCareers: string[];
}

export const CAREER_CATEGORIES = [
  'All Careers',
  'Technology',
  'Healthcare',
  'Engineering',
  'Education',
  'Business',
  'Creative Careers',
  'Government Careers',
] as const;

export const CAREERS_DATA: CareerItem[] = [
  {
    id: 'software-developer',
    title: 'Software Developer',
    category: 'Technology',
    shortDescription: 'Designs, builds, tests, and maintains computer software and mobile applications that power modern industries.',
    iconName: 'Code',
    badgeColor: 'from-purple-500 to-indigo-600',
    skills: ['JavaScript / TypeScript', 'Python', 'React / Node.js', 'System Architecture', 'Git & CI/CD'],
    educationPathway: 'B.Tech / B.E. in CS / BCA / MCA / Self-taught with projects',
    overview: 'Software Developers are the architects of the digital age. They transform complex problems into efficient, scalable applications and systems used daily by millions across web, desktop, and cloud environments.',
    responsibilities: [
      'Write clean, modular, maintainable code following modern software standards.',
      'Collaborate with product designers, testers, and product managers to refine features.',
      'Diagnose bugs, optimize system bottlenecks, and ensure data integrity.',
      'Build and consume RESTful and GraphQL APIs.',
      'Maintain automated testing pipelines and deploy software updates.'
    ],
    requiredSkills: {
      technical: ['Data Structures & Algorithms', 'Modern Frameworks (React/Vue/Next)', 'Database Design (SQL & NoSQL)', 'Version Control (Git/GitHub)'],
      soft: ['Logical Thinking', 'Team Collaboration', 'Continuous Learning', 'Effective Communication']
    },
    qualifications: [
      'Bachelor’s Degree in Computer Science, Software Engineering, or related field (often preferred).',
      'Or BCA / MCA / B.Sc. in Computer Science.',
      'Equivalent demonstrable experience through verified portfolio projects and open-source contributions.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Programming Fundamentals', description: 'Master one core programming language (Python, JavaScript, or Java) along with algorithmic problem solving.' },
      { step: 2, title: 'Web & System Basics', description: 'Learn front-end foundations (HTML/CSS/JS) and back-end logic, including APIs and databases.' },
      { step: 3, title: 'Real-world Projects', description: 'Build 3-4 full-stack projects showcasing authentication, database management, and responsive UI.' },
      { step: 4, title: 'Version Control & Team Tools', description: 'Collaborate using Git, branch management, pull requests, and automated deployment.' }
    ],
    exampleJobRoles: ['Full Stack Developer', 'Front-End Engineer', 'Back-End Developer', 'Mobile App Engineer'],
    relatedCareers: ['Data Analyst', 'Cybersecurity Analyst', 'UI/UX Designer']
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'Technology',
    shortDescription: 'Collects, inspects, and interprets numerical data to discover business insights and empower strategic decisions.',
    iconName: 'BarChart3',
    badgeColor: 'from-blue-500 to-indigo-600',
    skills: ['SQL', 'Python / R', 'Tableau / PowerBI', 'Excel Modeling', 'Statistical Analysis'],
    educationPathway: 'Degree in Math, Statistics, Computer Science, Economics, or Commerce',
    overview: 'Data Analysts bridge raw telemetry with business strategy. By translating complex figures into clear visualizations and actionable metrics, they guide organizations in improving efficiency, revenue, and customer satisfaction.',
    responsibilities: [
      'Query relational and distributed databases to extract actionable datasets.',
      'Cleanse and validate structured and unstructured data for accuracy.',
      'Build automated dashboards and visual KPI reports for stakeholders.',
      'Conduct exploratory data analysis to identify trends and statistical anomalies.',
      'Present findings in plain language to non-technical executive teams.'
    ],
    requiredSkills: {
      technical: ['SQL Queries & Joins', 'Python (Pandas, NumPy)', 'Data Visualization (PowerBI, Tableau)', 'Spreadsheet Modeling'],
      soft: ['Attention to Detail', 'Critical Problem Solving', 'Business Acumen', 'Storytelling with Data']
    },
    qualifications: [
      'Bachelor’s in Statistics, Mathematics, Computer Applications, Economics, or Business.',
      'Specialized data certificates or project portfolios demonstrating analytical prowess.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Excel & Statistics Mastery', description: 'Learn advanced spreadsheet formulas, pivot tables, and core descriptive and inferential statistics.' },
      { step: 2, title: 'SQL & Database Queries', description: 'Learn relational database queries, joins, aggregations, window functions, and indexing.' },
      { step: 3, title: 'Data Visualisation Tools', description: 'Master Power BI or Tableau to build interactive and aesthetic executive dashboards.' },
      { step: 4, title: 'Python for Analytics', description: 'Use Pandas and Matplotlib/Seaborn for data cleaning, transformation, and automated reporting.' }
    ],
    exampleJobRoles: ['Business Intelligence Analyst', 'Marketing Data Specialist', 'Operations Analyst', 'Healthcare Data Analyst'],
    relatedCareers: ['Business Analyst', 'Software Developer', 'Digital Marketer']
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    category: 'Creative Careers',
    shortDescription: 'Crafts intuitive, user-friendly digital experiences, wireframes, and prototypes for mobile and web products.',
    iconName: 'Palette',
    badgeColor: 'from-fuchsia-500 to-purple-600',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
    educationPathway: 'B.Des / BFA / Multimedia / Self-taught design portfolio',
    overview: 'UI/UX Designers synthesize empathy with aesthetics. They research user frustrations, design intuitive navigation flows, and craft cohesive visual systems that make digital technology delightful and effortless to use.',
    responsibilities: [
      'Conduct qualitative and quantitative user interviews and usability tests.',
      'Map user journeys, task flows, information architecture, and low-fidelity wireframes.',
      'Design high-fidelity component libraries and scalable design systems in Figma.',
      'Create interactive prototypes to demonstrate interaction states and transitions.',
      'Handoff specifications and assets cleanly to frontend engineering teams.'
    ],
    requiredSkills: {
      technical: ['Figma / Sketch', 'Wireframing & Prototyping', 'Design Systems & Tokens', 'Interaction Design'],
      soft: ['User Empathy', 'Visual Communication', 'Active Listening', 'Constructive Feedback Iteration']
    },
    qualifications: [
      'Degree or Diploma in Interaction Design, Graphic Design, Human-Computer Interaction (HCI), or Arts.',
      'Strong case-study portfolio showing research-driven design solutions.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Design Principles & Psychology', description: 'Understand typography, color theory, contrast ratios, hierarchy, and UX heuristics.' },
      { step: 2, title: 'Mastering Figma', description: 'Learn auto-layout, components, variants, variables, and interactive prototyping.' },
      { step: 3, title: 'User Research & Journey Mapping', description: 'Practice conducting user tests, defining personas, and sketching wireframes.' },
      { step: 4, title: 'Portfolio Development', description: 'Create 2-3 thorough end-to-end case studies documenting your problem-solving process.' }
    ],
    exampleJobRoles: ['Product Designer', 'UX Researcher', 'Interaction Designer', 'Visual Designer'],
    relatedCareers: ['Graphic Designer', 'Software Developer', 'Digital Marketer']
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    category: 'Technology',
    shortDescription: 'Guards networks, computer hardware, sensitive records, and cloud infrastructure against cyber threats and breaches.',
    iconName: 'ShieldCheck',
    badgeColor: 'from-violet-600 to-indigo-800',
    skills: ['Network Security', 'Ethical Hacking', 'Threat Analysis', 'SIEM Tools', 'Incident Response'],
    educationPathway: 'B.Tech / B.Sc in IT or Computer Science / CompTIA Security+ / CEH',
    overview: 'Cybersecurity Analysts are the digital defenders of modern enterprises. They monitor networks around the clock, assess vulnerabilities, simulate attacks, and establish cryptographic defenses to thwart malicious actors.',
    responsibilities: [
      'Continuously inspect network logs and monitor automated intrusion alerts.',
      'Perform regular vulnerability assessments and configure firewall rules.',
      'Investigate security incidents, document attack vectors, and contain breaches.',
      'Train employees on phishing prevention, password hygiene, and data compliance.',
      'Ensure regulatory adherence with data privacy standards.'
    ],
    requiredSkills: {
      technical: ['TCP/IP & Network Protocols', 'Linux Administration', 'Penetration Testing Tools (Wireshark, Nmap)', 'SIEM Platforms (Splunk)'],
      soft: ['Analytical Mindset', 'Calm Crisis Response', 'Discretion & Ethics', 'Investigative Persistence']
    },
    qualifications: [
      'Degree in Computer Science, Information Security, or Computer Applications.',
      'Industry certifications like CompTIA Security+, CEH, or CISSP enhance prospects.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Networking & Operating Systems', description: 'Deeply understand OSI model, IP routing, ports, protocols, and Linux CLI administration.' },
      { step: 2, title: 'Security Fundamentals', description: 'Learn encryption, hashing, authentication protocols, and common attack types (OWASP Top 10).' },
      { step: 3, title: 'Defensive Tools & Monitoring', description: 'Practice with SIEM platforms, Wireshark packet capture, and vulnerability scanners.' },
      { step: 4, title: 'Hands-on Labs & CTF Challenges', description: 'Participate in platforms like TryHackMe or HackTheBox to build practical incident response skills.' }
    ],
    exampleJobRoles: ['SOC Analyst', 'Penetration Tester', 'Security Consultant', 'Information Security Officer'],
    relatedCareers: ['Software Developer', 'Data Analyst', 'Civil Engineer']
  },
  {
    id: 'doctor',
    title: 'Doctor (Medical Practitioner)',
    category: 'Healthcare',
    shortDescription: 'Diagnoses illnesses, provides treatment plans, prescribes medicine, and safeguards human life and well-being.',
    iconName: 'Stethoscope',
    badgeColor: 'from-sky-500 to-blue-700',
    skills: ['Clinical Diagnosis', 'Patient Care', 'Medical Pharmacology', 'Emergency Response', 'Empathy'],
    educationPathway: 'MBBS / MD / Specialised Medical Degrees via Entrance Exams (e.g. NEET)',
    overview: 'Medical Doctors dedicate their careers to clinical healing and public healthcare. They analyze clinical symptoms, order diagnostic tests, perform interventions, and guide patients through recovery and wellness.',
    responsibilities: [
      'Examine patients and record comprehensive medical histories.',
      'Order and interpret diagnostic tests such as X-rays, blood profiles, and CT scans.',
      'Formulate evidence-based treatment plans and prescribe medications.',
      'Perform medical procedures or surgeries depending on specialization.',
      'Counsel patients and families regarding lifestyle modifications and preventative health.'
    ],
    requiredSkills: {
      technical: ['Human Anatomy & Physiology', 'Pathology & Pharmacology', 'Surgical / Clinical Protocols', 'Medical Records Systems'],
      soft: ['Compassion & Empathy', 'Composure Under Pressure', 'Active Listening', 'Ethical Decision Making']
    },
    qualifications: [
      'Higher Secondary education with Physics, Chemistry, and Biology (PCB).',
      'Completion of competitive medical entrance examinations (such as NEET).',
      '5.5-year MBBS degree including compulsory clinical internship followed by medical council licensing.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Pre-Medical Science Foundations', description: 'Score strongly in 10+2 PCB subjects and prepare systematically for competitive entrance tests.' },
      { step: 2, title: 'Undergraduate Medical Training', description: 'Complete 4.5 years of rigorous medical coursework covering anatomy, biochemistry, pathology, and surgery.' },
      { step: 3, title: 'Rotational Internship', description: 'Gain real clinical ward experience across emergency, pediatrics, medicine, and surgery departments.' },
      { step: 4, title: 'Post-Graduation (MD/MS)', description: 'Pursue specialized residency training in Cardiology, Neurology, Pediatrics, General Surgery, etc.' }
    ],
    exampleJobRoles: ['General Physician', 'Surgeon', 'Pediatrician', 'Cardiologist', 'Hospital Resident'],
    relatedCareers: ['Teacher', 'Civil Engineer', 'Data Analyst']
  },
  {
    id: 'civil-engineer',
    title: 'Civil Engineer',
    category: 'Engineering',
    shortDescription: 'Plans, designs, supervises, and manages the construction of infrastructure like bridges, roads, and buildings.',
    iconName: 'Building2',
    badgeColor: 'from-amber-500 to-orange-600',
    skills: ['AutoCAD', 'Structural Analysis', 'Project Management', 'Surveying', 'Material Science'],
    educationPathway: 'B.Tech / B.E. / Diploma in Civil Engineering',
    overview: 'Civil Engineers shape the physical world around us. They calculate structural loads, test soil stability, oversee on-site construction safety, and engineer resilient cities and transit networks.',
    responsibilities: [
      'Design structural layouts and blue-prints using CAD software.',
      'Analyze site survey reports, soil mechanics, and environmental impact assessments.',
      'Calculate structural loads, materials specifications, and budget projections.',
      'Supervise on-site contractors to ensure adherence to safety building codes.',
      'Coordinate municipal approvals and environmental clearances.'
    ],
    requiredSkills: {
      technical: ['AutoCAD / Revit / STAAD.Pro', 'Structural Mechanics', 'Surveying Equipment', 'Cost Estimation & BOQ'],
      soft: ['Site Leadership', 'Risk Assessment', 'Vendor Negotiation', 'Time Management']
    },
    qualifications: [
      'Higher secondary education in Mathematics, Physics, and Chemistry (PCM).',
      'B.Tech or B.E. in Civil Engineering from an accredited engineering college.',
      'Polytechnic Diploma in Civil Engineering for junior supervisor roles.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Engineering Foundations', description: 'Master statics, mathematics, fluid mechanics, and engineering drawing.' },
      { step: 2, title: 'Civil CAD & Design Software', description: 'Learn drafting tools like AutoCAD, Revit BIM, and structural analysis packages like STAAD.Pro.' },
      { step: 3, title: 'Site Internships & Lab Work', description: 'Conduct concrete strength tests, total station surveying, and complete construction site internships.' },
      { step: 4, title: 'Licensing & Project Execution', description: 'Prepare for engineering licensure, GATE exams, or enter infrastructure firms as a graduate engineer.' }
    ],
    exampleJobRoles: ['Structural Engineer', 'Site Engineer', 'Construction Project Manager', 'Transportation Planner'],
    relatedCareers: ['Software Developer', 'Government Services', 'UI/UX Designer']
  },
  {
    id: 'teacher',
    title: 'Educator / Teacher',
    category: 'Education',
    shortDescription: 'Inspires, educates, and mentors students in schools, colleges, or online learning environments.',
    iconName: 'GraduationCap',
    badgeColor: 'from-emerald-500 to-teal-700',
    skills: ['Curriculum Planning', 'Classroom Leadership', 'EdTech Tools', 'Communication', 'Mentorship'],
    educationPathway: 'B.Ed / D.El.Ed / Master’s Degree / NET or CTET Certifications',
    overview: 'Teachers and educators shape the future by nurturing knowledge, critical thinking, and character in young minds. They create supportive classroom climates, foster curiosity, and adapt curricula to varied student learning styles.',
    responsibilities: [
      'Develop engaging lesson plans aligned with educational standards and boards.',
      'Deliver interactive lectures, activities, and discussions.',
      'Assess student performance through formative assignments and examinations.',
      'Mentor students experiencing academic or personal difficulties.',
      'Communicate constructively with parents and school administrators.'
    ],
    requiredSkills: {
      technical: ['Subject-Matter Expertise', 'Learning Management Systems (LMS)', 'Multimedia Presentation Tools', 'Educational Psychology'],
      soft: ['Patience & Empathy', 'Enthusiastic Delivery', 'Conflict Resolution', 'Adaptability']
    },
    qualifications: [
      'Graduation or Post-Graduation in chosen subject area (Math, English, Science, History, etc.).',
      'Professional education degree such as Bachelor of Education (B.Ed) or Diploma in Elementary Education.',
      'Passing teacher eligibility assessments (such as CTET or State TET) for public schools.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Subject Mastery', description: 'Build deep foundational knowledge in your chosen academic discipline during your Bachelor’s degree.' },
      { step: 2, title: 'Pedagogy Training (B.Ed)', description: 'Learn student psychology, lesson planning, instructional design, and classroom management.' },
      { step: 3, title: 'Student Teaching Practicum', description: 'Spend guided semesters teaching in real classrooms to refine communication style and feedback methods.' },
      { step: 4, title: 'Certification & Hiring', description: 'Clear Teacher Eligibility Tests (TET/NET) and apply to schools, academies, or digital learning platforms.' }
    ],
    exampleJobRoles: ['High School Teacher', 'College Lecturer', 'Instructional Designer', 'Online Tutor'],
    relatedCareers: ['Doctor', 'UI/UX Designer', 'Government Services']
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketer',
    category: 'Business',
    shortDescription: 'Drives audience engagement, brand awareness, and conversions through SEO, social media, and paid ads.',
    iconName: 'Megaphone',
    badgeColor: 'from-pink-500 to-rose-600',
    skills: ['Search Engine Optimization (SEO)', 'Content Strategy', 'Social Media Ads', 'Google Analytics', 'Copywriting'],
    educationPathway: 'Bachelor’s in Marketing, Media, Mass Comm, BBA, or Skill Certifications',
    overview: 'Digital Marketers amplify brand stories in the digital sphere. By blending creative copywriting with performance analytics, they target the right audiences across search engines, social platforms, and email campaigns.',
    responsibilities: [
      'Formulate and execute organic and paid marketing campaigns across web channels.',
      'Optimize websites for higher organic search rankings through keyword research.',
      'Manage advertising budgets across Google Ads and Meta Ads platforms.',
      'Analyze conversion funnels, churn rates, and return on ad spend (ROAS).',
      'Create engaging content calendars and coordinate with graphic designers.'
    ],
    requiredSkills: {
      technical: ['Google Analytics 4 & Search Console', 'Paid Ads Management (Meta, Google)', 'SEO Tools (Ahrefs, Semrush)', 'Email Automation'],
      soft: ['Persuasive Copywriting', 'Analytical Curiosity', 'Trend Awareness', 'Strategic Collaboration']
    },
    qualifications: [
      'Degree in Business Administration, Marketing, Mass Communication, or Humanities.',
      'Practical campaign portfolio and industry certifications (Google Ads, HubSpot Academy).'
    ],
    learningRoadmap: [
      { step: 1, title: 'Marketing Foundations', description: 'Understand buyer personas, consumer psychology, funnels (AIDA), and value propositions.' },
      { step: 2, title: 'SEO & Content Marketing', description: 'Learn on-page SEO, link-building, blog writing, and keyword research tools.' },
      { step: 3, title: 'Paid Ads & Analytics', description: 'Set up ad campaigns with clear targeting, track UTM links, and measure metrics in GA4.' },
      { step: 4, title: 'Campaign Management', description: 'Execute live marketing projects for small businesses or personal websites to prove ROI.' }
    ],
    exampleJobRoles: ['SEO Specialist', 'Performance Marketing Specialist', 'Content Strategist', 'Social Media Manager'],
    relatedCareers: ['Business Analyst', 'UI/UX Designer', 'Entrepreneur']
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    category: 'Business',
    shortDescription: 'Evaluates business workflows, identifies bottlenecks, and bridges business goals with tech implementations.',
    iconName: 'TrendingUp',
    badgeColor: 'from-indigo-600 to-blue-700',
    skills: ['Requirements Gathering', 'Process Mapping', 'SQL', 'Agile / Scrum', 'Financial Modeling'],
    educationPathway: 'BBA / MBA / B.Tech / Commerce / Economics',
    overview: 'Business Analysts act as translators between commercial executives and technical product teams. They evaluate workflows, clarify functional requirements, and ensure projects achieve measurable financial and operational targets.',
    responsibilities: [
      'Interview business stakeholders to elicit detailed business and functional requirements.',
      'Draft clear Business Requirement Documents (BRD) and user stories in Jira.',
      'Map current-state (As-Is) and target-state (To-Be) organizational workflows.',
      'Collaborate with developers and QA to validate that software matches business needs.',
      'Conduct cost-benefit analysis and post-implementation impact reviews.'
    ],
    requiredSkills: {
      technical: ['BPMN Workflow Diagramming', 'SQL & Data Modeling', 'Jira / Confluence', 'Spreadsheets & Financial Analysis'],
      soft: ['Stakeholder Management', 'Active Negotiation', 'Clear Documentation', 'Critical Problem Solving']
    },
    qualifications: [
      'Graduation in Business (BBA, B.Com), Engineering, or Computer Applications.',
      'MBA or certification such as ECBA / CCBA from IIBA offers strong advantage.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Business Process & Finance', description: 'Understand basic finance, organizational operations, and revenue drivers.' },
      { step: 2, title: 'Documentation & Modeling', description: 'Learn how to write user stories, acceptance criteria, and draw flowcharts with BPMN.' },
      { step: 3, title: 'Agile & Scrum Methodologies', description: 'Understand sprint cycles, backlog grooming, retrospectives, and Jira boards.' },
      { step: 4, title: 'Data-driven Decision Making', description: 'Learn SQL basics and dashboarding to validate business hypotheses with factual numbers.' }
    ],
    exampleJobRoles: ['Product Business Analyst', 'Systems Analyst', 'Operations Consultant', 'Functional Consultant'],
    relatedCareers: ['Data Analyst', 'Digital Marketer', 'Entrepreneur']
  },
  {
    id: 'government-services',
    title: 'Government & Public Services',
    category: 'Government Careers',
    shortDescription: 'Contributes to public policy, governance, civic administration, and social welfare through public sector roles.',
    iconName: 'Landmark',
    badgeColor: 'from-slate-700 to-indigo-900',
    skills: ['Public Administration', 'Civic Policy', 'Constitutional Law', 'General Knowledge', 'Integrity'],
    educationPathway: 'Any Recognized Bachelor’s Degree + Competitive Examination (UPSC, SSC, State PSC, Banking)',
    overview: 'Public servants manage administrative machinery, enforce rule of law, deliver public welfare schemes, and guide regional governance. These roles offer high societal impact and opportunities to serve citizens directly.',
    responsibilities: [
      'Administer government policies, welfare programs, and public resource distribution.',
      'Coordinate disaster management, law and order, or departmental logistics.',
      'Draft administrative reports, citizen services audits, and regulatory compliance.',
      'Supervise district or departmental staff to ensure timely delivery of services.',
      'Liaise with community groups, local panchayats, and civic stakeholders.'
    ],
    requiredSkills: {
      technical: ['Statutory Regulations', 'Office Procedures & Notes', 'Budgetary Accounting', 'Public Policy Frameworks'],
      soft: ['High Integrity', 'Impartial Judgment', 'Public Leadership', 'Resilience Under Pressure']
    },
    qualifications: [
      'Any recognized graduation degree from an accredited university.',
      'Clearing structured competitive multi-stage exams (Prelims, Mains, and Interview).',
      'Meeting requisite age and physical fitness norms defined by official exam commissions.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Graduation & Current Affairs Foundation', description: 'Earn your university degree while cultivating daily reading of national newspapers and constitutional basics.' },
      { step: 2, title: 'Syllabus & Past Paper Analysis', description: 'Thoroughly review syllabus of target exams (e.g., UPSC CSE, SSC CGL, State PSC, Banking) and solve 5-year question papers.' },
      { step: 3, title: 'Comprehensive Subject Study', description: 'Systematically study polity, economy, modern history, geography, and general science with standard reference books.' },
      { step: 4, title: 'Mock Test Series & Answer Writing', description: 'Enroll in timed mock exams, practice descriptive answer writing, and hone personal interview presentation.' }
    ],
    exampleJobRoles: ['Civil Services Officer (IAS/IPS/IFS)', 'Departmental Section Officer', 'Public Sector Bank Probationary Officer', 'Sub-Divisional Magistrate'],
    relatedCareers: ['Teacher', 'Civil Engineer', 'Business Analyst']
  },
  {
    id: 'entrepreneur',
    title: 'Entrepreneur / Startup Founder',
    category: 'Business',
    shortDescription: 'Identifies market opportunities, innovates products or services, and builds scalable business enterprises.',
    iconName: 'Rocket',
    badgeColor: 'from-purple-600 to-pink-600',
    skills: ['Product Innovation', 'Financial Planning', 'Leadership', 'Sales & Pitching', 'Resilience'],
    educationPathway: 'Any Degree / Experiential Learning / Incubator Programs',
    overview: 'Entrepreneurs are innovators who convert bold ideas into viable organizations. They assemble multidisciplinary teams, secure seed funding or bootstrap capital, navigate commercial risks, and build products people love.',
    responsibilities: [
      'Validate product-market fit through rapid customer interviews and prototypes.',
      'Assemble, motivate, and mentor a core founding team.',
      'Manage operating cash flow, profit margins, and fundraising pitches.',
      'Build go-to-market strategies, sales channels, and customer acquisition loops.',
      'Adapt business models swiftly in response to customer feedback and market changes.'
    ],
    requiredSkills: {
      technical: ['Financial Statements (P&L, Cashflow)', 'Product Prototyping', 'Digital Sales Funnels', 'Legal Compliance Basics'],
      soft: ['High Grit & Resilience', 'Persuasive Vision', 'Decisiveness', 'Calculated Risk Taking']
    },
    qualifications: [
      'No formal degree is legally mandated; degrees in Business, Computer Science, or Design provide valuable foundations.',
      'Practical problem-solving ability, market insights, and tenacity are the primary drivers.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Problem Discovery', description: 'Identify a painful, unaddressed friction point faced by customers or businesses.' },
      { step: 2, title: 'Minimum Viable Product (MVP)', description: 'Build a low-cost version of your solution to validate whether people are willing to use or pay for it.' },
      { step: 3, title: 'Go-to-Market & Sales', description: 'Acquire your first 100 paying customers through cold outreach, social content, and word-of-mouth.' },
      { step: 4, title: 'Scaling Operations', description: 'Establish repeatable processes, hire specialized talent, and explore venture capital or sustainable reinvestment.' }
    ],
    exampleJobRoles: ['Startup Founder / CEO', 'Chief Product Officer', 'Venture Builder', 'Small Business Owner'],
    relatedCareers: ['Business Analyst', 'Digital Marketer', 'Software Developer']
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    category: 'Creative Careers',
    shortDescription: 'Creates visual concepts, illustrations, brand identities, and promotional graphics across digital and print media.',
    iconName: 'Sparkles',
    badgeColor: 'from-amber-500 to-rose-500',
    skills: ['Adobe Photoshop / Illustrator', 'Typography', 'Branding', 'Color Theory', 'Layout Composition'],
    educationPathway: 'BFA / Bachelor of Design (B.Des) / Diploma in Graphic Arts / Portfolio',
    overview: 'Graphic Designers communicate ideas through inspiring visuals. From packaging and billboard typography to social media campaigns and company brand identities, they shape the visual vocabulary of brands and publications.',
    responsibilities: [
      'Create visual assets, brand logotypes, color palettes, and brand guidelines.',
      'Design marketing collateral including posters, brochures, social graphics, and packaging.',
      'Collaborate with marketing teams and copywriters to bring campaign concepts to life.',
      'Prepare print-ready files with correct color spaces (CMYK) and resolution standards.',
      'Stay updated with evolving visual design trends, aesthetics, and creative software.'
    ],
    requiredSkills: {
      technical: ['Adobe Illustrator & Photoshop', 'InDesign / Canva Pro', 'Typography & Kerning', 'Vector Illustration'],
      soft: ['Creative Imagination', 'Attention to Visual Detail', 'Receptive to Critique', 'Meeting Project Deadlines']
    },
    qualifications: [
      'Degree or Diploma in Graphic Design, Fine Arts, Visual Communication, or Multimedia.',
      'Strong creative portfolio showcasing versatility in branding, illustration, and layouts.'
    ],
    learningRoadmap: [
      { step: 1, title: 'Visual Design Fundamentals', description: 'Study color theory, visual hierarchy, grid systems, negative space, and font pairing.' },
      { step: 2, title: 'Industry Software Tools', description: 'Master vector creation in Adobe Illustrator and raster photo manipulation in Adobe Photoshop.' },
      { step: 3, title: 'Brand Identity Projects', description: 'Design complete branding identity packages (logo, stationery, color palette, mockups) for mock brands.' },
      { step: 4, title: 'Publishing Your Portfolio', description: 'Curate your best projects on Behance or a personal portfolio site to attract clients and creative agencies.' }
    ],
    exampleJobRoles: ['Brand Identity Designer', 'Visual Content Creator', 'Packaging Designer', 'Art Director'],
    relatedCareers: ['UI/UX Designer', 'Digital Marketer', 'Software Developer']
  }
];
