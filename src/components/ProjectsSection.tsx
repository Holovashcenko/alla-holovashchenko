import { Section } from './Section';
import { FaProjectDiagram } from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const ProjectsSection = () => (
  <Section
    id="projects"
    title="Конкурси та проєкти"
    icon={<FaProjectDiagram className="text-indigo-600" />}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mockData.projects.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold">{p.title}</h4>
          <p className="text-sm text-gray-600">{p.description}</p>
          <p className="text-xs text-gray-400 mt-1">Роль: {p.role}</p>
        </div>
      ))}
    </div>
  </Section>
);
