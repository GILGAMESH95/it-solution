
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'Access Control',
      desc: 'Biometric terminals, turnstiles, and cloud-managed access logs.',
      specs: ['Facial Rec', 'RFID/NFC', 'Time Tracking']
    },
    {
      id: '02',
      title: 'Video Surveillance',
      desc: 'AI-powered monitoring systems with behavioral analytics.',
      specs: ['Object Detection', 'Night Vision', 'Cloud Storage']
    },
    {
      id: '03',
      title: 'Network Infra',
      desc: 'Structured cabling, server room design, and enterprise Wi-Fi.',
      specs: ['Cat6/Fiber', 'Rack Assembly', 'Firewall Config']
    },
    {
      id: '04',
      title: 'Smart Office',
      desc: 'IoT sensors for climate, lighting, and occupancy efficiency.',
      specs: ['Automated HVAC', 'Occupancy Sensors', 'Energy Saving']
    }
  ];

  return (
    <section id="services" className="py-24 border-b border-zinc-800 bg-[#09090b]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-800 pb-8">
           <div>
              <span className="mono text-cyan-500 text-xs tracking-widest block mb-2">/// CAPABILITIES</span>
              <h2 className="text-4xl font-bold text-white font-['Space_Grotesk'] uppercase">Technical Deployment</h2>
           </div>
           <p className="text-zinc-500 max-w-md text-sm mt-4 md:mt-0">
             We deploy hardware and software solutions designed for high-security environments.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.id} className="tech-card p-8 flex flex-col h-full group">
               <div className="flex justify-between items-start mb-8">
                  <span className="mono text-2xl text-zinc-700 group-hover:text-cyan-500 transition-colors">/{s.id}</span>
                  <div className="w-2 h-2 bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
               </div>
               
               <h3 className="text-xl font-bold text-white mb-4 font-['Space_Grotesk'] uppercase">{s.title}</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">{s.desc}</p>
               
               <div className="border-t border-zinc-800 pt-4">
                  <div className="mono text-[10px] text-zinc-500 mb-2">SPECS_MODULE:</div>
                  <ul className="space-y-1">
                    {s.specs.map(spec => (
                      <li key={spec} className="text-xs text-zinc-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-zinc-500"></span> {spec}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
