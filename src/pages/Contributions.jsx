import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';

const Contributions = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [commitData, setCommitData] = useState([]);
  const [totalCommits, setTotalCommits] = useState(0);
  const [loading, setLoading] = useState(true);

  const years = [2024, 2023, 2022, 2021]; // Customize based on account age

  useEffect(() => {
    const fetchContributions = async () => {
      setLoading(true);
      try {
        // We will fetch from GitHub API using a proxy or a mock for now
        // since we don't have a backend to securely mask the token.
        // For the sake of demonstration, generating mock data for the selected year
        
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        let days = [];
        let total = 0;
        const daysInYear = selectedYear % 4 === 0 ? 366 : 365;
        
        for (let i = 0; i < daysInYear; i++) {
          // Randomize commits: higher likelihood of 0 or small numbers
          const rand = Math.random();
          let count = 0;
          let level = 'NONE';
          
          if (rand > 0.5) {
            count = Math.floor(Math.random() * 15) + 1;
            if (count > 10) level = 'FOURTH_QUARTILE';
            else if (count > 5) level = 'THIRD_QUARTILE';
            else if (count > 2) level = 'SECOND_QUARTILE';
            else level = 'FIRST_QUARTILE';
          }
          
          total += count;
          days.push({ date: `Day ${i+1}`, contributionCount: count, contributionLevel: level });
        }
        
        setCommitData(days);
        setTotalCommits(total);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [selectedYear]);

  // Function to render the 2D Github grid
  const renderGrid = () => {
    if (loading) return <div style={{ color: 'var(--text-secondary)' }}>Loading contribution data...</div>;

    // Group by weeks (7 days) for the standard grid
    const weeks = [];
    for (let i = 0; i < commitData.length; i += 7) {
      weeks.push(commitData.slice(i, i + 7));
    }

    return (
      <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '10px' }}>
        {weeks.map((week, wIdx) => (
          <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {/* Fill empty days at start if needed, assuming simple layout for now */}
            {week.map((day, dIdx) => {
              let bgColor = '#161b22';
              if (day.contributionLevel === 'FIRST_QUARTILE') bgColor = '#0e4429';
              if (day.contributionLevel === 'SECOND_QUARTILE') bgColor = '#006d32';
              if (day.contributionLevel === 'THIRD_QUARTILE') bgColor = '#26a641';
              if (day.contributionLevel === 'FOURTH_QUARTILE') bgColor = '#39d353';

              return (
                <div 
                  key={dIdx} 
                  title={`${day.contributionCount} commits`}
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: bgColor,
                    borderRadius: '2px',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <CustomCursor />
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <header style={{ padding: '20px 0', borderBottom: '1px solid rgba(100, 115, 255, 0.1)', marginBottom: '40px' }}>
          <Link to="/" style={{ 
            color: 'var(--text-secondary)', 
            textDecoration: 'none', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'}
          onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            ← RETURN_HOME
          </Link>
        </header>

        <main style={{ flex: 1, display: 'flex', gap: '40px', flexDirection: 'row' }}>
          
          {/* Left Column: Graph */}
          <div style={{ flex: 3 }}>
            <h1 className="text-gradient-purple" style={{ marginBottom: '10px' }}>
              {totalCommits.toLocaleString()} contributions in {selectedYear}
            </h1>
            
            <div style={{ 
              background: 'rgba(10, 14, 25, 0.6)', 
              border: '1px solid rgba(100, 115, 255, 0.1)', 
              borderRadius: '12px', 
              padding: '24px',
              marginTop: '20px'
            }}>
              {renderGrid()}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <a href="https://github.com/SushanTharuka" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                  View on GitHub
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Less</span>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#161b22', borderRadius: '2px' }} />
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#0e4429', borderRadius: '2px' }} />
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#006d32', borderRadius: '2px' }} />
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#26a641', borderRadius: '2px' }} />
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#39d353', borderRadius: '2px' }} />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Year Selection */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  style={{
                    background: selectedYear === year ? 'rgba(100, 115, 255, 0.15)' : 'transparent',
                    border: 'none',
                    color: selectedYear === year ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    padding: '10px 16px',
                    borderRadius: '6px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-main)',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                    fontWeight: selectedYear === year ? 'bold' : 'normal'
                  }}
                  onMouseOver={(e) => {
                    if (selectedYear !== year) e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseOut={(e) => {
                    if (selectedYear !== year) e.target.style.background = 'transparent';
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

        </main>
      </div>
    </>
  );
};

export default Contributions;
