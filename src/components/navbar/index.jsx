import './index.css';
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const toggleDrawer = () => setIsOpen((prev) => !prev);

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
        
      <nav className="navbar">




        <div className="navbar-left">
          <span onClick={toggleDrawer} className="menu-icon">
            <MenuIcon fontSize='large'/>
          </span>
        </div>

          {/* <div className="navbar-right">
              <img src="https://tsjapp.tecmm.mx/resources/images/logos/logoTsj-01.png" alt="Logo TSJ" className="logo" />
          </div> */}

        <div>

            <ul className="navbar-menu">
                <li><a href='/'><img src="https://tsjapp.tecmm.mx/resources/images/logos/logoTsj-01.png" alt="Logo TSJ" className="logo" /></a></li>
                <li id="navBarButton" onClick={() => setSubmenuOpen(!submenuOpen)} className="submenu-wrapper">
                  <a style={{ cursor: 'pointer' }}>Sobre TSJ</a>
                    {submenuOpen && (
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

            </ul>

        </div>

        <div className="navbar-right">
          <SearchIcon fontSize='large'/>
        </div>

      </nav>
    </>

  );
}

export default Navbar;
