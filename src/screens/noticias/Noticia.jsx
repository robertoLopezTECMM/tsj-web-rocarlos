import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { iconList } from '../../assets/icons';
import './styles/Noticia.css';

export default function Noticia() {
    const { id } = useParams();
    const [noticia, setNoticia] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = import.meta.env.VITE_PUBLIC_URL;

    const madaniRegular = { fontFamily: 'Madani Regular' };
    const madaniBold = { fontFamily: 'Madani Bold' };
    const madaniArabicMedium = { fontFamily: 'madaniArabicMedium' };
    // const madaniArabicSemiBold = { fontFamily: 'madaniArabicSemiBold' };

    useEffect(() => {
        fetch(`${url}/news/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setNoticia(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error al obtener noticia:', err);
                setLoading(false);
            });
    }, [id, url]);

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fecha.toLocaleDateString('es-MX', opciones);

        return fechaFormateada.replace(
            /de (\w+)/,
            (match, mes) => `de ${mes.charAt(0).toUpperCase()}${mes.slice(1)}`
        );
    };

    const generateIcons = () => {
        const icons = [];
        const count = 40;
        const minDistance = 10;

        let attempts = 0;
        while (icons.length < count && attempts < count * 20) {
            const top = Math.random() * 90;
            const left = Math.random() * 90;
            const delay = Math.random() * 5;
            const iconSrc = iconList[Math.floor(Math.random() * iconList.length)];

            const isTooClose = icons.some((icon) => {
                const dx = icon.left - left;
                const dy = icon.top - top;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < minDistance;
            });

            if (!isTooClose) {
                icons.push({ top, left, delay, src: iconSrc });
            }
            attempts++;
        }
        return icons;
    };

    const backgroundIcons = generateIcons();

    if (loading) return <div className="noticia-loader">Cargando noticia...</div>;
    if (!noticia) return <div className="noticia-error">No se encontró la noticia.</div>;

    return (
        <div className="noticia-wrapper">
            <div className="noticia-background">
                {backgroundIcons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.src}
                        className="noticia-icon"
                        style={{
                            top: `${icon.top}%`,
                            left: `${icon.left}%`,
                            animationDelay: `${icon.delay}s`,
                        }}
                        alt="icon"
                    />
                ))}
            </div>
            <div className="noticia-container">
                <img className="noticia-imagen" src={noticia.fotografiaPrincipal} alt={noticia.titulo} />
                <div className="noticia-contenido fade-in">
                    <h1 className="noticia-titulo" style={madaniBold}>{noticia.titulo}</h1>
                    <p className="noticia-fecha" style={madaniArabicMedium}>{formatFecha(noticia.fecha)}</p>
                    {/* <p className="noticia-descripcion" style={madaniArabicSemiBold}>{noticia.descripcion}</p> */}
                    <hr className="noticia-separador" />
                    <p className="noticia-cuerpo" style={madaniRegular}>{noticia.cuerpo}</p>
                </div>
            </div>
        </div>
    );
}
