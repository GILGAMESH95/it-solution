'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Services', href: '#services', label: '01' },
    { name: 'About', href: '#about', label: '02' },
    { name: 'Insights', href: '#articles', label: '03' },
    { name: 'AI_Core', href: '#ai-consultant', label: '04' },
  ];

  return (
    <>
      <header className="fixed w-full z-50 top-0 bg-[#09090b]/90 backdrop-blur-md tech-border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-black"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors font-['Space_Grotesk']">
              IT SOLUTION
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
              >
                <span className="mono text-[10px] text-zinc-600 group-hover:text-cyan-400">/{link.label}</span>
                <span className="uppercase tracking-wide font-medium">{link.name}</span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="mono text-[10px] text-zinc-500">SYS_STATUS: <span className="text-emerald-500">ONLINE</span></div>
            <a
              href="#contact"
              className="px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors"
            >
              Contact_Us
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#09090b] transition-transform duration-300 lg:hidden pt-24 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-baseline gap-4 text-3xl font-bold text-white uppercase font-['Space_Grotesk'] border-b border-zinc-800 pb-4"
            >
              <span className="mono text-sm text-cyan-500">{link.label}</span>
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full py-4 bg-white text-black text-center font-bold uppercase tracking-widest"
          >
            Initiate Request
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
