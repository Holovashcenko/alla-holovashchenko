import { useState, useEffect } from 'react';
import { Section } from './Section';
import {
  FaProjectDiagram,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const ProjectsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);

  const openModal = (images: string[], startIdx = 0) => {
    if (images.length === 0) return;
    setCurrentGallery(images);
    setCurrentIndex(startIdx);
    setCurrentImage(images[startIdx]);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

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
    <Section
      id="projects"
      title="Конкурси та проєкти"
      icon={<FaProjectDiagram className="text-indigo-600" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {mockData.projects.map((p) => {
          const allImages =
            p.gallery && p.gallery.length > 0
              ? ([p.posterUrl, ...p.gallery].filter(Boolean) as string[])
              : p.posterUrl
              ? [p.posterUrl]
              : [];

          return (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6 flex-1 space-y-4">
                <h4 className="text-xl font-bold text-indigo-700 mb-3">
                  {p.title}
                </h4>

                <div className="space-y-3 text-gray-700 leading-relaxed">
                  {p.descriptionParts.map((part, idx) => {
                    switch (part.type) {
                      case 'date':
                        return (
                          <div
                            key={idx}
                            className="text-lg font-semibold text-indigo-600 flex items-center gap-2"
                          >
                            {part.content}
                          </div>
                        );

                      case 'award':
                        return (
                          <div
                            key={idx}
                            className="bg-amber-50 border border-amber-200 rounded-lg p-4"
                          >
                            <div className="flex items-center gap-2 font-medium text-amber-800 mb-1">
                              {part.title}
                            </div>
                            <p className="text-amber-900">{part.content}</p>
                          </div>
                        );

                      case 'highlight':
                        return (
                          <p
                            key={idx}
                            className="text-lg italic font-medium text-indigo-700 text-center py-3"
                          >
                            “{part.content}”
                          </p>
                        );

                      case 'divider':
                        return (
                          <hr key={idx} className="border-gray-300 my-4" />
                        );

                      case 'text':
                      default:
                        return <p key={idx}>{part.content}</p>;
                    }
                  })}
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  <span className="font-medium text-gray-700">Роль:</span>{' '}
                  {p.role}
                </p>
              </div>
              <div className="md:w-80">
                {p.posterUrl ? (
                  <button
                    onClick={() => openModal(allImages, 0)}
                    className="block w-full h-full"
                  >
                    <img
                      src={p.posterUrl}
                      alt={p.title}
                      className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {allImages.length > 1 && (
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full">
                        {allImages.length} фото
                      </div>
                    )}
                  </button>
                ) : (
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 h-64 md:h-full flex items-center justify-center">
                    <FaProjectDiagram className="text-6xl text-indigo-300 opacity-50" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative animate-fadeIn">
            <img
              src={currentImage}
              alt={`Проєкт ${currentIndex + 1}`}
              className="max-h-[80vh] max-w-[90vw] rounded shadow-lg object-contain"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute -top-2 -right-2 grid place-items-center bg-red-700 rounded-full p-1 cursor-pointer hover:scale-110 hover:bg-red-700 transition-transform border-2 border-white"
              aria-label="Закрити"
            >
              <FaTimes className="text-lg text-white" />
            </button>

            {currentGallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded text-sm text-white shadow">
              {currentIndex + 1} / {currentGallery.length}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
