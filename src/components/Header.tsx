import { mockData } from '../data/mockData';

export const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <img
          src={mockData.teacher.photo}
          className="w-10 h-10 rounded-full object-cover"
          alt="teacher"
        />
        <span className="font-semibold text-gray-800">
          {mockData.teacher.name}
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
        <a href="#education" className="hover:text-indigo-600">
          Освіта
        </a>
        <a href="#cooperation" className="hover:text-indigo-600">
          Співпраця
        </a>
        <a href="#certificates" className="hover:text-indigo-600">
          Сертифікати
        </a>
        <a href="#projects" className="hover:text-indigo-600">
          Проєкти
        </a>
        <a
          href="#contact"
          className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
        >
          Контакт
        </a>
      </nav>
    </div>
  </header>
);
