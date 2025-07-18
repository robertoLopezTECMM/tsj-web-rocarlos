import React from 'react'
import './index.css'

export const NewsCard = ({imgUrl, title}) => {
  return (
    <div className='newsCardContainer'>
        {/* <img src="https://tsjapp.tecmm.mx/resources/images/landing/landing_ingenierias.png" alt="Imagen 1"  /> */}

            {/* <div class="overlay-topRight-newsCard">
                <p>27/03/2025</p>
            </div> */}

            <img
                src={imgUrl} 
                alt={1}
                className="imageBanner"
            />

            <div class="overlay-bottom-newsCard">
                <p>{title}</p>
            </div>
         
    </div>
  )
}
