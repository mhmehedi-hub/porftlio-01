import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { AVATAR_IMAGE } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Path', href: '#path' },
    { name: 'Education', href: '#education' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Workbench', href: '#workbench' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mhmehedi-hub',
      icon: (className = "w-4 h-4") => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      hoverColor: 'hover:text-white hover:bg-zinc-900/50'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/mehedi_eth',
      icon: (className = "w-4 h-4") => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      hoverColor: 'hover:text-sky-400 hover:bg-sky-500/10'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801727026246',
      icon: (className = "w-4 h-4") => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      hoverColor: 'hover:text-emerald-400 hover:bg-emerald-500/10'
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/mehedivip.ff',
      icon: (className = "w-4 h-4") => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      hoverColor: 'hover:text-blue-500 hover:bg-blue-500/10'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px -60% 0px' }
    );

    const sections = ['about', 'portfolio', 'skills', 'workbench', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0B0B0C]/80 backdrop-blur-md border border-zinc-800/60 rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Left Brand Area */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur-xs opacity-50 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-10 h-10 bg-violet-600 text-white font-display font-bold text-base flex items-center justify-center rounded-xl overflow-hidden">
              MH
            </div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-semibold text-zinc-100 font-display tracking-tight leading-none">MD Mehedi Hasan</h1>
            <span className="text-[10px] text-zinc-500 font-mono tracking-wider">@mhmehedi-hub</span>
          </div>
        </div>

        {/* Center Nav Items - Desktop Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-950/60 border border-zinc-800/40 rounded-full px-2 py-1 relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-xs font-mono tracking-wider px-4 py-2 rounded-full transition-colors uppercase relative z-10 ${
                  isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-zinc-900/80 border border-zinc-800/40 rounded-full -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Socials & CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-zinc-400 mr-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                className={`p-2 rounded-lg transition-all ${social.hoverColor}`}
              >
                {social.icon("w-4 h-4")}
              </a>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1VoMiKLYfYaC2mjw4GTcTSPzRgcW2d3U2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-violet-600 hover:bg-violet-700 font-medium rounded-xl transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] border border-violet-500/20 active:scale-95"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white bg-zinc-900/50 rounded-xl border border-zinc-800/40"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 z-40 bg-[#0B0B0C] border border-zinc-800 rounded-2xl p-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`text-sm font-mono tracking-widest py-3 border-b border-zinc-900/60 uppercase transition-colors flex items-center justify-between ${
                      isActive ? 'text-violet-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-violet-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                    )}
                  </motion.a>
                );
              })}
            </nav>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-zinc-900">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className={`text-zinc-500 transition-all p-1.5 rounded-lg ${social.hoverColor}`}
                >
                  {social.icon("w-5 h-5")}
                </a>
              ))}
              <span className="text-[10px] text-zinc-600 font-mono ml-auto">EST. 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
