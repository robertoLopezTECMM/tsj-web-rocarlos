import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import DirectorioCard from '../../components/directorioCard'
import './index.css'
import axios from 'axios'
import IconBackground from '../../components/background/IconBackground'
export const Directorio = () => {

    const [directores, setDirectores] = useState([])


    useEffect(() => {
    axios.get("https://www.tecmm.edu.mx/apiCms/directorio") // Reemplaza con tu endpoint real si cambia
        .then((res) => {
        setDirectores(res.data)
        console.log(res.data)
        })
        .catch((err) => {
        console.error("Error al obtener las unidades academicas:", err)
        })
    }, [])

  return (
    <div>
        {/* <Navbar/> */}
        <IconBackground />

        <h1 className='directorioTitle'>Directorio</h1>

        <div className="organigrama-container">
            {/* Director */}
            <div className="fila fila-director">
                <DirectorioCard directorInfo={{name:'Gloria Luz Rodríguez Gil', puesto:'Directora General', email:'direccion@tecmm.edu.mx', phone:'384-73-33000', image:'https://tecmm.edu.mx/media/original_images/foto2.png'}} />
            </div>

            {/* Empleados */}
            <div className="fila fila-empleados">
                {directores.map((director, i) => (
                    <DirectorioCard directorInfo={director} />
                ))}
            </div>
        </div>



    </div>
  )
}
