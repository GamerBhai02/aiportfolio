
import React, { Suspense } from 'react';
// FIX: Import 'Variants' type to correctly type motion variants.
import { motion, Variants } from 'framer-motion';
import { personalInfo } from '../constants';
import Scene from './canvas/Scene';
import { Canvas } from '@react-three/fiber';

// FIX: Explicitly type 'containerVariants' with 'Variants' to ensure type compatibility.
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

// FIX: Explicitly type 'itemVariants' with 'Variants' to resolve type incompatibility with the 'transition' property.
const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 },
    },
};


const Hero = (): JSX.Element => {
  const nameWords = personalInfo.name.split(" ").map(word => word + "\u00A0"); // Add non-breaking space
  
  return (
    <section id="hero" className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left -mx-4 md:-mx-8">
        <div className="absolute inset-0 w-full h-full z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
        <motion.div 
          className="relative z-10 p-8 md:w-1/2 lg:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
                aria-label={personalInfo.name}
            >
                {nameWords.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={itemVariants}
                        style={{ display: 'inline-block' }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.p 
                className="text-lg md:text-2xl text-brand-accent mb-8"
                variants={itemVariants}
            >
                {personalInfo.title}
            </motion.p>
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
                <a href="#contact" className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-secondary transition-all duration-300 shadow-lg w-full sm:w-auto">
                    Get in Touch
                </a>
                <a href={personalInfo.resumeUrl} download="Abu_Talha_Ansari_Resume.pdf" className="border border-brand-primary text-brand-primary font-semibold py-3 px-8 rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-300 w-full sm:w-auto">
                    Download Resume
                </a>
            </motion.div>
        </motion.div>
    </section>
  );
};

export default Hero;