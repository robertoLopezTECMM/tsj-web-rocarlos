import './App.css'
import { Routes, Route } from 'react-router'
import Landing from './screens/landing'
import OfertaEducativa from './screens/ofertaEducativa/oferta/OfertaEducativa'
import OfertaCarrera from './screens/ofertaEducativa/OfertaCarrera'
import { UnidadesAcademicas } from './screens/unidadesAcademicas'
import { Directorio } from './screens/directorio'
import { Noticias } from './screens/noticias'
import Noticia from './screens/noticias/Noticia'
import Navbar from './components/navbar'
import { ValidadorCredenciales } from './screens/validadorCredenciales'
import { Ordenamientos } from './screens/ordenamientos'
import JuntaGobierno from './screens/juntaGobierno/JuntaGobierno'
import OrganosTecnicos from './screens/organosTecnicos/OrganosTecnicos'
import COCODI from './screens/organosTecnicos/COCODI'
import UIG from './screens/organosTecnicos/UIG'
import ComiteEtica from './screens/organosTecnicos/ComiteEtica'
import { Archivo } from './screens/archivo'
import { Transparencia } from './screens/transparencia'
import QuienesSomos from './screens/quienesSomos/QuienesSomos'
import { Credenciales } from './screens/credenciales'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Gaceta from './screens/gaceta/Gaceta'


function App() {
  // const location = useLocation();
  // const isHome = location.pathname === '/';

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ofertaEducativa" element={<OfertaEducativa />} />
        <Route path="/ofertaEducativa/filtro/:idFilter" element={<OfertaEducativa />} />
        {/* <Route path="/ofertaEducativa/categoria/:categoria" element={<OfertaEducativa />} />
        <Route path="/ofertaEducativa/categoria/:categoria/unidad/:unidad" element={<OfertaEducativa />} /> */}
        <Route path="/ofertaEducativa/:carreraNombre" element={<OfertaCarrera />} />
        <Route path="/unidadesAcademicas" element={<UnidadesAcademicas />} />
        <Route path="/directorio" element={<Directorio/>} />
        <Route path="/noticias" element={<Noticias/>} />
        <Route path="/noticias/:id" element={<Noticia/>} />
        <Route path="/validarCredencial/:qrId" element={<ValidadorCredenciales/>} />
        <Route path="/ordenamientos" element={<Ordenamientos/>} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<Noticia />} />
        <Route path="/validarCredencial/:qrId" element={<ValidadorCredenciales />} />
        <Route path="/archivo" element={<Archivo/>} />
        <Route path="/gaceta" element={<Gaceta />} />
        <Route path="/junta-gobierno" element={<JuntaGobierno />} />
        <Route path="/ordenamientos" element={<Ordenamientos />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/organos-tecnicos" element={<OrganosTecnicos />} />
        <Route path="/organos-tecnicos/comite-de-control-interno-cocodi" element={<COCODI />} />
        <Route path="/organos-tecnicos/unidad-de-igualdad-de-genero-uig" element={<UIG />} />
        <Route path="/organos-tecnicos/comite-de-etica" element={<ComiteEtica />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/credenciales" element={<Credenciales />} />
      </Routes>
    </div>
  )
}


export default App
