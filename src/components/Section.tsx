import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export default function Section({ id, title, children, className = '', alternate = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 px-6 md:px-12 lg:px-24 w-full overflow-hidden ${alternate ? 'bg-white/5' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
              <span className="text-accent-teal">/</span> {title}
            </h2>
            <div className="h-1 w-20 bg-accent-teal rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
