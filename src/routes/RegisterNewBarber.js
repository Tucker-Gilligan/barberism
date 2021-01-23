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
      <div className="registration__page">
        <form className="NewBarberForm" onSubmit={this.handleSubmit}>
          <div className="enter_new_barber">
            <label htmlFor="name">Barber Name</label>
            <input
              type="text"
              id="name"
              name="barberName"
              value={this.context.barber_name}
              placeholder="Joe Barber"
            />
            <label htmlFor="location">Location</label>
            <select
              id="location"
              name="barberLocation"
              value={this.context.barber_location}
              className="select__field"
            >
              <option value="">Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <label htmlFor="services">Services Provided</label>
            <select
              id="services"
              name="services"
              value={this.context.services}
              className="select__field"
            >
              <option value="">Select service</option>
              <option value="sensory_hours">Sensory hours</option>
              <option value="scissor_cuts">Scissor cuts</option>
              <option value="long_apt">Longer appointments </option>
            </select>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={this.context.phone_number}
              placeholder="(xxx)xxx-xxxx"
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
      </div>
    );
  }
}
