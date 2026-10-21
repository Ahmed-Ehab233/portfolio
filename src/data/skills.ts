export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  status?: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming & Querying',
    icon: 'code',
    skills: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'Pandas' },
      { name: 'NumPy' },
    ],
  },
  {
    name: 'Data Analysis & BI',
    icon: 'chart',
    skills: [
      { name: 'Power BI' },
      { name: 'DAX' },
      { name: 'Power Query' },
      { name: 'Excel' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
    ],
  },
  {
    name: 'Machine Learning',
    icon: 'brain',
    skills: [
      { name: 'Scikit-learn' },
      { name: 'Feature Engineering' },
      { name: 'Data Preprocessing' },
      { name: 'Model Evaluation' },
      { name: 'ML Algorithms' },
    ],
  },
  {
    name: 'Data Engineering & Tools',
    icon: 'database',
    status: 'Currently Developing',
    skills: [
      { name: 'ETL / Data Pipelines' },
      { name: 'Distributed Computing' },
      { name: 'Docker' },
      { name: 'Git' },
    ],
  },
];
