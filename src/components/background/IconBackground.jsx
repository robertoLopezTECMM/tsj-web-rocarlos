import { useMemo } from 'react';
import { iconList } from '../../assets/icons';
import './IconBackground.css';

export default function IconBackground({
  count = 30,
  oppacity = 0.3,
  children,
  wrapperClassName = '',
  backgroundClassName = 'icon-background',
  itemClassName = 'icon-background-item',
}) {
  const backgroundIcons = useMemo(() => {
    const icons = [];
    const minDistance = 10;
    let attempts = 0;

    while (icons.length < count && attempts < count * 20) {
      const top = Math.random() * 90;
      const left = Math.random() * 90;
      const delay = Math.random() * 5;
      const src = iconList[Math.floor(Math.random() * iconList.length)];

      const tooClose = icons.some(i => {
        const dx = i.left - left;
        const dy = i.top - top;
        return Math.hypot(dx, dy) < minDistance;
      });

      if (!tooClose) icons.push({ top, left, delay, src });
      attempts++;
    }
    return icons;
  }, [count]);

  return (
    <div className={wrapperClassName} style={{ position: 'relative' }}>
      <div className={backgroundClassName}>
        {backgroundIcons.map((icon, idx) => (
          <img
            key={idx}
            src={icon.src}
            className={itemClassName}
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
      {children}
    </div>
  );
}
