import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Mail, Github, Linkedin, TerminalSquare } from 'lucide-react';

const NavLink = ({ href, icon: Icon, text, delay }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ x: 5, color: '#fff', background: 'rgba(0, 240, 255, 0.05)' }}
    style={{
      display: 'flex', alignItems: 'center', gap: '15px',
      color: 'var(--text-secondary)', textDecoration: 'none',
      padding: '12px 15px', borderRadius: '6px',
      fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      borderLeft: '2px solid transparent',
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderLeft = '2px solid var(--accent-cyan)'}
    onMouseLeave={(e) => e.currentTarget.style.borderLeft = '2px solid transparent'}
  >
    <Icon size={18} />
    {text}
  </motion.a>
);

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '25px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '150px', height: '150px', background: 'var(--accent-purple)', filter: 'blur(80px)', opacity: 0.2, borderRadius: '50%', pointerEvents: 'none' }} />

        {/* --- PROFILE IDENTITY --- */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
          <div style={{ position: 'relative' }}>
            {/* Hexagon Avatar Border */}
            <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: 'absolute', top: -3, left: -3 }}>
               <polygon points="30,2 58,16 58,44 30,58 2,44 2,16" fill="none" stroke="var(--accent-cyan)" strokeWidth="1" strokeDasharray="5 5" />
            </svg>
            <div style={{ width: '54px', height: '54px', borderRadius: '10px', background: 'linear-gradient(45deg, var(--accent-purple), var(--accent-cyan))', display: 'flex', justifyContent: 'center', alignItems: 'center', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
               <User size={24} color="#fff" />
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.1rem', color: '#fff', letterSpacing: '1px' }}>
              SUSHAN
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-pink)', marginTop: '4px' }}>
              ENGINEER.SYS // ROOT
            </div>
          </div>
        </div>

        {/* --- NAVIGATION --- */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '10px', paddingLeft: '15px', letterSpacing: '2px' }}>DIRECTORY</div>
          <NavLink href="#about" text="About_Me" icon={TerminalSquare} delay={0.1} />
          <NavLink href="#experience" text="Experience" icon={Briefcase} delay={0.2} />
          <NavLink href="#projects" text="Projects" icon={Code} delay={0.3} />
        </nav>

        {/* --- CONTACT & LINKS --- */}
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '15px', letterSpacing: '2px' }}>EXTERNAL_LINKS</div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <motion.a href="https://github.com" target="_blank" rel="noreferrer" whileHover={{ y: -3, color: 'var(--accent-cyan)' }} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
              <Github size={20} />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" rel="noreferrer" whileHover={{ y: -3, color: 'var(--accent-pink)' }} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
              <Linkedin size={20} />
            </motion.a>
            <motion.a href="mailto:contact@example.com" whileHover={{ y: -3, color: 'var(--accent-purple)' }} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
