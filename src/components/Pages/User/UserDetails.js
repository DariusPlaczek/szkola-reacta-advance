import React from 'react'
import {useLocation} from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "react-placeholder/lib/reactPlaceholder.css";

function UserDetails() {
    const location = useLocation();
    const user = {
        id: location.state.id,
        img: location.state.img,
        name: location.state.name,
        gender: location.state.gender,
        email: location.state.email,
        phone: location.state.phone,
        address: location.state.address,
        city: location.state.city,
        latitude: location.state.latitude,
        longitude: location.state.longitude,
        registered: location.state.registered
    }

    const position = [user.latitude, user.longitude]

    return (
        <>
           <div className="userlist-container" >
            <div className="col-2">
              <img className="list-image" alt={user.name} src={user.img} />
              <div className="another-column">
                <h4>{user.name}</h4>
                <h5>{user.gender}</h5>
                <br />
                <h4>{user.email}</h4>
                <h4>{user.phone}</h4>
                <br />
                <h4>{user.address}</h4>
                <h4>{user.city}</h4>
                <br />
                <h4>Registered: {Intl.DateTimeFormat().format(new Date(user.registered))}</h4>
              </div>
            </div>
          </div>

          <MapContainer style={{height: '400px', width:'75%'}} center={position} zoom={5} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
          </MapContainer>

        </>
    )
}

export default UserDetails
