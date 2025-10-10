import React, { useState } from 'react'
import './index.css'
import { BasicContainer } from '../../components/basicContainer'
import MapJalisco from '../../components/jaliscoMap'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';
import MapJaliscoPresentation from '../../components/jaliscoMapPresentation'
import MapJalisco from '../../components/jaliscoMap';
import { BasicContainer } from '../../components/basicContainer';
import './index.css';
import InfoCards from '../../components/infoCards';

export const Presentacion = () => {
    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80dvw',
    height:'65dvh',


    boxShadow: 24,
    p: 4,
    };


      const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BasicContainer>
      <div className="presentacion-wrapper">
        <div className="cards-left">
          <InfoCards side="left" />
        </div>

        <div className="mapaPresentacion">
          <MapJalisco />
        </div>

        <div className="cards-right">
          <InfoCards side="right" />
        </div>
      </div>
    </BasicContainer>
  );
};
