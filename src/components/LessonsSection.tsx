import { Section } from './Section';
import { FaBook } from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const LessonsSection = () => (
  <Section
    id="lessons"
    title="Уроки польської мови"
    icon={<FaBook className="text-indigo-600" />}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {mockData.lessons.map((l) => (
        <div key={l.id} className="bg-white p-4 rounded-lg shadow">
          {l.photo && (
            <img
              src={l.photo}
              alt={l.title}
              className="rounded-lg w-full h-40 object-cover mb-2"
            />
          )}
          <h4 className="font-medium">{l.title}</h4>
          <p className="text-sm text-gray-600">{l.description}</p>
          <p className="text-xs text-gray-400 mt-1">{l.date}</p>
        </div>
      ))}
    </div>
  </Section>
);
