import { motion } from 'framer-motion';
import React from 'react';

export const Section = ({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <motion.section
    id={id}
    className="mt-12 pt-6 border-t border-gray-200 scroll-mt-24"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-semibold flex items-center gap-2">
      {icon}
      {title}
    </h3>
    <div className="mt-4">{children}</div>
  </motion.section>
);
