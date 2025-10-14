import { motion } from 'framer-motion';
import { mockData } from '../data/mockData';

export const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center py-10"
  >
    {/* Текст */}
    <div className="md:col-span-2 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
        Привіт! 👋 Я — {mockData.teacher.name}
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-2">
        {mockData.teacher.role}
      </h2>
      <p className="mt-5 text-lg text-gray-600 leading-relaxed">
        {mockData.teacher.bio}
      </p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-all"
      >
        Зв’язатися зі мною
      </motion.a>
    </div>

    {/* Фото */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="flex justify-center"
    >
      <img
        src={mockData.teacher.photo}
        alt="teacher"
        className="rounded-2xl shadow-xl w-64 h-64 object-cover md:w-full border-4 border-indigo-100"
      />
    </motion.div>
  </motion.section>
);
