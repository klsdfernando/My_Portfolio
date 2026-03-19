import React, { useRef, useState } from 'react';

const timelineData = [
  {
    year: "2026",
    role: "Cisco CCNA",
    company: "University of Moratuwa",
    description: "Advanced networking certification focusing on routing, switching, and secure network infrastructure design.",
    color: "var(--accent-purple)",
    status: "BOOTING_SYSTEM...",
    icon: "📡"
  },
  {
    year: "2025 - 2029",
    role: "BSc Electronics and Computer Science",
    company: "University of Kelaniya",
    description: "Undergraduate degree bridging hardware electronics, embedded microcontrollers, and low-level software engineering.",
    color: "var(--accent-cyan)",
    status: "PROCESSING...",
    icon: "⚙️"
  },
  {
    year: "2024",
    role: "Software Engineering Diploma",
    company: "NIBM",
    description: "Comprehensive study of software architectures, complex algorithms, and full-stack application deployment.",
    color: "#39d353",
    status: "COMPILED_SC",
    icon: "💻"
  },
  {
    year: "2020 - 2023",
    role: "A/L - Combined Math, Physics & ICT",
    company: "Advanced Level Education",
    description: "Strong theoretical foundation in complex mathematics, physics principles, and information technology logic.",
    color: "var(--text-secondary)",
    status: "ARCHIVED_DATA",
    icon: "📐"
  }
];

// Interactive 3D Card Component
const HoloCard = ({ item, isLeft }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    // Calculate rotation (-15deg to 15deg max)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="holo-timeline-row" style={{
      display: 'flex',
      justifyContent: isLeft ? 'flex-start' : 'flex-end',
      alignItems: 'center',
      width: '100%',
      marginBottom: '6rem',
      position: 'relative',
      perspective: '1500px'
    }}>
      
      {/* Laser Connector Line */}
      <div className="holo-connector" style={{
        position: 'absolute',
        top: '50%',
        left: isLeft ? 'calc(50% - 40px)' : '50%',
        right: isLeft ? '50%' : 'calc(50% - 40px)',
        height: '1px',
        background: `linear-gradient(${isLeft ? 'to right' : 'to left'}, transparent, ${item.color})`,
        boxShadow: `0 0 10px ${item.color}`,
        zIndex: 0,
        opacity: isHovered ? 1 : 0.3,
        transition: 'all 0.4s ease'
      }} />

      {/* Quantum Node Sphere */}
      <div className="quantum-node" style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.5)' : 'scale(1)'}`,
        width: '12px',
        height: '12px',
        background: item.color,
        borderRadius: '50%',
        boxShadow: `0 0 15px ${item.color}, 0 0 30px ${item.color}`,
        zIndex: 2,
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}>
        {/* Core pulse */}
        <div style={{
          position: 'absolute', top: '-10px', left: '-10px', right: '-10px', bottom: '-10px',
          border: `1px solid ${item.color}`, borderRadius: '50%',
          animation: isHovered ? 'core-pulse 1s linear infinite' : 'none',
          opacity: 0
        }} />
      </div>
      
      {/* 3D Holo Card container */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="holo-card-container"
        style={{ 
          width: 'calc(50% - 50px)', 
          zIndex: 1,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'translateZ(30px)' : 'translateZ(0)'}`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          cursor: 'crosshair',
          position: 'relative'
        }}
      >
        <div 
          className="holo-card-inner" 
          style={{ 
            padding: '2rem',
            background: `linear-gradient(135deg, rgba(8, 12, 25, 0.9), rgba(15, 20, 40, ${isHovered ? 0.95 : 0.8}))`,
            borderRadius: '4px', // Sharp corners for terminal look
            border: `1px solid ${isHovered ? item.color : 'rgba(100, 115, 255, 0.1)'}`,
            borderLeft: `3px solid ${item.color}`,
            boxShadow: isHovered ? `0 15px 35px rgba(0,0,0,0.6), inset 0 0 20px ${item.color}20` : '0 10px 30px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease'
          }}
        >
          {/* Cyberpunk grid overlay */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundSize: '20px 20px',
            backgroundImage: `linear-gradient(to right, ${item.color}10 1px, transparent 1px), linear-gradient(to bottom, ${item.color}10 1px, transparent 1px)`,
            opacity: isHovered ? 0.4 : 0.1,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }} />

          {/* Corner structural accents */}
          <svg style={{ position: 'absolute', top: 0, right: 0, width: '30px', height: '30px', opacity: isHovered ? 1 : 0.3, transition: '0.4s' }}>
            <path d="M 0,0 L 30,0 L 30,30" fill="none" stroke={item.color} strokeWidth="2" />
          </svg>
          <svg style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px', opacity: isHovered ? 1 : 0.3, transition: '0.4s' }}>
            <path d="M 30,0 L 30,30 L 0,30" fill="none" stroke={item.color} strokeWidth="2" />
          </svg>

          {/* Text Content */}
          <div style={{ position: 'relative', zIndex: 2, transform: 'translateZ(20px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <span style={{ 
                color: 'var(--text-secondary)', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.9rem', 
                fontWeight: 'bold',
                letterSpacing: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ display: 'inline-block', filter: isHovered ? `drop-shadow(0 0 5px ${item.color})` : 'none', transition: '0.3s' }}>{item.icon}</span> 
                {item.year}
              </span>
              
              <span style={{ 
                fontSize: '0.65rem', 
                fontFamily: 'var(--font-mono)', 
                padding: '4px 12px', 
                background: isHovered ? `${item.color}20` : 'rgba(0,0,0,0.5)',
                color: isHovered ? '#fff' : item.color,
                border: `1px solid ${isHovered ? item.color : item.color + '50'}`,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                boxShadow: isHovered ? `0 0 10px ${item.color}50` : 'none'
              }}>
                [{item.status}]
              </span>
            </div>
            
            <h3 style={{ 
              fontSize: '1.6rem', 
              marginTop: '0', 
              marginBottom: '0.5rem', 
              color: isHovered ? '#fff' : 'rgba(255,255,255,0.9)', 
              fontFamily: 'var(--font-main)',
              textShadow: isHovered ? `0 0 10px ${item.color}80` : 'none',
              transition: '0.3s'
            }}>
              {item.role}
            </h3>
            
            <h4 style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)', 
              fontWeight: '400', 
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-mono)'
            }}>
              <span style={{ color: item.color }}>&gt;_SYS.LOC:</span> {item.company}
            </h4>
            
            <p style={{ 
              color: isHovered ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', 
              fontSize: '0.95rem', 
              lineHeight: '1.7', 
              margin: 0,
              transition: 'color 0.3s ease'
            }}>
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="education" style={{ position: 'relative', marginTop: '120px', marginBottom: '100px', overflow: 'hidden' }}>
      
      {/* Background Ambience */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(100, 115, 255, 0.05) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />

      <h2 style={{ fontSize: '2.5rem', marginBottom: '5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span className="text-gradient">SYSTEM_LOG</span> // Education History
      </h2>
      
      <div className="holo-timeline-container" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', zIndex: 1 }}>
        
        {/* Core Laser Axis */}
        <div 
          className="laser-axis"
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, transparent, var(--accent-cyan), var(--accent-purple), transparent)',
            boxShadow: '0 0 10px var(--accent-cyan), 0 0 20px var(--accent-purple)',
            opacity: 0.6
          }}
        >
          {/* Energy Pulses on the Laser */}
          <div className="laser-pulse" style={{ position: 'absolute', top: 0, left: '-2px', width: '6px', height: '100px', background: 'linear-gradient(to bottom, transparent, #fff, transparent)', filter: 'blur(2px)', opacity: 0.8 }} />
          <div className="laser-pulse delay-2" style={{ position: 'absolute', top: 0, left: '-2px', width: '6px', height: '50px', background: 'linear-gradient(to bottom, transparent, #00ffcc, transparent)', filter: 'blur(1px)', opacity: 0.9 }} />
        </div>

        {timelineData.map((item, index) => (
          <HoloCard key={index} item={item} isLeft={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
