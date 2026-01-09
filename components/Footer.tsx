
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="text-xl font-bold text-zinc-900 dark:text-white font-['Space_Grotesk'] tracking-tight mb-2">IT SOLUTION</div>
            <p className="text-zinc-600 text-xs max-w-xs">
              Advanced Engineering Solutions for Corporate Infrastructure.
              <br />Security Level 4 Certified.
            </p>
          </div>

          <div className="flex gap-8 text-xs font-mono text-zinc-500 uppercase">
            <a href="#" className="hover:text-cyan-500">Legal_Protocol</a>
            <a href="#" className="hover:text-cyan-500">SLA_Terms</a>
            <a href="#" className="hover:text-cyan-500">System_Map</a>
          </div>

          <div className="text-zinc-700 text-xs mono">
            © {new Date().getFullYear()} IT SOLUTION SYSTEMS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
