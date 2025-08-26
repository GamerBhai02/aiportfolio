import React from 'react';
import { projects } from '../constants';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// FIX: Changed component definition to not use React.FC to resolve prop type issues with framer-motion.
const ProjectCard = ({ project }: { project: typeof projects[0] }): JSX.Element => {
    return (
        <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 flex flex-col h-full"
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.2), 0 4px 6px -2px rgba(99, 102, 241, 0.1)" }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-brand-primary/20 text-brand-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="mt-auto flex items-center space-x-4">
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors"><Github size={20}/></a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors"><ExternalLink size={20}/></a>}
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;