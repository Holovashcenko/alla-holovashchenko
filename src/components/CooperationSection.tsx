import { useState, useEffect } from 'react';
import { Section } from './Section';
import {
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa';
import { mockData } from '../data/mockData';

export const CooperationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);

  const openModal = (images: string[], idx: number) => {
    setCurrentGallery(images);
    setCurrentIndex(idx);
    setCurrentImage(images[idx]);
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
  }, [isOpen]);

  return (
    <Section
      id="cooperation"
      title="Міжнародна співпраця"
      icon={<FaGlobe className="text-indigo-600" />}
    >
      {mockData.cooperation.map((co) => (
        <div key={co.id} className="bg-white p-4 rounded-lg shadow mb-3">
          <h4 className="font-semibold text-indigo-700">{co.title}</h4>
          <p className="text-sm text-gray-600">{co.description}</p>
          {co.details && (
            <p className="text-sm text-gray-500 mt-1">{co.details}</p>
          )}
          {co.images && (
            <div className="flex mt-2 gap-2 overflow-hidden">
              {co.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${co.title} ${idx + 1}`}
                  className="h-24 w-auto rounded cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openModal(co.images!, idx)}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative animate-fadeIn">
            <img
              src={currentImage}
              alt={`Selected ${currentIndex + 1}`}
              className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
            />

            <button
              className="absolute -top-2 -right-2 grid place-items-center bg-red-700 rounded-full p-1 cursor-pointer hover:scale-110 hover:bg-red-700 transition-transform border-2 border-white"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Закрити"
            >
              <FaTimes className="text-lg text-white" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>

            {/* Індекс картинки */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 px-3 py-1 rounded text-sm text-white shadow">
              {currentIndex + 1} / {currentGallery.length}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
