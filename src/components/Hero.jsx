import React from 'react';
import HeroAnimation from './HeroAnimation';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Machine Learning & Cybersecurity Researcher',
      'Electronics Enthusiast',
      'Applications & Web App Developer'
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="hero-section glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem', margin: 0, minHeight: '90px' }}>
          Sushan // <span className="text-gradient">
            {text}
            <Cursor cursorColor="#00f0ff" />
          </span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.8' }}>
          I am an Electronics and Computer Science student at the University of Kelaniya. 
          Currently pursuing my BSc, I am specializing in Machine Learning and LLM training, 
          blending my technical foundation with cutting-edge AI research.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
          <button style={{
            background: 'linear-gradient(90deg, var(--accent-purple), #4a00e0)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            fontFamily: 'var(--font-main)'
          }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            Deploy Project
          </button>

          <button style={{
            background: 'transparent',
            color: 'var(--accent-cyan)',
            border: '1px solid var(--accent-cyan)',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'var(--font-main)'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            View GitHub
          </button>
        </div>
      </div>

      {/* Unified Custom SVG Animation for ML, Electronics, Cyber, and Embedded */}
      <HeroAnimation />

    </section>
  );
};

export default Hero;
