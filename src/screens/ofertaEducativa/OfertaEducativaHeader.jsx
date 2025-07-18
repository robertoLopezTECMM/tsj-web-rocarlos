import CategoriaFilterButton from '../../components/filter/CategoriaFilterButton';
import UnidadSelect from '../../components/select/UnidadSelect';
import { FaGraduationCap, FaCertificate, FaCogs, FaLaptop } from 'react-icons/fa';

const categorias = [
  { value: 'Licenciatura', label: 'Licenciatura', icon: <FaGraduationCap /> },
  { value: 'Maestría', label: 'Maestría', icon: <FaCertificate /> },
  { value: 'Ingenierías', label: 'Ingenierías', icon: <FaCogs /> },
  { value: 'En línea', label: 'En línea', icon: <FaLaptop /> },
];

export default function OfertaEducativaHeader({ categoriaActiva, onChangeCategoria, unidad, onChangeUnidad }) {
  return (
    <div className="oferta-header">
      <h2 className="titulo-oferta">Oferta Educativa</h2>
      <UnidadSelect value={unidad} onChange={onChangeUnidad} />
      <p className="text-filtro">Filtrar por:</p>
      <div className="filtros-categorias">
        {categorias.map((cat) => (
          <CategoriaFilterButton
            key={cat.value}
            icon={cat.icon}
            label={cat.label}
            active={categoriaActiva === cat.value}
            onClick={() => onChangeCategoria(categoriaActiva === cat.value ? null : cat.value)}
          />
        ))}
      </div>
    </div>
  );
}
