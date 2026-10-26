// Professional experience, bootcamps, and courses.
// What it controls: the Experience section and the Certifications & Courses section.
// When to edit: when a program status changes, topics are updated, or you add a new program.

export interface Program {
  title: string;
  organization: string;
  role: string;
  status: 'Ongoing' | 'Completed';
  period: string;
  kind: 'experience' | 'course';
  description: string;
  topics?: string[];
  certificateUrl?: string;
}

export const programs: Program[] = [
  // Experience 
  {
    title: 'DEPI — Data Engineering Track',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    role: 'Data Engineer Trainee',
    status: 'Ongoing',
    period: 'Jul 2026 - Present',
    kind: 'experience',
    description:
      'Selected for the Digital Egypt Pioneers Initiative, I am gaining hands-on data engineering experience through an intensive, applied training track — building end-to-end data pipelines, working with big data technologies, and deploying solutions on modern cloud platforms.',
    topics: [
      'Prompt Engineering',
      'Introduction to Data Engineering',
      'Programming Essentials',
      'SQL and Database Management',
      'Advanced Python for Data Engineering',
      'Data Pipelines',
      'Big Data Processing',
      'Azure Data Engineering',
      'Deployment',
      'AI for Data Engineers',
      'Capstone Project',
    ],
  },
  // Course 
  {
    title: 'GCI World 2026 — Data Science & AI Course',
    organization: 'Matsuo-Iwasawa Laboratory, The University of Tokyo',
    role: '',
    status: 'Ongoing',
    period: 'Sep 2026 - Present',
    kind: 'course',
    description:
      'I am expanding and deepening my knowledge in Data Science and Artificial Intelligence through the global GCI World 2026 program.',
    topics: [
      'Data Science Fundamentals',
      'Machine Learning & AI',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'SQL',
      'Marketing',
    ],
  },
  {
    title: 'Database Fundamentals', 
    organization: 'MaharaTech', 
    role: '', 
    status: 'Completed',
    period: 'Sep 2026',
    kind: 'course', 
    description: 'Acquired core foundational knowledge in relational databases, covering database design concepts, Entity-Relationship Diagramming (ERD), table normalization, and hands-on SQL query writing for data manipulation and structure.', 
    topics: [
      'Database Design',
      'ERD Modeling',
      'Relational Databases',
      'SQL Fundamentals',
      'Normalization',
    ], 
    certificateUrl: 'https://lnkd.in/p/eqDFiS-x' 
  }, 
  {
    title: 'AI for You',
    organization: 'Oracle', 
    role: '',
    status: 'Completed', 
    period: 'Aug 2026', 
    kind: 'course', 
    description: 'Completed Oracle\'s AI for You course, strengthening foundational knowledge in Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI, along with insights into AI workflows and responsible AI ethics.', 
    topics: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Responsible AI',
    ], 
    certificateUrl: 'https://lnkd.in/p/eJyDcMNh'
  },
  {
    title: 'Data Analyst in Python Track',
    organization: 'DataCamp',
    role: '',
    status: 'Completed',
    period: 'Sep 2025', 
    kind: 'course',
    description: 'Completed the comprehensive Data Analyst in Python track on DataCamp, gaining hands-on experience in data manipulation, exploratory visualization, and statistical hypothesis testing through real-world practical projects.',
    topics: [
      'Pandas',
      'NumPy',
      'Data Visualization',
      'Matplotlib',
      'Seaborn',
      'Statistics & Hypothesis Testing',
      'Exploratory Data Analysis',
    ],
    certificateUrl: 'https://lnkd.in/p/ez-mScdC', 
  },
  {
    title: 'Excel Fundamentals Track',
    organization: 'DataCamp',
    role: '',
    status: 'Completed',
    period: 'Jun 2025', 
    kind: 'course',
    description: 'Completed the Excel Fundamentals track on DataCamp, mastering essential techniques for data organization, cleaning, visual analytics, and basic forecasting methods for data-driven decision making.',
    topics: [
      'Microsoft Excel',
      'Data Cleaning',
      'Data Visualization',
      'Data Analysis',
      'Forecasting',
    ],
    certificateUrl: 'https://lnkd.in/p/e3ARM4aU', 
  },
  {
  title: 'Power BI Fundamentals Track',
  organization: 'DataCamp',
  role: '',
  status: 'Ongoing',
  period: '',
  kind: 'course',
  description:
    'Currently working through the Power BI Fundamentals track on DataCamp, developing skills in DAX, data visualization, data preparation, and data modeling, with practical applications including a customer churn analysis case study.',
  topics: [
    'Power BI',
    'DAX',
    'Data Visualization',
    'Data Preparation',
    'Data Modeling',
  ],
},
];
