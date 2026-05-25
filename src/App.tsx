/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { ChevronDown, Sword, Users, Timer, MessageSquare, Trophy, Hash } from "lucide-react";
import { ReactNode } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Dynamic Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-50 shadow-[0_0_15px_#dc2626]"
        style={{ scaleX }}
      />

      {/* Aesthetic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation - Minimal */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-8 z-40">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tighter"
        >
          KNOCKERS <span className="text-red-600">SMP</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a
            href="https://discord.gg/drt4CmFJF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-bold transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            DISCORD
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <span className="px-6 py-2 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-black tracking-[0.3em] uppercase">
              Limited slots available
            </span>
          </motion.div>
          
          <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] tracking-tighter mb-8 italic uppercase">
            SURVIVAL <br />
            <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]">EVOLVED.</span>
          </h1>
          <p className="text-neutral-500 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-medium">
            Everything resets every month. A fresh start for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://discord.gg/drt4CmFJF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-lg transition-shadow hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] uppercase"
            >
              Enter the SMP
            </motion.a>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border border-white/10 hover:bg-white/5 rounded-2xl font-black text-lg transition-colors uppercase"
            >
              End Fight
            </button>
          </div>
        </motion.div>

        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer opacity-30"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] font-black tracking-[0.3em] uppercase">Scroll to learn more</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Feature: The Reset */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-[2px] w-12 bg-red-600" />
                 <span className="text-red-500 font-black tracking-[0.2em] uppercase text-sm">Monthly Reset</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                A FRESH START <br />
                EVERY SINGLE MONTH
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                The world resets every 30 days. No more stale maps. Everyone starts back at the beginning.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <Stat icon={<Timer />} label="30 Days" sub="Active Cycle" />
                <Stat icon={<Hash />} label="Reset" sub="Monthly Cycle" />
              </div>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-red-600/10 blur-[100px] group-hover:bg-red-600/20 transition-all" />
               <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]">
                  <div className="bg-black rounded-[1.8rem] p-12 aspect-square flex items-center justify-center border border-white/5">
                    <Timer className="w-32 h-32 text-red-600 animate-[pulse_4s_infinite]" />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Feature: End Fight */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 relative group">
               <div className="absolute inset-0 bg-red-600/10 blur-[100px]" />
               <div className="relative p-1 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem]">
                  <div className="bg-black rounded-[1.8rem] p-12 aspect-square flex items-center justify-center border border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
                    <Sword className="w-32 h-32 text-red-600 relative z-10" />
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-[2px] w-12 bg-red-600" />
                 <span className="text-red-500 font-black tracking-[0.2em] uppercase text-sm">The War</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter italic">
                THE END <br />
                FIGHT
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                The climax of the month. Two teams fight for the Dragon Egg. It's not just a brag—it's for the Mace.
              </p>
              <div className="space-y-4">
                <Point text="Two Teams. One Winner." />
                <Point text="Fight for the Dragon Egg." />
                <Point text="Winner gets the reward." />
              </div>
            </div>
          </motion.div>

          {/* Feature: The Prize */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-12 md:p-24 bg-gradient-to-br from-red-600 to-red-950 rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-red-900/20"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
             <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
                 <div className="lg:col-span-2">
                    <Trophy className="w-16 h-16 text-white mb-8" />
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">The Winner</h2>
                    <p className="text-red-100 text-xl leading-relaxed">
                      The team that gets the egg earns the <strong>Mace</strong> for the next month. Start stronger than anyone else.
                    </p>
                 </div>
                 <div className="flex justify-center">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="bg-white/5 backdrop-blur-sm p-12 rounded-full border border-white/10"
                    >
                       <img 
                        src="https://minecraft.wiki/images/Mace_JE1_BE1.png?79901" 
                        alt="Mace" 
                        className="w-32 h-32 object-contain drop-shadow-[0_0_20px_white]"
                        referrerPolicy="no-referrer"
                       />
                    </motion.div>
                 </div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 bg-neutral-950/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
           >
              <h3 className="text-red-500 font-black tracking-[0.3em] uppercase text-xs mb-6">Vote</h3>
              <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">WHAT TYPE NEXT? <br />YOU CHOOSE.</h2>
              <div className="flex flex-wrap justify-center gap-4">
                 {['Lifesteal', 'Standard', 'Hardcore', 'Experimental'].map(label => (
                   <span key={label} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:border-red-600 transition-colors cursor-default">
                     {label}
                   </span>
                 ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* Finale */}
      <section className="py-48 px-6 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/5 blur-[150px] -z-0" />
        <div className="relative z-10">
          <h2 className="text-6xl md:text-[140px] font-black tracking-tightest mb-12 uppercase leading-[0.8] italic">
            READY TO <br />
            <span className="text-red-600">FIGHT?</span>
          </h2>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/drt4CmFJF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 bg-red-600 text-white rounded-3xl font-black text-2xl hover:shadow-[0_0_60px_rgba(220,38,38,0.5)] transition-all"
          >
            JOIN DISCORD
            <MessageSquare className="w-8 h-8" />
          </motion.a>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 opacity-40 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
           <span className="font-black tracking-tighter text-2xl">KNOCKERS SMP</span>
           <span className="text-[10px] font-mono tracking-widest uppercase">The monthly reset experience.</span>
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon, label, sub }: { icon: ReactNode, label: string, sub: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-red-600 mb-2">
        {icon}
        <span className="font-black text-2xl text-white">{label}</span>
      </div>
      <p className="text-xs text-neutral-600 font-bold uppercase tracking-widest">{sub}</p>
    </div>
  );
}

function Point({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-150 transition-transform" />
      <span className="font-bold text-neutral-300 group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}
