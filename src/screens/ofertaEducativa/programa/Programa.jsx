import './Programa.css'

export default function Programa({ data }) {
  const { name, objective, videoLink, flayerLink } = data;
  const enrollmentLink = import.meta.env.VITE_PUBLIC_ADMISION;
  const madaniRegular = {
    fontFamily: 'Madani Regular',
  };
  const madaniBold = {
    fontFamily: 'Madani Bold',
  };

  const getEmbedUrl = (url) => {
    if (!url) return null;

    const match1 = url.match(/v=([^&]+)/);
    if (match1) return `https://www.youtube.com/embed/${match1[1]}`;

    const match2 = url.match(/youtu\.be\/([^?]+)/);
    if (match2) return `https://www.youtube.com/embed/${match2[1]}`;

    return url;
  };

  const embedUrl = getEmbedUrl(videoLink);

  return (
    <div className="programa-container">
      <div className="video-container">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Video no disponible</p>
        )}
      </div>

      <div className="info-carrera">
        <h2 style={madaniBold}>{name}</h2>
        <p style={madaniRegular}>{objective}</p>

        <div className="botones">
          <a className="btn folleto" href={flayerLink} target="_blank" rel="noopener noreferrer" style={madaniRegular}>
            Descarga el folleto
          </a>
          <a className="btn inscribete" href={enrollmentLink || '#'} style={madaniRegular}>
            Inscríbete
          </a>
        </div>
      </div>
    </div>
  );
}
