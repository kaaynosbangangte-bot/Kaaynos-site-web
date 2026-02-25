import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Facebook, Instagram, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            {/* Newsletter band */}
            <div className="footer-newsletter">
                <div className="container footer-newsletter-inner">
                    <div className="footer-newsletter-text">
                        <h3>Stay Updated</h3>
                        <p>Subscribe to our newsletter for the latest insights and innovations.</p>
                    </div>
                    <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">
                            <Send size={16} />
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Main footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <div className="logo-icon">K</div>
                                <span>Kaaynos</span>
                            </div>
                            <p>
                                Empowering businesses with world-class digital solutions.
                                Innovation. Excellence. Growth.
                            </p>
                            <div className="footer-socials">
                                <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
                                <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
                                <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
                                <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#team">Our Team</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#why-us">Careers</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services">Web Development</a></li>
                                <li><a href="#services">Mobile Apps</a></li>
                                <li><a href="#services">AI & Machine Learning</a></li>
                                <li><a href="#services">Cloud Solutions</a></li>
                                <li><a href="#services">Cybersecurity</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Get in Touch</h4>
                            <div className="footer-contact">
                                <div className="footer-contact-item">
                                    <MapPin size={14} />
                                    <span>Abidjan, Côte d'Ivoire</span>
                                </div>
                                <div className="footer-contact-item">
                                    <Phone size={14} />
                                    <span>+225 07 00 00 00 00</span>
                                </div>
                                <div className="footer-contact-item">
                                    <Mail size={14} />
                                    <span>contact@kaaynos.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© {new Date().getFullYear()} Kaaynos. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span>·</span>
                        <a href="#">Terms of Service</a>
                    </div>
                    <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
