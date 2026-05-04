import { motion } from 'motion/react';
import { Terminal, ChevronRight, Sparkles, Globe } from 'lucide-react';
import { TECH_STACK } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24 bg-grid">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-teal/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-teal shadow-[0_0_15px_rgba(45,212,191,0.5)]">
              <img 
                src="https://i.ibb.co/m532FW7m/326c85a6-8c40-44a5-80fc-00a9cc7c003a.jpg" 
                alt="Susmita Jana avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-mono">
              <Sparkles size={14} />
              <span>Available for new projects</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-accent-teal">Susmita Jana</span> <br />
            <span className="text-white/60">Aspiring Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-gray max-w-xl mb-10 leading-relaxed">
            Currently pursuing B.Sc. in Computer Science at Midnapore College. 
            I'm a problem-solver dedicated to building efficient, modern web applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-3 rounded-full bg-accent-teal text-bg-dark font-bold hover:scale-105 transition-transform flex items-center gap-2 group shadow-[0_0_20px_-5px_rgba(45,212,191,0.5)]">
              View Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all">
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest whitespace-nowrap">Tech Stack</span>
            <div className="flex flex-wrap gap-4">
              {TECH_STACK.slice(0, 5).map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-help tooltip"
                    title={tech.name}
                  >
                    <Icon size={20} className="text-accent-teal/80" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Visual Code Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-bg-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
                <Terminal size={14} />
                <span>main.tsx</span>
              </div>
            </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex gap-4">
                <span className="text-white/20 select-none">1</span>
                <p><span className="text-purple-400">import</span> {'{'} Student {'}'} <span className="text-purple-400">from</span> <span className="text-cyan-400">'college'</span>;</p>
              </div>
              <div className="flex gap-4">
                <span className="text-white/20 select-none">2</span>
                <p><span className="text-purple-400">const</span> susmita = <span className="text-purple-400">new</span> Student({'{'}</p>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-white/20 select-none">3</span>
                <p>name: <span className="text-cyan-400">'Susmita Jana'</span>,</p>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-white/20 select-none">4</span>
                <p>education: <span className="text-cyan-400">'B.Sc. Computer Science'</span>,</p>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-white/20 select-none">5</span>
                <p>languages: [<span className="text-cyan-400">'C++'</span>, <span className="text-cyan-400">'Java'</span>, <span className="text-cyan-400">'Python'</span>],</p>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-white/20 select-none">6</span>
                <p>webStack: [<span className="text-cyan-400">'PHP'</span>, <span className="text-cyan-400">'SQL'</span>, <span className="text-cyan-400">'JS'</span>]</p>
              </div>
              <div className="flex gap-4">
                <span className="text-white/20 select-none">7</span>
                <p>{'})'};</p>
              </div>
              <div className="flex gap-4 mt-4">
                <span className="text-white/20 select-none">8</span>
                <p><span className="text-accent-teal font-bold animate-pulse">|</span></p>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 p-4 rounded-xl bg-bg-dark border border-white/5 shadow-xl backdrop-blur-md"
          >
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded bg-accent-teal/20 flex items-center justify-center text-accent-teal">
                 <Globe size={18} />
               </div>
               <div>
                  <p className="text-[10px] text-text-gray uppercase tracking-tighter">Availability</p>
                  <p className="text-xs font-bold font-display">Freelance project</p>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
