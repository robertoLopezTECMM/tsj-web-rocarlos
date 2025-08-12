// PerfilCarrera.jsx
import { useState } from 'react';
import './Perfil.css';

export default function PerfilCarrera({ ingreso, egreso, photoLink }) {
  const [perfilIndex, setPerfilIndex] = useState(0);
  const [paginaIndex, setPaginaIndex] = useState(0);

  const contenidos = [ingreso, egreso].map((html) =>
    html
      ?.split('</p>')
      .map((p) => p.replace(/<[^>]+>/g, '').trim())
      .filter((p) => p.length > 0)
  );

  const puntosPorPagina = [4, 3];
  const puntosActuales = contenidos[perfilIndex] || [];
  const paginasTotales = Math.ceil(puntosActuales.length / puntosPorPagina[perfilIndex]);

  const puntosPaginados = puntosActuales.slice(
    paginaIndex * puntosPorPagina[perfilIndex],
    (paginaIndex + 1) * puntosPorPagina[perfilIndex]
  );

  const titulos = ['Perfil de Ingreso', 'Perfil de Egreso'];

  const madaniRegular = { fontFamily: 'Madani Regular' };
  const madaniBold = { fontFamily: 'Madani Bold' };

  return (
    <div className="perfil-wrapper">
      <div className="perfil-image-container">
        <img src={photoLink} alt={titulos[perfilIndex]} className="perfil-foto" />
        <div className="perfil-card-overlay">
          <div className="perfil-container">
            <div className="perfil-header">
              <h2 style={madaniBold}>{titulos[perfilIndex]}</h2>
              <div className="perfil-tabs">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className={`perfil-tab ${perfilIndex === i ? 'active' : ''}`}
                    onClick={() => {
                      setPerfilIndex(i);
                      setPaginaIndex(0);
                    }}
                  />
                ))}
              </div>
            </div>

            <ul className="perfil-list">
              {puntosPaginados.map((p, idx) => (
                <li key={idx} className="perfil-item" style={madaniRegular}>
                  {p}
                </li>
              ))}
            </ul>

            {paginasTotales > 1 && (
              <div className="perfil-tabs sub-tabs">
                {Array.from({ length: paginasTotales }, (_, i) => (
                  <div
                    key={i}
                    className={`perfil-tab ${paginaIndex === i ? 'active' : ''}`}
                    onClick={() => setPaginaIndex(i)}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}