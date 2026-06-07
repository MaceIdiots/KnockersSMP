/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { ChevronDown, Sword, Timer, MessageSquare, ArrowUpRight, SignalHigh, Globe } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

const smoothEase = [0.16, 1, 0.3, 1];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scaleTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="bg-[#050505] text-neutral-50 font-sans selection:bg-emerald-600/30 selection:text-emerald-400 overflow-x-hidden min-h-screen">
      {/* Global Background Image for Hero Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.img 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, 300]), 
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.6, 0]) 
          }}
          src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2574&auto=format&fit=crop" 
          className="w-full h-full object-cover mix-blend-screen"
          alt="Minecraft Landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/90 to-[#050505]" />
      </div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-emerald-500 origin-left z-50 rounded-r-full shadow-[0_0_15px_#10b981]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 md:px-16 py-8 z-40">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase, delay: 0.2 }}
          className="text-lg font-bold tracking-tight text-white flex items-center gap-2"
        >
          KNOCKERS<span className="text-emerald-500">.</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase, delay: 0.3 }}
        >
          <a
            href="https://discord.gg/drt4CmFJF"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-2.5 bg-neutral-900/60 backdrop-blur-md rounded-full text-sm font-medium border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-800/60 shadow-lg"
          >
            Join Discord
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex flex-col items-center justify-center p-8 origin-top"
        style={{ y: fadeY, opacity: opacityFade, scale: scaleTransform }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase, delay: 0.1 }}
          className="relative z-10 text-center max-w-5xl"
        >
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-neutral-300 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 shadow-xl">
              <SignalHigh className="w-3 h-3 text-emerald-400 animate-pulse" />
              Singapore Region
            </span>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase shadow-xl">
              The Next Evolution
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-[110px] font-medium leading-[0.9] tracking-tighter mb-8 text-neutral-100 drop-shadow-2xl">
            Survival, <br className="hidden sm:block" />
            <span className="text-white relative">
              reinvented.
              <span className="absolute bottom-1 left-0 right-0 h-4 bg-emerald-600/20 -z-10 blur-xl pointer-events-none" />
            </span>
          </h1>
          <p className="text-neutral-300 drop-shadow-md text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-normal tracking-tight bg-black/20 p-2 rounded-2xl backdrop-blur-sm border border-white/5 shadow-2xl">
            A premium SMP experience in Asia. Everything resets every month, giving everyone a fresh start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://discord.gg/drt4CmFJF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Enter the SMP
            </motion.a>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-white hover:text-emerald-400 font-semibold text-lg transition-colors flex items-center gap-2 group bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-xl"
            >
              Discover
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </motion.section>

      <div className="relative z-20" id="about">
        {/* Detail 1: The Reset */}
        <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto relative border-t border-white/5 bg-[#050505]">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: smoothEase }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs">01 / The Reset</span>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
                  A fresh start. <br />Every single month.
                </h2>
              </div>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-lg font-light tracking-tight">
                The world resets every 30 days. No more stale maps, no unbreakable monopolies. Just you, the wilderness, and a leveled playing field right here in Asia.
              </p>
              <div className="flex gap-12 pt-4">
                <div className="space-y-2 text-left">
                  <div className="text-3xl font-light text-white">30</div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Days</div>
                </div>
                <div className="space-y-2 text-left">
                  <div className="text-3xl font-light text-white">100<span className="text-emerald-500">%</span></div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Wipe</div>
                </div>
              </div>
            </div>
            
            <div className="group relative rounded-3xl p-1 overflow-hidden h-full min-h-[400px]">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="absolute inset-[1px] bg-[#050505] rounded-3xl z-10 overflow-hidden border border-white/10">
                 <img src="https://images.unsplash.com/photo-1605371903649-4eb52899f8d9?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2s] ease-out" alt="Minecraft Nature" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
                 
                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                   <div className="bg-black/60 backdrop-blur-xl p-8 rounded-full border border-white/10 shadow-2xl relative">
                     <Timer className="w-16 h-16 text-emerald-400 absolute inset-0 m-auto animate-[ping_3s_infinite] opacity-30" />
                     <Timer className="w-16 h-16 text-emerald-400 relative z-10" />
                   </div>
                   <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: smoothEase, delay: 0.3 }}
                      className="mt-6 z-10 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-sm"
                   >
                     <span className="text-emerald-400 font-medium tracking-widest text-sm uppercase">World Generation</span>
                   </motion.div>
                 </div>
               </div>
            </div>
          </motion.div>
        </section>

        {/* Detail 2: The Fight */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto bg-[#050505]">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: smoothEase }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative group rounded-3xl p-1 overflow-hidden h-full min-h-[400px]">
               <div className="absolute inset-[1px] bg-neutral-900 rounded-3xl z-10 overflow-hidden border border-white/10 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[2s] ease-out mix-blend-luminosity" alt="The End Fight" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
                 
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                      className="bg-red-950/40 backdrop-blur-xl p-8 rounded-full border border-red-900/30 shadow-[0_0_50px_rgba(220,38,38,0.2)]"
                    >
                      <Sword className="w-16 h-16 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
                    </motion.div>
                    <p className="mt-6 text-red-500/80 text-sm font-bold tracking-[0.3em] uppercase bg-black/40 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">The End Fight</p>
                 </div>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-red-500 font-bold tracking-widest uppercase text-xs">02 / The War</span>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
                  Settle the score.
                </h2>
              </div>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-lg font-light tracking-tight">
                The climax of the month. Two teams fight for the Dragon Egg. It's not just a brag—it is the deciding factor for who controls the early game of the next cycle.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Two Teams. One Winner.",
                  "Fight for the Dragon Egg.",
                  "Absolute glory."
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-300 font-light bg-white/5 px-6 py-4 rounded-2xl border border-white/5 backdrop-blur-sm w-max">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Highlight 3: The Prize (Mace) */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto bg-[#050505]">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: smoothEase }}
            className="rounded-[2.5rem] bg-gradient-to-b from-neutral-900/80 to-[#0a0a0a] border border-white/10 p-12 md:p-24 overflow-hidden relative shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
             
             <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                 <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-red-500 font-bold tracking-widest uppercase text-xs shadow-black drop-shadow-md">03 / The Winner</span>
                      <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white drop-shadow-lg">
                        Absolute power.
                      </h2>
                    </div>
                    <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-light tracking-tight drop-shadow-md">
                      The team that secures the egg earns the legendary <strong>Mace</strong> for the next month. Start stronger, hit harder, and lead the server.
                    </p>
                 </div>
                 <div className="flex justify-center lg:justify-end">
                    <motion.div 
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                      className="relative bg-black/40 backdrop-blur-2xl p-8 lg:p-12 rounded-[2rem] border border-white/10"
                    >
                       <img 
                        src="https://minecraft.wiki/images/Mace_JE1_BE1.png?79901" 
                        alt="The Mace" 
                        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_40px_rgba(220,38,38,0.4)]"
                        referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-1/4 bg-red-600/30 blur-3xl -z-10 rounded-full" />
                    </motion.div>
                 </div>
             </div>
          </motion.div>
        </section>

        {/* Vote Section */}
        <section className="py-24 px-6 md:px-16 text-center max-w-4xl mx-auto bg-[#050505]">
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: smoothEase }}
           >
              <h3 className="text-neutral-500 font-bold tracking-widest uppercase text-sm mb-6">Democracy</h3>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-10 text-white leading-tight">
                What type next? <br className="hidden sm:block" />The community decides.
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                 {['Lifesteal', 'Standard', 'Hardcore', 'Experimental'].map(label => (
                   <div key={label} className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-neutral-200 font-medium whitespace-nowrap hover:bg-white/10 hover:border-white/20 transition-all cursor-crosshair shadow-lg">
                     {label}
                   </div>
                 ))}
              </div>
           </motion.div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607513746994-686bd6151cb8?q=80&w=2574&auto=format&fit=crop')] object-cover opacity-10 mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: smoothEase }}
               className="bg-black/60 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/10 shadow-2xl"
            >
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 text-white">
                Ready to fight?
              </h2>
              <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto">
                Connect to the Singapore region proxy right now and start your adventure.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://discord.gg/drt4CmFJF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-black rounded-full font-bold text-lg transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              >
                Join Discord
                <MessageSquare className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 px-8 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
               <span className="text-white font-bold tracking-tight text-2xl">KNOCKERS.</span>
               <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono flex items-center gap-2">
                 <Globe className="w-3 h-3 text-emerald-500" />
                 SG / ASIA
               </span>
             </div>
             <span className="text-neutral-600 text-sm font-medium">© {new Date().getFullYear()} Knockers SMP. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

