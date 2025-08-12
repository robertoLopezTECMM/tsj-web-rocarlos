import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useLocation} from 'react-router'
import Landing from './screens/landing'
import OfertaEducativa from './screens/ofertaEducativa/oferta/OfertaEducativa'
import OfertaCarrera from './screens/ofertaEducativa/OfertaCarrera'
import { UnidadesAcademicas } from './screens/unidadesAcademicas'
import { Directorio } from './screens/directorio'
import { Noticias } from './screens/noticias'
import  Noticia  from './screens/noticias/Noticia'
import Navbar from './components/navbar'
import { ValidadorCredenciales } from './screens/validadorCredenciales'
import { Ordenamientos } from './screens/ordenamientos'



function App() {

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ofertaEducativa" element={<OfertaEducativa />} />
        <Route path="/ofertaEducativa/:carreraNombre" element={<OfertaCarrera />} />
        <Route path="/unidadesAcademicas" element={<UnidadesAcademicas />} />
        <Route path="/directorio" element={<Directorio/>} />
        <Route path="/noticias" element={<Noticias/>} />
        <Route path="/noticias/:id" element={<Noticia/>} />
        <Route path="/validarCredencial/:qrId" element={<ValidadorCredenciales/>} />
        <Route path="/ordenamientos" element={<Ordenamientos/>} />
      </Routes>
    
    </>


  )
}


export default App
