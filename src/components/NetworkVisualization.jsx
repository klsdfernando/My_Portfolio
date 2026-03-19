import React from 'react';
import { motion } from 'framer-motion';

const NetworkVisualization = () => {
  // Generate random node positions for the network visualization
  const nodes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    cx: Math.random() * 800 + 50,
    cy: Math.random() * 300 + 50,
    r: Math.random() * 8 + 4,
    color: Math.random() > 0.5 ? 'var(--accent-cyan)' : 'var(--accent-purple)'
  }));

  // Create connections between nodes
  const links = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (Math.random() > 0.8) {
        links.push({
          source: nodes[i],
          target: nodes[j]
        });
      }
    }
  }

  return (
    <div className="glass-card" style={{ padding: '0', overflow: 'hidden', position: 'relative', height: '400px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
        <h3 style={{ fontSize: '1.2rem', margin: 0 }}>ML DEVELOPMENT & HARDWARE OPTIMIZATION</h3>
        <p className="metric-label">Live connection mapping</p>
      </div>

      <svg width="100%" height="100%" viewBox="0 0 900 400" preserveAspectRatio="none">
        <defs>
          <radialGradient id="nodeGlowCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--bg-primary)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlowPurple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--bg-primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Draw Links */}
        {links.map((link, idx) => (
          <motion.line
            key={`link-${idx}`}
            x1={link.source.cx}
            y1={link.source.cy}
            x2={link.target.cx}
            y2={link.target.cy}
            stroke="rgba(140, 150, 255, 0.3)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Draw Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Glow effect */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 2.5}
              fill={node.color === 'var(--accent-cyan)' ? 'url(#nodeGlowCyan)' : 'url(#nodeGlowPurple)'}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Core Node */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.color}
            />
          </g>
        ))}

        {/* Floating Data Packets (Dots moving along lines) */}
        {links.slice(0, 5).map((link, idx) => (
          <motion.circle
            key={`packet-${idx}`}
            r="3"
            fill="var(--accent-pink)"
            style={{ filter: 'drop-shadow(0 0 5px var(--accent-pink))' }}
            animate={{
              cx: [link.source.cx, link.target.cx],
              cy: [link.source.cy, link.target.cy],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NetworkVisualization;
