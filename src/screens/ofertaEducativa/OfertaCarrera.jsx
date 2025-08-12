import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Programa from '../ofertaEducativa/programa/Programa';
import PerfilCarrera from '../ofertaEducativa/programa/PerfilCarrera';
import Plan from '../ofertaEducativa/programa/Plan';
import ScrollDots from '../../components/scroll/ScrollDots';
import Navbar from '../../components/navbar';
import MapJalisco from '../../components/jaliscoMap';
import './OfertaCarrera.css';

export default function OfertaCarrera() {
  const { carreraNombre } = useParams();
  const [carrera, setCarrera] = useState(null);

  const url = import.meta.env.VITE_PUBLIC_URL;

  const sections = [
    { id: 'programa' },
    { id: 'perfil' },
    { id: 'plan' },
    { id: 'unidades' },
    // { id: 'contacto' },
  ];

  useEffect(() => {
    if (!carreraNombre) return;

    fetch(`${url}/educational/${carreraNombre}`)
      .then((res) => res.json())
      .then((data) => setCarrera(data))
      .catch((err) => console.error('Error al obtener carrera:', err));
  }, [carreraNombre, url]);

  if (!carrera) return <div className="noticia-loader">Cargando carrera...</div>;

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
          <Plan id={carrera.id}/>
        </section>
        <section id="unidades" className="sectionLanding blue">
          <MapJalisco />
        </section>
        {/* <section id="contacto" className="section orange">
          ¿Dudas? Contáctanos
        </section> */}
      </div>
    </>
  );
}
