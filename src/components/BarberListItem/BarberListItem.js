import React, { Component } from 'react';
import BarberContext from '../../contexts/BarberContext';
// import BarberApiService from '../../services/barber-api-service';
import { Link } from 'react-router-dom';

export default class BarberListItem extends Component {
  static contextType = BarberContext;

  // handleClickDelete = evt => {
  //   const barberId = evt.target.getAttribute('key');
  //   console.log('barber id is', barberId);

  //   BarberApiService.deleteBarber(barberId)
  //     .then(res => this.context.clearBarber(res))
  //     .catch(this.context.setError);
  // }; // BarberApiService.deleteBarber(evt.currentTarget)

  render() {
    const { barber } = this.props;
    const { key } = this.props;
    //key={barber.id} barber={barber} />

    // name: '',
    // location: '',
    // services: '',
    // phone_number: '',
    // email: '',

    return (
      <Link to={`/barber-profile/${key}`} className="BarberListItem">
        <div className="BarberListItem__details">
          <h2 className="BarberListItem__heading" value={barber.barber_name}>
            {barber.barber_name}
          </h2>
          <h3 className="Services__label">Services Offered</h3>
          <p className="BarberListItem__services" value={barber.services}>
            {barber.services}
          </p>
          <div className="BarberListItem__description">
            <div className="BarberListItem__item" value={barber.id}>
              {barber.barber_location}
            </div>
            <div className="BarberListItem__item" value={barber.phone_number}>
              {barber.phone_number}
            </div>
            <div className="BarberListItem__item" value={barber.email}>
              {barber.email}
            </div>
          </div>
          <button type="button" className="editButton">
            Edit
          </button>

          <button
            type="button"
            className="deleteButton"
            onClick={this.handleClickDelete}
            // key={this.props.key}
          >
            Delete
          </button>
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
