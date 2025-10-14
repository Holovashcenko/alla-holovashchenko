import { Section } from './Section';
import { FaGraduationCap } from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const EducationSection = () => (
  <Section
    id="education"
    title="Освіта"
    icon={<FaGraduationCap className="text-indigo-600" />}
  >
    {mockData.education.map((edu) => (
      <div key={edu.year} className="bg-white p-4 rounded-lg shadow mb-3">
        <p className="font-medium">{edu.title}</p>
        <p className="text-sm text-gray-500">
          {edu.institution} • {edu.year}
        </p>
      </div>
    ))}
  </Section>
);
