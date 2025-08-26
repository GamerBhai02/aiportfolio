import React from 'react';
import { personalInfo, skills } from '../constants';
import Section from './ui/Section';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <p className="text-lg text-gray-300 leading-relaxed">{personalInfo.about}</p>
        </div>
        <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">Top Skills</h3>
            <ul className="space-y-3">
                {skills.slice(0, 8).map((skill, index) => (
                    <li key={index} className="flex items-center">
                        <CheckCircle className="text-brand-primary mr-3" size={20} />
                        <span className="text-gray-300">{skill}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
