import { FaEnvelope } from 'react-icons/fa';
import {
  CertificatesSection,
  ContactForm,
  CooperationSection,
  EducationSection,
  Footer,
  Header,
  Hero,
  LessonsSection,
  ProjectsSection,
  Section,
  StudentWorkSection,
} from './components';

export default function TeacherWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <Hero />
        <EducationSection />
        <CooperationSection />
        <CertificatesSection />
        <StudentWorkSection />
        <ProjectsSection />
        <LessonsSection />

        <Section
          id="contact"
          title="Зв'язок"
          icon={<FaEnvelope className="text-indigo-600" />}
        >
          <ContactForm />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
