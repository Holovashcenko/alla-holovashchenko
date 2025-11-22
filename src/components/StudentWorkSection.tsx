import { useState, useEffect } from 'react';
import { Section } from './Section';
import {
  FaLightbulb,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa';
import { mockData } from '../data/mockData';

type StudentWork = {
  id: string;
  title: string;
  type: string;
  date: string;
  description: string;
  imageUrls: string[];
};

export const StudentWorkSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [selectedWork, setSelectedWork] = useState<StudentWork | null>(null);

  const openModal = (work: StudentWork, idx: number = 0) => {
    setSelectedWork(work);
    setCurrentGallery(work.imageUrls);
    setCurrentIndex(idx);
    setCurrentImage(work.imageUrls[idx] || '');
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedWork(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx =
      (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    setCurrentIndex(prevIdx);
    setCurrentImage(currentGallery[prevIdx]);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % currentGallery.length;
    setCurrentIndex(nextIdx);
    setCurrentImage(currentGallery[nextIdx]);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <Section
        id="student-work"
        title="Роботи учнів"
        icon={<FaLightbulb className="text-yellow-500" />}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockData.studentWork.map((work) => (
            <button
              key={work.id}
              onClick={() => openModal(work as StudentWork)}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                {work.imageUrls[0] ? (
                  <img
                    src={work.imageUrls[0]}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <FaLightbulb className="text-6xl text-indigo-300 opacity-50" />
                  </div>
                )}

                {work.imageUrls.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur">
                    {work.imageUrls.length} фото
                  </div>
                )}
              </div>

              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {work.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {work.type} • {work.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {isOpen && selectedWork && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full px-4 animate-fadeIn">
            {currentImage ? (
              <img
                src={currentImage}
                alt={`${selectedWork.title} — ${currentIndex + 1}`}
                className="max-h-[85vh] max-w-full mx-auto rounded-lg shadow-2xl"
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute -top-3 -right-3 grid place-items-center bg-red-600 rounded-full p-2 cursor-pointer hover:scale-110 hover:bg-red-700 transition-transform border-4 border-white shadow-lg"
              aria-label="Закрити"
            >
              <FaTimes className="text-xl text-white" />
            </button>

            {currentGallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl p-3 bg-black/50 rounded-full hover:bg-black/70 transition backdrop-blur-sm"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl p-3 bg-black/50 rounded-full hover:bg-black/70 transition backdrop-blur-sm"
                >
                  <FaChevronRight />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-white text-sm backdrop-blur">
                  {currentIndex + 1} / {currentGallery.length}
                </div>
              </>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white text-center">
              <h3 className="text-2xl font-bold">{selectedWork.title}</h3>
              <p className="text-sm opacity-90 mt-1">
                {selectedWork.type} • {selectedWork.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
