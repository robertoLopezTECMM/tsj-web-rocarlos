// MapJalisco.jsx
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import './index.css'
import { esES } from '@mui/material/locale';

const MapJalisco = ({isMobile}) => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/jalisco.geojson')
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error('Error al cargar GeoJSON:', err));
  }, []);

    const onEachFeature = (feature, layer) => {
        const nombre = feature.properties.mun_name || feature.properties.name || 'Municipio';

        const unidadesAcademicas = [
            'Arandas',
            'Chapala',
            'Cocula',
            'El Grullo',
            'La Huerta',
            'Lagos de Moreno',
            'Mascota',
            'Puerto Vallarta',
            'San Juan de los Lagos',
            'Tala',
            'Tamazula de Gordiano',
            'Tepatitlán de Morelos',
            'Tequila',
            'Tomatlán',
            'Zapopan',
            'Zapotlanejo',
        ];

        const extensiones =[
            "Ixtlahuacán del Río",
            "Cuquío",
            "Tenamaxtlán",
            "Atemajac de Brizuela"
        ]

        // console.log(nombre[0])
        // Determina si el municipio está en la lista
        const esEspecial = unidadesAcademicas.includes(nombre[0]);
        const isExtension = extensiones.includes(nombre[0]);


        //console.log('es especial: ', esEspecial)
        // Estilo condicional
        layer.setStyle({
            color: esEspecial ? '#3388ff' : '#3388ff',
            fillColor:isExtension||esEspecial?'white':'#f5f5f5',
            // fillColor: esEspecial ? '#54c98f': isExtension ? '#ffae31' : 'white',
            fillOpacity: esEspecial ? 0.7 : 0.5,
            weight: 1
        });

        
        if(esEspecial||isExtension){
            layer.on({
                click: () => {
                    // layer.bindPopup(`<strong style="color: red; font-size: 25px;">${nombre}</strong>`).openPopup();
                    layer.bindPopup(`   <div style="background-color:transparent; width:300px; height:200px; z-index:10000; display:flex; flex-direction:column">
                                            <span style="font-family: madaniArabicBold; color: #33179c; font-size: 25px;">${nombre}</span>
                                            <span style="font-family: madaniArabicLight; color: #33179c; font-size: 1rem; margin: 0.2rem 0rem 0.2rem 0rem">3317478004</span>
                                            <span style="font-family: madaniArabicLight; color: #33179c; font-size: 1rem; margin: 0.2rem 0rem 0.2rem 0rem">zapopan@tecmm.edu.mx</span>
                                            <span style="font-family: madaniArabicLight; color: #33179c; font-size: 1rem; margin: 0.2rem 0rem 0.2rem 0rem">Camino Arenero 1101, El Bajio, Zapopan, Jalisco</span>
                                        </div>`
                                    ).openPopup();

                }
            });  
        }



        if (esEspecial || isExtension) {
            const center = layer.getBounds().getCenter();

            const icon = L.divIcon({
                className: 'material-icon-marker',
                html: `<span class="material-icons" style="color: ${esEspecial?"#54c98f":"#ffae31"}; font-size:${isMobile?"1.5rem": "2rem"};">location_on</span>`,
                iconSize: [40, 24],
                iconAnchor: [12, 25],
            });

            setTimeout(() => {
                if (layer._map) {
                    L.marker(center, { icon }).addTo(layer._map);
                }
            }, 50); // Espera al siguiente ciclo de ejecución
        }
    };

  return (
    <MapContainer
        center={isMobile ? [20.500, -103.600] :  [20.800, -103.500]}
        zoom={isMobile ? 7 : 8 }
        // style={{ width: '100%', height: '100%', backgroundColor: 'transparent', borderRadius:'50%', border:'white 5px dashed', zIndex:'10000'}} // 👈 usa 100%
        style={{ width: '100%', height: '100%', backgroundColor: 'transparent'}} // 👈 usa 100%

        zoomControl={false}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
    >
      {/* Quita TileLayer para que no se muestre ningún mapa base */}
      {geoData && <GeoJSON data={geoData} onEachFeature={onEachFeature} />}
    </MapContainer>
  );
};

export default MapJalisco;
