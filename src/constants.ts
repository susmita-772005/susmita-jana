import { Github, Linkedin, Mail, Instagram, Code, Database, Globe, Layers, Coffee, Cpu, Terminal, Server } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const TECH_STACK = [
  { name: 'C', icon: Terminal, color: '#A8B9CC' },
  { name: 'C++', icon: Cpu, color: '#00599C' },
  { name: 'Python', icon: Code, color: '#3776AB' },
  { name: 'Java', icon: Coffee, color: '#007396' },
  { name: 'HTML', icon: Globe, color: '#E34F26' },
  { name: 'CSS', icon: Layers, color: '#1572B6' },
  { name: 'JavaScript', icon: Code, color: '#F7DF1E' },
  { name: 'PHP', icon: Server, color: '#777BB4' },
  { name: 'SQL', icon: Database, color: '#4479A1' },
];

export const EXPERIENCES = [
  {
    date: '2023 - Present',
    role: 'B.Sc. Computer Science Student',
    company: 'Midnapore College (Autonomous)',
    description: 'Deepening my knowledge in Data Structures, Algorithms, and Software Engineering principles. Actively working on personal projects and solving complex algorithmic problems.',
  },
  {
    date: '2022 - 2023',
    role: 'Aspiring Developer',
    company: 'Self-Directed Learning',
    description: 'Focused on mastering HTML, CSS, and JavaScript. Built several responsive web layouts and explored the basics of React and modern development workflows.',
  },
];

export const PROJECTS = [
  {
    title: 'Hospital Management System',
    description: 'A robust database application built with Java and SQL to manage patient records, appointments, and billing with high efficiency.',
    tech: ['Java', 'SQL', 'JDBC'],
    link: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Internal Assessment System',
    description: 'A comprehensive educational portal where teachers can securely manage and upload student marks while providing students with real-time access to their results.',
    tech: ['PHP', 'SQL', 'Bootstrap', 'JavaScript'],
    link: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
  },
];

export const SKILLS = [
  { name: 'Software Development', progress: 85, duration: '2 years' },
  { name: 'Web Development (HTML/CSS/JS/PHP)', progress: 90, duration: '2 years' },
  { name: 'Problem Solving (C/C++/Java)', progress: 88, duration: '3 years' },
  { name: 'Database Management (SQL)', progress: 82, duration: '1 year' },
];

export const SOCIALS = [
  { name: 'GitHub', icon: Github, link: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, link: 'https://linkedin.com' },
  { name: 'Email', icon: Mail, link: 'mailto:s39387504@gmail.com' },
  { name: 'Instagram', icon: Instagram, link: 'https://instagram.com' },
];
