import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

function User(props) {
		const { value, id } = props; 

    return (
			<div key={`${value.name.first}`} className="userlist-container" >
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
					<h4>Registered: <Moment date={value.registered.date} format="DD.MM.YYYY"/></h4>
					</div>
				</div>
			</div>
    )
}

export default User
