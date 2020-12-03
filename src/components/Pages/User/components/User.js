import React from 'react';
import {
  Link
} from "react-router-dom";

import Moment from 'react-moment';
import 'moment-timezone';


function User(props) {
		const { value } = props;

		const userData = {
			id: `${value.login.salt}`,
			name: `${value.name.first} ${value.name.last}`,
			gender: value.gender,
			email: value.email,
			phone: value.phone,
			address: `${value.location.street.name} ${value.location.street.number}`,
			city: `${value.location.postcode} ${value.location.city}`,
			registered: <Moment date={value.registered.date} format="DD.MM.YYYY"/>
		}

		const errorAddress = 'brak';
		const errorName = 'Nie przekazano imienia i nazwiska.';

		const checkIsEmpty = (value, error) => {

			if (value.trim() === '') {
				return error
			}
			return value
		}

    return (
      <>
      <Link to={{
        pathname:`/users/${userData.id}`,

        }}>
           <div className="userlist-container" >
            <div className="col-2">
              <img className="list-image" alt={value.name.first} src={value.picture.large} />
              <div className="another-column">
                <h4>{checkIsEmpty(userData.name, errorName)}</h4>
                <h5>{userData.gender}</h5>
                <br />
                <h4>{userData.email}</h4>
                <h4>{userData.phone}</h4>
                <br />
                <h4>{checkIsEmpty(userData.address, errorAddress)}</h4>
                <h4>{userData.city}</h4>
                <br />
                <h4>Registered: {userData.registered} </h4>
              </div>
            </div>
          </div>
      </Link>
      </>
    )
}

export default User
