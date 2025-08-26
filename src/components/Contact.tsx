import React from 'react';
import { personalInfo } from '../constants';
import Section from './ui/Section';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. 
          Feel free to reach out to me.
        </p>
        <a href={`mailto:${personalInfo.email}`} className="inline-block bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-secondary transition-all duration-300 shadow-lg text-lg">
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors"><Github size={28}/></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors"><Linkedin size={28}/></a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors"><Twitter size={28}/></a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-brand-primary transition-colors"><Mail size={28}/></a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;