import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Terminal } from 'lucide-react';

const TerminalEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="terminal" style={{ marginTop: '20px' }}>
      {!isOpen ? (
        <div 
          onClick={() => setIsOpen(true)}
          style={{ 
            cursor: 'pointer', 
            padding: '15px', 
            border: '1px dashed rgba(255,255,255,0.2)', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            color: 'var(--text-secondary)',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            e.currentTarget.style.color = 'var(--accent-cyan)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <Terminal size={18} /> Initialize System Console...
        </div>
      ) : (
        <div className="glass-card" style={{ padding: '20px', backgroundColor: 'rgba(5, 7, 20, 0.8)', border: '1px solid rgba(0, 240, 255, 0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '15px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>sushan@system:~</span>
            <span style={{ cursor: 'pointer', color: 'var(--accent-pink)' }} onClick={() => setIsOpen(false)}>X</span>
          </div>
          
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#00ff88', minHeight: '100px' }}>
            <span>root@sys_admin:~# </span>
            <Typewriter
              words={[
                './deploy_portfolio.sh',
                'Initializing neural network subroutines...',
                'Loading embedded systems protocols...',
                'Bypassing mainframe security... Access Granted.',
                'Welcome, Recruiter. I am ready to build the future.'
              ]}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TerminalEasterEgg;
