import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-bg-shapes">
                <div className="contact-shape contact-shape-1" />
                <div className="contact-shape contact-shape-2" />
                <div className="contact-shape contact-shape-3" />
            </div>

            <div className="container">
                <div className="contact-top">
                    <div className="contact-top-text">
                        <span className="contact-label">Contactez-nous</span>
                        <h2 className="contact-title">
                            Join the Kaaynos Journey —{' '}
                            <span>Innovate</span>, Grow, and <span>Lead</span>
                        </h2>
                    </div>
                    <p className="contact-top-desc">
                        Ready to transform your digital presence? Let's discuss how we can help
                        your business grow with our innovative solutions.
                    </p>
                </div>

                <div className="contact-layout">
                    {/* Info cards */}
                    <div className="contact-info-side">
                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h4>Our Office</h4>
                                <p>Abidjan, Côte d'Ivoire</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h4>Call Us</h4>
                                <p>+225 07 00 00 00 00</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h4>Email Us</h4>
                                <p>contact@kaaynos.com</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <Clock size={22} />
                            </div>
                            <div>
                                <h4>Working Hours</h4>
                                <p>Mon — Fri: 08h - 18h</p>
                            </div>
                        </div>

                        <div className="contact-cta-card">
                            <p>Let's build something amazing together.</p>
                            <a href="mailto:contact@kaaynos.com" className="contact-cta-link">
                                contact@kaaynos.com
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-header">
                            <h3>Send us a message</h3>
                            <p>We'll get back to you within 24 hours.</p>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="How can we help?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us about your project..."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit">
                            <Send size={16} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
