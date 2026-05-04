import { motion } from 'motion/react';
import Section from './Section';
import { TECH_STACK, SKILLS } from '../constants';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://i.ibb.co/m532FW7m/326c85a6-8c40-44a5-80fc-00a9cc7c003a.jpg" 
                  alt="Susmita Jana" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div>
              <p className="text-xl text-white font-medium leading-relaxed">
                I am Susmita Jana, a B.Sc. Computer Science student from Midnapore College (Autonomous) with a strong interest in software development and problem-solving.
              </p>
              <p className="text-lg text-text-gray leading-relaxed mt-4">
                My journey in tech is driven by a curiosity to build functional and efficient solutions that solve real-world problems. I'm dedicated to mastering modern web technologies while strengthening my foundation in computer science and algorithms.
              </p>
            </div>
          </div>
          <p className="text-lg text-text-gray leading-relaxed">
            I specialize in web development, bringing an analytical approach to every project I undertake.
          </p>

          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {TECH_STACK.map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.name} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-teal/50 transition-all group-hover:bg-accent-teal/5">
                    <Icon size={24} className="text-white/60 group-hover:text-accent-teal transition-colors" />
                  </div>
                  <span className="text-xs font-mono text-text-gray group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-2xl relative"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            {(() => {
              const Icon = TECH_STACK[0].icon;
              return <Icon size={120} />;
            })()}
          </div>
          
          <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
          <div className="space-y-8">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs font-mono text-accent-teal">{skill.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent-teal to-accent-cyan shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                  />
                </div>
                <p className="text-[10px] text-text-gray mt-1 uppercase tracking-widest">{skill.duration}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
