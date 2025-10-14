import { mockData } from '../data/mockData';

export const Footer = () => (
  <footer className="bg-white border-t mt-16">
    <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} {mockData.teacher.name}. Всі права
        захищені.
      </p>
      <div className="flex gap-3 text-sm text-gray-500">
        <a href="#education" className="hover:text-indigo-600">
          Освіта
        </a>
        <a href="#projects" className="hover:text-indigo-600">
          Проєкти
        </a>
        <a href="#contact" className="hover:text-indigo-600">
          Контакт
        </a>
      </div>
    </div>
  </footer>
);
