import { Link } from 'react-router-dom';
import IconBackground from '../../components/background/IconBackground';
import './styles/QuienesSomos.css';

export default function QuienesSomos() {
    const madaniRegular = { fontFamily: 'Madani Regular' };
    const madaniBold = { fontFamily: 'Madani Bold' };
    const madaniArabicMedium = { fontFamily: 'madaniArabicMedium' };
    // const madaniArabicSemiBold = { fontFamily: 'madaniArabicSemiBold' };

    return (
        <IconBackground
            count={40}
            oppacity={0.6}
            wrapperClassName="qs-wrapper"
            backgroundClassName="icon-background"
            itemClassName="icon-background-item"
        >
            <div className="qs-container">
                <div className="qs-contenido fade-in">
                    <h1 className="qs-titulo" style={madaniBold}>¿Quiénes somos?</h1>
                    <h2 className="qs-subtitulo" style={madaniBold}>Iniciativa</h2>
                    <p className="qs-parrafo" style={madaniRegular}>
                        El Instituto Tecnológico José Mario Molina Pasquel y Henríquez, es una universidad pública,
                        fundada y aprobada el 23 de agosto de 2016 por el H. Congreso del Estado de Jalisco.
                        Su nombre fue asignado en honor al homónimo ingeniero químico galardonado en el año 1995
                        con el Premio Nobel de Química por su investigación de los estudios relacionados con el
                        impacto de la Capa de Ozono.
                    </p>
                    <p className="qs-parrafo" style={madaniRegular}>
                        El TSJ se creó con el objetivo de unificar a los 16 Institutos Tecnológicos Superiores en un
                        solo organismo público descentralizado, con una dirección general y 16 unidades académicas en
                        el estado de Jalisco, para eficientar la estructura académica y administrativa y responder a
                        los objetivos del Plan Nacional de Desarrollo y del Plan Estatal de Desarrollo de Jalisco, que
                        establece el compromiso de un México con educación de calidad.
                    </p>
                    <hr className="qs-separador" />
                    <section className="qs-hero">
                        <p className="qs-hero-text" style={madaniArabicMedium}>
                            Como parte del Tecnológico Nacional de México, nuestra institución es heredera de una brillante
                            y firme historia de vida organizacional con 20 años de trayectoria en el estado de Jalisco,
                            <strong> siendo el más grande de Iberoamérica con</strong>
                        </p>
                        <div className="qs-hero-metrics">
                            <div className="qs-metric">
                                <div className="qs-metric-number">600 mil</div>
                                <div className="qs-metric-label">estudiantes</div>
                            </div>
                            <div className="qs-metric">
                                <div className="qs-metric-number">254</div>
                                <div className="qs-metric-label">institutos en todo el país</div>
                            </div>
                            <div className="qs-metric">
                                <div className="qs-metric-number">+600</div>
                                <div className="qs-metric-label">localidades mexicanas</div>
                            </div>
                        </div>
                    </section>
                    <hr className="qs-separador" />
                    <h2 className="qs-subtitulo" style={madaniBold}>Red TSJ</h2>
                    <p className="qs-parrafo" style={madaniRegular}>
                        En Jalisco, más de 15,000 estudiantes acuden a alguno de los servicios educativos constituidos
                        por nuestra red de 16 unidades académicas y tres extensiones, que dan cobertura de educación
                        superior en 11 de las 12 regiones del estado de Jalisco.
                    </p>
                    <Link to="/unidadesAcademicas" className="qs-boton" style={madaniArabicMedium}>
                        Conoce las Unidades Académicas
                    </Link>
                    <div className="qs-stats-card">
                        <h3 className="qs-stats-title" style={madaniBold}>
                            Somos la segunda institución más fuerte en el estado, lo que representa el 9.74% de la matrícula de educación superior
                        </h3>
                        <div className="qs-stats-grid">
                            <div className="qs-stat-item">
                                <div className="qs-badge qs-badge--orange">16</div>
                                <div className="qs-stat-label">Unidades<br />Académicas</div>
                            </div>
                            <div className="qs-stat-item">
                                <div className="qs-badge qs-badge--green">15</div>
                                <div className="qs-stat-label">Ingenierías</div>
                            </div>
                            <div className="qs-stat-item">
                                <div className="qs-badge qs-badge--blue">5</div>
                                <div className="qs-stat-label">Licenciaturas</div>
                            </div>
                            <div className="qs-stat-item">
                                <div className="qs-badge qs-badge--pink">3</div>
                                <div className="qs-stat-label">Maestrías</div>
                            </div>
                        </div>
                    </div>
                    <hr className="qs-separador" />
                    <h2 className="qs-subtitulo" style={madaniBold}>Misión</h2>
                    <p className="qs-parrafo" style={madaniRegular}>
                        Ofrecer educación superior tecnológica de excelencia en el estado de Jalisco, bajo un modelo de
                        operación en red, mediante modelos educativos innovadores, flexibles, que incluyan oferta educativa
                        en ambientes virtuales y que sean acordes a las necesidades regionales, con apertura a esquemas de
                        colaboración con otras instituciones.
                    </p>
                    <h2 className="qs-subtitulo" style={madaniBold}>Visión</h2>
                    <ul className="qs-list">
                        <li>
                            Seguir siendo una institución reconocida por nuestra oferta educativa tecnológica innovadora, de
                            excelencia, con alta eficiencia terminal y pertinente para el estado de Jalisco.
                        </li>
                        <li>
                            Continuar estrecha vinculación con los sectores productivos de las regiones en cada una de las
                            unidades académicas de la red y mantener altos niveles de inserción de nuestros egresados en los
                            mismos, así como atraer ingresos propios mediante un amplio portafolio de servicios.
                        </li>
                        <li>
                            Mantener, reclutar y ofrecer al estudiantado y al personal un capital humano comprometido, altamente
                            competitivo, eficiente y actualizado.
                        </li>
                        <li>
                            Innovar e implementar procesos efectivos y eficientes, soportados por un sistema de gestión integral,
                            apoyado en tecnologías digitales, con una normatividad dinámica y actualizada.
                        </li>
                        <li>
                            Conservar una infraestructura física y tecnológica adecuada, así como nuestros espacios complementarios
                            que permiten el desarrollo integral de la comunidad académica y la atención a nuestros usuarios externos.
                        </li>
                    </ul>

                    <hr className="qs-separador" />
                    <h2 className="qs-subtitulo" style={madaniBold}>Valores</h2>
                    <div className="qs-valores">
                        <div className="qs-valor">
                            <h3 style={madaniBold}>Servicio</h3>
                            <p style={madaniRegular}>
                                Antepondremos siempre el bien del TSJ al propio, dando a nuestras labores un sentido de compromiso
                                desinteresado en beneficio de los demás.
                            </p>
                        </div>
                        <div className="qs-valor">
                            <h3 style={madaniBold}>Colaboración</h3>
                            <p style={madaniRegular}>
                                Tomamos conciencia de las necesidades de nuestra comunidad y mostramos la voluntad de ayudar para
                                cubrir esas necesidades.
                            </p>
                        </div>
                        <div className="qs-valor">
                            <h3 style={madaniBold}>Proactividad</h3>
                            <p style={madaniRegular}>
                                Incitamos a las personas para hacerse responsables de ideas originales y tomar la iniciativa en
                                proyectos que conlleven un avance en algún aspecto relacionado al TSJ.
                            </p>
                        </div>
                        <div className="qs-valor">
                            <h3 style={madaniBold}>Innovación</h3>
                            <p style={madaniRegular}>
                                Trabajamos por un TSJ que cambia, evoluciona, ofrece nuevos programas y adopta o pone a punto
                                nuevas formas de integrarse a su entorno.
                            </p>
                        </div>
                        <div className="qs-valor">
                            <h3 style={madaniBold}>Creatividad</h3>
                            <p style={madaniRegular}>
                                Somos una comunidad con ideas que aportan valor y crean algo diferente en algún aspecto relevante.
                            </p>
                        </div>
                        <div className="qs-valor">
                            <h3 style={madaniBold}>Resiliencia</h3>
                            <p style={madaniRegular}>
                                Afrontamos los desafíos y nos mantenemos como una comunidad tecnológica equilibrada emocionalmente
                                frente a las situaciones adversas.
                            </p>
                        </div>
                        <div className="qs-valor">
                            <h3 style={madaniBold}>Flexibilidad</h3>
                            <p style={madaniRegular}>
                                Multiplicamos nuestros resultados, estrechamos nuestros vínculos al efectuar tareas complementarias
                                y, así, contribuimos al desarrollo de nuestro TSJ.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </IconBackground>
    );
}
