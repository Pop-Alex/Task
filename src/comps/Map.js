
import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from '../assests/marker.png'


const Map = ({category}) => {
    const [center, setCenter] = useState({ lat: 47.04, lng: 21.94 });
    
    
    return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {category.map((city, idx) => {
        
        return (
                <Marker
                  position={[city.lat,city.lng]}
                  
                  key={idx}
                >
                  <Popup>
                   <p>{city.name}</p>
                  </Popup>
                </Marker>
        )
})}

  </MapContainer>
  );
}

let DefaultIcon = L.icon({
  iconUrl: marker,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;


export default Map