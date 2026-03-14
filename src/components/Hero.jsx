import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const slides = [
    {
        image: '/hero1.jpg',
        alt: 'Team working on digital solutions',
    },
    {
        image: '/hero2.jpg',
        alt: 'Creative workspace with technology',
    },
    {
        image: '/hero3.jpg',
        alt: 'Modern technology and innovation',
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const { t } = useLanguage();

    const goTo = useCallback((index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 800);
    }, [isTransitioning]);

    const next = useCallback(() => {
        goTo((current + 1) % slides.length);
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + slides.length) % slides.length);
    }, [current, goTo]);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="hero" id="hero">
            {/* Slides */}
            <div className="hero-slides">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === current ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={slide.alt} />
                    </div>
                ))}
                <div className="hero-overlay" />
            </div>

            {/* Content */}
            <div className="container hero-content">
                <h1 className="hero-title">
                    {t('hero', 'title1')}
                    <br />
                    {t('hero', 'title2')}
                </h1>

                <p className="hero-desc">
                    {t('hero', 'desc1')}
                    <br />
                    {t('hero', 'desc2')}
                </p>

                <div className="hero-actions">
                    <a href="#services" className="btn-hero">
                        {t('hero', 'cta')}
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            {/* Slide Controls */}
            <div className="hero-controls">
                <button className="hero-arrow" onClick={prev} aria-label="Previous slide">
                    <ChevronLeft size={22} />
                </button>
                <div className="hero-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`hero-dot ${index === current ? 'active' : ''}`}
                            onClick={() => goTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                <button className="hero-arrow" onClick={next} aria-label="Next slide">
                    <ChevronRight size={22} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
