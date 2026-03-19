import React from 'react';
import { motion } from 'framer-motion';

const LayerGraphics = ({ id, color }) => {
  switch (id) {
    case 'ml':
      return (
        <g>
          <circle r="120" fill="rgba(157, 0, 255, 0.05)" stroke={color} strokeWidth="1" strokeDasharray="4 8" />
          <motion.g animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
            <path d="M 30,0 L 15,45 L -40,64 L -80,20 L -90,-50 L -20,-100 L 80,-70 Z" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
            <path d="M 15,45 L -80,20 L -20,-100 Z" fill="none" stroke={color} strokeWidth="1" opacity="0.2" />
            {[ [30,0], [15,45], [-40,64], [-80,20], [-90,-50], [-20,-100], [80,-70], [50, 20], [0, 80], [-60, -30], [20, -50] ].map((p, i) => (
               <React.Fragment key={i}>
                 <circle cx={p[0]} cy={p[1]} r="3" fill="#fff" />
                 <circle cx={p[0]} cy={p[1]} r="6" fill="none" stroke={color} strokeWidth="1" />
               </React.Fragment>
            ))}
          </motion.g>
        </g>
      );
    case 'cyber':
      return (
        <g>
          <circle r="120" fill="rgba(0, 255, 136, 0.05)" stroke={color} strokeWidth="1" />
          <motion.circle r="110" fill="none" stroke={color} strokeWidth="6" strokeDasharray="60 30 20 40 10 50" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} />
          <motion.circle r="90" fill="none" stroke={color} strokeWidth="2" strokeDasharray="30 60" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} />
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <g key={angle} transform={`rotate(${angle}) translate(60, 0)`}>
              <polygon points="0,-10 8.6,-5 8.6,5 0,10 -8.6,5 -8.6,-5" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
            </g>
          ))}
        </g>
      );
    case 'net':
      return (
        <g>
          <circle r="120" fill="rgba(0, 240, 255, 0.05)" stroke={color} strokeWidth="1" />
          <circle r="80" fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 4" />
          <circle r="100" fill="none" stroke={color} strokeWidth="2" opacity="0.5" />
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
            <circle cx="100" cy="0" r="4" fill="#fff" filter="url(#glow)" />
            <circle cx="-100" cy="0" r="4" fill="#fff" filter="url(#glow)" />
            <path d="M 100 0 A 100 100 0 0 1 0 100" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" strokeDasharray="5 20" />
            <path d="M -100 0 A 100 100 0 0 1 0 -100" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" strokeDasharray="5 20" />
          </motion.g>
          <line x1="-120" y1="0" x2="120" y2="0" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="-120" x2="0" y2="120" stroke={color} strokeWidth="0.5" opacity="0.5" />
        </g>
      );
    case 'elec':
      return (
        <g>
          <circle r="120" fill="rgba(255, 0, 127, 0.05)" stroke={color} strokeWidth="1" />
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
            {Array.from({length: 12}).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const r1 = 30;
              const r2 = 70 + (i%4)*15;
              const x1 = r1 * Math.cos(angle);
              const y1 = r1 * Math.sin(angle);
              const x2 = r2 * Math.cos(angle);
              const y2 = r2 * Math.sin(angle);
              return (
                <g key={i}>
                  <path d={`M ${x1} ${y1} L ${x2} ${y1} L ${x2} ${y2}`} fill="none" stroke={color} strokeWidth="2" />
                  <circle cx={x2} cy={y2} r="4" fill="none" stroke={color} strokeWidth="1.5" />
                  <circle cx={x2} cy={y2} r="1" fill={color} />
                </g>
              )
            })}
          </motion.g>
        </g>
      );
    case 'embed':
      return (
        <g>
          <circle r="120" fill="rgba(255, 179, 0, 0.05)" stroke={color} strokeWidth="1" />
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
             <circle r="60" fill="none" stroke={color} strokeWidth="10" strokeDasharray="15 15" />
             <circle r="50" fill="none" stroke={color} strokeWidth="2" />
             <rect x="-20" y="-20" width="40" height="40" fill="none" stroke={color} strokeWidth="2" />
             <circle cx="0" cy="0" r="5" fill={color} />
          </motion.g>
        </g>
      );
    default:
      return null;
  }
};

const HeroAnimation = () => {
  const layers = [
    { id: 'embed', name: 'EMBEDDED SYSTEMS', detail: 'RTOS / MCU CORE', color: '#ffb300', y: 310 },
    { id: 'elec',  name: 'ELECTRONICS',  detail: 'PCB / HARDWARE', color: 'var(--accent-pink)', y: 250 },
    { id: 'net',   name: 'NETWORKING',   detail: 'TCP/IP / SERVERS', color: 'var(--accent-cyan)', y: 190 },
    { id: 'cyber', name: 'CYBERSECURITY',detail: 'PEN-TESTING', color: '#00ff88', y: 130 },
    { id: 'ml',    name: 'MACHINE LEARNING', detail: 'NEURAL NETWORKS', color: 'var(--accent-purple)', y: 70 },
  ];

  return (
    <div style={{ width: '100%', height: '400px', position: 'relative', marginTop: '20px', overflow: 'hidden' }}>
      
      {/* Decorative BG Grid */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(10,11,26,0) 0%, rgba(5,7,20,1) 100%)', zIndex: 1, pointerEvents: 'none' }} />

      <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet" style={{ position: 'relative', zIndex: 2 }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
             <stop offset="50%" stopColor="rgba(0, 240, 255, 0.15)" />
             <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
          </linearGradient>
        </defs>

        {/* Global floating animation */}
        <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          
          <g transform="translate(300, 0)">
            
            {/* The Central Cyber Beam (rendered behind) */}
            <path d="M -25 70 L 25 70 L 25 310 L -25 310 Z" fill="url(#beamGrad)" />
            <line x1="0" y1="70" x2="0" y2="310" stroke="#fff" strokeWidth="2" filter="url(#glow)" opacity="0.6" />
            
            {/* Particles firing up the beam */}
            {Array.from({length: 5}).map((_, i) => (
              <motion.ellipse 
                key={`p-${i}`}
                cx="0" cy="310" rx="10" ry="5" fill="none" stroke="#fff" strokeWidth="2" filter="url(#glow)"
                animate={{ cy: [310, 70], opacity: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
              />
            ))}

            {/* Render the isometric stack */}
            {layers.map((layer, index) => (
              <g key={layer.id} transform={`translate(0, ${layer.y})`}>
                 
                 {/* 3D Isometric Projection plane */}
                 <g transform="scale(1, 0.5)">
                    <LayerGraphics id={layer.id} color={layer.color} />
                 </g>
                 
                 {/* Interface readout lines (rendered in normal 2D space) */}
                 <path 
                   d={`M 120 0 L 160 ${-15 - index*5} L 320 ${-15 - index*5}`} 
                   fill="none" stroke={layer.color} strokeWidth="1" opacity="0.5"
                 />
                 <text x="165" y={-20 - index*5} fill={layer.color} fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2" filter="url(#glow)">
                    // {layer.name}
                 </text>
                 <text x="320" y={-5 - index*5} fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1" textAnchor="end">
                    {layer.detail}
                 </text>
                 
                 {/* Rotating core ring on the beam for this layer */}
                 <ellipse cx="0" cy="0" rx="25" ry="12.5" fill="none" stroke={layer.color} strokeWidth="1" strokeDasharray="10 5" opacity="0.6" />
              </g>
            ))}

          </g>

        </motion.g>
      </svg>
      
      {/* Decorative Screen Glitch Info */}
      <div style={{ position: 'absolute', bottom: 15, left: 20, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
        SYS_SYNC_RATE: 
        <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}> 99.9%</motion.span> <br/>
        UPTIME: <span style={{ color: 'var(--accent-cyan)' }}>OPTIMAL</span>
      </div>

    </div>
  );
};

export default HeroAnimation;
