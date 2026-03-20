import React from 'react';
import { Network, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import voidTunnelImg from '../assets/4.png';
import cineStreamImg from '../assets/3.png';
import centraAiImg from '../assets/1.png';
import nebulaIdeImg from '../assets/2.png';

const projectsData = [
  {
    title: 'Centra AI Manager : All in one Local AI',
    description: 'Local AI manager with text generation, image/video gen, web/video summarize and deep search capabilities.',
    tech: ['Video Summarize', 'Electron', 'LLM', 'Transformers'],
    type: 'MACHINE_LEARNING',
    link: '#',
    imageType: 'ai',
    image: centraAiImg,
    buttonText: 'Coming Soon',
    effectColor: '0, 150, 255' // Blue
  },
  {
    title: 'Nebula IDE : Multi Agentic System',
    description: 'A multi-agent system where a coordinator model distributes project plans to specialized agents for efficient execution.',
    tech: ['Multi Agentic System', 'LORA/QLORA', 'VSCode Fork'],
    type: 'MACHINE_LEARNING',
    link: '#',
    imageType: 'ai',
    image: nebulaIdeImg,
    effectColor: '255, 120, 0' // Orange
  },
  {
    title: 'CineStream : Movie Streaming Platform',
    description: 'Movie Streamming platform, working for windows mac and linux for now. Movies , TV-Serirs and also Anime available in this...',
    tech: ['Movie Sreamming', 'Electron', 'React'],
    type: 'APP_DEVELOPMENT',
    link: 'mailto:klsdfernando@gmail.com?subject=Requesting%20Early%20Access%20to%20CineStream&body=Dear%20Fernando%20KLSD%2C%0A%0AI%20am%20writing%20to%20express%20my%20interest%20in%20joining%20the%20early%20access%20program%20for%20your%20movie%20application%2C%20CineStream.%0A%0AI%20am%20very%20interested%20in%20exploring%20the%20platform\'s%20features%20and%20movie%20collection.%20During%20this%20early%20access%20period%2C%20I%20would%20be%20happy%20to%20provide%20feedback%20and%20report%20any%20bugs%20or%20issues%20I%20encounter%20to%20help%20improve%20the%20application%20before%20its%20official%20release.%0A%0ACould%20you%20please%20grant%20me%20early%20access%20to%20the%20current%20version%3F%20I%20look%20forward%20to%20hearing%20from%20you.%0A%0AThanks...',
    imageType: 'stream',
    image: cineStreamImg,
    buttonText: 'Early Access',
    effectColor: '0, 240, 255' // Green/Cyan
  },
  {
    title: 'Void Tunnel : V2Ray Client For Linux',
    description: 'A V2Ray client for Linux supporting Trojan, Vmess, Vless, and Shadowsocks with TUN device tunneling.',
    tech: ['Linux', 'V2Ray', 'WireGuard', 'Tunnel'],
    type: 'APP_DEVELOPMENT',
    link: 'https://github.com/klsdfernando/VoidTunnel',
    imageType: 'cyber',
    image: voidTunnelImg,
    buttonText: 'Github Repo'
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(100, 115, 255, 0.2)', paddingBottom: '15px' }}>
        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Network size={20} color="var(--accent-purple)" />
          FEATURED_DEPLOYS
        </h3>
        <span className="hover-glow-text" style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', cursor: 'pointer', transition: 'all 0.3s' }}>
          [ VIEW_ALL_REPOSITORIES ]
        </span>
      </div>
      
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            className="glass-card project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 15px rgba(100, 115, 255, 0.3)' }}
            style={{ padding: '0', display: 'flex', flexDirection: 'column' }}
          >
            {/* Project Header Bar */}
            <div style={{ padding: '15px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>
                // {project.type}
              </span>
              <Cpu size={14} color="var(--text-secondary)" />
            </div>
            
            {/* Abstract Tech Visual or Custom Image */}
            <div 
              className={`project-visual bg-${project.imageType}`} 
              style={{ 
                height: '160px', 
                position: 'relative', 
                overflow: 'hidden',
                '--effect-color-rgb': project.effectColor || '255, 87, 34'
              }}
            >
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    opacity: '0.2', 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    filter: `sepia(1) saturate(2) ${project.title.includes('Nebula') ? 'hue-rotate(10deg)' : 'hue-rotate(-45deg)'}`
                  }} 
                />
              )}
              <div className="scanline" style={{ zIndex: 1 }}></div>
              <div className="scanline secondary" style={{ zIndex: 1 }}></div>
              <div className="grid-overlay" style={{ zIndex: 1 }}></div>
            </div>
            
            {/* Project Content */}
            <div style={{ padding: '25px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', fontWeight: 'bold', color: '#fff', textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
                {project.title}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                {project.description}
              </p>
              
              {/* Tech Stack Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Terminal Style Button */}
              <a 
                href={project.link} 
                className="glass-button terminal-btn" 
                style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                &gt; {project.buttonText || 'EXECUTING_VIEW'}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
