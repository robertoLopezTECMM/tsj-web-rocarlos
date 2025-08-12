import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './index.css'
import IconBackground from '../../components/background/IconBackground'


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import './index.css'

export const ValidadorCredenciales = () => {

    const [loading, setLoading] = useState(false)
    const [userFound, setUserFound] = useState({})
    const {qrId} = useParams()

    useEffect(() => {
        console.log("QR ID:", qrId)
        handleInfo()
    }, [])


    const handleInfo = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://xura.tsj.mx:3023/validarCredencial/${qrId}`);
      
            console.log('RESPONSE: ', response.data);
            setLoading(false)
            setUserFound(response.data)
        } catch (error) {
            console.error('Error:', error);
            setLoading(false)
        }
      };


  if(loading){return <p>Cargando...</p>}
    

  return (

    <div className='validadorPrincipalContainer'>
        <IconBackground />

        {/* <div>
            <h2>Validador de credencial</h2>
        </div> */}

        {   !userFound.nombre ? 
        
            <h1>alumno no encontrado</h1>
    
            :

            <Card id='CardUnidad' sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', borderRadius:'2rem' }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={userFound.foto}
                    alt="alumno photo"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <div className='unidadCardInfoContainer'>
                        <h2>{userFound.nombre}</h2>
                        <h4>{userFound.carrera}</h4>
                        <p id='puestoDirector'>{userFound.no_control}</p>
                        <p>{userFound.unidad}</p>
                        <p id='emailDirector' >{userFound.status}</p>

                    </div>
                </CardContent>
            </Card>


        }


    </div>
  )
}
