import IconBackground from '../../components/background/IconBackground';
import './styles/UIG.css';

export default function UIG() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="uig-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="uig-container">
        <div className="uig-contenido fade-in">
          <h1 className="uig-titulo" style={madaniBold}>
            Unidad de igualdad de género (UIG)
          </h1>
          <p className="uig-parrafo" style={madaniRegular}>
            Es el órgano consultivo especializado en materia de transversalización e institucionalización
            de la perspectiva de género y los derechos humanos.
          </p>
          <h2 className="uig-subtitulo" style={madaniBold}>Atribuciones</h2>
          <ul className="uig-atribuciones" style={madaniRegular}>
            <li>Ser vínculo con la Secretaría de Igualdad Sustantiva entre Mujeres y Hombres para promover acciones en materia de igualdad.</li>
            <li>Adoptar e implementar el Programa de Cultura Institucional al interior de sus dependencias o entidades.</li>
            <li>Monitorear el funcionamiento del Programa de Cultura Institucional en sus dependencia o entidad.</li>
            <li>Elaborar y ejecutar un plan de trabajo de la Unidad de Igualdad de Género al interior de la dependencia o entidad.</li>
            <li>Orientar y canalizar al personal de la dependencia o entidad con las autoridades competentes en casos de acoso y hostigamiento sexual laboral al interior de la misma.</li>
            <li>Dar seguimiento a la política interna de promoción de igualdad de género, de inclusión y no discriminación.</li>
            <li>Impulsar la incorporación de la perspectiva de género en el diseño y evaluación de las políticas, programas, planes y presupuestos en cada dependencia o entidad.</li>
            <li>Fomentar que la construcción de indicadores de cada dependencia o entidad sea con perspectiva de género.</li>
            <li>Promover la desagregación de datos estadísticos por sexo, grupo etario, municipio de procedencia, origen étnico, personas con discapacidad, número de hijas e hijos o estado civil.</li>
          </ul>
          <hr className="uig-separador" />
          <h2 className="uig-subtitulo" style={madaniBold}>Integración del comité</h2>
          <p className="uig-parrafo" style={madaniRegular}>
            A fin de garantizar su adecuado funcionamiento, las Unidades de Igualdad de Género estarán
            conformadas de manera interna, al menos, por la persona titular de cada dirección de área que
            cumpla las siguientes responsabilidades:
          </p>
          <ul className="uig-integracion" style={madaniRegular}>
            <li>Planeación.</li>
            <li>Presupuestación.</li>
            <li>Evaluación y Seguimiento.</li>
            <li>Administración y Recursos Humanos.</li>
            <li>Jurídica.</li>
            <li>Comunicación.</li>
          </ul>
        </div>
      </div>
    </IconBackground>
  );
}
