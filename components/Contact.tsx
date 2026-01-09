'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="mono text-cyan-500 text-xs tracking-widest mb-4 block">/// INITIATE_PROTOCOL</span>
            <h2 className="text-5xl font-bold text-white font-['Space_Grotesk'] uppercase mb-8">
              System <br /> Implementation
            </h2>
            <p className="text-zinc-400 mb-12 max-w-md">
              Deploy IT Solution engineers to your facility. We conduct physical audits and provide detailed implementation blueprints within 48 hours.
            </p>

            <div className="space-y-8">
              <div className="border-l border-zinc-800 pl-6">
                <div className="mono text-xs text-zinc-500 mb-1">SIGNAL_PATH</div>
                <div className="text-2xl text-white font-bold">+7 (495) 123-45-67</div>
              </div>
              <div className="border-l border-zinc-800 pl-6">
                <div className="mono text-xs text-zinc-500 mb-1">DATA_PACKET</div>
                <div className="text-2xl text-white font-bold">info@itsolution.ru</div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-800 p-8 bg-[#0a0a0a]">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className="text-2xl text-white font-bold uppercase mb-2">Transmission Complete</h3>
                <p className="text-zinc-500 mb-8">Engineering team has received your request.</p>
                <button onClick={() => setFormStatus('idle')} className="text-xs font-bold text-cyan-500 uppercase hover:underline">Reset Form</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mono text-xs text-zinc-500 mb-2 uppercase">Entity / Name</label>
                  <input required type="text" className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-cyan-500 focus:outline-none transition-colors rounded-none" placeholder="Enter identification" />
                </div>
                <div>
                  <label className="block mono text-xs text-zinc-500 mb-2 uppercase">Comm Frequency</label>
                  <input required type="tel" className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-cyan-500 focus:outline-none transition-colors rounded-none" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block mono text-xs text-zinc-500 mb-2 uppercase">Project Parameters</label>
                  <textarea required rows={4} className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-cyan-500 focus:outline-none transition-colors rounded-none resize-none" placeholder="Describe infrastructure requirements..."></textarea>
                </div>
                <button
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-white text-black font-bold uppercase py-5 tracking-widest hover:bg-cyan-500 transition-colors flex justify-center"
                >
                  {formStatus === 'submitting' ? 'Transmitting...' : 'Transmit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
