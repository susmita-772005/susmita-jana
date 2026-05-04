import { motion } from 'motion/react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <Section id="experience" title="Experience" alternate>
      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {EXPERIENCES.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-dark border border-white/10 text-accent-teal absolute left-0 md:left-1/2 md:-ml-5 z-10 group-hover:border-accent-teal transition-colors shadow-xl">
              <Briefcase size={18} />
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-teal/30 transition-all hover:bg-white/[0.07]">
              <time className="font-mono text-xs text-accent-teal mb-2 block">{exp.date}</time>
              <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
              <p className="text-sm font-medium text-white/50 mb-4">{exp.company}</p>
              <p className="text-text-gray text-sm leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
