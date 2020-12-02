import React, { useState, useEffect} from 'react'

import User from './components/User'

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
            <User key={`${id}-${value.name.first}`} value={value} />
        ))}
        </div>
      </>
    )
}

export default UsersList