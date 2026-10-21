// Personal information — edit this to change your name, headline, and about text.
// What it controls: Hero section (name + headline), About section, and the footer.
// When to edit: when your name, headline, or about-me text changes.

export interface PersonalInfo {
  name: string;
  headline: string;
  tagline: string;
  about: string[];
  careerDirection: string[];
  studyStatus: string;
  resumeUrl: string; // Leave '' to fall back to scrolling to the contact section
}

export const personal: PersonalInfo = {
  name: 'Ahmed Ehab',
  headline: 'Data Scientist & Aspiring Data Engineer',
  tagline: 'Transforming Raw Data into Actionable Insights & Robust Pipelines',
  resumeUrl: 'https://drive.google.com/file/d/1mi4X44Qq75cz7Pss3pHcHP_Xs-XsMrNY/view?usp=sharing',
about: [
  "I’m detail-oriented by nature, driven by curiosity and a desire to understand how things work. I use Python and SQL to process and transform data, machine learning to uncover patterns, and Power BI and Tableau to turn findings into actionable insights.",

  "Through academic projects, personal builds, and internship experience, I’ve developed a practical approach to solving data problems, from handling messy datasets to building predictive models and meaningful visualizations.",

  "I’m currently looking for internship and freelance opportunities where I can apply my skills to real-world problems and deliver meaningful value.",
],
  careerDirection: [
    'Understand real-world data problems.',
    'Clean, prepare, and analyze datasets.',
    'Extract meaningful insights.',
    'Create useful visualizations and dashboards.',
    'Develop machine learning models.',
    'Understand and build data pipelines.',
    'Connect technical data work with business questions.',
  ],
  studyStatus:
    'I am a Data Science student passionate about turning complex datasets into clear business value, building predictive models, and expanding into modern data engineering workflows.',
};
