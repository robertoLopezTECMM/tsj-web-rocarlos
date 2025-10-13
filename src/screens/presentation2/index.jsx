import React, { useState } from "react";
import { BasicContainer } from "../../components/basicContainer";
import MapJaliscoPresentation from "../../components/jaliscoMapPresentation";

import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import InfoCards from "../../components/infoCards";
import "./index.css";
import UnidadInfo from "../../components/unidadInfo";

export const Presentation2 = () => {
  const [moveMap, setMoveMap] = useState(null);
  const [showInfoCards, setShowInfoCards] = useState(true);
  const [selectedUnidad, setSelectedUnidad] = useState(null);


  const handleSelectUnidad = (unidad) => {
    console.log("Unidad seleccionada:", unidad);
    setSelectedUnidad(unidad);
    setShowInfoCards(false);
    setMoveMap([21, -102.0]);
  };

  return (
    <div className="presentation-wrapper">

      <div className="map-container">
        <MapJaliscoPresentation
          moveMap={moveMap}
          setter={setMoveMap}
          onSelectUnidad={handleSelectUnidad}
        />
      </div>


      <AnimatePresence>
        {showInfoCards && (
          <>
            <motion.div
              className="overlay overlay-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <InfoCards side="left" />
            </motion.div>

            <motion.div
              className="overlay overlay-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <InfoCards side="right" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {selectedUnidad && (
        <motion.div
          key="unidad-info"
          className="overlay overlay-right"
          initial={{ x: "50dvw", opacity: 0 }}
          animate={{ x: "-2dvw", opacity: 1 }}
          exit={{ x: "50dvw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <UnidadInfo unidad={selectedUnidad} />
          <motion.button
            className="back-button"
            onClick={() => console.log("back")}
            initial={{ opaPcity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            ← Regresar
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};
