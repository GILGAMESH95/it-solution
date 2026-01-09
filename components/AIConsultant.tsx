'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Message } from '@/types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '> INITIALIZING IT SOLUTION AI CORE...\n> READY. PLEASE DEFINE PROJECT PARAMETERS.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: `> ${userMsg}` }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMsg }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (e) {
      console.error('AI Chat Error:', e);
      setMessages(prev => [...prev, { role: 'assistant', content: 'ERROR: CONNECTION_LOST' }]);
    }

    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-24 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="mono text-cyan-500 dark:text-cyan-500 text-xs tracking-widest mb-4 block">/// AI_ENGINEERING_CORE</span>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white font-['Space_Grotesk'] uppercase mb-4">Automated <br /> Project Calculation</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Access our proprietary neural network trained on enterprise security standards.
            Input your facility dimensions and requirements to generate a preliminary hardware manifest.
          </p>

          <div className="p-6 border border-zinc-800 bg-zinc-900/50">
            <h4 className="text-white font-bold uppercase text-sm mb-4">Supported Queries</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <span className="text-cyan-500">[+]</span> Calculate ACS for 500 employees
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-500">[+]</span> Camera placement for 1000m² warehouse
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-500">[+]</span> Server rack specs for small office
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="w-full bg-[#050505] border border-zinc-700 h-[600px] flex flex-col font-mono text-sm shadow-2xl">
            {/* Terminal Bar */}
            <div className="bg-zinc-800 px-4 py-2 flex justify-between items-center select-none">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
              </div>
              <div className="text-zinc-400 text-xs">root@itsolution-core:~</div>
              <div className="text-zinc-500 text-xs">BASH</div>
            </div>

            {/* Output */}
            <div
              ref={scrollRef}
              className="flex-1 p-6 overflow-y-auto scrollbar-hide text-zinc-300 space-y-4"
            >
              {messages.map((m, idx) => (
                <div key={idx} className={`${m.role === 'user' ? 'text-cyan-400' : 'text-zinc-300'}`}>
                  <pre className="whitespace-pre-wrap font-mono">{m.content}</pre>
                </div>
              ))}
              {isLoading && (
                <div className="text-zinc-500 animate-pulse">
                  &gt; PROCESSING_DATA...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
              <div className="flex gap-2 items-center">
                <span className="text-cyan-500">&gt;</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  disabled={isLoading}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-zinc-700"
                  placeholder="Enter command or query..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
