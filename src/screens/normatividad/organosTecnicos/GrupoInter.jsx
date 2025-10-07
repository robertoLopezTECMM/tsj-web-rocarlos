import { Link } from 'react-router';
import IconBackground from '../../../components/background/IconBackground';
import './styles/GrupoInter.css';

export default function GrupoInter() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="gi-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="gi-container fade-in">
        <h1 className="gi-titulo" style={madaniBold}>
          Grupo Interdisciplinario de Gestión Documental y Archivos
        </h1>

        <p className="gi-parrafo" style={madaniRegular}>
          Es el órgano interno de consulta, planeación y coordinación, responsable de dirigir y 
          supervisar la correcta Gestión Documental y la Administración de Archivos en nuestro Instituto. 
          Su labor asegura que los documentos, desde su producción hasta su disposición final, se manejen 
          de forma ordenada, segura y de acuerdo con la ley.
        </p>

        <p className="gi-parrafo" style={madaniRegular}>
          Nuestro objetivo principal es garantizar que la información institucional sea un recurso 
          confiable, accesible y que preserve la memoria técnica, académica y administrativa del Instituto.
        </p>

        <hr className="gi-separador" />

        <h2 className="gi-subtitulo" style={madaniBold}>2. ¿Cómo se Integra?</h2>
        <p className="gi-parrafo" style={madaniRegular}>
          De acuerdo con lo establecido en la Ley de Archivos del Estado de Jalisco y sus Municipios y 
          nuestros Lineamientos del Sistema Institucional de Archivos y Grupo Interdisciplinario del 
          Instituto Tecnológico José Mario Molina Pasquel y Henríquez, nuestro Grupo Interdisciplinario 
          se integra con los titulares de las áreas estratégicas del Instituto:
        </p>

        <ul className="gi-lista" style={madaniRegular}>
          <li><strong>Presidente(a):</strong> Titular del Instituto.</li>
          <li><strong>Secretario(a) Técnico(a):</strong> Coordinadora del Área Coordinadora de Archivos y Unidad de Transparencia.</li>
          <li><strong>Titular de la Dirección Jurídica:</strong> Asegura el cumplimiento del marco legal.</li>
          <li><strong>Titular de la Dirección de Tecnologías de la Información y Comunicaciones:</strong> Responsable de los sistemas informáticos y la documentación electrónica.</li>
          <li><strong>Titular de la Dirección de Administración y Finanzas:</strong> Encargado de los documentos financieros, contables y de recursos humanos.</li>
          <li><strong>Titular de la Dirección Académica:</strong> Responsable de la documentación educativa, planes de estudio y registros escolares.</li>
          <li>Titulares de las demás áreas de Dirección General.</li>
          <li>Titulares de las Unidades Académicas cuando se traten asuntos de su competencia.</li>
          <li>Órgano Interno de Control.</li>
          <li>Especialistas en materia archivística como invitados, cuando se requiera.</li>
        </ul>

        <p className="gi-parrafo" style={madaniRegular}>
          La integración formal de este Grupo es establecida mediante una sesión del Grupo Interdisciplinario 
          solicitada por la Titular del Instituto y la secretaria técnica.
        </p>

        <hr className="gi-separador" />

        <h2 className="gi-subtitulo" style={madaniBold}>3. Funciones del Grupo Interdisciplinario</h2>
        <p className="gi-parrafo" style={madaniRegular}>
          El Grupo Interdisciplinario de Gestión Documental y Archivos del Instituto Tecnológico Mario Molina 
          tiene las siguientes funciones:
        </p>

        <ul className="gi-lista" style={madaniRegular}>
          <li>Elaborar y actualizar el Cuadro de Clasificación Archivística y el Catálogo de Disposición Documental.</li>
          <li>Supervisar la organización, conservación y protección de los documentos en sus distintas fases: 
            archivos de trámite, de concentración e históricos.</li>
          <li>Proponer criterios para la valoración de documentos, determinando cuáles deben conservarse 
            permanentemente por su valor histórico y cuáles pueden eliminarse de forma controlada.</li>
          <li>Promover la capacitación del personal en materia de gestión documental y cultura archivística.</li>
          <li>Fungir como enlace con el Consejo Estatal de Archivos del Estado de Jalisco, asegurando el cumplimiento 
            de la normativa estatal.</li>
          <li>Velar por la transparencia, facilitando que la información archivística de interés público sea accesible 
            para la ciudadanía.</li>
        </ul>

        <p className="gi-parrafo" style={madaniRegular}>
          En el Instituto Tecnológico José Mario Molina Pasquel y Henríquez entendemos que un archivo ordenado y 
          eficiente es la base para una administración transparente y un legado histórico invaluable. Este Grupo 
          Interdisciplinario es el guardián de ese compromiso.
        </p>

        <hr className="gi-separador" />

        {/* Sección final de información */}
        <h2 className="gi-subtitulo" style={madaniBold}>¿Requiere más información?</h2>
        <p className="gi-parrafo" style={madaniRegular}>
          Consulte nuestra sección de{' '}
          <Link to="/archivo" className="gi-enlace">
            Archivo
          </Link>.
        </p>
      </div>
    </IconBackground>
  );
}
