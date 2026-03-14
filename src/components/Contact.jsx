import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const headerRef = useScrollReveal();
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact', 'successAlert'));
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
        <div className="contact-top reveal fade-up" ref={headerRef}>
          <div className="contact-top-text">
            <span className="contact-label">{t('contact', 'label')}</span>
            <h2 className="contact-title">
              {t('contact', 'title1')}{' '}
              <span>{t('contact', 'titleHighlight1')}</span>{t('contact', 'titleMiddle')}{' '}
              <span>{t('contact', 'titleHighlight2')}</span>
            </h2>
          </div>
          <p className="contact-top-desc">
            {t('contact', 'desc')}
          </p>
        </div>

        <div className="contact-layout">
          {/* Info cards */}
          <div className="contact-info-side reveal fade-right delay-200" ref={infoRef}>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4>{t('contact', 'ourOffice')}</h4>
                <p>Abidjan, Côte d'Ivoire</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4>{t('contact', 'callUs')}</h4>
                <p>+225 07 00 00 00 00</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>{t('contact', 'emailUs')}</h4>
                <p>contact@kaaynos.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Clock size={22} />
              </div>
              <div>
                <h4>{t('contact', 'workingHours')}</h4>
                <p>{t('contact', 'workingHoursValue')}</p>
              </div>
            </div>

            <div className="contact-cta-card">
              <p>{t('contact', 'ctaText')}</p>
              <a href="mailto:contact@kaaynos.com" className="contact-cta-link">
                contact@kaaynos.com
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form reveal fade-left delay-400" onSubmit={handleSubmit} ref={formRef}>
            <div className="form-header">
              <h3>{t('contact', 'formTitle')}</h3>
              <p>{t('contact', 'formSubtitle')}</p>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t('contact', 'labelName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('contact', 'placeholderName')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact', 'labelEmail')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('contact', 'placeholderEmail')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contact', 'labelSubject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={t('contact', 'placeholderSubject')}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact', 'labelMessage')}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t('contact', 'placeholderMessage')}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              <Send size={16} />
              {t('contact', 'submitBtn')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
