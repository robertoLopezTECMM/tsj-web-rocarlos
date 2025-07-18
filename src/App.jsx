import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './screens/landing'
import OfertaEducativa from './screens/ofertaEducativa/oferta/OfertaEducativa'
import OfertaCarrera from './screens/ofertaEducativa/OfertaCarrera'
import { UnidadesAcademicas } from './screens/unidadesAcademicas'
import { Directorio } from './screens/directorio'
import { Noticias } from './screens/noticias'
import  Noticia  from './screens/noticias/Noticia'



function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/ofertaEducativa" element={<OfertaEducativa />} />
      <Route path="/ofertaEducativa/:carreraNombre" element={<OfertaCarrera />} />
      <Route path="/unidadesAcademicas" element={<UnidadesAcademicas />} />
      <Route path="/directorio" element={<Directorio/>} />
      <Route path="/noticias" element={<Noticias/>} />
      <Route path="/noticias/:id" element={<Noticia/>} />
    </Routes>

  )
}


export default App
