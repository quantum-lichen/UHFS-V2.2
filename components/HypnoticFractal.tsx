import React from 'react';

const HypnoticFractal: React.FC = () => {
  // Generate a sequence of triangles
  const layers = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-void">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#FF0099" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {layers.map((i) => {
            const scale = 1 - (i * 0.08);
            const rotation = i * (137.5); // Golden angle approx
            const color = i % 2 === 0 ? '#00D2FF' : '#FF0099';
            const opacity = 1 - (i * 0.05);
            
            return (
              <g key={i} style={{ transformOrigin: '50% 50%', animation: `spin ${20 + i * 2}s linear infinite ${i % 2 === 0 ? 'reverse' : 'normal'}` }}>
                {/* Triangle */}
                <polygon 
                  points="50,10 90,80 10,80" 
                  fill="none" 
                  stroke={color} 
                  strokeWidth="0.2" 
                  style={{ transform: `scale(${scale})`, transformOrigin: '50% 50%' }}
                  filter="url(#glow)"
                  opacity={opacity}
                />
                {/* Inner Circle for Phi relation */}
                <circle
                    cx="50" cy="50" r={35 * scale}
                    fill="none"
                    stroke={i % 3 === 0 ? '#ccff00' : 'transparent'}
                    strokeWidth="0.1"
                    opacity={opacity * 0.5}
                />
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Overlay noise/grid for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default HypnoticFractal;