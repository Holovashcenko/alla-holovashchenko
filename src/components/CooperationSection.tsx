import { Section } from './Section';
import { FaGlobe } from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const CooperationSection = () => (
  <Section
    id="cooperation"
    title="Міжнародна співпраця"
    icon={<FaGlobe className="text-indigo-600" />}
  >
    {mockData.cooperation.map((co) => (
      <div key={co.id} className="bg-white p-4 rounded-lg shadow mb-3">
        <h4 className="font-semibold text-indigo-700">{co.title}</h4>
        <p className="text-sm text-gray-600">{co.description}</p>
      </div>
    ))}
  </Section>
);
