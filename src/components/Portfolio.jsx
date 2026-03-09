import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Nexus E-Commerce Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'A high-performance modern e-commerce solution with seamless checkout.'
  },
  {
    id: 2,
    title: 'PayFlow Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80',
    description: 'A secure and intuitive fintech mobile application for daily transactions.'
  },
  {
    id: 3,
    title: 'Aura Corporate Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    description: 'Complete brand overhaul and identity design for a global enterprise.'
  },
  {
    id: 4,
    title: 'Synthetix Analytics Dashboard',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'A data-rich SaaS dashboard offering real-time business insights.'
  },
  {
    id: 5,
    title: 'Pulse Brand Kit',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
    description: 'Vibrant and scalable visual identity for a disruptive tech startup.'
  },
  {
    id: 6,
    title: 'Vitality Health Tracker',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    description: 'A comprehensive wellness tracker with AI-driven recommendations.'
  }
];

const categories = ['All', 'Web Design', 'App Development', 'Branding'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const headerRef = useScrollReveal();
  const filterRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header reveal fade-up" ref={headerRef}>
          <span className="portfolio-label">Nos Réalisations</span>
          <h2 className="portfolio-title">
            Featured <span>Projects</span>
          </h2>
          <p className="portfolio-desc">
            Explore our latest work. We take pride in delivering digital solutions 
            that combine stunning design with robust engineering.
          </p>
        </div>

        {/* Filters */}
        <div className="portfolio-filters reveal fade-up delay-100" ref={filterRef}>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid reveal fade-up delay-200" ref={gridRef}>
          {filteredProjects.map((project, index) => (
            <div 
              className={`portfolio-card reveal fade-up delay-${(index % 3 + 1) * 100}`} 
              key={project.id}
            >
              <div className="portfolio-img-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <a href="#" className="project-link" aria-label={`View ${project.title}`}>
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="portfolio-empty">
            <p>No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
