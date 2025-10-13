// MapJalisco.jsx
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./index.css";
import { esES } from "@mui/material/locale";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const MapJaliscoPresentation = ({
  isMobile,
  onSelectUnidad,
  moveMap,
  setter,
}) => {
  const [geoData, setGeoData] = useState(null);
  // const [moveMap, setMoveMap] = useState([21, -103.5])

  const unidadesAcademicas = [
    {
      name: "Arandas",
      address:
        "C. José Guadalupe Tejeda Vázquez 557, S/C, Hacienda Palomino, 47184 Arandas, Jal.",
      phone: "3481331815",
      hasRedi: true,
      type: "campus",
      images: ["https://tecmm.edu.mx/media/original_images/Arandas_2.jpg"],
      imagesRedi:[
        ''
      ],
      ofertaEducativa:[
        ''
      ]
    },
    {
      name: "Chapala",
      address: "Libramiento Chapala-Ajijic #200, 45900 Chapala, Jal.",
      phone: "3767658030",
      hasRedi: false,
      type: "campus",
      images: ["https://tecmm.edu.mx/media/original_images/chapala01-2.jpeg"],
    },
    {
      name: "Cocula",
      address: "C. Tecnológico 1000, Lomas de Cocula, 48505 Cocula, Jal.",
      phone: "3777730030",
      hasRedi: true,
      type: "campus",
      images: ["https://tecmm.edu.mx/media/original_images/Cocula_2.jpg"],
    },
    {
      name: "El Grullo",
      address:
        "Carretera el Grullo - Ejutla. Kilómetro 5, Puerta de Barro, 48740 El Grullo, Jal.",
      phone: "3213873435",
      hasRedi: false,
      type: "campus",
      images: ["https://tecmm.edu.mx/media/original_images/El_grullo_2.jpg"],
    },
    {
      name: "La Huerta",
      address: "Avenida Rafael Palomera 161, El Maguey, 48850 La Huerta, Jal.",
      phone: "3573841884",
      hasRedi: false,
      type: "campus",
      images: [
        "https://www.tecmm.edu.mx/apiCms/cmsWebFiles/unidadAcademicaLaHuerta.jpg",
      ],
    },
    {
      name: "Lagos de Moreno",
      address:
        "Libramiento Tecnológico No. 5000, Colonia Portugalejo de los Romanes, 47480 Lagos de Moreno, Jal.",
      phone: "4744033970",
      hasRedi: true,
      type: "campus",
      images: ["https://tecmm.edu.mx/media/original_images/DSC01871.jpg"],
    },
    {
      name: "Mascota",
      address: "Ameca - Mascota Km 100, Chan Rey, 46900 Jalisco, Jal.",
      phone: "3883852010",
      hasRedi: true,
      type: "campus",
      images: [
        "https://www.tecmm.edu.mx/apiCms/cmsWebFiles/unidadAcademicaMascota.jpg",
      ],
    },
    {
      name: "Puerto Vallarta",
      address:
        "Corea del Sur 600. Col. El Mangal, Coapinole, 48290 Puerto Vallarta, Jal.",
      phone: "3222265600",
      hasRedi: false,
      type: "campus",
      images: [
        "https://tecmm.edu.mx/media/original_images/Edificio_D_frente.jpeg",
      ],
    },
    {
      name: "San Juan de los Lagos",
      address: "Sierra Hermosa 427, San Juan de los Lagos, Mexico",
      phone: "3951208295",
      hasRedi: false,
      type: "campus",
      images: [
        "https://tecmm.edu.mx/media/original_images/WhatsApp_Image_2025-07-04_at_13.20.27_d4c38380.jpg",
      ],
    },
    {
      name: "Tala",
      address: "Av. Tecnológico 2010, Centro, 45300 Tala, Jal.",
      phone: "3847333000",
      hasRedi: false,
      type: "campus",
      images: ["https://tecmm.edu.mx/media/original_images/JGM07835.jpg"],
    },
    {
      name: "Tamazula de Gordiano",
      address:
        "Carretera Tamazula Santa Rosa 329, 49650 Tamazula de Gordiano, Jal.",
      phone: "3581030060",
      hasRedi: true,
      type: "campus",
      images: [
        "https://tecmm.edu.mx/media/original_images/Instalaciones_Tamazula_Dron_9.jpg",
      ],
    },
    {
      name: "Tepatitlán de Morelos",
      address:
        "Anillo Periferico Sr. Cura Salvador Zuñiga nte. 47704 Tepatitlán de Morelos, Jal.",
      phone: "3786881573",
      hasRedi: false,
      type: "campus",
      images: [
        "https://www.tecmm.edu.mx/apiCms/cmsWebFiles/unidadAcademicaTepatitlan.jpg",
      ],
    },
    {
      name: "Tequila",
      address:
        "Calle Dr. Joel Magallanes 501, Lomas del Paraíso, 46403 Tequila, Jal.",
      phone: "3747427288",
      hasRedi: false,
      type: "campus",
      images: [
        "https://www.tecmm.edu.mx/apiCms/cmsWebFiles/unidadAcademicaTequila.jpg",
      ],
    },
    {
      name: "Tomatlán",
      address: "Prolongación Galeana #750, 48454, Tomatlán, Jalisco, Mexico",
      phone: "3221936685",
      hasRedi: true,
      type: "campus",
      images: [
        "https://www.tecmm.edu.mx/apiCms/cmsWebFiles/unidadAcademicaTomatlan.jpg",
      ],
    },
    {
      name: "Zapopan",
      address:
        "Camino Arenero #1101 Colonia El Bajío, Zapopan, Jalisco, México",
      phone: "3338849470",
      hasRedi: true,
      type: "campus",
      images: [
        "https://www.tecmm.edu.mx/apiCms/cmsWebFiles/unidadAcademicaZapopan.jpg",
      ],
    },
    {
      name: "Zapotlanejo",
      address:
        "Avenida Tecnológico # 300 Carretera Libre Zapotlanejo-Tepatitlán Km. 4.5, Zapotlanejo, Mexico",
      phone: "3737356060",
      hasRedi: true,
      type: "campus",
      images: ["https://tecmm.edu.mx/media/original_images/Ed_B_-_1.jpg"],
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

  function ChangeMapView({ coords }) {
    const map = useMap();

    useEffect(() => {
      if (coords) {
        map.flyTo(coords, map.getZoom(), {
          animate: true,
          duration: 1,
        });
      }
    }, [coords, map]);

    return null;
  }

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
        className: "material-icon-marker",
        html: `<span class="material-icons" style="color: #ff4d63; font-size:${
          isMobile ? "1.5rem" : "2rem"
        };">location_on</span>`,
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
      fillColor: campus ? "#54c98f" : "white",
      // fillColor: esEspecial ? '#54c98f': isExtension ? '#ffae31' : 'white',
      fillOpacity: campus ? 0.7 : 0.5,
      weight: 1,
    });

    // 🎨 Estilo base
    const baseStyle = {
      color: campus ? "#3388ff" : "#3388ff",
      fillColor: campus ? "#54c98f" : "white",
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
          if (onSelectUnidad) onSelectUnidad(campus);
          setter([21, -102.0]);
          console.log(moveMap);
          console.log("hola");
          // handleOpen(campus);
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
          // handleOpen(campus);
          //   alert(
          //     `Campus: ${campus.name}\nTeléfono: ${campus.phone}\nDirección: ${campus.address}`
          //   );
        },
      });
    }
  };

  return (
    <>
      {/* coordenada para cargar el mapa a la izquierda:         center={isMobile ? [20.5, -103.6] : [21, -102.0]}*/}
      <MapContainer
        center={isMobile ? [20.5, -103.6] : [21, -103.5]}
        zoom={isMobile ? 8 : 8}
        // style={{ width: '100%', height: '100%', backgroundColor: 'transparent', borderRadius:'50%', border:'white 5px dashed', zIndex:'10000'}} // 👈 usa 100%
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }} // 👈 usa 100%
        zoomControl={false}
        dragging={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <ChangeMapView coords={moveMap} />

        {/* Quita TileLayer para que no se muestre ningún mapa base */}
        {geoData && <GeoJSON data={geoData} onEachFeature={onEachFeature} />}
      </MapContainer>
    </>
  );
};

export default MapJaliscoPresentation;
