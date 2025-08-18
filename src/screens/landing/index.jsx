import { useEffect, useRef, useState } from 'react'

import viteLogo from '/vite.svg'
import './index.css'
import Navbar from '../../components/navbar/index'
import Lottie from "lottie-react";
import animacion from "../../assets/lotties/Animation.json";
import { BannerSlider } from '../../components/bannerSliders';
import MapJalisco from '../../components/jaliscoMap';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';

import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeMute from '@mui/icons-material/VolumeMute';



import sicytLogoBlanco from '../../assets/logos/sicytBco.png'
import jaliscoLogoBlanco from '../../assets/logos/jaliscoBco.png'
import tsjLogoBlanco from '../../assets/logos/tsjBco.png'
import educacionLogo from '../../assets/logos/educacion.png'
import tecnmLogo from '../../assets/logos/tecnmSVG.svg'
import whatsappLogo from '../../assets/logos/whatsapp.webp'
import facebook from '../../assets/logos/facebook.png'
import instagram from '../../assets/logos/instagram.png'
import youtube from '../../assets/logos/youtube.png'
import twitter from '../../assets/logos/twitter.png'
import tiktok from '../../assets/logos/tiktok.png'
import iconLicenciaturas from '../../assets/logos/iconLicenciaturas.png'
import iconIngenierias from '../../assets/logos/iconIngenierias.png'
import iconMaestrias from '../../assets/logos/iconMaestrias.png'
import iconEnLinea from '../../assets/logos/iconEnLinea.png'


import whatsappQr from '../../assets/logos/whatsappQr.jpeg'

import { NewsSlider } from '../../components/newsSlider';



import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

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


  return (
    <> 
      {/* <Navbar /> */}
      <div className="scroll-container">
        <section id="sobre" className="section video-section">
          <video
            ref={videoRef}
            className="background-video"
            src="https://tecmm.edu.mx/apiCms/cmsWebFiles/aquitsj.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <div className="divLottie">
            {!isMuted ? <VolumeUp onClick={handleMute} fontSize='large'/> : <VolumeMute onClick={handleMute} fontSize='large'/>}


            <Lottie 
              animationData={animacion}
              className="absolute bottom-0 left-0 w-32 h-32"
              loop={true}
            />

            {!isPlaying ? <Pause onClick={handlePlayPause} fontSize='large'/> : <PlayArrow onClick={handlePlayPause} fontSize='large'/> }
          </div>



        </section>





        <section className="sectionLanding news">
          <BannerSlider/>
          <NewsSlider/>
        </section>


        <section className="sectionLanding black image-grid">
          <div className="image-item">
            <Link to='/ofertaEducativa/filtro/ingenierias'>
              <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_ingenierias.png" alt="Imagen 1" />
              <span className="image-text ">
                <img src={iconIngenierias}/>
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
                <img src={iconLicenciaturas}/>
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
                <img src={iconMaestrias}/>
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
                <img src={iconEnLinea}/>
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

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin, ex non accumsan vestibulum, nunc urna elementum orci, vel eleifend nisl nunc eget ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce quis dui in ipsum dictum sodales. Curabitur porta, felis et blandit commodo, elit elit dictum sapien, non posuere tellus purus non dui. Praesent eu odio sit amet ligula tristique cursus. Proin eget est vel turpis accumsan sodales. Suspendisse arcu turpis, egestas nec risus ultricies, gravida aliquam leo. Nunc pellentesque tortor at justo euismod commodo.</p>
            </div>


            <span id="mapaJaliscoContainerMobile" className='mapaJaliscoContainer'>
               <MapJalisco isMobile={true}/> 
            </span>
        </section>


        {/* <section className="sectionLanding green">
          
              <Box>
                <Grid container spacing={0.3}>

                  <Grid size={4}>
                    <Item>
                      size=4
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                    </Item>
                  </Grid>

                  <Grid size={6}>
                    <Item>
                      size=6
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                    </Item>
                  </Grid>

                  <Grid size={6}>
                    <Item>
                      size=6
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                    </Item>
                  </Grid>

                  <Grid size={8}>
                    <Item>
                      size=8
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                    </Item>
                  </Grid>

                </Grid>
              </Box>
        </section> */}



        <section className="sectionLanding sectionDisplayBlock">
          
            <div className='footerSectionContact'>
              <h1>¿Tienes Dudas? Contactanos</h1>

              <div className='div-footer-content'>

                <div className='div-footer-phoneSocialMedia'>
                  <img src={whatsappQr}/>

                  <div className='div-footer-phones'>
                    <h3>33 3884 9498</h3>
                  </div>

                  <div className='div-footer-phones'>
                    <h3>33 3884 9470</h3>
                  </div>

                  <br/>
                  <br/>



                  <div>
                    <h4>Siguenos en redes #TSJ</h4>

                    <div className='div-footer-ccontainerLogosSocialMedia'>

                      <img src={facebook}/>
                      <img src={instagram}/>
                      <img src={youtube}/>
                      <img src={twitter}/>
                      <img src={tiktok}/>


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
                  <img src={sicytLogoBlanco} alt="Imagen 1"  />
                  <img src={tsjLogoBlanco} alt="Imagen 1"  />
                  <img src={jaliscoLogoBlanco} alt="Imagen 1"  />
              </div>

              <div className='footerSectionLogos white'>
                  <img src={educacionLogo} alt="Imagen 1"  />
                  <img src={tecnmLogo} alt="Imagen 1"  />
              </div>

            </div>
        </section>

      </div>
    </>

  )
}


export default Landing
