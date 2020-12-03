import React from 'react'
import {useLocation} from 'react-router-dom';

function UserDetails() {
    const location = useLocation();

    return (
        <div>
            <h1>User Details</h1>
            <h2>Id: {location.state.id}</h2>
            <h2>Name: {location.state.name}</h2>
            <h2>Email: {location.state.email}</h2>
            {/* <h2>Registered: <Moment date={location.state.registered} format="DD.MM.YYYY"/></h2> */}
            <h2>Registered: {Intl.DateTimeFormat().format(new Date(location.state.registered))}</h2>
        </div>
    )
}

export default UserDetails
