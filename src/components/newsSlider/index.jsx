import React from 'react'
import './index.css'
import { NewsCard } from '../newsCard'

export const NewsSlider = () => {
  return (
    <div className='newsSliderContainer'>
        <NewsCard title={'#AquíTSJ - Presentación de campaña'} imgUrl={'https://tecmm.edu.mx/media/noticias/2025-06-04-17-27-28-IMG_8619.JPG'}/>
        <NewsCard title={'Reconocimiento a docentes #TSJVallarta'} imgUrl={'https://tecmm.edu.mx/media/noticias/2025-06-05-20-46-04-Captura_de_pantalla_2025-06-05_a_las_2.45.22p.m..png'}/>
        <NewsCard title={'¡Nuevo REDi en TSJ Lagos de Moreno!'} imgUrl={'https://tecmm.edu.mx/media/noticias/2025-05-15-03-59-55-REDI.jpg'}/>
        <NewsCard title={'EDUCO y TSJ: reafirmando la vinculación'} imgUrl={'https://tecmm.edu.mx/media/noticias/2025-04-10-00-42-47-IMG_0027.JPG'}/>
    </div>
  )
}
