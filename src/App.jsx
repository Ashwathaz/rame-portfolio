import { useState, useEffect } from 'react';
import {
  Moon, Sun, Download, Mail, Github, Linkedin, ExternalLink,
  Code, Database, Cloud, Box, Activity, Terminal, Cpu, Ship,
  Award, BookOpen, Briefcase, Zap, ChevronRight, Gamepad2,
  Trophy, Crosshair, Target, Sword, Mountain, Disc, Instagram, Camera
} from 'lucide-react';
import './index.css';
import resumePdf from './assets/Ramesh_Khanna_Resume.pdf';
import NetworkBg from './NetworkBg';
import CurvyLinesBg from './CurvyLinesBg';

function App() {
  const [theme, setTheme] = useState('devops');
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'personal' ? 'devops' : 'personal'));
  };

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

  const personalInterests = {
    gaming: [
      { name: 'Valorant', rank: 'Diamond 2', icon: <Crosshair size={24} />, desc: 'Tactical precision and team coordination.' },
      { name: 'RDR2', rank: 'Story Explorer', icon: <Mountain size={24} />, desc: 'A breathtaking masterpiece of storytelling.' },
      { name: 'God of War', rank: 'Axe Master', icon: <Sword size={24} />, desc: 'Epic battles and powerful emotions.' },
      { name: 'Ghost of Tsushima', rank: 'Legendary Samurai', icon: <Sword size={24} />, desc: 'The way of the ghost in a beautiful world.' },
      { name: 'Ghost of Yōtei', rank: 'Wandering Ronin', icon: <Sword size={24} />, desc: 'A new legend begins.' },
      { name: 'GoW Ragnarok', rank: 'Path to Valhalla', icon: <Sword size={24} />, desc: 'The conclusion of a legendary saga.' },
      { name: 'God of War III', rank: 'Spartan Rage', icon: <Sword size={24} />, desc: 'The ultimate revenge of Kratos.' },
      { name: 'GTA 5', rank: 'Los Santos Kingpin', icon: <Target size={24} />, desc: 'Heists, cars, and endless chaos.' },
      { name: 'Elden Ring', rank: 'Elden Lord', icon: <Sword size={24} />, desc: 'A majestic and challenging journey through the Lands Between.' },
    ],
    sports: [
      { name: 'Chess', rank: 'Strategic Thinker', icon: <Trophy size={24} /> },
      { name: 'Handball', rank: 'Dynamic Player', desc: 'Fast-paced action and court control', icon: <Activity size={24} /> },
    ],
    foodie: [
      { name: 'Chicken Biryani', icon: '🍗', type: 'The King of Meals' },
      { name: 'Chicken Fried Rice', icon: '🍚', type: 'Comfort in Every Bite' },
      { name: 'Samosa', icon: '🥟', type: 'The Perfect Snack' },
      { name: 'Rose Milk', icon: '🥛', type: 'Refreshing Sweetness' },
      { name: 'Sundae', icon: '🍨', type: 'Sweet Delight' },
      { name: 'Milkshake', icon: '🥤', type: 'Thick & Creamy' },
      { name: 'French Fries', icon: '🍟', type: 'Crispy & Golden' },
      { name: 'Chicken 65', icon: '🔥', type: 'Spicy & Crispy' },
      { name: 'Grill Chicken', icon: '🍖', type: 'Smoky Goodness' },
    ],
    ambitions: [
      { name: 'Esports Cafe', icon: <Gamepad2 size={24} />, desc: 'Vision to build a hub for local esports.' },
      { name: 'Coach', icon: <Crosshair size={24} />, desc: 'Guiding and mentoring players to victory.' },
      { name: 'Entrepreneur', icon: <Briefcase size={24} />, desc: 'Building innovative and successful businesses.' },
    ]
  };

  const projects = [
    {
      title: 'Biomedical Implants: 3D Printed Titanium Alloy',
      date: 'Jun 2017 - Oct 2021',
      image: '/project1.png',
      tags: ['Mechanical Engineering', '3D Printing', 'Nanotubes'], // Kept in data but will not render
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
      {theme === 'devops' ? <NetworkBg theme={theme} /> : <CurvyLinesBg />}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 'none', padding: 0 }}>
          <div className="brand">
            <Zap size={24} fill="var(--accent-color)" style={{ color: 'var(--accent-color)', filter: 'drop-shadow(0 0 10px var(--accent-glow))' }} />
            {theme === 'devops' ? 'R Ramesh Khanna' : 'RAME'}
          </div>

          <div className="theme-switch-container">
            <span className={`theme-label ${theme === 'devops' ? 'active' : ''}`}>Professional</span>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              <div className="toggle-knob">
                {theme === 'devops' ? <Briefcase size={12} /> : <BookOpen size={12} />}
              </div>
            </button>
            <span className={`theme-label ${theme === 'personal' ? 'active' : ''}`}>Personal</span>
          </div>
        </div>
      </header>

      <div className="container">
        <main>
          {/* Hero Section */}
          <section className="hero fade-in">
            <div className="hero-content">
              {theme === 'devops' ? (
                <>
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
                </>
              ) : (
                <>
                  <div className="hero-badge">
                    <BookOpen size={14} /> Personal Blog & Hobbies
                  </div>
                  <h1>
                    Beyond the <span className="gradient-text">Support Role</span>, I explore
                  </h1>
                  <p>
                    Passionate gamer, sports enthusiast, and life explorer.
                    This is where I document my personal journey, gaming milestones,
                    and the things that keep me inspired outside of tech.
                  </p>
                </>
              )}

              <div className="btn-group">
                {theme === 'devops' && (
                  <a href={resumePdf} download="Ramesh_Khanna_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <Download size={20} /> Download Resume
                  </a>
                )}
                <a href={theme === 'devops' ? "mailto:rameshkhanna06.r@gmail.com" : "https://www.instagram.com/relaxed_rafaa?igsh=MWl4djZ1cGN5cDd1aQ=="} target={theme === 'devops' ? undefined : "_blank"} rel="noopener noreferrer" className="btn btn-secondary">
                  {theme === 'devops' ? <Mail size={20} /> : <Instagram size={20} />}
                  {theme === 'devops' ? "Get in Touch" : "Follow @relaxed_rafaa"}
                </a>
              </div>

              <div className="hero-stats">
                {theme === 'devops' ? (
                  <>
                    <div className="stat-item">
                      <h3>4+</h3>
                      <p>Years Experience</p>
                    </div>
                    <div className="stat-item">
                      <h3>5</h3>
                      <p>Companies</p>
                    </div>

                  </>
                ) : (
                  <>
                    <div className="stat-item">
                      <h3>D2</h3>
                      <p>Valo Rank</p>
                    </div>
                    <div className="stat-item">
                      <h3>∞</h3>
                      <p>Adventures</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {theme === 'devops' && (
              <div className="hero-visual">
                <div className="image-wrapper">
                  <div className="image-bg"></div>
                  <img
                    src="/profile.jpg"
                    alt="Ramesh Khanna"
                    className="hero-image"
                    key={theme} // Trigger animation on theme change
                  />
                </div>
              </div>
            )}
          </section>

          {theme === 'devops' ? (
            <>
              {/* DevOps Mode Sections */}
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
                        {/* Image handle with error fallback */}
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
            </>
          ) : (
            <>
              {/* Personal Mode Sections */}
              <section className="reveal visible" id="gaming">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Gamer Life</span>
                  <h2 className="section-title">Gaming Milestones</h2>
                  <p style={{ marginTop: '1rem' }}>Leveling up one game at a time.</p>
                </div>
                <div className="gaming-grid">
                  {personalInterests.gaming.map((game, idx) => (
                    <div key={idx} className="game-card">
                      <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{game.icon}</div>
                      <span className="game-title">{game.name}</span>
                      <span className="game-rank">{game.rank}</span>
                      <p className="game-desc">{game.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal visible" id="foodie">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Taste Buds</span>
                  <h2 className="section-title">The Foodie Corner</h2>
                  <p style={{ marginTop: '1rem' }}>What keeps me fueled and happy.</p>
                </div>
                <div className="food-grid">
                  {personalInterests.foodie.map((food, idx) => (
                    <div key={idx} className="food-card">
                      <div className="food-icon">{food.icon}</div>
                      <div className="food-info">
                        <h4>{food.name}</h4>
                        <p>{food.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal visible" id="ambitions">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Future Focus</span>
                  <h2 className="section-title">Interests & Ambitions</h2>
                </div>
                <div className="grid grid-cols-2">
                  {personalInterests.ambitions.map((goal, idx) => (
                    <div key={idx} className="card" style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        {goal.icon}
                      </div>
                      <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{goal.name}</h3>
                      <p>{goal.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal visible" id="sports">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Active Lifestyle</span>
                  <h2 className="section-title">Sports & Recreation</h2>
                </div>
                <div className="grid grid-cols-2">
                  {personalInterests.sports.map((sport, idx) => (
                    <div key={idx} className="card" style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        {sport.icon}
                      </div>
                      <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{sport.name}</h3>
                      <p style={{ fontWeight: 'bold' }}>{sport.rank}</p>
                      {sport.desc && <p style={{ marginTop: '0.5rem', opacity: 0.8, fontStyle: 'italic' }}>"{sport.desc}"</p>}
                    </div>
                  ))}
                </div>
              </section>
              <section className="reveal visible" id="gallery">
                <div className="section-header" style={{ textAlign: 'center' }}>
                  <span className="section-label">Moments</span>
                  <h2 className="section-title">Life Captured</h2>
                  <p style={{ marginTop: '1rem' }}>
                    A glimpse into my adventures. Follow me on <a href="https://www.instagram.com/relaxed_rafaa?igsh=MWl4djZ1cGN5cDd1aQ==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold' }}>@relaxed_rafaa <Instagram size={14} style={{ display: 'inline', verticalAlign: 'middle', marginTop: '-2px' }} /></a>
                  </p>
                </div>

                <div className="grid grid-cols-3" style={{ marginBottom: '3rem' }}>
                  <div className="card">
                    <Camera size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Exploration</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Discovering new places, trekking through mountains, and taking in the fresh air.</p>
                  </div>
                  <div className="card">
                    <Mountain size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Nature</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Finding peace in the beauty of landscapes and capturing moments in time.</p>
                  </div>
                  <div className="card">
                    <Sun size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>Lifestyle</h3>
                    <p style={{ color: 'var(--text-muted)' }}>From everyday routines to extraordinary experiences, documented and shared.</p>
                  </div>
                </div>
              </section>
            </>
          )}
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


