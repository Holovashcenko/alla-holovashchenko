import { Section } from './Section';
import { FaGraduationCap } from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const EducationSection = () => (
  <Section
    id="education"
    title="Освіта"
    icon={<FaGraduationCap className="text-indigo-600" />}
  >
    <div className="space-y-4">
      {mockData.education.map((edu) => (
        <div
          key={edu.year + edu.title}
          className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500"
        >
          <p className="font-semibold text-indigo-700">{edu.title}</p>
          <p className="text-sm text-gray-600 mt-1">{edu.institution}</p>
          <p className="text-xs text-gray-500 mt-1">
            Роки навчання: {edu.year}
          </p>
          {edu.details && (
            <p className="text-xs text-gray-400 mt-1">{edu.details}</p>
          )}
        </div>
      ))}
    </div>
  </Section>
);
