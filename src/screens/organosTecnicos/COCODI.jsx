import IconBackground from '../../components/background/IconBackground';
import './styles/COCODI.css';

export default function COCODI() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="cocodi-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="cocodi-container">
        <div className="cocodi-contenido fade-in">
          <h1 className="cocodi-titulo" style={madaniBold}>
            Comité de control interno (COCODI)
          </h1>
          <p className="cocodi-parrafo" style={madaniRegular}>
            Es el órgano técnico que tiene como objetivos la eficiencia, eficacia y economía en las
            operaciones, programas, proyectos y calidad de los servicios que brinde el organismo y
            permitan contar con información financiera, presupuestal, contable y de operación íntegra,
            veraz, confiable, transparente y oportuna, así como lograr el cumplimiento del marco
            normativo de control interno, aplicable a su ámbito de competencia y la aplicación eficaz y
            honesta de los recursos públicos. También procura la existencia de procedimientos sustantivos
            y de apoyo para el logro de metas y objetivos, además de la aplicación de los recursos.
          </p>
          <h2 className="cocodi-subtitulo" style={madaniBold}>Atribuciones</h2>
          <ul className="cocodi-atribuciones" style={madaniRegular}>
            <li>Contribuir al cumplimiento oportuno de metas y objetivos institucionales con enfoque a resultados, así como a la mejora de los programas presupuestarios.</li>
            <li>Determinar los asuntos a tratar en las sesiones del Comité y reflejarlos en la orden del día, así como la participación de los responsables de las áreas competentes de la institución.</li>
            <li>Revisar y validar que la información institucional sea suficiente, relevante y competente, e instruir al Enlace del Comité sobre la conformación de la carpeta electrónica, en los 10 días hábiles previos a la celebración de la sesión.</li>
            <li>Coordinar y supervisar que el proceso de administración de riesgos se implemente en apego a lo establecido en las presentes disposiciones y ser el canal de comunicación e interacción con el titular de la institución y el Enlace de administración de riesgos.</li>
            <li>Instrumentar las acciones y los controles necesarios, con la finalidad de que las unidades administrativas realicen la evaluación de sus procesos prioritarios.</li>
            <li>Revisar con los responsables de las unidades administrativas la propuesta de acciones de mejora que serán incorporadas al PTCI para atender la inexistencia o insuficiencia en la implementación de las Normas Generales, sus principios y elementos de control interno.</li>
            <li>Informar y orientar a las unidades administrativas sobre el establecimiento de la metodología de administración de riesgos determinada por la institución, las acciones para su aplicación y los objetivos institucionales a los que se deberá alinear dicho proceso, para que documenten la matriz de administración de riesgos.</li>
            <li>Revisar y analizar la información proporcionada por las unidades administrativas en forma integral, a efecto de elaborar y presentar al coordinador de control interno los proyectos institucionales de la matriz, mapa y programa de trabajo de administración de riesgos, el reporte de avances trimestral del PTAR y el reporte anual del comportamiento de los riesgos.</li>
            <li>Contribuir a la administración de riesgos institucionales con el análisis y seguimiento de las estrategias y acciones de control determinadas en el PTAR, dando prioridad a los riesgos de atención inmediata y de corrupción.</li>
            <li>Difundir la matriz de administración de riesgos, el mapa de riesgos y el PTAR institucionales, e instruir la implementación del PTAR a los responsables de las acciones de control comprometidas.</li>
            <li>Identificar y analizar los riesgos y las acciones preventivas en la ejecución de los programas, presupuesto y procesos institucionales que puedan afectar el cumplimiento de metas y objetivos.</li>
            <li>Impulsar la aplicación de medidas preventivas para evitar materialización de riesgos y la recurrencia de observaciones de órganos fiscalizadores, atendiendo la causa raíz de las mismas.</li>
            <li>Revisar el cumplimiento de programas de la institución.</li>
            <li>Agregar valor a la gestión institucional, contribuyendo a la atención y solución de temas relevantes, con la aprobación de acuerdos que se traduzcan en compromisos de solución a los asuntos que se presenten. Cuando se trate de entidades, adoptar acuerdos que sirvan de apoyo al Órgano de gobierno para la toma de decisiones.</li>
          </ul>
          <hr className="cocodi-separador" />
          <h2 className="cocodi-subtitulo" style={madaniBold}>Integración del comité</h2>
          <p className="cocodi-parrafo" style={madaniRegular}>
            Todas las instituciones constituirán un Comité, que será encabezado por su titular y el titular del Órgano Interno de Control, el cual se integrará con los siguientes miembros propietarios, que tendrán voz y voto:
          </p>
          <ol className="cocodi-integracion" style={madaniRegular}>
            <li><strong>El presidente:</strong> Titular de la institución.</li>
            <li><strong>El vocal ejecutivo:</strong> Coordinador del control interno.</li>
            <li>
              <strong>Vocales:</strong>
              <ol className="cocodi-sublista" type="a">
                <li>…</li>
                <li>
                  En las entidades:
                  <ol className="cocodi-sublista-decimal">
                    <li>
                      <strong>Entidades sectorizadas:</strong>
                      <ol className="cocodi-sublista" type="a">
                        <li>Un representante de la coordinadora sectorial.</li>
                        <li>El Titular del área Jurídica o equivalente.</li>
                        <li>El Titular del área de Tecnologías de la Información o de Informática de la entidad, en caso de no contar con esta figura, un representante del área de Tecnologías de la Información o equivalente de la coordinadora sectorial.</li>
                        <li>El Titular del Órgano Interno de Control.</li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </IconBackground>
  );
}
