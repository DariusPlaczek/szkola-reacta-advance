import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "react-placeholder/lib/reactPlaceholder.css";

function Map(props) {
  const { position } = props;
    return (
        <>
          <MapContainer style={{height: '400px', width:'75%'}} center={position} zoom={5} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                I Life here. <br /> Nice Place.
              </Popup>
            </Marker>
          </MapContainer>
        </>
    )
}

export default Map
