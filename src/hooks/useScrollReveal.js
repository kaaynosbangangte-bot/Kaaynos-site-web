import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          if (!options.persist) {
            observer.unobserve(entry.target);
          }
        } else if (options.persist) {
          entry.target.classList.remove('reveal-visible');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        // Increased threshold from 0.15 to 0.25 so elements must be more visible before animating
        threshold: options.threshold || 0.25,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.persist]);

  return ref;
};
