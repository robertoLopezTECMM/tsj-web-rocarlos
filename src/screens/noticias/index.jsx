import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Grid from '@mui/material/Grid'
import './index.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router';
import IconBackground from '../../components/background/IconBackground';

export const Noticias = () => {

    const [noticias, setNoticias] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://www.tecmm.edu.mx/apiCms/news") // Reemplaza con tu endpoint real si cambia
        .then((res) => {
            setNoticias(res.data)
            console.log("res data:", res.data)
        })
        .catch((err) => {
            console.error("Error al obtener banners:", err)
        })
    }, [])



    function CardNoticiaIntern ({noticia}) {
        return(
            <Card id="cardNoticiaIntern" sx={{ maxWidth: 345, minWidth:400, minHeight:400 }}>
                <CardMedia
                    sx={{ height: 240 }}
                    image={noticia.fotografiaPrincipal}
                    title={noticia.titulo}
                />
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {noticia.titulo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Compartir</Button>
                    <Button size="small" onClick={()=>navigate(`/noticias/${noticia.idNoticia}`)}>Leer Mas</Button>
                </CardActions>
            </Card>
        )
    }

  return (
    <>
    <IconBackground />
    <div className='padre'>
        {/* <Navbar/> */}

        <div className='newsGridContainer'>

            <h1>Noticias</h1>
            <Grid container spacing={3} justifyContent="center">
                {noticias.map((noticia, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <CardNoticiaIntern noticia={noticia}/>
                    </Grid>
                ))}
            </Grid>

        </div>

        
    </div>
    </>
  )
}
