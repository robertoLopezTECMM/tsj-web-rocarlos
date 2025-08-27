import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logoTsj from "../../assets/logos/logoTsj-01.png";
import logoTsjColor from "../../assets/logos/tsjColor.png";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import './index.css'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Sobre TSJ",
  "Admision",
  "Oferta Educativa",
  "Unidades Académicas",
  "Normatividad",
];

export default function DrawerAppBar(props: Props) {
  const isHome = location.pathname === '/';
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorSobreTsj, setAnchorSobreTsj] =
    React.useState<null | HTMLElement>(null);
  const openSobreTsj = Boolean(anchorSobreTsj);

  const [anchorNormatividad, setAnchorNormatividad] =
    React.useState<null | HTMLElement>(null);
  const openNormatividad = Boolean(anchorNormatividad);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorSobreTsj(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorSobreTsj(null);
  };

  const handleClickNormatividad = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorNormatividad(event.currentTarget);
  };

  const handleCloseNormatividad = () => {
    setAnchorNormatividad(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src={logoTsjColor}
        alt="Logo"
        sx={{
          height: "100%",
          maxHeight: "40px",
          width: { xs: "90px", sm: "80px", md: "100px" }, // responsivo
        }}
      />

      <Divider />
      <List>
      

          <ListItem component='a' href='/directorio' key={'Directorio'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Directorio'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/quienes-somos' key={'¿Quienes Somos?'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'¿Quienes Somos?'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/noticias' key={'Noticias'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Noticias'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='https://admision.tsj.mx:3000/' key={'Admision'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Admision'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/ofertaEducativa' key={'Oferta Educativa'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Oferta Educativa'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/unidadesAcademicas' key={'Unidades Académicas'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Unidades Académicas'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/archivo' key={'Archivo'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Archivo'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/junta-gobierno' key={'Junta de Gobierno'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Junta de Gobierno'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/ordenamientos' key={'Ordenamientos'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Ordenamientos'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/organos-tecnicos' key={'Organos Tecnicos'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Organos Tecnicos'} />
            </ListItemButton>
          </ListItem>

          <ListItem component='a' href='/transparencia' key={'Transparencia'} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={'Transparencia'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className={isHome ? "appBarTranslucid" : "appBar"} component="nav">
        <Toolbar sx={{ position: "relative" }}>
          {/* Botón hamburguesa (solo móvil) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box
            component='a'
            href="/"
            sx={{
              flexGrow: { sm: 1 }, // en desktop empuja botones
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              position: { xs: "absolute", sm: "static" },
              left: { xs: "50%", sm: "auto" },
              transform: { xs: "translateX(-50%)", sm: "none" },
            }}
          >
            <Box
              component="img"
              src={logoTsj}
              alt="Logo"
              sx={{
                height: "100%",
                maxHeight: "50px",
                width: { xs: "90px", sm: "80px", md: "100px" }, // responsivo
              }}
            />
          </Box>

          {/* Botones de navegación (solo desktop) */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              key={"Sobre TSJ"}
              sx={{ color: "#fff", fontFamily: "madaniArabicMedium" }}
              id="basic-button"
              aria-controls={openSobreTsj ? "sobreTsj-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openSobreTsj ? "true" : undefined}
              onClick={handleClick}
            >
              Sobre TSJ
            </Button>
            <Menu
              id="sobreTsj-menu"
              anchorEl={anchorSobreTsj}
              open={openSobreTsj}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem component='a' href='/directorio' onClick={handleClose}>Directorio</MenuItem>
              <MenuItem component='a' href='/quienes-somos' onClick={handleClose}>¿Quiénes Somos?</MenuItem>
              <MenuItem component='a' href='/noticias' onClick={handleClose}>Noticias</MenuItem>
            </Menu>

            <Button
              key={"Sobre TSJ"}
              sx={{ color: "#fff", fontFamily: "madaniArabicMedium" }}
              component='a'
              href='https://admision.tsj.mx:3000/' 
              target='_blank'
            >
              Admisión
            </Button>

            <Button
              key={"Sobre TSJ"}
              sx={{ color: "#fff", fontFamily: "madaniArabicMedium" }}
              component='a'
              href='/ofertaEducativa' 
            >
              Oferta Educativa
            </Button>

            <Button
              key={"Sobre TSJ"}
              sx={{ color: "#fff", fontFamily: "madaniArabicMedium" }}
              component='a'
              href='/unidadesAcademicas' 
            >
              Unidades Académicas
            </Button>

            <Button
              key={"Normatividad"}
              sx={{ color: "#fff", fontFamily: "madaniArabicMedium" }}
              id="basic1-button"
              aria-controls={openNormatividad ? "normatividad-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openNormatividad ? "true" : undefined}
              onClick={handleClickNormatividad}
            >
              Normatividad
            </Button>
            <Menu
              id="normatividad-menu"
              anchorEl={anchorNormatividad}
              open={openNormatividad}
              onClose={handleCloseNormatividad}
              slotProps={{
                list: {
                  "aria-labelledby": "basic1-button",
                },
              }}
            >
              <MenuItem component='a' href='/archivo' onClick={handleCloseNormatividad}>
                Archivo
              </MenuItem>
              <MenuItem component='a' href='/junta-gobierno' onClick={handleCloseNormatividad}>
                Junta de Gobierno
              </MenuItem>
              <MenuItem component='a' href='/ordenamientos' onClick={handleCloseNormatividad}>
                Ordenamientos
              </MenuItem>
              <MenuItem component='a' href='/organos-tecnicos' onClick={handleCloseNormatividad}>
                Órganos Técnicos
              </MenuItem>
              <MenuItem component='a' href='/transparencia' onClick={handleCloseNormatividad}>
                Transparencia
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
