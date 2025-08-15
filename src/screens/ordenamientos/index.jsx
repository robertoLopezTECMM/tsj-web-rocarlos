
import React, { useEffect, useState } from 'react'
import IconBackground from '../../components/background/IconBackground'
import axios from 'axios'
import './index.css'
import FileDownload from '@mui/icons-material/FileDownload';

{/*DEBT TECH: this componente is exactly the same of ordenamientos/archivos, make modular, changes the api petitions to the .env */}

export const Ordenamientos = () => {

  const [archivos, setArchivos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getArchivos = async () =>{

    try{
      setLoading(true)
      const res = await axios.get('https://www.tecmm.edu.mx/apiCms/normatividadOrdenamientos')
      console.log(res.data)
      setArchivos(res.data)

    }catch(err){
      setError(err.message || "Error Desconocido")
    } finally{
      setLoading(false)
    }
  }


  useEffect(() => {
    getArchivos()
  }, [])

  const RenderItem = ({item}) => {
    return(
      <li className='li-renderItem'>
        <FileDownload fontSize='medium'   style={{ color: 'var(--green)', verticalAlign: 'middle', marginRight: '5px' }}/>
        <a href={item.fileUrl} target='_blank'>
            {item.name}
        </a>
      </li>
    )
  }


  return (
    <div style={{marginTop:'5vh'}}>
      <IconBackground/>

      {/*DEBT TECH: im usign a class (noticias-container) declared in another component, create a global component to avoid use clases that not correspond to each component */}

      <div className="noticia-container">

        <h1 className='h1-archivo'>Ordenamientos</h1>

        <ul className='ul-archivos'>

          {archivos.map(archivo =>{
           return <RenderItem item={archivo}/>
          })}

        </ul>
      </div>
    </div>
  )
}
