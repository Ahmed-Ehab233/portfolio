// Education information.
// What it controls: the Education section content.
// When to edit: when your education status changes (e.g., year of study, university).
// Do not invent GPA, graduation date, or academic awards.

export interface EducationInfo {
  institution: string;
  faculty: string;
  year: string;
  description: string;
}

export const education: EducationInfo = {
  institution: 'Alexandria University',
  faculty: 'Faculty of Computer and Data Science',
  year: 'Third-year student',
  description:
    'Studying Data Science at the Faculty of Computer and Data Science, building foundations in programming, statistics, data analysis, and machine learning.',
};
