import IconBackground from '../../components/background/IconBackground';
import './styles/JuntaGobierno.css';

export default function JuntaGobierno() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };
  const madaniArabicMedium = { fontFamily: 'madaniArabicMedium' };
  // const madaniArabicSemiBold = { fontFamily: 'madaniArabicSemiBold' };

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="junta-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="junta-container">
        <div className="junta-contenido fade-in">
          <h1 className="junta-titulo" style={madaniBold}>Junta de Gobierno</h1>

          <p className="junta-parrafo" style={madaniRegular}>
            La Junta de Gobierno es el máximo órgano de gobierno del Instituto y se integra de la siguiente forma:
          </p>

          <ul className="junta-lista" style={madaniRegular}>
            <li>El secretario de Innovación, Ciencia y Tecnología, quien la presidirá
            ocho vocales,<br /> que son los siguientes:</li>
          </ul>

          <ul className="junta-lista secundaria" style={madaniRegular}>
            <li>El secretario de Planeación, Administración y Finanzas.</li>
            <li>El secretario de Desarrollo Económico.</li>
            <li>El director general de Educación Superior, Investigación y Posgrado de la Secretaría de Innovación, Ciencia y Tecnología.</li>
            <li>Dos representantes del Poder Ejecutivo Federal, designados por la Secretaría de Educación Pública.</li>
            <li>El titular del Consejo de Cámaras Industriales de Jalisco.</li>
            <li>Cámara Nacional de Comercio en el Estado de Jalisco y el titular del Consejo Agropecuario del Estado de Jalisco; y
                un secretario técnico de entre el personal del Instituto que será nombrado por la Junta de Gobierno.</li>
          </ul>

          <p className="junta-parrafo" style={madaniRegular}>
            Asistirán a las sesiones de la Junta de Gobierno con voz, pero sin voto:
          </p>
          <ul className="junta-lista" style={madaniRegular}>
            <li>El director general del instituto.</li>
            <li>El comisario que será el representante de la Contraloría del Gobierno del Estado.</li>
          </ul>

          <p className="junta-nota" style={madaniArabicMedium}>
            *El cargo de miembro de la Junta de Gobierno es honorífico y, por lo tanto, no será remunerado.*
          </p>

          <hr className="junta-separador" />

          <h2 className="junta-subtitulo" style={madaniBold}>Atribuciones</h2>

          <ol className="junta-atribuciones" style={madaniRegular}>
            <li>Determinar las políticas y lineamientos generales para el debido funcionamiento de la institución.</li>
            <li>Aprobar los reglamentos, estatutos, acuerdos y demás disposiciones necesarias para hacer efectivas las atribuciones que esta ley le confiere al Instituto.</li>
            <li>Conocer, discutir, aprobar y, en su caso, proponer a la autoridad educativa federal los programas educativos y proyectos académicos que se sometan a su consideración.</li>
            <li>Aprobar las políticas, bases y lineamientos generales para la contratación de servicios, adquisiciones, arrendamientos y otros rubros similares, conforme a la ley.</li>
            <li>Aprobar la creación de unidades académicas y representaciones del instituto.</li>
            <li>Crear los órganos colegiados, comisiones académicas, administrativas y de planeación, los cuales estarán integrados con personal del Instituto y funcionarán como órganos auxiliares de la Junta de Gobierno para el estudio o trámite de los asuntos que les sean encomendados.</li>
            <li>Crear los Consejos Consultivos Regionales, compuestos por miembros destacados de la comunidad académica, así como por representantes de los sectores público, privado y social para que emitan opiniones que favorezcan el vocacionamiento regional en las unidades académicas.</li>
            <li>Examinar, discutir y, en su caso, aprobar el anteproyecto del presupuesto anual de ingresos y el correspondiente a egresos, sus adecuaciones, organigrama y su plantilla de personal y el clasificador por objeto del gasto.</li>
            <li>Aprobar anualmente, previo informe del Órgano de Control, los dictámenes de las auditorías practicadas, los estados financieros del organismo y autorizar la publicación de los mismos.</li>
            <li>Conocer y, en su caso, aprobar los informes que deberá presentar el director general del instituto.</li>
            <li>Proponer la apertura, modificación o cierre de programas académicos en sus distintos niveles y modalidades a las autoridades competentes.</li>
            <li>Revalidar y otorgar equivalencias de estudios de conformidad con lo establecido por las autoridades educativas, así como por el Sistema, procurando facilitar el tránsito de los estudiantes inscritos en instituciones de este tipo.</li>
            <li>Aprobar la suscripción de los actos jurídicos a nombre del organismo que afecten su patrimonio inmobiliario, constituyan deuda o trasciendan el periodo constitucional del gobernador del estado en turno, sin perjuicio de la autorización que corresponda al Congreso del Estado, en su caso.</li>
            <li>Conocer el informe que rinda el director general sobre la celebración de los contratos y convenios de los que el Instituto sea parte.</li>
            <li>Autorizar las licencias que solicite el director general del Instituto y, en su caso, nombrar al interino.</li>
            <li>Designar a los integrantes del patronato del Instituto.</li>
            <li>Designar y remover, a propuesta del director general, a los directores de las unidades académicas del Instituto.</li>
            <li>Establecer las aportaciones de cooperación y recuperación por los proyectos y contratos que celebre el Instituto con organismos públicos, sociales y privados.</li>
            <li>Establecer un programa de becas para alumnos de escasos recursos, así como un programa con otros estímulos al desempeño académico, deportivo y artístico con arreglo a la normatividad aplicable.</li>
            <li>Establecer un programa de promoción académica, con base al desempeño de investigación científica y tecnológica, ligado a los resultados en generación de propiedad intelectual y transferencia de tecnología.</li>
            <li>Las demás que establezcan otras disposiciones legales o reglamentarias aplicables.</li>
          </ol>
        </div>
      </div>
    </IconBackground>
  );
}
