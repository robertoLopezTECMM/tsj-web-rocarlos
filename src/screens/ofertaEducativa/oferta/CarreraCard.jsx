import { useNavigate } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import './styles/CarreraCard.css';

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export default function CarreraCard({ nombre, foto }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/ofertaEducativa/${slugify(nombre)}`);

  return (
    <div className="carrera-card" onClick={handleClick}>
      <img src={foto} alt={nombre} className="carrera-img" />
      <div className="carrera-overlay">
        <FaArrowRight className="carrera-icon" />
      </div>
      <div className="carrera-nombre">{nombre}</div>
    </div>
  );
}
