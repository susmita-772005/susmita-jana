import { NAV_LINKS, SOCIALS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8 uppercase tracking-[0.2em] text-[10px] font-bold text-text-gray">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="hover:text-accent-teal transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex gap-6 mb-8 text-text-gray">
          {SOCIALS.map(social => {
            const Icon = social.icon;
            return (
              <a 
                key={social.name} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-teal transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <p className="text-center text-text-gray/50 text-xs font-mono">
          © {currentYear} Nova Portfolio. Built with <span className="text-accent-teal group hover:animate-pulse">React</span> and <span className="text-accent-cyan group">Tailwind</span>.
        </p>
      </div>
    </footer>
  );
}
