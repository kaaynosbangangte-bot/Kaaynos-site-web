import { ArrowUpRight, Code2, Globe, Smartphone, Cpu, Database, Cloud, BarChart3, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Web Design & Development',
    desc: 'Creating stunning, responsive websites that captivate your audience and drive conversions.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop',
    tags: ['React', 'Next.js', 'UI/UX'],
  },
  {
    icon: <Cpu size={28} />,
    title: 'AI & Machine Learning',
    desc: 'Leveraging artificial intelligence to automate processes and deliver intelligent insights.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    tags: ['Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile App Development',
    desc: 'Building powerful, cross-platform mobile applications that users love.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    tags: ['iOS', 'Android', 'React Native'],
  },
  {
    icon: <Database size={28} />,
    title: 'Cybersecurity',
    desc: 'Protecting your digital assets with enterprise-grade security solutions.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=400&h=250&fit=crop',
    tags: ['Pen Testing', 'Audit', 'SOC'],
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud Infrastructure',
    desc: 'Scalable, reliable cloud solutions to power your business operations globally.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    tags: ['AWS', 'Azure', 'DevOps'],
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Data Analytics',
    desc: 'Transforming raw data into actionable business intelligence and strategic insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    tags: ['BI', 'Big Data', 'Dashboards'],
  },
];

const Services = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal fade-up" ref={headerRef}>
          <span className="section-label">Ce que nous faisons</span>
          <h2 className="section-title">
            Our <span>Technology Services</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Comprehensive digital solutions tailored to meet your unique business challenges
            and drive sustainable growth.
          </p>
        </div>

        <div className="services-grid" ref={gridRef}>
          {services.map((service, index) => (
            <div
              className={`service-card reveal fade-up delay-${Math.min((index % 3 + 1) * 100, 500)}`}
              key={index}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-image-overlay">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <div className="service-body">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
