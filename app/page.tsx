import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AIConsultant from '@/components/AIConsultant';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen selection:bg-cyan-500 selection:text-black">
            <Navbar />
            <main>
                <Hero />

                <Services />

                {/* About Section - Redesigned as a technical statement */}
                <section id="about" className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]">
                    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute top-4 left-4 w-full h-full border border-zinc-200 dark:border-zinc-800 pointer-events-none"></div>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
                                alt="Infrastructure"
                                className="w-full relative z-10 grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-200 dark:border-zinc-800"
                            />
                        </div>
                        <div>
                            <span className="mono text-cyan-500 text-xs tracking-widest mb-4 block">/// COMPANY_PROFILE</span>
                            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white font-['Space_Grotesk'] uppercase mb-8">
                                The Engineering <br /> Backbone
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                IT Solution operates at the intersection of physical security and digital intelligence. We don't just install cameras; we architect autonomous observation networks integrated with biometric access control.
                            </p>
                            <div className="grid grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
                                <div>
                                    <div className="text-3xl font-bold text-zinc-900 dark:text-white font-['Space_Grotesk']">500+</div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mono uppercase mt-1">Deployments</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-zinc-900 dark:text-white font-['Space_Grotesk']">100%</div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mono uppercase mt-1">Uptime SLA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Articles />

                <AIConsultant />

                <Contact />
            </main>
            <Footer />
        </div>
    );
}
