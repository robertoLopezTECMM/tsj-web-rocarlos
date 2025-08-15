import React from 'react'
import IconBackground from '../../components/background/IconBackground'
import { Link } from 'react-router';


export const Transparencia = () => {
      const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };
  const madaniArabicMedium = { fontFamily: 'madaniArabicMedium', margin:'0.5rem'};
  return (
    <div style={{marginTop:'5vh'}}>
        <IconBackground/>
        <div className="organos-container">
        <div className="organos-contenido fade-in">
            <h1 className="organos-titulo" style={madaniBold}>Transparencia</h1>
            <h2 className="organos-subtitulo" style={madaniBold}>Aviso de Privacidad</h2>
            <p className="organos-parrafo" style={madaniRegular}>
                Las presentes modalidades del aviso de privacidad fueron actualizadas y aprobadas por el Comité de Transparencia del Instituto Tecnológico José Mario Molina Pasquel y Henríquez en la sesión del 17 de enero del 2025. Acta del Comité de Transparencia 17 de enero de 2025 – Actualización del Aviso de Privacidad en su modalidad Integral, Simplificado y Corto del Instituto Tecnológico José Mario Molina Pasquel y Henríquez.
            </p>

            <div >

                <a
                    href="https://tecmm.edu.mx/media/documents/Primera_sesion_ordinaria_CT_2025.pdf"
                    target="_blank"
                    className="organos-boton"
                    style={madaniArabicMedium}
                >
                    Acta del Comité de Transparencia 17 de enero de 2025
                </a>

                <a
                    href="https://tecmm.edu.mx/media/documents/AP_INTEGRAL.pdf"
                    target='_blank'
                    className="organos-boton"
                    style={madaniArabicMedium}
                >
                    Aviso Integral
                </a>

                <a
                    href="https://tecmm.edu.mx/media/documents/AP_SIMPLIFICADO.pdf"
                    target='_blank'
                    className="organos-boton"
                    style={madaniArabicMedium}
                >
                    Aviso Simplificado
                </a>

                <a
                    href="https://tecmm.edu.mx/media/documents/AP_CORTO.pdf"
                    target='_blank'
                    className="organos-boton"
                    style={madaniArabicMedium}
                >
                    Aviso Corto
                </a>

            </div>






          <hr className="organos-separador" />
          <h2 className="organos-subtitulo" style={madaniBold}>
            Enlaces de Interés
          </h2>

            <div >

                <a
                    href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml?idEntidad=MTQ=&idSujetoObligado=MTM3OTE=#inicio"
                    target='_blank'
                    className="organos-boton"
                    style={madaniArabicMedium}
                >
                    Plataforma Nacional de Transparencia (SIPOT)
                </a>

                <a
                    href="https://transparencia.info.jalisco.gob.mx/transparencia/organismo/312"
                    target='_blank'
                    className="organos-boton"
                    style={madaniArabicMedium}
                >
                    Plataforma Estatal de Transparencia
                </a>

                <a
                    href="https://transparencia.jalisco.gob.mx/informacion_fundamental/281"
                    target='_blank'
                    className="organos-boton"
                    style={madaniArabicMedium}
                >
                    Sistema Integral de Transparencia
                </a>

            </div>
          
        </div>
      </div>
    </div>
  )
}
