import { useRef, useState } from 'react'
import './index.css'
import Lottie from "lottie-react";
import animacion from "../../assets/lotties/Animation.json";
import { BannerSlider } from '../../components/bannerSliders';
import MapJalisco from '../../components/jaliscoMap';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeMute from '@mui/icons-material/VolumeMute';

import Newspaper from '@mui/icons-material/Newspaper'



import sicytLogoBlanco from '../../assets/logos/sicytBco.png'
import jaliscoLogoBlanco from '../../assets/logos/jaliscoBco.png'
import tsjLogoBlanco from '../../assets/logos/tsjBco.png'
import educacionLogo from '../../assets/logos/educacion.png'
import tecnmLogo from '../../assets/logos/tecnmSVG.svg'
import facebook from '../../assets/logos/facebook.png'
import instagram from '../../assets/logos/instagram.png'
import youtube from '../../assets/logos/youtube.png'
import twitter from '../../assets/logos/twitter.png'
import tiktok from '../../assets/logos/tiktok.png'
import iconLicenciaturas from '../../assets/logos/iconLicenciaturas.png'
import iconIngenierias from '../../assets/logos/iconIngenierias.png'
import iconMaestrias from '../../assets/logos/iconMaestrias.png'
import iconEnLinea from '../../assets/logos/iconEnLinea.png'


import whatsappQr from '../../assets/images/qrWhatsapp.jpeg'

import whatsappQr from '../../assets/logos/whatsappQr.jpeg'
import { Convocatorias, Gaceta, Licitaciones, Transparencia } from '../../assets/icons';
import { NewsSlider } from '../../components/newsSlider';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Navbar from '../../components/navbar/index'
// import viteLogo from '/vite.svg'
// import whatsappLogo from '../../assets/logos/whatsapp.webp'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Landing() {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [banners, setBanners] = useState([])
  const [news, setNews] = useState([])


  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // --- quick tiles (iconos grandes) ---
  const quickTiles = [
    { label: 'Transparencia', icon: Transparencia, to: '/transparencia', color: 'ql-blue' },
    { label: 'Convocatorias', icon: Convocatorias, to: 'https://sites.google.com/tecmm.edu.mx/convocatorias/inicio', color: 'ql-yellow' },
    { label: 'Gaceta TSJ', icon: Gaceta, to: '/gaceta', color: 'ql-green' },
    { label: 'Licitaciones', icon: Licitaciones, to: 'https://sites.google.com/tecmm.edu.mx/adquisiciones/inicio?authuser=0', color: 'ql-red' },
  ];

  // --- enlaces de interés (tarjetas) ---
  const interestLinks = [
    { label: 'Identidad', to: '/identidad' },
    { label: 'Calendario', to: '/calendario' },
    { label: 'Organigrama', to: '/organigrama' },
    { label: 'Licitaciones Vencidas', to: '/licitaciones-vencidas' },
    { label: 'Programa Anual de Desarrollo Archivístico', to: '/programa-anual-desarrollo-archivistico' },
    { label: 'CONAHCYT', to: '/conahcyt' },
    { label: 'Contraloría social', to: '/contraloria-social' },
    { label: 'Retroalimentación SEAES', to: '/retroalimentacion-seaes' },
    { label: 'Denuncia Ante el Comité de Ética', to: '/organos-tecnicos/comite-de-etica' },
    { label: 'Denuncias Ante el Órgano Interno de Control', to: '/denuncias-organo-interno-de-control' },
    { label: 'Becas', to: '/becas' },
  ];


  useEffect( () => {



    

  const fetchData = async () => {
    try {
      const bannersRes = await axios.get("https://www.tecmm.edu.mx/apiCms/banners")
      const newsRes = await axios.get("https://www.tecmm.edu.mx/apiCms/news")

      console.log('news: ', newsRes.data)
      console.log('banners: ', bannersRes.data)


      setNews(newsRes.data);      // solo noticias
      setBanners(bannersRes.data); // solo banners
    } catch (err) {
      console.error(err);
    }finally{

    }
  };

  fetchData();
  }, [])

  const NewsItem = ({xs, md, image, classname, title, url}) =>{
    return(
        <Col className= {classname === '1st' ? 'cols-1stRow-news white'  : 'cols-2ndRow-news white'} xs={xs} md={md}>
        <a target='_blank' href={url}>
          <div className='div-shadowBox'>
            {title}
          </div>
          
          <div className='div-itemTitleIcon'>
            <Newspaper fontSize='large' style={{color:'var(--navyBlue)'}}/>
          </div>
          <img className='imgClass ' src={image}/>
          </a>
        </Col>
    )
  }
  


  return (
    <>
      <div className="scroll-container">
        <section id="sobre" className="section video-section">
          <video
            ref={videoRef}
            className="background-video"
            // src="https://tecmm.edu.mx/apiCms/cmsWebFiles/videoLanding.mp4"
            src="https://tecmm.edu.mx/apiCms/video"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <div className="divLottie">
            {!isMuted ? <VolumeUp onClick={handleMute} fontSize='large' /> : <VolumeMute onClick={handleMute} fontSize='large' />}
            <Lottie
              animationData={animacion}
              className="absolute bottom-0 left-0 w-32 h-32"
              loop={true}
            />
            {!isPlaying ? <Pause onClick={handlePlayPause} fontSize='large' /> : <PlayArrow onClick={handlePlayPause} fontSize='large' />}
          </div>
        </section>

        <section className="sectionLanding green">

          <div>
            <Row>

              {banners.length>0 && (
                <>
                  <NewsItem url={banners[3].urlPagina} title={banners[3].titulo} classname='1st' xs={12} md={8} image={banners[3].fotografiaPrincipal}/>
                  <NewsItem url={banners[0].urlPagina} title={banners[0].titulo}  classname='1st'  xs={6} md={4} image={banners[0].fotografiaPrincipal}/>
                </>

              )}
            </Row>


            <Row>

              {news.length>0 && (
                <>
                  <NewsItem url={`/noticias/${news.length}`} title={`${news[news.length - 1].titulo}`} classname='2nd'  xs={6} md={4} image={`${news[news.length - 1].fotografiaPrincipal}`}/>
                  <NewsItem url={`/noticias/${news.length - 1}`} title={`${news[news.length - 2].titulo}`} classname='2nd'  xs={6} md={4} image={`${news[news.length - 2].fotografiaPrincipal}`}/>
                  <NewsItem url={`/noticias/${news.length - 2}`} title={`${news[news.length - 3].titulo}`}  classname='2nd'  xs={6} md={4} image={`${news[news.length - 3].fotografiaPrincipal}`}/>
                </>
              )}
            </Row>

          </div>          

        </section>
        {/* <section className="sectionLanding news">
          <BannerSlider/>
          <NewsSlider/>
        </section> */}


        <section className="sectionLanding black image-grid">
          <div className="image-item">
            <Link to='/ofertaEducativa/filtro/ingenierias'>
              <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_ingenierias.png" alt="Imagen 1" />
              <span className="image-text ">
                <img src={iconIngenierias} />
                <p className='borderBottomGreen'>
                  Ingenierías
                </p>
              </span>
            </Link>
          </div>
          <div className="image-item">
            <Link to='/ofertaEducativa/filtro/licenciaturas'>
              <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_licenciaturas.png" alt="Imagen 2" />
              <span className="image-text">
                <img src={iconLicenciaturas} />
                <p className='borderBottomOrange'>
                  Licenciaturas
                </p>
              </span>
            </Link>
          </div>
          <div className="image-item">
            <Link to='/ofertaEducativa/filtro/maestrias'>
              <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_maestrias.png" alt="Imagen 3" />
              <span className="image-text">
                <img src={iconMaestrias} />
                <p className='borderBottomRed'>
                  Maestrías
                </p>
              </span>
            </Link>
          </div>
          <div className="image-item">
            <Link to='/ofertaEducativa/filtro/enlinea'>
              <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_enlinea.png" alt="Imagen 4" />
              <span className="image-text">
                <img src={iconEnLinea} />
                <p className='borderBottomBlue'>
                  En línea
                </p>
              </span>
            </Link>
          </div>
        </section>
        <section className="sectionLanding blue sectionAlignedRightFlex">

            <span className='mapaJaliscoContainer'>
               <MapJalisco isMobile={false}/> 
            </span>

            <div className='mapSectionTextLeft'>
                <h1>#AQUI Tenemos un </h1>
                <h1>#TSJ cerca de ti</h1>

                <p>En Jalisco, más de 15,000 estudiantes acuden a alguno de los servicios educativos constituidos por nuestra red de 16 unidades académicas y tres extensiones, que dan cobertura de educación superior en 11 de las 12 regiones del estado de Jalisco.</p>
            </div>


            <span id="mapaJaliscoContainerMobile" className='mapaJaliscoContainer'>
               <MapJalisco isMobile={true}/> 
            </span>
        </section>
        <section className="sectionLanding light landing-quick-and-links">
          {/* ICONOS GRANDES */}
          <div className="quick-links">
            {quickTiles.map((q) => (
              <Link key={q.label} to={q.to} className="quick-item">
                <img src={q.icon} alt={q.label} />
                <span className={`quick-label ${q.color}`}>{q.label}</span>
              </Link>
            ))}
          </div>
          {/* ENLACES DE INTERÉS */}
          <div className="interest-wrapper">
            <h2 className="interest-title">Enlaces de interés</h2>
            <div className="interest-grid">
              {interestLinks.map((it) => (
                <Link key={it.label} to={it.to} className="interest-card">
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </section>



        <section className="sectionLanding sectionDisplayBlock">
          <div className='footerSectionContact'>
            <h1>¿Tienes Dudas? Contactanos</h1>
            <div className='div-footer-content'>
              <div className='div-footer-phoneSocialMedia'>
                <img src={whatsappQr} />
                <div className='div-footer-phones'>
                  <h3>33 3884 9498</h3>
                </div>
                <div className='div-footer-phones'>
                  <h3>33 3884 9470</h3>
                </div>
                <br />
                <br />
                <div>
                  <h4>Siguenos en redes #TSJ</h4>
                  <div className='div-footer-ccontainerLogosSocialMedia'>
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={youtube} />
                    <img src={twitter} />
                    <img src={tiktok} />
                  </div>
                </div>
              </div>
              <div className='div-footer-mapAddress'>
                <p>Camino Arenero 1101 45019, Zapopan, Jalisco</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9532.015912463226!2d-103.47132874616723!3d20.70456403385319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a92008505ae3%3A0xac0da90d95e836af!2sTecnol%C3%B3gico%20Superior%20de%20Jalisco%20Zapopan!5e0!3m2!1ses!2smx!4v1751047031962!5m2!1ses!2smx"
                  className='ubicationIframeMap'
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width='90%'
                  height='80%'
                ></iframe>
              </div>
            </div>
            <h2>INNOVAR PARA TRANSFORMAR A MÉXICO</h2>
            <div className='footerSectionLogos grey'>
              <img src={sicytLogoBlanco} alt="Imagen 1" />
              <img src={tsjLogoBlanco} alt="Imagen 1" />
              <img src={jaliscoLogoBlanco} alt="Imagen 1" />
            </div>
            <div className='footerSectionLogos white'>
              <img src={educacionLogo} alt="Imagen 1" />
              <img src={tecnmLogo} alt="Imagen 1" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Landing
