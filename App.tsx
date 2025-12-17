import React from 'react';
import HypnoticFractal from './components/HypnoticFractal';
import TerminalDemo from './components/TerminalDemo';
import Architecture from './components/Architecture';
import FileTreeItem from './components/FileTree';
import { BADGES, REPO_STRUCTURE, ROADMAP } from './constants';
import { Github, Star, GitBranch, Cpu, Zap, Activity } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-sans selection:bg-neon-magenta selection:text-white">
      {/* 1. Background Layer */}
      <HypnoticFractal />

      {/* 2. Content Layer */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        
        {/* Header Section */}
        <header className="mb-16 text-center space-y-6">
          <div className="inline-block animate-float">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-magenta drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]">
              UHFS V2.2
            </h1>
            <div className="h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-neon-cyan to-neon-magenta"></div>
          </div>
          
          <h2 className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase">
            Universal Holographic File System
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl mx-auto">
            {BADGES.map((badge, i) => (
              <span 
                key={i} 
                className={`
                  flex items-center text-xs md:text-sm font-bold font-mono px-3 py-1 rounded 
                  bg-black border border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.5)]
                  hover:scale-110 transition-transform duration-200 cursor-default
                `}
              >
                <span className="text-gray-400 mr-2">{badge.label}</span>
                <span className={`${badge.color.replace('bg-', 'text-')} drop-shadow-md`}>{badge.value}</span>
              </span>
            ))}
          </div>

          <blockquote className="mt-8 p-6 border-l-4 border-phi-gold bg-white/5 backdrop-blur-sm rounded-r-lg max-w-2xl mx-auto italic text-gray-300 relative">
            <span className="absolute top-2 left-2 text-4xl text-phi-gold opacity-20">"</span>
            Holographic truth at the speed of light.
            <footer className="mt-2 text-sm text-neon-cyan not-italic font-mono">
              — Bryan Ouellette + Claude, 16 Décembre 2025
            </footer>
          </blockquote>
        </header>

        {/* Main Grid Layout (Phi Ratio approx 2/3 vs 1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN (Wide) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Architecture Section */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-b border-neon-cyan/30 pb-2">
                <Cpu className="text-neon-cyan" />
                <h3 className="text-2xl font-bold text-white">Unified Architecture V2.2</h3>
              </div>
              <Architecture />
            </section>

            {/* Performance/Demo Section */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-b border-neon-lime/30 pb-2">
                <Zap className="text-neon-lime" />
                <h3 className="text-2xl font-bold text-white">Live System Demo</h3>
              </div>
              <TerminalDemo />
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-white/5 rounded border border-white/10 backdrop-blur">
                    <div className="text-3xl font-mono font-bold text-neon-cyan">2.8M</div>
                    <div className="text-xs text-gray-400 uppercase">IOPS (Base)</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded border border-white/10 backdrop-blur">
                    <div className="text-3xl font-mono font-bold text-neon-lime">1.0x</div>
                    <div className="text-xs text-gray-400 uppercase">Write Amp</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded border border-white/10 backdrop-blur">
                    <div className="text-3xl font-mono font-bold text-phi-gold">0.618φ</div>
                    <div className="text-xs text-gray-400 uppercase">H-Scale</div>
                 </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN (Narrow) */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Repo Structure */}
            <section className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="text-neon-magenta" />
                <h3 className="text-xl font-bold text-white">Repository DNA</h3>
              </div>
              <div className="bg-black/60 rounded border border-white/5 p-2 overflow-x-auto">
                 <FileTreeItem node={REPO_STRUCTURE} />
              </div>
              <div className="mt-4">
                <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-neon-cyan hover:bg-cyan-400 text-black font-bold rounded transition-colors">
                  <Github size={20} />
                  Clone Repository
                </a>
              </div>
            </section>

            {/* Roadmap */}
            <section>
              <div className="flex items-center gap-2 mb-6 border-b border-phi-gold/30 pb-2">
                <Activity className="text-phi-gold" />
                <h3 className="text-xl font-bold text-white">Roadmap 2026</h3>
              </div>
              <div className="space-y-4">
                {ROADMAP.map((item, i) => (
                    <div key={i} className={`relative pl-6 border-l-2 ${item.completed ? 'border-neon-lime' : 'border-gray-700'} pb-4 last:pb-0`}>
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${item.completed ? 'bg-neon-lime shadow-[0_0_10px_#ccff00]' : 'bg-gray-800 border border-gray-600'}`}></div>
                        <div className="text-xs font-mono text-gray-500 mb-1">{item.quarter}</div>
                        <h4 className={`text-lg font-bold ${item.completed ? 'text-white' : 'text-gray-400'}`}>{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
              </div>
              <div className="mt-8 p-4 border border-phi-gold/20 rounded bg-phi-gold/5 text-center">
                <div className="flex justify-center mb-2 text-phi-gold"><Star className="animate-pulse-fast" /></div>
                <p className="text-sm text-phi-gold font-mono">Star for UHFS V3.0 Quantum Network</p>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-white/10 text-center text-gray-500 text-sm font-mono">
            <p>© 2025 Quantum Lichen | MIT | E8 x NVMe-oF</p>
            <p className="mt-2 opacity-50 text-xs">Agencement harmonique par Phi (φ)</p>
        </footer>

      </div>
    </div>
  );
};

export default App;