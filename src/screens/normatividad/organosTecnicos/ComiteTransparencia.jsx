import IconBackground from '../../../components/background/IconBackground';
import './styles/ComiteTransparencia.css';

export default function ComiteTransparencia() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };

  const actaPDF =
    'https://tecmm.edu.mx/apiCms/cmsWebFiles/documents/normatividadArchivo/segunda_sesion_ordinaria_ct_2025.pdf';

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="ct-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="ct-container fade-in">
        <h1 className="ct-titulo" style={madaniBold}>Comité de Transparencia</h1>

        <h2 className="ct-subtitulo" style={madaniBold}>1. Definición del Comité de Transparencia</h2>
        <p className="ct-parrafo" style={madaniRegular}>
          Es el órgano interno responsable de garantizar que nuestro Instituto cumpla con la ley en materia de transparencia, 
          acceso a la información pública y protección de sus datos personales. Actúa como un enlace entre la comunidad, 
          nuestra institución y el Instituto de Transparencia, Información Pública y Protección de Datos Personales del Estado 
          de Jalisco (ITEI).
        </p>
        <p className="ct-parrafo" style={madaniRegular}>
          Nuestro objetivo principal es asegurar que la información de interés público sea clara, veraz, oportuna y esté a 
          disposición de toda la ciudadanía.
        </p>

        <hr className="ct-separador" />

        <h2 className="ct-subtitulo" style={madaniBold}>2. ¿Cómo se Integra?</h2>
        <p className="ct-parrafo" style={madaniRegular}>
          De acuerdo con el Artículo 112 de la Ley de Transparencia y Acceso a la Información Pública del Estado de Jalisco y 
          sus Municipios, la integración del Comité de Transparencia es la siguiente:
        </p>

        <ul className="ct-lista" style={madaniRegular}>
          <li><strong>Presidencia:</strong> La titular de la institución.</li>
          <li><strong>Secretaría Técnica:</strong> El titular de la Unidad de Transparencia (quien también funge como Enlace ante el ITEI).</li>
          <li><strong>Vocales:</strong> La titular del Órgano Interno de Control.</li>
        </ul>

        <p className="ct-parrafo" style={madaniRegular}>
          La integración formal del Comité es establecida mediante una sesión del Comité de Transparencia solicitada por la 
          Dirección General del Instituto, asegurando su carácter formal y permanente.
        </p>

        <hr className="ct-separador" />

        <h2 className="ct-subtitulo" style={madaniBold}>3. Funciones del Comité de Transparencia</h2>
        <p className="ct-parrafo" style={madaniRegular}>
          El Comité de Transparencia del Instituto Tecnológico Mario Molina trabaja para:
        </p>

        <ul className="ct-lista" style={madaniRegular}>
          <li>Supervisar que toda la información pública de oficio se publique de forma completa y actualizada en nuestra plataforma de transparencia.</li>
          <li>Validar que las respuestas a las solicitudes de información de los ciudadanos sean oportunas, claras y fundamentadas.</li>
          <li>Proteger los datos personales que están en nuestro poder, vigilando que su tratamiento sea legal y seguro.</li>
          <li>Promover la cultura de la transparencia y la protección de datos entre nuestro personal y la comunidad estudiantil.</li>
          <li>Atender y dar seguimiento a los recursos de revisión que los ciudadanos puedan presentar ante el ITEI.</li>
          <li>Emitir recomendaciones para mejorar continuamente nuestras prácticas de gobierno abierto y rendición de cuentas.</li>
        </ul>

        <p className="ct-parrafo" style={madaniRegular}>
          En el Instituto Tecnológico Mario Molina creemos que la transparencia es la base de la confianza ciudadana. Este Comité 
          es nuestra herramienta para honrar ese principio.
        </p>

        <hr className="ct-separador" />

        <h2 className="ct-subtitulo" style={madaniBold}>¿Tiene alguna duda o requiere más información?</h2>
        <p className="ct-parrafo" style={madaniRegular}>
          Consulte nuestra sección de{' '}
          <a href="/transparencia" className="ct-enlace">
            Transparencia
          </a>{' '}
          o presente su solicitud de información a través de los canales oficiales establecidos.
        </p>

        <a 
          href={actaPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="ct-card"
        >
          <div className="ct-card-badge">PDF</div>
          <div className="ct-card-title" style={madaniBold}>Acta de integración vigente</div>
          <div className="ct-card-meta" style={madaniRegular}>Ver / Descargar</div>
        </a>
      </div>
    </IconBackground>
  );
}
