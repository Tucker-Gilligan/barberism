import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class BarberListItem extends Component {
  render() {
    const { barber } = this.props;
    //key={barber.id} barber={barber} />

    // name: '',
    // location: '',
    // services: '',
    // phone_number: '',
    // email: '',

    return (
      // <Link to={`/barbers/${barber.id}`} className="BarberListItem">
      <div className="BarberListItem__details">
        <h2 className="BarberListItem__heading">{barber.barber_name}</h2>
        <ul className="BarberListItem__description">
          <li className="BarberListItem__item">{barber.barber_location}</li>
          <li className="BarberListItem__item">{barber.services}</li>
          <li className="BarberListItem__item">{barber.phone_number}</li>
          <li className="BarberListItem__item">{barber.email}</li>
        </ul>
      </div>
      // </Link>
    );
  }
}

// function truncate(text) {
//   const words = text.split(' ');

//   if (words.length > 10) {
//     return words.slice(0, 10).join(' ') + ' ...';
//   }

//   return text;
// }
