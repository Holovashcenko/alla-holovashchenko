import { Section } from './Section';
import { FaCertificate } from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const CertificatesSection = () => (
  <Section
    id="certificates"
    title="Мої сертифікати"
    icon={<FaCertificate className="text-indigo-600" />}
  >
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {mockData.certificates.map((cert) => (
        <div
          key={cert.id}
          className="p-4 bg-white rounded-lg shadow text-center"
        >
          <FaCertificate className="mx-auto text-indigo-500 mb-2" />
          <h4 className="font-medium">{cert.title}</h4>
          <p className="text-sm text-gray-500">{cert.date}</p>
        </div>
      ))}
    </div>
  </Section>
);
