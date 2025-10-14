import { Section } from './Section';
import { FaLightbulb } from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const StudentWorkSection = () => (
  <Section
    id="student-work"
    title="Роботи учнів 💡"
    icon={<FaLightbulb className="text-yellow-500" />}
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {mockData.studentWork.map((work) => (
        <div
          key={work.id}
          className="bg-white rounded-lg p-3 shadow text-center"
        >
          <h4 className="font-medium">{work.title}</h4>
          <p className="text-sm text-gray-500">
            {work.type} • {work.date}
          </p>
        </div>
      ))}
    </div>
  </Section>
);
