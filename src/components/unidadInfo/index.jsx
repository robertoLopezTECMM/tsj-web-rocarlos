import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import "./index.css";

export default function UnidadInfo({ unidad }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!unidad || !unidad.images) return;

    const { images } = unidad;

    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [unidad]);

  if (!unidad) return null;

  const { name, address, phone, images = [] } = unidad;

  return (
    <motion.div
      className="unidad-info-container"
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 150 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="unidad-image-box">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={name}
          className="unidad-image"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="unidad-info-content">
        <h2 className="unidad-name">{name}</h2>
        <p className="unidad-address">{address || "Dirección no disponible"}</p>
        <p className="unidad-phone">📞 {phone || "Sin número registrado"}</p>
      </div>
    </motion.div>
  );
}
