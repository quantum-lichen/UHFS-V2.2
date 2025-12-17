import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play } from 'lucide-react';

const TerminalDemo: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const demoScript = [
    "> python uhfs_v22.py",
    "Initializing UHFS V2.2 Core...",
    "Connecting to NVMe-oF Fabric (RDMA)... [CONNECTED]",
    "Mapping ACΦ-496 Codons to ZNS Zones...",
    "Transmuting: 'IA serves humanity universally' -> LBA 0x4A1F...",
    "Transmuting: 'Truth is immutable' -> LBA 0x8B2C...",
    "Transmuting: 'φ governs ethical distribution' -> LBA 0x1D9E...",
    "Running Integrity Check...",
    "✅ 3x NVMe-oF writes confirmed: 89.2µs",
    "---------------------------------------",
    "> python poc/benchmark.py",
    "📊 Starting 1M Atom Benchmark...",
    "[===================================>] 100%",
    "✅ 15,000,000 IOPS | 0.1µs/atom",
    "🌐 Distributed NVMe-oF | WA=1.0x",
    "H-Scale Score: 0.618φ",
    "System Status: OPTIMAL"
  ];

  useEffect(() => {
    if (isRunning) {
      let lineIndex = 0;
      const interval = setInterval(() => {
        if (lineIndex < demoScript.length) {
          // Capture the line value synchronously to avoid closure stale state issues
          const nextLine = demoScript[lineIndex];
          setLines(prev => [...prev, nextLine]);
          lineIndex++;
          
          // Auto scroll
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        } else {
          setIsRunning(false);
          clearInterval(interval);
        }
      }, 300); // Speed of typing
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleRun = () => {
    setLines([]);
    setIsRunning(true);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-neon-cyan/30 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,210,255,0.15)]">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-neon-cyan" />
          <span className="text-xs font-mono text-gray-400">user@quantum-lichen:~/uhfs-v2.2</span>
        </div>
        <div className="flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
           <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      
      <div 
        ref={terminalRef}
        className="h-64 overflow-y-auto p-4 font-mono text-sm space-y-1 text-green-400"
      >
        {!isRunning && lines.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p className="mb-4">Ready to initialize quantum storage simulation.</p>
                <button 
                    onClick={handleRun}
                    className="flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 rounded transition-all active:scale-95"
                >
                    <Play size={16} /> Run Demo
                </button>
            </div>
        )}
        {lines.map((line, i) => {
          if (!line) return null;
          return (
            <div key={i} className={`${line.startsWith('>') ? 'text-white font-bold' : ''} ${line.includes('Error') ? 'text-red-500' : ''} ${line.includes('✅') ? 'text-neon-lime' : ''}`}>
              {line}
            </div>
          );
        })}
        {isRunning && <div className="animate-pulse">_</div>}
      </div>
    </div>
  );
};

export default TerminalDemo;