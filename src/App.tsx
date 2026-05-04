/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-bg-dark text-white selection:bg-accent-teal/30 selection:text-accent-teal">
      {/* Scroll Progress Bar */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-teal to-accent-cyan origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Decorative Blur Elements */}
      <div className="fixed top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
