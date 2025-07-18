import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Programa from '../ofertaEducativa/programa/Programa';
import PerfilCarrera from '../ofertaEducativa/programa/PerfilCarrera';
import Plan from '../ofertaEducativa/programa/Plan';
import './OfertaCarrera.css';
import ScrollDots from '../../components/scroll/ScrollDots';
import Navbar from '../../components/navbar';
import MapJalisco from '../../components/jaliscoMap';

export default function OfertaCarrera() {
  const { state } = useLocation();
  const [carrera, setCarrera] = useState(null);

  const sections = [
    { id: 'programa' },
    { id: 'perfil' },
    { id: 'plan' },
    { id: 'unidades' },
    // { id: 'contacto' },
  ];

  useEffect(() => {
    if (!state?.id) return;

    fetch(`https://tecmm.edu.mx/apiCms/educational/${state.id}`)
      .then((res) => res.json())
      .then((data) => setCarrera(data))
      .catch((err) => console.error('Error al obtener carrera:', err));
  }, [state]);

  if (!state?.id) return <p>ID de carrera no encontrado.</p>;
  if (!carrera) return <p>Cargando información del programa...</p>;

  return (
    <>
    <Navbar/>
      <ScrollDots sections={sections} />
      <div className="scroll-container">
        <section id="programa" className="section programa-section">
          <Programa data={carrera} />
        </section>

        <section id="perfil" className="section gray perfil-section">
          <PerfilCarrera
            ingreso={carrera.incomeProfile}
            egreso={carrera.outcomeProfile}
            photoLink={carrera.photoLink}
          />
        </section>

        <section id="plan" className="section gray">
          <Plan />
        </section>

        <section id="unidades" className="sectionLanding red">
          <MapJalisco/>
        </section>

        {/* <section id="contacto" className="section orange">
          ¿Dudas? Contáctanos
        </section> */}
      </div>
    </>
  );
}
