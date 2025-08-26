
import React from 'react';
import { experience, education } from '../constants';
import Section from './ui/Section';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem: React.FC<{ icon: React.ReactNode, title: string, subtitle: string, period: string, description?: string }> = ({ icon, title, subtitle, period, description }) => (
    <div className="relative pl-8 sm:pl-12 py-4 group">
        <div className="flex items-center absolute -left-1.5 sm:left-0">
            <div className="z-10 bg-brand-primary text-white h-8 w-8 rounded-full flex items-center justify-center">
                {icon}
            </div>
            <div className="h-0.5 w-8 sm:w-12 bg-gray-700"></div>
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-brand-accent">{subtitle}</p>
            <p className="text-sm text-gray-400 mt-1">{period}</p>
            {description && <p className="text-gray-300 mt-2">{description}</p>}
        </div>
    </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Career & Education">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-2.5 sm:left-4 top-0 h-full w-0.5 bg-gray-700"></div>
        <div>
          {experience.map((item, index) => (
            <TimelineItem 
              key={`exp-${index}`}
              icon={<Briefcase size={18} />}
              title={item.role}
              subtitle={item.company}
              period={item.period}
              description={item.description}
            />
          ))}
          {education.map((item, index) => (
            <TimelineItem
              key={`edu-${index}`}
              icon={<GraduationCap size={18} />}
              title={item.institution}
              subtitle={item.degree}
              period={item.period}
              description={item.grade}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
