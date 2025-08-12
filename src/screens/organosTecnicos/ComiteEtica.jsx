import IconBackground from '../../components/background/IconBackground';
import './styles/ComiteEtica.css';

export default function ComiteEtica() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="etica-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="etica-container">
        <div className="etica-contenido fade-in">
          <h1 className="etica-titulo" style={madaniBold}>
            Comité de Ética
          </h1>
          <p className="etica-parrafo" style={madaniRegular}>
            El Comité es el órgano colegiado responsable de llevar a cabo la implementación y
            seguimiento oportuno y eficaz de las acciones previstas en el acuerdo mediante el cual
            se crea la Unidad Especializada en Ética, Conducta y Prevención de Conflictos de Interés
            de la Administración Pública del Estado y los comités en las materias referidas en las
            dependencias y entidades de la Administración Pública del Estado y aquellas que le sean
            determinadas por la Unidad Especializada, en el ámbito de la entidad pública de su
            respectiva adscripción.
          </p>
          <h2 className="etica-subtitulo" style={madaniBold}>Atribuciones</h2>
          <ul className="etica-atribuciones" style={madaniRegular}>
            <li>Autorizar su norma de integración y funcionamiento, misma que deberá contener como mínimo los aspectos correspondientes a las convocatorias, desarrollo de las sesiones, quórum, votaciones, elaboración y firma de actas y procedimientos de comunicación, absteniéndose de normar en ellos cualquier aspecto relacionado con procedimientos de responsabilidad administrativa de los servidores públicos.</li>
            <li>Aprobar el Programa Anual de Trabajo que contendrá, cuando menos, los objetivos, metas y actividades específicas que se tenga previsto llevar a cabo.</li>
            <li>Presentar a la Unidad Especializada, para su validación, el Programa Anual de Trabajo, dentro de los diez días hábiles siguientes a su aprobación.</li>
            <li>Vigilar la aplicación y cumplimiento de los principios y valores que rigen el servicio público e informar periódicamente el resultado de dicha gestión al titular de la dependencia o entidad.</li>
            <li>Autorizar el código de conducta conforme al cual se salvaguarden los principios, valores y conductas aplicables a la entidad pública de su adscripción, adicionales a los previstos en el código de Ética y sus correspondientes modificaciones y someterlo a la validación de la Unidad Especializada, por conducto del secretario ejecutivo.</li>
            <li>Implementar los mecanismos de control interno que permitan informar de manera periódica a la Contraloría, por conducto de la Unidad Especializada, acerca del cumplimiento de componentes, indicadores y actividades a los que se deberá sujetar su gestión en materia de ética, conducta y prevención de conflictos de interés.</li>
            <li>Proporcionar a la Unidad Especializada los informes que esta le requiera para el ejercicio de sus funciones.</li>
            <li>Fungir como órgano de consulta y asesoría especializada en asuntos relacionados con las materias de ética, conducta y prevención de conflictos de interés, respecto de la entidad pública de su adscripción.</li>
            <li>Resolver los asuntos relacionados con las conductas que impliquen una posible transgresión a los principios y valores que rigen el servicio público previstos en el Código de Ética y en el Código de Conducta de la entidad pública de su adscripción y elaborar las recomendaciones preventivas y correctivas que deban ser notificadas a la Unidad Especializada para su seguimiento.</li>
            <li>Apoyar a la Unidad Especializada en el cumplimiento de las acciones permanentes de capacitación y difusión de los principios, valores y conductas previstos en el Código de Ética y en el Código de Conducta de la entidad pública de su respectiva adscripción.</li>
            <li>Informar de manera documentada a la autoridad competente las conductas de los servidores públicos de su respectiva adscripción que puedan constituir responsabilidades administrativas en términos de la normatividad aplicable en la materia, con motivo de las resoluciones dictadas dentro de los procedimientos derivados de las denuncias presentadas por contravenciones a los principios y valores previstos en el Código de Ética y en el Código de Conducta de la entidad pública de su respectiva adscripción.</li>
            <li>Las demás que determine a su cargo la Contraloría del Estado, la Unidad Especializada y cualquiera que se desprenda de otras normas legales o administrativas en las materias de ética, conducta y prevención de conflictos de interés.</li>
          </ul>
          <hr className="etica-separador" />
          <h2 className="etica-subtitulo" style={madaniBold}>Integración del comité</h2>
          <p className="etica-parrafo" style={madaniRegular}>
            El Comité se integra de la siguiente forma:
          </p>
          <ul className="etica-integracion" style={madaniRegular}>
            <li>Un presidente.</li>
            <li>Los vocales.</li>
            <li>Invitados, de ser el caso.</li>
          </ul>
        </div>
      </div>
    </IconBackground>
  );
}
