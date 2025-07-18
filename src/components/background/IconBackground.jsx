import { useMemo } from 'react';
import { iconList } from '../../assets/icons';
import './IconBackground.css';

export default function IconBackground({ count = 30, oppacity = 0.3 }) {
  // Generar los iconos solo una vez usando useMemo
  const backgroundIcons = useMemo(() => {
    const icons = [];
    const minDistance = 10;
    let attempts = 0;

    while (icons.length < count && attempts < count * 20) {
      const top = Math.random() * 90;
      const left = Math.random() * 90;
      const delay = Math.random() * 5;
      const iconSrc = iconList[Math.floor(Math.random() * iconList.length)];

      const isTooClose = icons.some((icon) => {
        const dx = icon.left - left;
        const dy = icon.top - top;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < minDistance;
      });

      if (!isTooClose) {
        icons.push({ top, left, delay, src: iconSrc });
      }
      attempts++;
    }
    return icons;
  }, [count]);

  return (
    <div className="icon-background">
      {backgroundIcons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          className="icon-background-item"
          style={{
            top: `${icon.top}%`,
            left: `${icon.left}%`,
            animationDelay: `${icon.delay}s`,
            opacity: oppacity,
          }}
          alt="background icon"
        />
      ))}
    </div>
  );
}
