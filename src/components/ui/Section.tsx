import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

// FIX: Changed component definition to not use React.FC to resolve prop type issues with framer-motion.
const Section = ({ id, title, children, className = '' }: SectionProps): JSX.Element => {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
        {title}
        <span className="text-brand-primary">.</span>
      </h2>
      {children}
    </motion.section>
  );
};

export default Section;