// MapJalisco.jsx
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./index.css";
import { esES } from "@mui/material/locale";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const MapJaliscoPresentation = ({ isMobile }) => {
  const [geoData, setGeoData] = useState(null);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80dvw",
    height: "65dvh",
    backgroundColor: "white",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [campusName, setCampusName] = useState("");

  const handleOpen = (campus) => {
    console.log(campus.name);
    setCampusName(campus.name);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const unidadesAcademicas = [
    {
      name: "Arandas",
      address: "",
      phone: "12123123123",
      hasRedi: true,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Chapala",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Cocula",
      address: "",
      phone: "12123123123",
      hasRedi: true,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "El Grullo",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "La Huerta",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Lagos de Moreno",
      address: "",
      phone: "12123123123",
      hasRedi: true,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Mascota",
      address: "",
      phone: "12123123123",
      hasRedi: true,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Puerto Vallarta",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "San Juan de los Lagos",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Tala",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Tamazula de Gordiano",
      address: "",
      phone: "12123123123",
      hasRedi: true,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Tepatitlán de Morelos",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Tequila",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Tomatlán",
      address: "",
      phone: "12123123123",
      hasRedi: true,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Zapopan",
      address: "",
      phone: "12123123123",
      hasRedi: true,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Zapotlanejo",
      address: "",
      phone: "12123123123",
      hasRedi: true,
      type: "campus",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Ixtlahuacán del Río",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "extension",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Cuquío",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "extension",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Tenamaxtlán",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "extension",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
    {
      name: "Atemajac de Brizuela",
      address: "",
      phone: "12123123123",
      hasRedi: false,
      type: "extension",
      images: [
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
        "tecmm.edu.mx/cmsApi",
      ],
    },
  ];

//   const extensiones = [
//     "Ixtlahuacán del Río",
//     "Cuquío",
//     "Tenamaxtlán",
//     "Atemajac de Brizuela",
//   ];

  useEffect(() => {
    fetch("/jalisco.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error al cargar GeoJSON:", err));
  }, []);

  const onEachFeature = (feature, layer) => {
    const nombre = feature.properties.mun_name || "Municipio";

    // console.log(nombre[0])
    // Determina si el municipio está en la lista
    const campus = unidadesAcademicas.find((u) => u.name === nombre[0]);
    // const isExtension = extensiones.includes(nombre[0]);

                if (campus?.hasRedi) {
                const center = layer.getBounds().getCenter();
    
                const icon = L.divIcon({
                    className: 'material-icon-marker',
                      html: `<span class="material-icons" style="color: #ff4d63; font-size:${isMobile?"1.5rem": "2rem"};">location_on</span>`,
                    iconSize: [40, 24],
                    iconAnchor: [12, 25],
                });
    
                setTimeout(() => {
                    if (layer._map) {
                        L.marker(center, { icon }).addTo(layer._map);
                    }
                }, 50); // Espera al siguiente ciclo de ejecución
            }

    if (campus) console.log("✅ Campus encontrado:", campus.name);
    // Estilo condicional
    layer.setStyle({
      color: campus ? "#3388ff" : "#3388ff",
      fillColor: campus? "#54c98f" : "white",
      // fillColor: esEspecial ? '#54c98f': isExtension ? '#ffae31' : 'white',
      fillOpacity: campus ? 0.7 : 0.5,
      weight: 1,
    });


  // 🎨 Estilo base
  const baseStyle = {
      color: campus ? "#3388ff" : "#3388ff",
      fillColor: campus? "#54c98f" : "white",
      // fillColor: esEspecial ? '#54c98f': isExtension ? '#ffae31' : 'white',
      fillOpacity: campus ? 0.7 : 0.5,
      weight: 1,
  };

  layer.setStyle(baseStyle);

  // 🟢 Eventos de interacción
  // 🟢 Solo si el municipio pertenece a tus listas, añadimos interactividad
  if (campus) {
    layer.on({
      mouseover: (e) => {
        const target = e.target;
        target.setStyle({
          fillOpacity: 1,
          weight: 3,
          color: "#1b65ff",
        });
        target.bringToFront(); // 👈 “eleva” el municipio al frente
      },
      mouseout: (e) => {
        const target = e.target;
        target.setStyle(baseStyle);
      },
      click: () => {
        handleOpen(campus || { name: nombre });
      },
    });

      layer.bindTooltip(campus?.name, {
    permanent: false, // aparece solo al pasar el cursor
    direction: "top", // posición del tooltip
    className: "map-label", // clase para estilizarlo si quieres
  });

  }




    // 🖱️ Evento al hacer clic: mostrar alerta
    if (campus) {
      layer.on({
        click: () => {
          handleOpen(campus);
          //   alert(
          //     `Campus: ${campus.name}\nTeléfono: ${campus.phone}\nDirección: ${campus.address}`
          //   );
        },
      });
    }



  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        draggable
      >
        <Box sx={style}>
          <h1>name: {campusName}</h1>
        </Box>
      </Modal>
      <MapContainer
        center={isMobile ? [20.5, -103.6] : [20.8, -103.5]}
        zoom={isMobile ? 7 : 8}
        // style={{ width: '100%', height: '100%', backgroundColor: 'transparent', borderRadius:'50%', border:'white 5px dashed', zIndex:'10000'}} // 👈 usa 100%
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }} // 👈 usa 100%
        zoomControl={true}
        dragging={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        {/* Quita TileLayer para que no se muestre ningún mapa base */}
        {geoData && <GeoJSON data={geoData} onEachFeature={onEachFeature} />}
      </MapContainer>
    </>
  );
};

export default MapJaliscoPresentation;
