import React, { useState, useEffect} from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

function UsersList() {
    const [usersList, setUsersList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((data) => {
            setUsersList(data.results)
            setLoading(false)
        })
        .catch((error) => {
            setError(true)
            setLoading(false)
        })
    }, [])


    return (
        <>
            <h1>UsersList</h1>
            {isLoading && <p>...Loading</p>}
            {isError && <p>An error has occurred</p>}
            <div className="list-wrapper borderTop" >
            {usersList.map((value, id) => (
                <div key={`${id}-${value.name.first}`} className="userlist-container" >
                <div className="col-2">
                <img className="list-image" alt={value.name.first} src={value.picture.large} />
                  <div className="another-column">
                    <h5>{value.name.title}</h5>
                    <h3>{value.name.first} {value.name.last}</h3>
                    <h5>{value.gender}</h5>
                    <br />
                    <h4>{value.email}</h4>
                    <h4>{value.phone}</h4>
                    <br />
                    <h4>{value.location.street.name} {value.location.street.number} </h4>
                    <h4>{value.location.postcode} {value.location.city}</h4>
                    <br />
                    <h4>Registried: <Moment date={value.registered.date} format="DD.MM.YYYY"/></h4>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </>
    )
}

export default UsersList