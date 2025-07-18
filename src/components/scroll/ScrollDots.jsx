import { useEffect, useState } from 'react';
import './ScrollDots.css';

export default function ScrollDots({ sections }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(entry => entry.isIntersecting);
        if (visibleSection) {
          const index = sections.findIndex(section => section.id === visibleSection.target.id);
          if (index !== -1) setActive(index);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-dots">
      {sections.map((_, i) => (
        <div
          key={i}
          className={`dot ${active === i ? 'active' : ''}`}
          onClick={() => scrollToSection(sections[i].id)}
        />
      ))}
    </div>
  );
}
