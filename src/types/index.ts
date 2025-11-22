export type Education = {
  year: string;
  title: string;
  institution: string;
  details: string;
};
export type Cooperation = {
  id: string;
  title: string;
  description: string;
  images: string[];
  details: string;
};
export type Certificate = { id: string; title: string; date: string };
export type StudentWork = {
  id: string;
  title: string;
  type: string;
  date: string;
  imageUrls: string[];
};
export type Project = {
  id: string;
  title: string;
  role: string;
  posterUrl?: string;
  gallery?: string[];
  descriptionParts: DescriptionPart[];
};
export type Lesson = {
  id: string;
  title: string;
  description: string;
  photo?: string;
  date: string;
};
type DescriptionPart =
  | { type: 'text'; content: string }
  | { type: 'date'; content: string }
  | { type: 'award'; title: string; content: string }
  | { type: 'highlight'; content: string }
  | { type: 'divider' };
