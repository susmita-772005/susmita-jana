import { motion } from 'motion/react';
import Section from './Section';
import { SOCIALS } from '../constants';
import { Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" alternate>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Let's build something <span className="text-accent-teal">extraordinary</span> together.</h3>
          <p className="text-lg text-text-gray max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities or interesting projects to collaborate on. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a 
            href="mailto:s39387504@gmail.com"
            className="px-10 py-4 rounded-full bg-accent-teal text-bg-dark font-bold hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(45,212,191,0.3)] group"
          >
            <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            Say Hello
          </a>
          <button className="px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all font-medium">
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SOCIALS.map((social) => {
             const Icon = social.icon;
             return (
               <motion.a
                 key={social.name}
                 href={social.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ y: -5 }}
                 className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:border-accent-teal/50 hover:bg-accent-teal/5 transition-all group"
               >
                 <div className="p-3 rounded-xl bg-white/5 group-hover:bg-accent-teal group-hover:text-bg-dark transition-all">
                   <Icon size={24} />
                 </div>
                 <div className="flex items-center gap-1 text-sm font-medium">
                   {social.name}
                   <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               </motion.a>
             );
          })}
        </div>
      </div>
    </Section>
  );
}
