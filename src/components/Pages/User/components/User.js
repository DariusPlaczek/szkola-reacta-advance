import React, { useState } from 'react'
import Moment from 'react-moment';
import 'moment-timezone';


function User(props) {
		const { value } = props;

		const errorAdress = 'brak';
		const errorName = 'Nie przekazano imienia i nazwiska.';

		const emptyProp = (checkValue, error) => {
			if (checkValue.trim() === '') {
				return error
			}
			return checkValue
		}

		// const checkName = () => {
		// 	if (checkValue.trim() === '' || ) {
		// 		return error
		// 	}
		// }

    return (
			<div className="userlist-container" >
				<div className="col-2">
					<img className="list-image" alt={value.name.first} src={value.picture.large} />
					<div className="another-column">
					<h5>{emptyProp(value.name.first, errorName)}</h5>
					<h3>{emptyProp(value.name.first, errorName)} {emptyProp(value.name.last, errorName)}</h3>
					<h5>{value.gender}</h5>
					<br />
					<h4>{value.email}</h4>
					<h4>{value.phone}</h4>
					<br />
					<h4>{value.location.street.name} {value.location.street.number} </h4>
					<h4>{value.location.postcode} {value.location.city}</h4>
					<br />
					<h4>Registered: <Moment date={value.registered.date} format="DD.MM.YYYY"/></h4>
					</div>
				</div>
			</div>
    )
}

export default User
