import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to={`/barbers/${barber.id}`} className="BarberListItem">
        <div className="BarberListItem__details">
          <div className="BarberListItem__text">
            <h2 className="BarberListItem__heading">{barber.name}</h2>
            <p className="BarberListItem__description">
              {
                (barber.location,
                barber.services,
                barber.phone_number,
                barber.email)
              }
            </p>
          </div>
        </div>
      </Link>
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
