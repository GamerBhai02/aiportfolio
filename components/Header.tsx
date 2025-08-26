
import React, { useState, useEffect } from 'react';
// FIX: Import 'Variants' type to correctly type motion variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // FIX: Explicitly type 'menuVariants' with 'Variants' to resolve type incompatibility.
  const menuVariants: Variants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-wider hover:text-brand-primary transition-colors z-50">
            Abu Talha Ansari<span className="text-brand-primary">.</span>
          </a>
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-brand-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <button onClick={toggleMenu} className="md:hidden z-50 text-gray-300 hover:text-brand-primary">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 w-full h-screen bg-brand-dark z-30 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu} className="text-3xl text-gray-300 hover:text-brand-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;