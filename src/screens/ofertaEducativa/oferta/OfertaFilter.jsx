import { FaGraduationCap, FaMedal, FaCogs, FaLaptop } from 'react-icons/fa';
import './styles/OfertaFilter.css';

const unidades = [
  'Arandas', 'Chapala', 'Cocula', 'El Grullo', 'La Huerta', 'Lagos de Moreno',
  'Mascota', 'Puerto Vallarta', 'San Juan de los Lagos', 'TSJ en línea',
  'Tala', 'Tamazula', 'Tepatitlán', 'Tequila', 'Tomatlán', 'Zapopan', 'Zapotlanejo',
];

const tipoCarrera = ['En línea', 'Ingeniería', 'Licenciatura', 'Maestría' ];

const colorMap = {
  'En línea': 'gris',
  'Ingeniería': 'naranja',
  'Licenciatura': 'verde',
  'Maestría': 'rosado',
};

const iconMap = {
  'En línea': <FaLaptop />,
  'Ingeniería': <FaCogs />,
  'Licenciatura': <FaGraduationCap />,
  'Maestría': <FaMedal />,
};

export default function OfertaFilter({ unidad, setUnidad, tipo, setTipo }) {
  return (
    <div className="oferta-filter-container">
      <select
        className="oferta-select"
        value={unidad}
        onChange={(e) => setUnidad(e.target.value)}
      >
        <option value="">Todas las unidades</option>
        {unidades.map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>

      <div className="oferta-botones">
        {tipoCarrera.map((cat) => (
          <button
            key={cat}
            className={`boton-tipo ${colorMap[cat]} ${tipo === cat ? 'activo' : ''}`}
            onClick={() => setTipo(tipo === cat ? '' : cat)}
          >
            {iconMap[cat]} <span style={{ marginLeft: '0.5rem' }}>{cat}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
