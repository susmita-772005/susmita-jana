import { motion } from 'motion/react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent-teal/50 transition-all"
          >
            {/* Image Wrapper */}
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-teal/10 text-accent-teal border border-accent-teal/20">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                {project.title}
                <div className="flex gap-3">
                  <a href={project.link} className="text-text-gray hover:text-accent-teal transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="text-text-gray hover:text-accent-teal transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </h3>
              <p className="text-text-gray text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium group-hover:bg-accent-teal group-hover:text-bg-dark transition-all">
                View Project Details
              </button>
            </div>

            {/* Hover Glow */}
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[0_0_20px_-5px_rgba(45,212,191,0.3)] border border-accent-teal/50" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
