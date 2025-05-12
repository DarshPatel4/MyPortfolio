import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, Code2, 
  GraduationCap, Terminal, BookOpen, Award,
  Database, Globe, Layout, Server, 
  ChevronRight, Users, UserCheck,
  FileCode, Settings2, BookUser,
  Palette, Zap, Instagram,
  FileText, Paintbrush
} from 'lucide-react';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    image: string;
  } | null>(null); // Explicitly define the type

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML', icon: FileText },
    { name: 'CSS', icon: Paintbrush },
    { name: 'C++', icon: Terminal },
    { name: 'PHP', icon: Server },
    { name: 'MERN', icon: Globe },
    { name: 'JavaScript', icon: FileCode },
    { name: 'DSA', icon: Database },
    { name: 'DBMS', icon: BookUser },
    { name: '.NET', icon: Settings2 },
    { name: 'GitHub', icon: Github },
    { name: 'Canva', icon: Palette },
    { name: 'XAMPP', icon: Zap }
  ];

  const certificates = [
    { title: 'Database Management System', image: '/iit-kgp-dbms.jpg' },
    { title: 'DSA in Java', image: '/iit-kgp-dsa.jpg' }
  ];

  return (
    <div className="min-h-screen bg-purple-950 text-white selection:bg-primary-green selection:text-purple-950">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-purple to-primary-green z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-purple-950/80 backdrop-blur-md border-b border-primary-green/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">
              <span className="text-primary-green">{'<'}</span>
              <span className="text-white">Darsh</span>
              <span className="text-primary-green">{'/>'}</span>
            </a>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Experience', 'Contact', 'Certifications'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative hex-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-950/95 to-purple-950"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="animate-float mb-8 inline-block">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-primary-purple to-primary-green">
                <Terminal size={40} className="text-purple-950" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-green">
                one line of code
              </span>
              <br />
              at a time
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl">
              Final year Computer Science student at CHARUSAT, passionate about creating elegant solutions 
              through code. Passionate about web development and open-source contributions.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-green rounded-xl 
                         font-medium hover:shadow-lg hover:shadow-primary-green/20 transition-all duration-300"
              >
                Let's Connect
              </a>
              <a
                href="#projects"
                className="group px-8 py-4 border border-primary-green/30 rounded-xl font-medium
                         hover:bg-primary-green/10 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-950 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-center mx-auto">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-primary-green/20">
                <img 
                  src="/D4.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-primary-green" />
                  <div>
                    <p className="font-medium">B.Tech CSE</p>
                    <p className="text-sm text-gray-400">4th Year</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Transforming Ideas into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-green">
                  {' '}Digital Reality
                </span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
              As a final-year Computer Science student, I focus on building efficient and user-friendly web applications. 
              I'm driven by a passion for development and a mindset of continuous learning.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="skill-badge flex items-center gap-2"
                  >
                    <skill.icon className="w-4 h-4 text-primary-green" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <Code2 className="w-6 h-6 text-primary-green mb-3" />
                  <h4 className="font-medium mb-2">Programming Club</h4>
                  <p className="text-sm text-gray-400">Core Team Member</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Award className="w-6 h-6 text-primary-green mb-3" />
                  <h4 className="font-medium mb-2">2nd Runner-up</h4>
                  <p className="text-sm text-gray-400">Hedera Challenge (Hackathon)</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                <Users className="w-6 h-6 text-primary-green mb-3" />
                  <h4 className="font-medium mb-2">Student Coordinator</h4>
                  <p className="text-sm text-gray-400">CSE NSS Unit - CHARUSAT</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <UserCheck className="w-6 h-6 text-primary-green mb-3" />
                  <h4 className="font-medium mb-2">Environmental Officer</h4>
                  <p className="text-sm text-gray-400">NSS Unit - CHARUSAT</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-purple-900/50">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-center mx-auto">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Invoice Management System',
                description: 'Streamlined solution for local businesses to manage invoices and track payments',
                image: '/tos.png',
                tech: ['PHP', 'MySQL', 'Bootstrap'],
                icon: Database,
                sourceLink: 'https://github.com/DarshPatel4/Invoice-Management-Local-Shop_22CS051_22CS052_22CS045'              },
              {
                title: 'Real Estate Website',
                description: 'Responsive web platform for property listings, inquiries, and lead management',
                image: '/rew.png',
                tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
                icon: Globe,
                sourceLink: 'https://github.com/cs-cspit/Real-Estate-Website',
                previewLink: 'https://invoice-preview.example.com' 
              },
              {
                title: 'Employee Management System',
                description: 'Web-based tool for tracking employee records, attendance, and roles',
                image: '/ems.png',
                tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
                icon: Server,
                sourceLink: 'https://github.com/DarshPatel4/Advanced_Employee_Management_System',
                previewLink: 'https://employee-management-darsh.vercel.app/' 
              },
              {
                title: 'Railway Booking System',
                description: 'Efficient C++ application for managing railway reservations',
                image: '/rms.png',
                tech: ['C++', 'OOP', 'File Handling'],
                icon: Server,
                sourceLink: 'https://github.com/DarshPatel4/3DeV_loopers'
              }
              
            ].map((project, index) => (
              <div key={index} className="group project-card">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent"></div>
                  <project.icon className="absolute top-4 right-4 w-6 h-6 text-primary-green" />
                </div>
                <div className="p-6 glass-card rounded-b-2xl">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-900/50 rounded-md text-xs border border-primary-green/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                      {project.sourceLink && (
                         <a href={project.sourceLink} target="_blank" rel="noopener noreferrer"
                          className="text-sm flex items-center gap-1 text-primary-green hover:opacity-80 transition-opacity">
                          <Code2 size={16} />
                  <span>Source</span>
                  </a>
                  )}
                    {project.previewLink && (
                      <a href={project.previewLink} target="_blank" rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-primary-green hover:opacity-80 transition-opacity">
                        <ExternalLink size={16} />
                        <span>Preview</span>
                        </a>
                        )}        
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 bg-purple-900/50">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-center mx-auto">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-1/3 bg-gradient-to-r from-green-400 via-purple-900 to-green-400 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative bg-white rounded-lg p-6 max-w-4xl w-full shadow-xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <button
                className="absolute top-4 right-4 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
                onClick={() => setSelectedCertificate(null)}
              >
                ✕
              </button>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-center text-black">
                {selectedCertificate.title}
              </h3>
            </div>
          </div>
        )}
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-center mx-auto">Journey So Far</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                title: 'B.Tech in Computer Science',
                company: 'CHARUSAT University',
                period: '2022 - 2026',
                description: 'Specializing in software development with focus on modern technologies.',
                icon: GraduationCap
              },
              {
                title: 'Programming Club Lead',
                company: 'CSE Department',
                period: '2023 - 2024',
                description: 'Organizing technical events and mentoring junior developers.',
                icon: Code2
              },
              {
                title: 'NSS Coordinator',
                company: 'CSE Department',
                period: '2022 - Present',
                description: 'Leading community service initiatives and department activities.',
                icon: BookOpen
              },
              {
                title: 'Hackathon Achievement',
                company: 'Hedera Challenge',
                period: '2025',
                description: 'Secured 3rd position with innovative blockchain solution.',
                icon: Award
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary-green to-transparent"></div>
                <div className="timeline-dot"></div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="w-6 h-6 text-primary-green" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-primary-green mb-2">{item.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{item.period}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-purple-900/50">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-center mx-auto">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="glass-card p-8 rounded-2xl text-center">
              <p className="text-xl text-gray-300 mb-8">
                Looking for internship opportunities and excited to contribute to innovative projects.
                Let's create something amazing together!
              </p>
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:22cs051@charusat.edu.in"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r 
                           from-primary-purple to-primary-green rounded-xl font-medium 
                           hover:shadow-lg hover:shadow-primary-green/20 transition-all duration-300"
                >
                  <Mail size={20} />
                  <span>22cs051@charusat.edu.in</span>
                </a>
                <div className="flex justify-center gap-6">
                  <a href="https://github.com/DarshPatel4" 
                     className="p-4 glass-card rounded-xl hover:text-primary-green hover:border-primary-green/40 
                              transition-all duration-300 border border-primary-green/20">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/darsh-patel-11028b2a2/" 
                     className="p-4 glass-card rounded-xl hover:text-primary-green hover:border-primary-green/40 
                              transition-all duration-300 border border-primary-green/20">
                    <Linkedin size={24} />
                  </a>
                  <a href="tel:9979099218" 
                     className="p-4 glass-card rounded-xl hover:text-primary-green hover:border-primary-green/40 
                              transition-all duration-300 border border-primary-green/20">
                    <Layout size={24} />
                  </a>
                  <a href="https://www.instagram.com/darsh_patel_1101" target="_blank" rel="noopener noreferrer"
     className="p-4 glass-card rounded-xl hover:text-primary-green hover:border-primary-green/40 
                transition-all duration-300 border border-primary-green/20">
    <Instagram size={24} />
           </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary-green/20">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Darsh Patel • Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;