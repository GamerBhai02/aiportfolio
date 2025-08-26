import React from 'react';
import { personalInfo, technicalSkills, softSkills } from '../constants';
import Section from './ui/Section';
import { CheckCircle, Zap, HeartHandshake } from 'lucide-react';

const SkillList: React.FC<{ title: string, skills: string[], icon: React.ReactNode }> = ({ title, skills, icon }) => (
    <div>
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h3>
        <ul className="space-y-3">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                    <CheckCircle className="text-brand-primary mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{skill}</span>
                </li>
            ))}
        </ul>
    </div>
);

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-lg text-gray-300 leading-relaxed">{personalInfo.about}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
            <SkillList title="Technical Skills" skills={technicalSkills} icon={<Zap size={22} className="text-brand-accent" />} />
            <SkillList title="Soft Skills" skills={softSkills} icon={<HeartHandshake size={22} className="text-brand-accent" />} />
        </div>
      </div>
    </Section>
  );
};

export default About;