import { useState } from 'react';
import IconBackground from '../../../components/background/IconBackground';
import { ContraloriaIMG } from '../../../assets/images';
import './styles/ContraloriaSocial.css';
import {
  QUE_ES_EL_S247_2025,
  QUE_ES_LA_CONTRALORIA,
  LINEAMIENTOS_2024_S247,
  ESQUEMA_S247,
  MODELO_3_GUIA,
  MODELO_4_PATCS,
  OF_VALIDA_S247,
  ANEXO1,
  ANEXO2,
  ANEXO3,
  ANEXO4_INF,
  ANEXO4_CCS,
  MECANISMOS_QUEJAS,
  INFORME_FINAL,
} from '../../../archives';

export default function ContraloriaSocial() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const submenus = [
    {
      id: 'rodep',
      title: '1 - RODEP S247 2025',
      files: [
        { label: '¿Qué es el S247-2025?', url: QUE_ES_EL_S247_2025 },
      ],
    },
    {
      id: 'quees',
      title: '2 - ¿Qué es la Contraloría Social?',
      files: [
        { label: '¿Qué es la Contraloría Social?', url: QUE_ES_LA_CONTRALORIA },
      ],
    },
    {
      id: 'normativos',
      title: '3 - Documentos Normativos S247 2025',
      files: [
        { label: 'Lineamientos 2024 S247', url: LINEAMIENTOS_2024_S247 },
        { label: 'Esquema S247', url: ESQUEMA_S247 },
        { label: 'Modelo 3 Guía O', url: MODELO_3_GUIA },
        { label: 'Modelo 4 PATCS', url: MODELO_4_PATCS },
        { label: 'Oficio de Valida S247', url: OF_VALIDA_S247 },
        { label: 'Anexo 1 Acta Constitución', url: ANEXO1 },
        { label: 'Anexo 2 Acta Sustitución', url: ANEXO2 },
        { label: 'Anexo 3 Minuta', url: ANEXO3 },
        { label: 'Anexo 4 Informe', url: ANEXO4_INF },
        { label: 'Anexo 4 Informe del CCS', url: ANEXO4_CCS },
      ],
    },
    {
      id: 'mecanismos',
      title: '4 - Mecanismos de Quejas S247 2025',
      files: [
        { label: 'Mecanismos de Quejas y Denuncias', url: MECANISMOS_QUEJAS },
      ],
    },
    {
      id: 'informe',
      title: '5 - Informe Final 2024',
      files: [
        { label: 'Informe Final I.N. 2024', url: INFORME_FINAL },
      ],
    },
  ];

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="cs-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="cs-container fade-in">
        
        {/* Imagen */}
        <div className="cs-imagen-container">
          <img src={ContraloriaIMG} alt="Contraloría Social" className="cs-imagen" />
        </div>

        <h1 className="cs-titulo" style={madaniBold}>Contraloría Social</h1>

        <h2 className="cs-subtitulo" style={madaniBold}>¿Qué es la Contraloría Social?</h2>
        <p className="cs-parrafo" style={madaniRegular}>
          La Contraloría Social es un grupo de beneficiarios, que, de manera organizada, 
          verifican el cumplimiento de las metas y la correcta aplicación de los recursos 
          públicos asignados a Programas Presupuestales con recursos federales.
        </p>

        <h2 className="cs-subtitulo" style={madaniBold}>¿Qué vigila la Contraloría Social?</h2>
        <ul className="cs-lista" style={madaniRegular}>
          <li>Que se difunda la información suficiente, veraz y oportuna sobre la operación del programa.</li>
          <li>Que los otorgamientos de los apoyos sean con calidad, calidez, eficiente, eficaz, oportuno y de manera transparente.</li>
          <li>Que las autoridades competentes brinden atención a las quejas o denuncias relacionadas al programa.</li>
        </ul>

        <h2 className="cs-subtitulo" style={madaniBold}>¿Qué es un Comité de Contraloría Social?</h2>
        <p className="cs-parrafo" style={madaniRegular}>
          Supervisión y vigilancia de la ejecución, cumplimiento de las metas y acciones comprometidas, 
          así como de la correcta aplicación de los recursos asignados a los mismos.
        </p>
        <p className="cs-parrafo" style={madaniRegular}>
          Las formas de organización social constituidas por los beneficiarios referidas en el artículo 67 
          del Reglamento de la Ley General de Desarrollo Social, que llevan a cabo el seguimiento.
        </p>

        {/* Submenús tipo acordeón */}
        <div className="cs-submenus">
          {submenus.map((menu) => (
            <div key={menu.id} className="cs-submenu">
              <div 
                className="cs-submenu-title"
                onClick={() => toggleMenu(menu.id)}
                style={madaniBold}
              >
                {menu.title}
              </div>
              <div className={`cs-submenu-content ${openMenu === menu.id ? 'open' : ''}`}>
                {menu.files.map((file, idx) => {
                  const isDocx = file.url.toLowerCase().endsWith('.docx');
                  return (
                    <a 
                      key={idx}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-card"
                    >
                      <div className="cs-card-badge">{isDocx ? 'DOCX' : 'PDF'}</div>
                      <div className="cs-card-title" style={madaniBold}>{file.label}</div>
                      <div className="cs-card-meta" style={madaniRegular}>Ver / Descargar</div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </IconBackground>
  );
}
