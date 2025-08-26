
import React from 'react';
import { certifications } from '../constants';
import Section from './ui/Section';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Licenses & Certifications">
      <div className="max-w-4xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-5 flex items-start space-x-4">
            <div className="flex-shrink-0">
                <Award className="text-brand-accent" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer} &middot; {cert.date}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {cert.skills.map(skill => (
                  <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;