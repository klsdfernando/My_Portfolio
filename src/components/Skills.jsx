import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: "Python / Machine Learning", level: 80, years: 6, levelText: "ADVANCED", color: "var(--accent-cyan)", desc: "Deep Learning, Custom Architectures, PyTorch" },
  { name: "IOT", level: 80, years: 2, levelText: "INTERMEDIATE", color: "#ffb300", desc: "RTOS, Low-Level Drivers, Microcontrollers" },
  { name: "React / Frontend", level: 80, years: 3, levelText: "ADVANCED", color: "var(--accent-pink)", desc: "Modern UI/UX, Component Architecture, Vite" },
  { name: "PCB Design / Hardware", level: 85, years: 1, levelText: "NORMAL", color: "var(--accent-purple)", desc: "Altium, Multi-layer routing, Signal Integrity" }
];

const SkillRing = ({ skill }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
       {/* Animated SVG Radial Chart */}
       <div style={{ position: 'relative', width: '80px', height: '80px', flexShrink: 0 }}>
         <svg width="80" height="80" viewBox="0 0 80 80">
           {/* Background Track */}
           <circle cx="40" cy="40" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
           {/* Animated Progress Ring */}
           <motion.circle 
             cx="40" cy="40" r={radius} 
             fill="none" 
             stroke={skill.color} 
             strokeWidth="6"
             strokeLinecap="round"
             strokeDasharray={circumference}
             initial={{ strokeDashoffset: circumference }}
             whileInView={{ strokeDashoffset }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
             style={{ 
               transform: "rotate(-90deg)", 
               transformOrigin: "50% 50%", 
               filter: `drop-shadow(0 0 6px ${skill.color})` 
             }}
           />
         </svg>
         {/* Center Text */}
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold' }}>
           {skill.level}%
         </div>
       </div>

       {/* Meaningful Data Info */}
       <div style={{ flex: 1 }}>
         <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', color: 'white', letterSpacing: '1px' }}>{skill.name}</h4>
         <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '10px' }}>{skill.desc}</p>
         
         {/* Technical Metadata Tags */}
         <div style={{ display: 'flex', gap: '15px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-primary)' }}>
           <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
             &gt; {skill.years} YRS EXP
           </span>
           <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: skill.color }}>
             &gt; {skill.levelText}
           </span>
         </div>
       </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', margin: 0 }}>SKILLS & TECHNICAL PROFICIENCY</h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Quantified Metrics</span>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {skillsData.map((skill, index) => (
          <SkillRing key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
