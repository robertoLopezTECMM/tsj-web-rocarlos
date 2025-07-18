import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import './index.css'




export default function UnidadAcademicaCard({unidadInfo}) {


  return (
    <Card id='CardUnidad' sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>

      <CardMedia
        component="img"
        height="194"
        image={unidadInfo.image}
        alt="undiad academica photo"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <div className='unidadCardInfoContainer'>
            <h2>{unidadInfo.name}</h2>
            <p>{unidadInfo.address}</p>
            <p>{unidadInfo.email}</p>
            <p>{unidadInfo.phone}</p>
        </div>
      </CardContent>


    </Card>
  );
}
