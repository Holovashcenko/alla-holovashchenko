export type Education = { year: string; title: string; institution: string };
export type Cooperation = { id: string; title: string; description: string };
export type Certificate = { id: string; title: string; date: string };
export type StudentWork = {
  id: string;
  title: string;
  type: string;
  date: string;
};
export type Project = {
  id: string;
  title: string;
  role: string;
  description: string;
};
export type Lesson = {
  id: string;
  title: string;
  description: string;
  photo?: string;
  date: string;
};
