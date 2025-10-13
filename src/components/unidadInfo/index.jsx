import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client";
import { FaGraduationCap } from "react-icons/fa";
import logoREDI from "../../assets/logos/logo-redi-lg.png";
import "./index.css";

export default function UnidadInfo({ unidad }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    if (!unidad) return;

    const combinedImages = [
      ...(unidad.images || []),
      ...(unidad.imagesRedi || []),
    ];

    setAllImages(combinedImages);
    setCurrentImage(0);

    if (combinedImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % combinedImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [unidad]);

  if (!unidad) return null;

  const { name, address, phone, ofertaEducativa = [] } = unidad;

  return (
    <motion.div
      className="unidad-info-container"
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 150 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="unidad-image-box">
        {allImages.length > 0 && (
          <>
            <motion.img
              key={currentImage}
              src={allImages[currentImage]}
              alt={name}
              className="unidad-image"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 1 }}
            />
            {unidad.imagesRedi &&
              unidad.imagesRedi.includes(allImages[currentImage]) && (
                <img
                  src={logoREDI}
                  alt="Logo REDI"
                  className="logo-redi-overlay"
                />
              )}
          </>
        )}
      </div>
      <div className="unidad-info-content">
        <h2 className="unidad-name">{name}</h2>
        <p className="unidad-address">{address || "Dirección no disponible"}</p>
        <p className="unidad-phone">📞 {phone || "Sin número registrado"}</p>
      </div>
      {ofertaEducativa.length > 0 && (
        <div className="unidad-oferta-scroll">
          <h3 className="unidad-oferta-title">Oferta Educativa</h3>
          <ul className="unidad-oferta-list">
            {ofertaEducativa.map((item, index) => (
              <li key={index} className="unidad-oferta-item">
                <FaGraduationCap className="unidad-oferta-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
