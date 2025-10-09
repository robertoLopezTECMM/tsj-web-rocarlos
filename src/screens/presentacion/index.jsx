import React from 'react'
import MapJalisco from '../../components/jaliscoMap'
import './index.css'
import { BasicContainer } from '../../components/basicContainer'

export const Presentacion = () => {
  return (
    <BasicContainer >
        <div className='mapaPresentacion'>
            <MapJalisco/>
        </div>
    </BasicContainer>
  )
}
