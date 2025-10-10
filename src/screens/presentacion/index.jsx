import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { BasicContainer } from "../../components/basicContainer";
import InfoCards from "../../components/infoCards";
import MapJaliscoPresentation from "../../components/jaliscoMapPresentation";
import UnidadInfo from "../../components/unidadInfo/";
import "./index.css";

export const Presentacion = () => {
  const [selectedUnidad, setSelectedUnidad] = useState(null);

  const handleSelectUnidad = (unidad) => {
    setSelectedUnidad(unidad);
  };

  const handleBack = () => {
    setSelectedUnidad(null);
  };

  return (
    <BasicContainer>
      <div className="presentacion-wrapper">
        {!selectedUnidad && (
          <motion.div
            className="cards-left"
            animate={{
              opacity: selectedUnidad ? 0 : 1,
              x: selectedUnidad ? -80 : 0,
              pointerEvents: selectedUnidad ? "none" : "auto",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <InfoCards side="left" />
          </motion.div>
        )}
        <motion.div
          className="mapaPresentacion"
          animate={{
            x: selectedUnidad ? "-1dvw" : 0,
            scale: selectedUnidad ? 0.9 : 1,
            filter: selectedUnidad ? "brightness(0.9)" : "brightness(1)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <MapJaliscoPresentation onSelectUnidad={handleSelectUnidad} />
        </motion.div>
        <AnimatePresence mode="wait">
          {!selectedUnidad && (
            <motion.div
              className="cards-right"
              animate={{
                opacity: selectedUnidad ? 0 : 1,
                x: selectedUnidad ? 80 : 0,
                pointerEvents: selectedUnidad ? "none" : "auto",
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <InfoCards side="right" />
            </motion.div>
          )}
          {selectedUnidad && (
            <motion.div
              key="unidad-info"
              className="unidad-info-wrapper"
              initial={{ x: "50dvw", opacity: 0 }}
              animate={{ x: "-2dvw", opacity: 1 }}
              exit={{ x: "50dvw", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <UnidadInfo unidad={selectedUnidad} />
              <motion.button
                className="back-button"
                onClick={handleBack}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                ← Regresar
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </BasicContainer>
  );
};
