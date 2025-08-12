import { useEffect, useRef, useState } from 'react';
import './Plan.css';

export default function Plan({id}) {
  const [reticula, setReticula] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const scrollIndexRef = useRef(0);

  const url = import.meta.env.VITE_PUBLIC_URL;

  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };

  useEffect(() => {
    fetch(`${url}/reticula/${id}`)
      .then(res => res.json())
      .then(data => setReticula(data))
      .catch(err => console.error('Error al obtener retícula:', err));
  });

  const materiasPorSemestre = Array.from({ length: 10 }, (_, i) => {
    const semestre = i + 1;
    return reticula.filter(m => m.semestre === semestre);
  });

  const getTipoColor = (tipo) => {
    switch (tipo) {
      case 'materias': return '#3f51b5';
      case 'residenciaProfesional': return '#4caf50';
      case 'servicioSocial': return '#f44336';
      case 'actividadesComplementarias': return '#ff9800';
      case 'especializacion': return '#512da8';
      default: return '#607d8b';
    }
  };

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    const columnWidth = track?.children[0]?.offsetWidth + 16;

    if (track && columnWidth) {
      const prev = scrollIndexRef.current;
      const behavior =
        (prev === 9 && index === 0) || (prev === 0 && index === 9)
          ? 'auto'
          : 'smooth';

      track.scrollTo({ left: index * columnWidth, behavior });
      scrollIndexRef.current = index;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        if (visible) {
          scrollToIndex(0);
        }
      },
      { threshold: 0.4 }
    );

    const section = document.getElementById('plan');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (!trackRef.current) return;

      const next = (scrollIndexRef.current + 1) % materiasPorSemestre.length;
      scrollToIndex(next);
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible, materiasPorSemestre.length]);

  const handleManualScroll = (direction) => {
    const total = materiasPorSemestre.length;
    let newIndex;

    if (direction === 'right') {
      newIndex = (scrollIndexRef.current + 1 + total) % total;
    } else {
      newIndex = (scrollIndexRef.current - 1 + total) % total;
    }

    scrollToIndex(newIndex);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (!isMobile) return;
    let isDown = false;
    let startX, scrollLeft;

    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    const startDrag = (e) => {
      isDown = true;
      startX = e.pageX || e.touches?.[0]?.pageX;
      scrollLeft = track.scrollLeft || 0;
    };

    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches?.[0]?.pageX;
      const walk = (x - startX) * -1;
      track.scrollLeft = scrollLeft + walk;
    };

    const endDrag = () => { isDown = false; };

    wrapper.addEventListener('touchstart', startDrag);
    wrapper.addEventListener('touchmove', onMove);
    wrapper.addEventListener('touchend', endDrag);

    return () => {
      wrapper.removeEventListener('touchstart', startDrag);
      wrapper.removeEventListener('touchmove', onMove);
      wrapper.removeEventListener('touchend', endDrag);
    };
  }, [isMobile]);

  return (
    <>
      <div className="plan-header" id="plan">
        <h1 className="plan-title" style={madaniBold}>Plan de Estudios</h1>
        <div className="simbologia">
          <span><span className="simbologia-color" style={{ background: '#3f51b5' }} /> <b style={madaniBold}>Materias</b></span>
          <span><span className="simbologia-color" style={{ background: '#4caf50' }} /> <b style={madaniBold}>Residencia Profesional</b></span>
          <span><span className="simbologia-color" style={{ background: '#f44336' }} /> <b style={madaniBold}>Servicio Social</b></span>
          <span><span className="simbologia-color" style={{ background: '#ff9800' }} /> <b style={madaniBold}>Actividades Complementarias</b></span>
          <span><span className="simbologia-color" style={{ background: '#512da8' }} /> <b style={madaniBold}>Especialización</b></span>
        </div>
      </div>

      <div className="carousel-wrapper" ref={wrapperRef}>
        <div className="carousel-fade-left" />
        <div className="carousel-fade-right" />

        <div className="carousel-track" ref={trackRef}>
          {materiasPorSemestre.map((materias, idx) => (
            <div key={idx} className="semestre-col">
              <p style={madaniBold}>Semestre {idx + 1}</p>
              <div className="materias-list">
                {materias.map(({ idReticula, nombre, tipo }) => (
                  <div key={idReticula} className="materia-card" title={nombre}>
                    <span className="materia-nombre" style={madaniRegular}>{nombre}</span>
                    <div className="color-bar" style={{ backgroundColor: getTipoColor(tipo) }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <>
            <button className="scroll-left-btn" onClick={() => handleManualScroll('left')}>◀</button>
            <button className="scroll-right-btn" onClick={() => handleManualScroll('right')}>▶</button>
          </>
        )}
      </div>
    </>
  );
}
