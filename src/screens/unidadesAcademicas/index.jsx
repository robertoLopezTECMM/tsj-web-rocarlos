import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from '../../components/navbar'
import MapJalisco from '../../components/jaliscoMap'
import UnidadAcademicaCard from '../../components/unidadAcademicaCard'
import axios from 'axios'

export const UnidadesAcademicas = () => {

  const [unidades, setUnidades] = useState([])


  useEffect(() => {
    axios.get("https://www.tecmm.edu.mx/apiCms/unidadesAcademicas") // Reemplaza con tu endpoint real si cambia
      .then((res) => {
        setUnidades(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.error("Error al obtener las unidades academicas:", err)
      })
  }, [])


          


  return (
    <div>
      {/* <Navbar/> */}

      <div className='mapaListaUnidadesContainer'>

        <div className='mapaUnidadesContainer'>
            <MapJalisco/>
        </div>

        <div className="listaUnidadesContainer">

          <h1>Unidades Académicas</h1>
          <div className="listaUnidadesScroll">
            <div className="unidades-grid">
              {unidades.map((unidad, index) => (
                <UnidadAcademicaCard
                  key={index}
                  unidadInfo={unidad}
                />
              ))}
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}
