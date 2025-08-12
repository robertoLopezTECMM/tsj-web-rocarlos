import { Link } from 'react-router';
import IconBackground from '../../components/background/IconBackground';
import './styles/OrganosTecnicos.css';

export default function OrganosTecnicos() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };
  const madaniArabicMedium = { fontFamily: 'madaniArabicMedium' };

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="organos-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="organos-container">
        <div className="organos-contenido fade-in">
          <h1 className="organos-titulo" style={madaniBold}>Órganos Técnicos</h1>
          <h2 className="organos-subtitulo" style={madaniBold}>
            Comité de control interno (COCODI)
          </h2>
          <p className="organos-parrafo" style={madaniRegular}>
            Es el órgano técnico que tiene como objetivos la eficiencia, eficacia y economía en las
            operaciones, programas, proyectos y calidad de los servicios que brinde el organismo y
            permitan contar con información financiera, presupuestal, contable y de operación íntegra,
            veraz, confiable, transparente y oportuna, así como lograr el cumplimiento del marco
            normativo de control interno, aplicable a su ámbito de competencia y la aplicación eficaz y
            honesta de los recursos públicos. También procura la existencia de procedimientos sustantivos
            y de apoyo para el logro de metas y objetivos, además de la aplicación de los recursos.
          </p>
          <Link
            to="/organos-tecnicos/comite-de-control-interno-cocodi"
            className="organos-boton"
            style={madaniArabicMedium}
          >
            Ver más
          </Link>
          <hr className="organos-separador" />
          <h2 className="organos-subtitulo" style={madaniBold}>
            Unidad de igualdad de género (UIG)
          </h2>
          <p className="organos-parrafo" style={madaniRegular}>
            Es el órgano consultivo especializado en materia de transversalización e institucionalización
            de la perspectiva de género y los derechos humanos.
          </p>
          <Link
            to="/organos-tecnicos/unidad-de-igualdad-de-genero-uig"
            className="organos-boton"
            style={madaniArabicMedium}
          >
            Ver más
          </Link>
          <hr className="organos-separador" />
          <h2 className="organos-subtitulo" style={madaniBold}>
            Comité de ética
          </h2>
          <p className="organos-parrafo" style={madaniRegular}>
            El Comité es el órgano colegiado responsable de llevar a cabo la implementación y seguimiento
            oportuno y eficaz de las acciones previstas en el acuerdo mediante el cual se crea la Unidad
            Especializada en Ética, Conducta y Prevención de Conflictos de Interés de la Administración
            Pública del Estado y los comités en las materias referidas en las dependencias y entidades de
            la Administración Pública del Estado y aquellas que le sean determinadas por la Unidad
            Especializada, en el ámbito de la entidad pública de su respectiva adscripción.
          </p>
          <Link
            to="/organos-tecnicos/comite-de-etica"
            className="organos-boton"
            style={madaniArabicMedium}
          >
            Ver más
          </Link>
        </div>
      </div>
    </IconBackground>
  );
}
