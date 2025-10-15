import { Section } from './Section';
import { FaBook } from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const BooksSection = () => (
  <Section
    id="books"
    title="Власні книги"
    icon={<FaBook className="text-indigo-600" />}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockData.books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {book.link && (
            <img
              src={book.link}
              alt={book.title}
              className="w-full md:w-36 h-auto object-contain bg-gray-100 p-2"
            />
          )}
          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <h4 className="font-bold text-indigo-700 text-lg">
                {book.title}
              </h4>
              <p className="text-gray-600 mt-2">{book.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-gray-400">Рік видання: {book.year}</p>
              {book.link && (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-sm font-medium hover:underline hover:text-indigo-800 transition-colors"
                >
                  Переглянути
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
