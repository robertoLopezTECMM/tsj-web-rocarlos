import IconBackground from '../../components/background/IconBackground';
import './styles/Gaceta.css';

export default function Gaceta() {
  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };
  const madaniArabicMedium = { fontFamily: 'madaniArabicMedium' };

  const documentos = [
    { year: '2017', url: 'https://tecmm.edu.mx/media/documents/gaceta_2017.pdf' },
    { year: '2018', url: 'https://tecmm.edu.mx/media/documents/gaceta_2018.pdf' },
    { year: '2019', url: 'https://tecmm.edu.mx/media/documents/gaceta_2019.pdf' },
    { year: '2020', url: 'https://tecmm.edu.mx/media/documents/gaceta_2020.pdf' },
    { year: '2021', url: 'https://tecmm.edu.mx/media/documents/gaceta_2021.pdf' },
    { year: '2022', url: 'https://tecmm.edu.mx/media/documents/Gaceta_TecSJ_2022.pdf' },
    { year: '2023', url: 'https://tecmm.edu.mx/media/documents/Gaceta_TecSJ_2023.pdf' },
    { year: '2024 (Ago–Dic)', url: 'https://tecmm.edu.mx/media/documents/GacetaTSJ2024AgostoDiciembre.pdf' },
  ];

  return (
    <IconBackground
      count={40}
      oppacity={0.6}
      wrapperClassName="gaceta-wrapper"
      backgroundClassName="icon-background"
      itemClassName="icon-background-item"
    >
      <div className="gaceta-container">
        <div className="gaceta-contenido fade-in">
          <h1 className="gaceta-titulo" style={madaniBold}>Gaceta TSJ</h1>

          <div className="gaceta-grid">
            {documentos.map((doc) => (
              <a
                key={doc.year}
                className="gaceta-card"
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Abrir Gaceta ${doc.year}`}
              >
                <div className="gaceta-badge">PDF</div>
                <div className="gaceta-doc" style={madaniArabicMedium}>
                  Gaceta {doc.year}
                </div>
                <div className="gaceta-meta" style={madaniRegular}>
                  Ver / Descargar
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </IconBackground>
  );
}
