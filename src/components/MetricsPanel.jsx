import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage, color, delay }) => (
  <div style={{ marginBottom: '15px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
      <span style={{ color: '#fff' }}>{skill}</span>
      <span style={{ color }}>{percentage}%</span>
    </div>
    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
        style={{ height: '100%', background: color, boxShadow: `0 0 8px ${color}` }}
      />
    </div>
  </div>
);

const MetricsPanel = () => {
  const [commitData, setCommitData] = React.useState(Array(42).fill({ contributionLevel: 'NONE', contributionCount: 0 }));
  const [totalCommits, setTotalCommits] = React.useState(0);
  const githubUsername = 'klsdfernando'; // Configurable username

  React.useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.deno.dev/${githubUsername}.json`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const flatContributions = data.contributions.flat();
        
        // Take the last 42 days to fit the 7x6 grid
        // GitHub API dates are chronological, so this maps left to right, top to bottom correctly as long as we map correctly
        const last42 = flatContributions.slice(-42);
        const total = last42.reduce((sum, day) => sum + day.contributionCount, 0);
        
        setCommitData(last42);
        setTotalCommits(total);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback to fake data if API fails or rate limited
        const levels = ['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'];
        const fakeData = Array.from({ length: 42 }).map(() => {
          const rand = Math.floor(Math.random() * 5);
          return {
            contributionLevel: levels[rand],
            contributionCount: rand * 2,
            date: new Date().toISOString().split('T')[0]
          };
        });
        setCommitData(fakeData);
        setTotalCommits(fakeData.reduce((sum, day) => sum + day.contributionCount, 0));
      }
    };
    
    fetchGithubData();
  }, [githubUsername]);

  return (
    <aside className="sidebar RightSidebar">
      <div className="glass-card" style={{ padding: '25px', height: '100%', display: 'flex', flexDirection: 'column', gap: '30px', overflowY: 'auto' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0, 240, 255, 0.2)', paddingBottom: '10px' }}>
          <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', margin: 0, fontFamily: 'var(--font-mono)', letterSpacing: '2px' }}>
            PORTFOLIO_METRICS
          </h3>
          <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-purple)', borderRadius: '50%', boxShadow: '0 0 5px var(--accent-purple)' }}></span>
          </motion.div>
        </div>

        {/* --- CORE SKILLS PROGRESS BARS --- */}
        <div>
          <p className="metric-label" style={{ marginBottom: '15px', letterSpacing: '1px' }}>Skill levels</p>
          <SkillBar skill="Python / Machine Learning" percentage={80} color="var(--accent-cyan)" delay={0.1} />
          <SkillBar skill="IOT" percentage={80} color="#ffb300" delay={0.2} />
          <SkillBar skill="React / Frontend" percentage={80} color="var(--accent-pink)" delay={0.3} />
          <SkillBar skill="Network Security" percentage={65} color="#00ff88" delay={0.4} />
          <SkillBar skill="PCB Design" percentage={85} color="var(--accent-purple)" delay={0.5} />
        </div>

        {/* --- PREMIUM GITHUB 3D ISOMETRIC GRAPH --- */}
        <div>
          <p className="metric-label" style={{ marginBottom: '15px', letterSpacing: '1px' }}>CONTRIBUTION_CALENDAR</p>
          
          <div className="isometric-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(10, 14, 25, 0.4)', padding: '60px 20px', borderRadius: '16px', border: '1px solid rgba(100, 115, 255, 0.1)', overflow: 'hidden' }}>
            
            <div className="isometric-grid" style={{ transform: 'scale(1.4) rotateX(60deg) rotateZ(45deg)', marginBottom: '40px' }}>
              {(() => {
                const maxCommits = Math.max(...commitData.map(d => d.contributionCount || 0), 1);
                
                return commitData.map((day, i) => {
                  let colorTop = '#161b22';
                  let colorLeft = '#0d1117';
                  let colorRight = '#0d1117';
                  
                  let zHeight = 4; 
                  
                  if (day?.contributionCount > 0) {
                    const ratio = day.contributionCount / maxCommits;
                    zHeight = 6 + (ratio * 50); 
                    
                    if (day?.contributionLevel === 'FIRST_QUARTILE') {
                      colorTop = '#0e4429';
                      colorLeft = '#092c1a';
                      colorRight = '#063314';
                    } else if (day?.contributionLevel === 'SECOND_QUARTILE') {
                      colorTop = '#006d32';
                      colorLeft = '#005526';
                      colorRight = '#003d1a';
                    } else if (day?.contributionLevel === 'THIRD_QUARTILE') {
                      colorTop = '#26a641';
                      colorLeft = '#1c8033';
                      colorRight = '#146025';
                    } else if (day?.contributionLevel === 'FOURTH_QUARTILE') {
                      colorTop = '#39d353';
                      colorLeft = '#2aad40';
                      colorRight = '#1f8a30';
                    }
                  }

                  return (
                    <div 
                      key={i}
                      title={`${day?.contributionCount || 0} commits on ${day?.date || 'Unknown'}`}
                      className="iso-cube"
                      style={{
                        '--z-height': `${zHeight}px`,
                        '--color-top': colorTop,
                        '--color-left': colorLeft,
                        '--color-right': colorRight,
                        animationDelay: `${i * 15}ms`
                      }}
                    >
                      <div className="iso-base" />
                      <div className="iso-top" />
                      <div className="iso-front" />
                      <div className="iso-back" />
                      <div className="iso-side" />
                      <div className="iso-side-right" />
                    </div>
                  );
                });
              })()}
            </div>

            <a href="/contributions" className="view-detailed-btn" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              background: 'linear-gradient(90deg, rgba(88, 101, 242, 0.1), rgba(0, 255, 204, 0.1))',
              border: '1px solid rgba(0, 255, 204, 0.3)',
              borderRadius: '8px',
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '1px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginTop: '10px'
            }}>
              <span>&gt; VIEW_DETAILED</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-secondary)' }}>
             <span>RECENT 42 DAYS [ COMPILED ]</span>
             <span style={{ color: 'var(--accent-cyan)' }}>{totalCommits} TOTAL COMMITS</span>
          </div>
        </div>

        {/* --- PROJECT IMPACT STATS --- */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
          <p className="metric-label" style={{ marginBottom: '15px', letterSpacing: '1px' }}>IMPACT_READOUT</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
             <div style={{ borderLeft: '2px solid var(--accent-purple)', paddingLeft: '10px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-secondary)' }}>SYSTEMS DEPLOYED</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: '#fff' }}>14</div>
             </div>
             <div style={{ borderLeft: '2px solid var(--accent-pink)', paddingLeft: '10px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-secondary)' }}>CODE REVIEWS</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: '#fff' }}>85<span style={{fontSize:'0.8rem'}}>+</span></div>
             </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default MetricsPanel;
