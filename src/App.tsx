/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { ChevronDown, Sword, Users, Timer, MessageSquare, Trophy, Hash, ArrowUpRight } from "lucide-react";
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
    <div className="bg-[#050505] text-neutral-50 font-sans selection:bg-red-600/30 selection:text-red-400 overflow-x-hidden min-h-screen">
      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-red-600 origin-left z-50 rounded-r-full shadow-[0_0_10px_#dc2626]"
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
          KNOCKERS<span className="text-red-500">.</span>
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
            className="group flex items-center gap-2 px-6 py-2.5 bg-neutral-900/40 backdrop-blur-md rounded-full text-sm font-medium border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-800/40"
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-[#050505] to-[#050505] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase, delay: 0.1 }}
          className="relative z-10 text-center max-w-5xl"
        >
          <div className="mb-6 flex justify-center">
            <span className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold tracking-widest uppercase">
              The Next Evolution
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-[110px] font-medium leading-[0.9] tracking-tighter mb-8 text-neutral-100">
            Survival, <br className="hidden sm:block" />
            <span className="text-white relative">
              reinvented.
              <span className="absolute bottom-1 left-0 right-0 h-4 bg-red-600/30 -z-10 blur-md pointer-events-none" />
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-normal tracking-tight">
            A premium SMP experience. Everything resets every month, giving everyone a fresh start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://discord.gg/drt4CmFJF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-transform"
            >
              Enter the SMP
            </motion.a>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-white hover:text-red-400 font-semibold text-lg transition-colors flex items-center gap-2 group"
            >
              Discover
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </motion.section>

      <div className="bg-[#050505] relative z-20" id="about">
        {/* Detail 1: The Reset */}
        <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: smoothEase }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-red-500 font-bold tracking-widest uppercase text-xs">01 / The Reset</span>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
                  A fresh start. <br />Every single month.
                </h2>
              </div>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-lg font-light tracking-tight">
                The world resets every 30 days. No more stale maps, no unbreakable monopolies. Just you, the wilderness, and a leveled playing field.
              </p>
              <div className="flex gap-12 pt-4">
                <div className="space-y-2 text-left">
                  <div className="text-3xl font-light text-white">30</div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Days</div>
                </div>
                <div className="space-y-2 text-left">
                  <div className="text-3xl font-light text-white">100<span className="text-red-500">%</span></div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Wipe</div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-16 flex items-center justify-center relative overflow-hidden aspect-square lg:aspect-auto h-full min-h-[400px]">
               <div className="absolute inset-0 bg-gradient-to-tr from-red-600/5 to-transparent pointer-events-none" />
               <Timer className="w-32 h-32 md:w-48 md:h-48 text-neutral-800 absolute animate-[pulse_6s_infinite]" />
               <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: smoothEase, delay: 0.2 }}
                  className="z-10 bg-[#050505] p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl"
               >
                 <span className="text-red-500 font-medium">System / Reset In Progress</span>
               </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Detail 2: The Fight */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: smoothEase }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-16 flex flex-col items-center justify-center relative overflow-hidden h-full min-h-[400px]">
               <div className="absolute inset-0 bg-gradient-to-bl from-red-900/10 to-transparent pointer-events-none" />
               <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               >
                 <Sword className="w-24 h-24 text-red-500 mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
               </motion.div>
               <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">The End Fight</p>
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
                  "Winner gets the reward."
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-300 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Highlight 3: The Prize (Mace) */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: smoothEase }}
            className="rounded-[2.5rem] bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5 p-12 md:p-24 overflow-hidden relative"
          >
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
             
             <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                 <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-red-500 font-bold tracking-widest uppercase text-xs">03 / The Winner</span>
                      <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
                        Absolute power.
                      </h2>
                    </div>
                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light tracking-tight">
                      The team that secures the egg earns the legendary <strong>Mace</strong> for the next month. Start stronger, hit harder, and lead the server.
                    </p>
                 </div>
                 <div className="flex justify-center lg:justify-end">
                    <motion.div 
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                      className="relative"
                    >
                       <img 
                        src="https://minecraft.wiki/images/Mace_JE1_BE1.png?79901" 
                        alt="The Mace" 
                        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_40px_rgba(220,38,38,0.2)]"
                        referrerPolicy="no-referrer"
                       />
                       <div className="absolute -inset-10 bg-red-600/20 blur-3xl -z-10 rounded-full" />
                    </motion.div>
                 </div>
             </div>
          </motion.div>
        </section>

        {/* Vote Section */}
        <section className="py-24 px-6 md:px-16 text-center max-w-4xl mx-auto">
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: smoothEase }}
           >
              <h3 className="text-neutral-500 font-bold tracking-widest uppercase text-sm mb-6">Democracy</h3>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-10 text-white">
                What type next? <br className="hidden sm:block" />You choose.
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                 {['Lifesteal', 'Standard', 'Hardcore', 'Experimental'].map(label => (
                   <div key={label} className="px-6 py-3 bg-neutral-900 border border-white/5 rounded-2xl text-neutral-300 font-medium whitespace-nowrap">
                     {label}
                   </div>
                 ))}
              </div>
           </motion.div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: smoothEase }}
            >
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-10 text-white">
                Ready to fight?
              </h2>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://discord.gg/drt4CmFJF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-semibold text-lg transition-all"
              >
                Join Discord
                <MessageSquare className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
             <span className="text-white font-semibold tracking-tight text-xl">KNOCKERS.</span>
             <span className="text-neutral-600 text-sm font-medium">© {new Date().getFullYear()} Knockers SMP. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
