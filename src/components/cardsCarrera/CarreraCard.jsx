import { useNavigate } from 'react-router';
import './CarreraCard.css';

export default function CarreraCard({ nombre, descripcion, imagen, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const carreraURL = nombre
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

    navigate(`/ofertaEducativa/${carreraURL}`, { state: { id } });
  };

  return (
    <div className="carrera-card" onClick={handleClick}>
      <img src={imagen} alt={nombre} className="carrera-img" />
      <div className="card-body">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
