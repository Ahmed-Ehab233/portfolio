// Services data — detailed service offerings for the Services section.
// What it controls: the Services section content (titles, descriptions, tools, tasks).
// When to edit: when you add a new service, change a description, or update tools/tasks.
// Do not invent prices, packages, testimonials, or client reviews.

export interface Service {
  title: string;
  description: string;
  tools: string[];
  tasks: string[];
  icon: string; // Lucide icon name — must match an import in ServiceCard.tsx
}

export const services: Service[] = [
  {
    title: 'Excel Data Cleaning & Analysis',
    description:
      'Cleaning, organizing, and structuring datasets in Excel to prepare them for analysis and reporting.',
    tools: ['Microsoft Excel'],
    tasks: [
      'Cleaning and organizing datasets',
      'Handling missing values and duplicate records',
      'Formatting and structuring data',
      'Using formulas, functions, and pivot tables where appropriate',
      'Preparing clear summary reports',
    ],
    icon: 'Table2',
  },
  {
    title: 'Power BI Dashboards',
    description:
      'Designing interactive dashboards that present data clearly and support business decision-making.',
    tools: ['Power BI', 'Power Query', 'DAX'],
    tasks: [
      'Designing interactive dashboards',
      'Creating KPI cards and relevant charts',
      'Preparing data for reporting',
      'Building measures and calculated metrics',
      'Presenting findings in a clear, business-friendly way',
    ],
    icon: 'LayoutDashboard',
  },
  {
    title: 'Python Data Analysis',
    description:
      'Performing exploratory data analysis, cleaning, and visualization using Python libraries.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    tasks: [
      'Exploratory Data Analysis (EDA)',
      'Data cleaning and preprocessing',
      'Statistical summaries and visualizations',
      'Automating repetitive data-processing tasks',
    ],
    icon: 'Code2',
  },
  {
    title: 'SQL & Database Analysis',
    description:
      'Writing SQL queries to retrieve, analyze, and summarize data from relational databases.',
    tools: ['SQL', 'MySQL'],
    tasks: [
      'Writing queries to retrieve and analyze data',
      'Using joins, subqueries, aggregations, and other SQL techniques',
      'Summarizing data and answering analytical questions',
      'Basic database querying and data exploration',
    ],
    icon: 'Database',
  },
  {
    title: 'Basic Machine Learning Solutions',
    description:
      'Building introductory regression or classification models and evaluating their results.',
    tools: ['Python', 'Scikit-learn'],
    tasks: [
      'Preparing datasets for modeling',
      'Feature engineering and preprocessing',
      'Building suitable introductory regression or classification models',
      'Evaluating models and explaining their results',
    ],
    icon: 'BrainCircuit',
  },
];
