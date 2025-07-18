// OfertaEducativa.jsx
import { useState, useEffect } from 'react';
import CarreraCard from '../../components/cardsCarrera/CarreraCard';
import OfertaEducativaHeader from './OfertaEducativaHeader';
import './OfertaEducativa.css';
import Navbar from '../../components/navbar';

export default function OfertaEducativa() {
  const [carreras, setCarreras] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [unidadSeleccionada, setUnidadSeleccionada] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [carrerasPorPagina] = useState(8);

  const url = import.meta.env.VITE_PUBLIC_URL;

  useEffect(() => {
    fetch(`${url}/educational`)
      .then((res) => res.json())
      .then((data) => {
        setCarreras(data);
      })
      .catch((err) => console.error('Error al obtener carreras:', err));
  }, [url]);

  useEffect(() => {
    setPaginaActual(1);
  }, [categoriaActiva]);

  const carrerasFiltradas = categoriaActiva
    ? carreras.filter((c) => c.type.toLowerCase() === categoriaActiva)
    : carreras;

  const totalPaginas = Math.ceil(carrerasFiltradas.length / carrerasPorPagina);
  const inicio = (paginaActual - 1) * carrerasPorPagina;
  const fin = inicio + carrerasPorPagina;
  const carrerasVisibles = carrerasFiltradas.slice(inicio, fin);

  return (
    <div className="oferta-container">
      <Navbar />
      <OfertaEducativaHeader
        categoriaActiva={categoriaActiva}
        onChangeCategoria={setCategoriaActiva}
        unidad={unidadSeleccionada}
        onChangeUnidad={(e) => setUnidadSeleccionada(e.target.value)}
      />

      <div className="grid-carreras">
        {carrerasVisibles.map((carrera) => (
          <CarreraCard
            key={carrera.id}
            id={carrera.id}
            nombre={carrera.name}
            descripcion={carrera.description}
            modalidad={carrera.type}
            imagen={carrera.photoLink}
          />
        ))}
      </div>

      {totalPaginas > 1 && (
        <div className="paginacion">
          {[...Array(totalPaginas)].map((_, i) => (
            <button
              key={i}
              className={paginaActual === i + 1 ? 'activo' : ''}
              onClick={() => setPaginaActual(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}