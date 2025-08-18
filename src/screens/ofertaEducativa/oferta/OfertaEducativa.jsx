import { useEffect, useState, useRef, useCallback } from 'react';
import CarreraCard from './CarreraCard';
import OfertaFilter from './OfertaFilter';
import IconBackground from '../../../components/background/IconBackground';
import './styles/OfertaEducativa.css';
import { useNavigation, useParams } from 'react-router';

export default function OfertaEducativa() {
  // const navigate = useNavigation()
  const {idFilter} = useParams();
  const [carreras, setCarreras] = useState([]);
  const [unidad, setUnidad] = useState('');
  const [tipo, setTipo] = useState('');
  const [visibleCount, setVisibleCount] = useState(16); 

  const observer = useRef(null);
  const url = import.meta.env.VITE_PUBLIC_URL;

  useEffect(() => {
    if(idFilter?.toLocaleLowerCase() === 'ingenierias') setTipo('Ingeniería')
    if(idFilter?.toLocaleLowerCase() === 'licenciaturas') setTipo('Licenciatura')
    if(idFilter?.toLocaleLowerCase() === 'maestrias') setTipo('Maestría')
    if(idFilter?.toLocaleLowerCase() === 'enlinea') setTipo('En línea')
    // else{
    //   navigate('/ofertaEducativa')
    // }
  }, [idFilter])
  
  
  useEffect(() => {
    fetch(`${url}/educational`)
      .then((res) => res.json())
      .then((data) => setCarreras(data))
      .catch((err) => console.error('Error al obtener carreras:', err));
  }, [url]);

  const carrerasFiltradas = carreras.filter((c) => {
    const coincideUnidad = !unidad || c.Campus?.some(campus => campus.unidad === unidad);
    const coincideTipo = !tipo || c.type.toUpperCase() === tipo.toUpperCase();
    return coincideUnidad && coincideTipo;
  });

  const cargarMas = useCallback(() => {
    setVisibleCount((prev) => prev + 8);
  }, []);

  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) cargarMas();
    });
    if (node) observer.current.observe(node);
  }, [cargarMas]);

  const visibles = carrerasFiltradas.slice(0, visibleCount);

  return (
    <div className="oferta-educativa-wrapper">
      <IconBackground />
      <h1 className="titulo-oferta">Oferta Educativa</h1>
      <OfertaFilter unidad={unidad} setUnidad={setUnidad} tipo={tipo} setTipo={setTipo} />

      <div className="grid-carreras masonry-grid">
        {visibles.length > 0 ? (
          visibles.map((carrera, i) => (
            <div
              ref={i === visibles.length - 1 ? lastElementRef : null}
              key={carrera.id}
              className="fade-in-card"
              style={{ animationDelay: `${(i % 4) * 0.1}s` }}
            >
              <CarreraCard nombre={carrera.name} foto={carrera.photoLink} />
            </div>
          ))
        ) : (
          <p>No se encontraron carreras con los filtros seleccionados.</p>
        )}
      </div>
    </div>
  );
}
