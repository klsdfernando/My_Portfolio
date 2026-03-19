import React from 'react';
import MetricsPanel from '../components/MetricsPanel';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import CustomCursor from '../components/CustomCursor';
import ThreeDModel from '../components/ThreeDModel';
import TerminalEasterEgg from '../components/TerminalEasterEgg';
import Timeline from '../components/Timeline';

const Home = () => {
  return (
    <>
      <CustomCursor />
      <div className="app-container">
        {/* Top Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 0',
        }}>
          <div className="text-gradient-purple" style={{ 
            fontFamily: 'var(--font-mono)', 
            fontWeight: 'bold', 
            letterSpacing: '2px',
            fontSize: '1.2rem'
          }}>
            <span className="full-name">I am Sushan Fernando</span>
            <span className="short-name">Sushan</span>
          </div>

          <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-main)', fontSize: '0.9rem' }}>
            <a href="#hero" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Home</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Projects</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Skills</a>
            <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Education</a>
          </div>
        </header>

        {/* Top Section with Hero and Metrics aligned */}
        <div className="dashboard-layout" style={{ alignItems: 'stretch' }}>
          <Hero />
          <MetricsPanel />
        </div>

        {/* Main Content Sections Below */}
        <main className="main-content" style={{ marginTop: '3rem' }}>
          <TerminalEasterEgg />
          <Projects />
          <ThreeDModel />
          <Timeline />
          <Skills />
        </main>
      </div>
    </>
  );
};

export default Home;
