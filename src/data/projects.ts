
export interface Project {
  title: string;
  category: string;
  status: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  linkedin?: string;
  github?: string;
  collaborationNote?: string;
}

export const projects: Project[] = [
  {
    title: 'FIFA Players — Machine Learning',
    category: 'Data Science & Machine Learning',
    status: 'Completed academic / team project',
    description:
      'An end-to-end machine learning project using FIFA player data to predict player market value and classify performance tiers. The project combines preprocessing, feature engineering, model comparison, and ensemble learning in an interactive prediction application.',
    highlights: [
      'Predicting player performance tiers and market value',
      'Building and comparing classification and regression models',
      'Using stacking ensembles and hyperparameter tuning',
      'Creating an interactive Streamlit app with visualizations and prediction inputs',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib', 
      'Seaborn', 
      'Plotly', 
      'Scikit-learn',
      'Streamlit',
      'Feature Engineering',
      'GridSearch',
      'Ensemble Learning',
    ],
    linkedin: 'https://lnkd.in/p/e4ZRPc6z',
    github: 'https://github.com/Ahmed-Ehab233/Football-Player-Prediction-app',
    collaborationNote:
      'University team project, with a leading role in the project.',
  },
  {
    title: 'Churn & Revenue Risk Analysis',
    category: 'Data Analytics / Business Intelligence',
    status: 'Completed project',
    description:
      'A Power BI project exploring customer churn and its financial impact through two connected dashboards: Customer Churn Overview and Customer Revenue & Churn Risk. The analysis turns customer data into KPIs and visual insights that help investigate churn patterns and revenue at risk.',
    highlights: [
      'Analyzing customer churn patterns and affected customer groups',
      'Exploring the relationship between churn and revenue',
      'Highlighting revenue potentially at risk',
      'Creating DAX measures, KPIs, and interactive slicers',
    ],
    technologies: [
      'Power BI',
      'DAX',
      'KPI Design',
      'Data Analysis',
      'Data Visualization',
      'Business Intelligence',
    ],
    linkedin: 'https://lnkd.in/p/eWrZxww9',
    github: '',
    collaborationNote:
      'Focused on answering business questions and communicating insights, not just presenting charts.',
  },
  {
    title: 'Hotel Bookings System',
    category: 'Database',
    status: 'Completed academic / team project',
    description:
      'A hotel reservation and service-management system built as a team project. It combines a relational MySQL database, a web interface, and a PHP backend to support customer bookings and service orders alongside administrative management.',
    highlights: [
      'Designing an ERD and relational database schema',
      'Supporting customer registration, room booking, and cancellations',
      'Managing service orders and customer requests',
      'Providing administrative management of bookings, customers, and rooms',
    ],
    technologies: [
      'MySQL',
      'SQL',
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
      'Database Design',
    ],
    linkedin: 'https://lnkd.in/p/egQNgUhD',
    github: '',
    collaborationNote:
      'Built collaboratively as part of a university team project.',
  },
  {
    title: 'Employees Data Analysis Dashboard',
    category: 'Data Analytics / Business Intelligence',
    status: 'Completed project',
    description:
      'An employee data analysis dashboard presenting workforce metrics across departments, locations, job titles, experience levels, salaries, gender, and education. The dashboard combines key performance indicators, interactive filters, and visualizations to explore workforce distribution and salary-related patterns.',
    highlights: [
      'Summarizing workforce metrics through KPI cards',
      'Comparing employee distribution across departments and locations',
      'Exploring salary patterns across experience levels',
      'Visualizing workforce demographics and education levels',
      'Using interactive filters to explore employee data',
    ],
    technologies: [
      'Excel',
      'Data Visualization',
      'Dashboard Design',
      'KPI Design',
    ],
    linkedin: 'https://lnkd.in/p/eekAMsgM'
  },

];
