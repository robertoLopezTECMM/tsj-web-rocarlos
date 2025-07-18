import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import './index.css'




export default function DirectorioCard({directorInfo}) {


  return (
    <Card id='CardUnidad' sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', borderRadius:'2rem' }}>

      <CardMedia
        component="img"
        height="250"
        image={directorInfo.image}
        alt="undiad academica photo"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <div className='unidadCardInfoContainer'>
            <h2>{directorInfo.name}</h2>
            <p id='puestoDirector'>{directorInfo.puesto}</p>
            <p>{directorInfo.phone}</p>
            <p id='emailDirector'>{directorInfo.email}</p>

        </div>
      </CardContent>


    </Card>
  );
}
