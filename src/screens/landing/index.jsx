import { useEffect, useRef, useState } from 'react'

import viteLogo from '/vite.svg'
import './index.css'
import Navbar from '../../components/navbar/index'
import Lottie from "lottie-react";
import animacion from "../../assets/lotties/Animation.json";
import { BannerSlider } from '../../components/bannerSliders';
import MapJalisco from '../../components/jaliscoMap';

import sicytLogoBlanco from '../../assets/logos/sicytBco.png'
import jaliscoLogoBlanco from '../../assets/logos/jaliscoBco.png'
import tsjLogoBlanco from '../../assets/logos/tsjBco.png'
import educacionLogo from '../../assets/logos/educacion.png'
import tecnmLogo from '../../assets/logos/tecnmSVG.svg'
import whatsappLogo from '../../assets/logos/whatsapp.webp'

import { NewsSlider } from '../../components/newsSlider';




function Landing() {

  return (
    <> 
      {/* <Navbar /> */}
      <div className="scroll-container">
        <section id="sobre" className="section video-section">
          <video
            className="background-video"
            src="https://tecmm.edu.mx/apiCms/cmsWebFiles/videoPruebas.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="divLottie">
            <Lottie 
              animationData={animacion}
              className="absolute bottom-0 left-0 w-32 h-32"
              loop={true}
            />
          </div>

        </section>





        <section className="sectionLanding news">
          <BannerSlider/>
          <NewsSlider/>
        </section>





        <section className="sectionLanding blue image-grid">
          <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_ingenierias.png" alt="Imagen 1"  />
          <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_licenciaturas.png" alt="Imagen 2"  />
          <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_maestrias.png" alt="Imagen 3"  />
          <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/landing_enlinea.png" alt="Imagen 4"  />
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



        <section className="sectionLanding sectionDisplayBlock">
          
            <div className='footerSectionContact'>
                <h1>¿Tienes Dudas? Contactanos</h1>

                <div className='logosAddressContainer'>

                  <div className='logosRedesSection'>

                    <div className='redesLogos'>
                        <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/facebook.png" alt="Imagen 1"  />
                        <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/tiktok.webp" alt="Imagen 1"  />
                        <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/youtube.webp" alt="Imagen 1"  />
                        <img src="https://tecmm.edu.mx/apiCms/cmsWebFiles/X.png" alt="Imagen 1"  />
                    </div>

                  </div>

                  <div className='mapAddressSection'>

                    <div className='ubicationMapAddresContainer'>
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9532.015912463226!2d-103.47132874616723!3d20.70456403385319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a92008505ae3%3A0xac0da90d95e836af!2sTecnol%C3%B3gico%20Superior%20de%20Jalisco%20Zapopan!5e0!3m2!1ses!2smx!4v1751047031962!5m2!1ses!2smx" 
                          className='ubicationIframeMap'
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>

                      <p>
                          <span className="material-icons" style={{ verticalAlign: 'middle' }}>
                              location_on
                          </span>
                          &nbsp;Camino Arenero 1101, Col. El Bajio. 45017. Zapopan, Jalisco.
                      </p>

                      <p>
                          <span className="material-icons" style={{ verticalAlign: 'middle' }}>
                              mail
                          </span>
                          &nbsp;contacto@tecmm.edu.mx
                      </p>

                      <p>
                          <span className="material-icons" style={{ verticalAlign: 'middle' }}>
                              phone
                          </span>
                          &nbsp;33 1234 1234 ext. 1234, 5678
                      </p>
                    </div>

                  </div>

                </div>

                <div className='whatsappLink'>
                    <img src={whatsappLogo} alt="Imagen 1"  />
                    
                    <a
                      href='https://wa.me/523338849498'
                      target="_blank"
                      style={{textDecoration:'none', color:'white'}}
                    >
                        <h1>&nbsp;+52 33 3884 9498</h1>
                    </a>

                </div> 

            </div>

            <div className='footerSectionLogos grey'>
                <img src={sicytLogoBlanco} alt="Imagen 1"  />
                <img src={tsjLogoBlanco} alt="Imagen 1"  />
                <img src={jaliscoLogoBlanco} alt="Imagen 1"  />
                
            </div>

            <div className='footerSectionLogos'>
                <img src={educacionLogo} alt="Imagen 1"  />
                <img src={tecnmLogo} alt="Imagen 1"  />
            </div>
        </section>

      </div>
    </>

  )
}


export default Landing
