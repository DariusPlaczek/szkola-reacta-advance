import React, {useState} from 'react';
import {
  Link
} from "react-router-dom";

import Moment from 'react-moment';
import 'moment-timezone';


function User(props) {
		const { value } = props;
    const [userDetail] = useState({
			id: `${value.login.salt}`,
			name: `${value.name.first} ${value.name.last}`,
			gender: value.gender,
			email: value.email,
			phone: value.phone,
			address: `${value.location.street.name} ${value.location.street.number}`,
			city: `${value.location.postcode} ${value.location.city}`,
			registered: value.registered.date
		});
		

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
        pathname:`/user`,
        state: userDetail
        }}>
           <div className="userlist-container" >
            <div className="col-2">
              <img className="list-image" alt={value.name.first} src={value.picture.large} />
              <div className="another-column">
                <h4>{checkIsEmpty(userDetail.name, errorName)}</h4>
                <h5>{userDetail.gender}</h5>
                <br />
                <h4>{userDetail.email}</h4>
                <h4>{userDetail.phone}</h4>
                <br />
                <h4>{checkIsEmpty(userDetail.address, errorAddress)}</h4>
                <h4>{userDetail.city}</h4>
                <br />
                <h4>Registered: <Moment date={userDetail.registered} format="DD.MM.YYYY"/> </h4>
              </div>
            </div>
          </div>
      </Link>
      </>
    )
}

export default User
