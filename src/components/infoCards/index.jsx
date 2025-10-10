import { useEffect, useState, useRef } from 'react';
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import './index.css';

const cardsData = [
  { value: 15, label: 'Ingenierías' },
  { value: 5, label: 'Licenciaturas' },
  { value: 3, label: 'Maestrías' },
  { value: 9.74, label: '% de la matrícula de educación superior' },
  { value: 25000, label: 'Egresados' },
  { value: 14363, label: 'Estudiantes activos' },
];

export default function InfoCards({ side = 'left' }) {
  const [counts, setCounts] = useState(cardsData.map(() => 0));
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const filteredData =
    side === 'left' ? cardsData.slice(0, 3) : cardsData.slice(3);

  useEffect(() => {
    if (isInView) {
      filteredData.forEach((card, index) => {
        let start = 0;
        const increment = card.value / 80;
        const interval = setInterval(() => {
          start += increment;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(start, card.value);
            return newCounts;
          });
          if (start >= card.value) clearInterval(interval);
        }, 30);
      });
    } else {
      setCounts(filteredData.map(() => 0));
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`info-cards-container ${side}`}>
      {filteredData.map((card, index) => (
        <motion.div
          key={`${side}-${index}`} // 🔑 clave única
          className={`info-card ${side}`}
          initial={{ opacity: 0, x: side === 'left' ? -120 : 120, y: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  y: [0, -6, 0],
                  transition: {
                    duration: 1.6,
                    delay: index * 0.25,
                    ease: [0.22, 1, 0.36, 1],
                    y: {
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                    },
                  },
                }
              : {
                  opacity: 0,
                  x: side === 'left' ? -120 : 120,
                  y: 0,
                }
          }
        >
          <div className="info-card-content">
            <h2 className="info-value">
              {card.value % 1 === 0
                ? Math.floor(counts[index])
                : counts[index].toFixed(2)}
            </h2>
            <p className="info-label">{card.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
