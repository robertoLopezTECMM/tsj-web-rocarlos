import './index.css';
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useLocation} from 'react-router'
import logoTsj from '../../assets/logos/logoTsj-01.png'

import { useLocation } from 'react-router'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // <-- clave del submenu abierto
  const toggleSubmenu = (key) => setOpenSubmenu(prev => (prev === key ? null : key));
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla"
        zIndex={100000000}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Menú</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#section1">Sección 1</a></li>
            <li><a href="#section2">Sección 2</a></li>
            <li><a href="#section3">Sección 3</a></li>
          </ul>
        </div>
      </Drawer>
      <nav className={isHome ? "navbarTranslucid" : "navbarSolid"}>
        <div className="navbar-left">
          <span onClick={toggleDrawer} className="menu-icon">
            <MenuIcon fontSize='large' />
          </span>
        </div>
        {/* <div className="navbar-right">
              <img src="https://tsjapp.tecmm.mx/resources/images/logos/logoTsj-01.png" alt="Logo TSJ" className="logo" />
          </div> */}
        <div>
          <ul className="navbar-menu">
            <li><a href='/'><img src="https://tsjapp.tecmm.mx/resources/images/logos/logoTsj-01.png" alt="Logo TSJ" className="logo" /></a></li>

            {/* Submenu: Sobre TSJ */}
            <li
              id="navBarButton"
              onClick={() => toggleSubmenu('sobre')}
              className="submenu-wrapper"
            >
              <a style={{ cursor: 'pointer' }}>Sobre TSJ</a>
              {openSubmenu === 'sobre' && (
                <ul className="submenu">
                  <li><a href="/directorio">Directorio</a></li>
                  <li><a href="/mision-vision">Misión y Visión</a></li>
                </ul>
              )}
            </li>

            <li id="navBarButton"><a href='/noticias'>Noticias</a></li>
            <li id="navBarButton"><a>Servicios Escolares</a></li>
            <li id="navBarButton"><a href='/ofertaEducativa'>Oferta Educativa</a></li>
            <li id="navBarButton"><a href='/unidadesAcademicas'>Unidades Académicas</a></li>
            {/* <li><img src="https://tsjapp.tecmm.mx/resources/images/logos/logoTsj-01.png" alt="Logo TSJ" className="logo" /></li> */}

            {/* Submenu: Normatividad */}
            <li
              id="navBarButton"
              onClick={() => toggleSubmenu('norma')}
              className="submenu-wrapper"
            >
              <a style={{ cursor: 'pointer' }}>Normatividad</a>
              {openSubmenu === 'norma' && (
                <ul className="submenu">
                  <li><a href="/junta-gobierno">Junta de Gobierno</a></li>
                  <li><a href="/organos-tecnicos">Órganos Técnicos</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <SearchIcon fontSize='large' />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
