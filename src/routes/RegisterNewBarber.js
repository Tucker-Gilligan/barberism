import React, { Component } from 'react';
import BarberContext from '../contexts/BarberContext';
import BarberApiService from '../services/barber-api-service';
// import { Section } from '../components/Utils/Utils';
// import BarberListItem from '../components/BarberListItem/BarberListItem';
import './RegisterNewBarber.css';

export default class RegisterNewBarber extends Component {
  static contextType = BarberContext;

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target);
    // const { barber } = this.context;

    BarberApiService.postNewBarber(
      evt.target.barberName.value,
      evt.target.barberLocation.value,
      evt.target.services.value,
      evt.target.phone.value,
      evt.target.email.value
    )
      .then(res => this.context.setBarber(res))
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className="NewBarberForm" onSubmit={this.handleSubmit}>
        <div className="enter_new_barber">
          <label htmlFor="name">Barber Name</label>
          <input
            type="text"
            id="name"
            name="barberName"
            value={this.context.barber_name}
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="barberLocation"
            value={this.context.barber_location}
          />

          <label htmlFor="services">Services Provided</label>
          <input
            type="text"
            id="services"
            name="services"
            value={this.context.services}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={this.context.phone_number}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.context.email}
          />
        </div>
        <button typeof="submit">Post New Barber</button>
      </form>
    );
  }
}
