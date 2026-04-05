import { useState } from 'react';
import {
  Download, Mail, Linkedin, ExternalLink,
  Code, Database, Cloud, Box, Activity, Terminal, Cpu,
  Award, Briefcase, Zap, ChevronRight, Target
} from 'lucide-react';
import './index.css';
import resumePdf from './assets/Ramesh_Khanna_Resume.pdf';
import NetworkBg from './NetworkBg';

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const skills = [
    { name: 'Tech Problem Solving', icon: <Terminal size={20} /> },
    { name: 'Zendesk', icon: <Activity size={20} /> },
    { name: 'Analytical Thinking', icon: <Activity size={20} /> },
    { name: 'Figma', icon: <Code size={20} /> },
    { name: 'AutoCAD & SolidWorks', icon: <Box size={20} /> },
    { name: '3D Model Simulation', icon: <Box size={20} /> },
    { name: 'Product Lifecycle', icon: <Zap size={20} /> },
    { name: 'User Journey Mapping', icon: <Database size={20} /> },
    { name: 'EHR & AMD', icon: <Cpu size={20} /> },
    { name: 'Client Support', icon: <Target size={20} /> },
    { name: 'AWS', icon: <Cloud size={20} /> },
    { name: 'Cloud', icon: <Cloud size={20} /> }
  ];

  const projects = [
    {
      title: 'Biomedical Implants: 3D Printed Titanium Alloy',
      date: 'Jun 2017 - Oct 2021',
      image: '/project1.png',
      tags: ['Mechanical Engineering', '3D Printing', 'Nanotubes'], 
      points: [
        'Design and development of 3D printed polyamide titanium alloy',
        'Integration of multi-walled carbon nanotubes for advanced mechanical strength',
        'Focused on biomedical applications and creating durable implants',
        'Extensive materials testing and mechanical property evaluation',
        'Cross-disciplinary academic thesis combining engineering and biomedical sciences'
      ],
      link: ''
    }
  ];

  return (
    <>
      <NetworkBg theme="devops" />
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 'none', padding: 0 }}>
          <div className="brand">
            <Zap size={24} fill="var(--accent-color)" style={{ color: 'var(--accent-color)', filter: 'drop-shadow(0 0 10px var(--accent-glow))' }} />
            Ramesh Khanna
          </div>
        </div>
      </header>

      <div className="container">
        <main>
          {/* Hero Section */}
          <section className="hero fade-in">
            <div className="hero-content">
              <div className="hero-badge">
                <Zap size={14} /> Available for Support and Cloud Roles
              </div>
              <h1>
                Technical Support <span className="gradient-text">Associate</span>
              </h1>
              <p>
                Passionate, motivated, and client-focused technical support specialist.
                Proven track record of successfully addressing complex technical issues while providing excellent customer service.
              </p>

              <div className="btn-group">
                <a href={resumePdf} download="Ramesh_Khanna_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Download size={20} /> Download Resume
                </a>
                <a href="mailto:rameshkhanna06.r@gmail.com" className="btn btn-secondary">
                  <Mail size={20} /> Get in Touch
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <h3>4+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>5</h3>
                  <p>Companies</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-wrapper">
                <div className="image-bg"></div>
                <img
                  src="/profile.jpeg"
                  alt="Ramesh Khanna"
                  className="hero-image"
                />
              </div>
            </div>
          </section>

          <section className="reveal visible">
            <div className="section-header">
              <span className="section-label">Experience</span>
              <h2 className="section-title">Professional Journey</h2>
            </div>
            <div className="grid">
              <div className="card">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <span className="timeline-tag">Oct 2024 - Present</span>
                  <h3>Technosoft</h3>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Tech Support (AMD & EHR)</h4>
                </div>
                <div className="timeline-item" style={{ marginTop: '1.5rem' }}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-tag">Sep 2023 - Jun 2024</span>
                  <h3>Foundever</h3>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Tech Support (Hylan WiFi Communication)</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>🏆 Awarded as the best agent at global level for the chat process and presented with a certificate.</p>
                </div>
                <div className="timeline-item" style={{ marginTop: '1.5rem' }}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-tag">Jul 2022 - Jun 2023</span>
                  <h3>TVS</h3>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Apprentice Trainer</h4>
                </div>
                <div className="timeline-item" style={{ marginTop: '1.5rem' }}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-tag">Apr 2022 - Jun 2022</span>
                  <h3>BYJU'S</h3>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Business Development Executive (BDE)</h4>
                </div>
                <div className="timeline-item" style={{ marginTop: '1.5rem' }}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-tag">Oct 2021 - Apr 2022</span>
                  <h3>Sutherland</h3>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Associate Support</h4>
                </div>
              </div>
            </div>
          </section>

          <section className="reveal visible">
            <div className="grid grid-cols-2">
              <div className="card">
                <div className="section-header" style={{ marginBottom: '2rem' }}>
                  <Award size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                  <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Education</h2>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <span className="timeline-tag">Jun 2017 - Oct 2021</span>
                  <h3>B.Tech Mechanical Engineering</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Pondicherry University | CGPA: 8.62</p>
                </div>
              </div>

              <div className="card">
                <div className="section-header" style={{ marginBottom: '2rem' }}>
                  <Activity size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                  <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Architecture Philosophy</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  "Support is not just about resolving tickets, it's about empowering users.
                  Efficiency is born from clear communication, and reliability is built on consistent problem-solving."
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                  <div className="skill-card" style={{ padding: '0.75rem 1.25rem' }}>
                    <Target size={18} /> Problem Solving
                  </div>
                  <div className="skill-card" style={{ padding: '0.75rem 1.25rem' }}>
                    <Activity size={18} /> Active Support
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="reveal visible" id="projects">
            <div className="section-header">
              <span className="section-label">Portfolio</span>
              <h2 className="section-title">Technical Projects</h2>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                Here is my featured academic research project.
              </p>
            </div>
            <div className="carousel-container" style={{ position: 'relative', width: '100%', height: '850px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1500px' }}>
              {projects.map((project, idx) => {
                let position = 'hidden';
                if (idx === activeProject) position = 'active';
                else if (idx === (activeProject === 0 ? projects.length - 1 : activeProject - 1)) position = 'prev';
                else if (idx === (activeProject === projects.length - 1 ? 0 : activeProject + 1)) position = 'next';

                return (
                  <div
                    className={`card carousel-slide ${position}`}
                    key={idx}
                    onClick={() => setActiveProject(idx)}
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                    <h3 style={{ marginBottom: '1rem', marginTop: '1.5rem' }}>{project.title}</h3>
                    <ul style={{ listStyle: 'none', flex: 1 }}>
                      {project.points.map((pt, i) => (
                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                          <ChevronRight size={14} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', padding: '0.75rem', width: '100%', justifyContent: 'center' }}>
                        <ExternalLink size={16} /> View Project
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="reveal visible">
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="section-label">Stack</span>
              <h2 className="section-title">Core Technologies</h2>
            </div>
            <div className="skills-wall">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/rameshkhannar/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={28} />
            </a>
            <a href="mailto:rameshkhanna06.r@gmail.com" className="social-link">
              <Mail size={28} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
