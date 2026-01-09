
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 border-b border-zinc-800">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-block px-3 py-1 border border-zinc-700 mb-8 bg-zinc-900/50">
             <span className="mono text-xs text-cyan-400">/// ARCHITECTURE_SECURE_V3</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold text-white leading-[0.9] mb-8 uppercase font-['Space_Grotesk']">
            Constructing <br />
            <span className="text-transparent stroke-text">Digital</span> <br />
            Fortresses
          </h1>
          <style dangerouslySetInnerHTML={{ __html: `
            .stroke-text {
              -webkit-text-stroke: 2px white;
            }
          `}} />
          
          <p className="text-lg text-zinc-400 mb-12 max-w-xl leading-relaxed border-l-2 border-zinc-800 pl-6">
            We engineer industrial-grade security ecosystems. From physical access control layers to neural network surveillance analysis.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#services" 
              className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Explore Systems
            </a>
            <a 
              href="#ai-consultant" 
              className="px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest hover:border-cyan-500 hover:text-cyan-500 transition-colors"
            >
              AI_Audit
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
           {/* Abstract Technical Visual */}
           <div className="relative w-full h-full border border-zinc-800 bg-zinc-900/30 p-1">
              <div className="absolute top-0 left-0 w-2 h-2 bg-white"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-white"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-white"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-white"></div>
              
              <div className="w-full h-full relative overflow-hidden group">
                 <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                    alt="Chip" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                 
                 {/* Floating Info Panels */}
                 <div className="absolute top-10 left-10 bg-black border border-zinc-700 p-4 w-48">
                    <div className="mono text-[10px] text-zinc-500 mb-2">SERVER_LOAD</div>
                    <div className="h-1 w-full bg-zinc-800 mb-1"><div className="h-full w-[70%] bg-cyan-500"></div></div>
                    <div className="flex justify-between text-xs text-white"><span>CPU</span><span>70%</span></div>
                 </div>

                 <div className="absolute bottom-10 right-10 bg-black border border-zinc-700 p-4 w-40 text-right">
                    <div className="mono text-[10px] text-zinc-500 mb-1">UPTIME</div>
                    <div className="text-2xl font-bold text-white mono">99.99%</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
