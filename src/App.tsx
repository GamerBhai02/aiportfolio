
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="bg-brand-dark min-h-screen font-sans antialiased">
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1)_0%,_rgba(10,10,10,0)_50%)] -z-10"></div>
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-4 sm:right-6 bg-brand-primary hover:bg-brand-secondary text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark z-50"
        aria-label="Open AI Assistant"
      >
        <Sparkles size={24} />
      </button>

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
};

export default App;