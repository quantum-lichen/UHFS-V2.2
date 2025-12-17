import React from 'react';
import { ARCHITECTURE_LAYERS } from '../constants';
import * as Icons from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {ARCHITECTURE_LAYERS.map((layer, index) => {
        // Dynamic Icon lookup
        const IconComponent = (Icons as any)[layer.icon] || Icons.Box;
        // Phi based scaling for visual interest
        const widthPercent = 100 - (index * 5); 

        return (
          <div 
            key={index}
            style={{ width: `${widthPercent}%` }}
            className={`
              relative flex items-center justify-between p-4 
              border border-white/10 rounded-lg 
              bg-gradient-to-r from-black/60 to-white/5 
              backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]
              hover:shadow-[0_0_20px_rgba(255,0,153,0.2)]
              group
            `}
          >
            {/* Connector Line */}
            {index < ARCHITECTURE_LAYERS.length - 1 && (
                <div className="absolute left-1/2 -bottom-4 w-px h-4 bg-white/20 -z-10 group-hover:bg-neon-magenta/50 transition-colors"></div>
            )}

            <div className="flex items-center gap-4">
              <div className={`p-2 rounded bg-white/5 ${layer.color} shadow-inner`}>
                <IconComponent size={24} />
              </div>
              <div className="text-left">
                <h3 className={`font-bold font-mono ${layer.color}`}>{layer.name}</h3>
                <p className="text-xs text-gray-400 font-mono">{layer.desc}</p>
              </div>
            </div>
            
            {/* Decorative Phi Indicator */}
            <div className="text-[10px] font-mono text-gray-600 opacity-50">
                φ^{index + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Architecture;