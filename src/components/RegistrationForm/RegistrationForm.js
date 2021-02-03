import React, { Component } from 'react';
import StateSelect from '../StateSelect/StateSelect';
import ServiceOptions from '../ServiceOptions/ServiceOptions';

export default class RegistrationForm extends Component {
  render() {
    const { myRefs } = this.props;
    return (
      <div className="registration__page">
        <form className="NewBarberForm" onSubmit={this.props.handleSubmit}>
          <div className="enter_new_barber">
            <label htmlFor="name">Barber Name</label>
            <input
              type="text"
              id="name"
              name="barber_name"
              value={this.context.barber_name}
              placeholder="Joe Barber"
              required
            />
            <label htmlFor="barber_location">Location</label>
            <select
              id="barber_location"
              name="barber_location"
              value={this.context.barber_location}
              className="select__field"
              required
            >
              <StateSelect />
            </select>
            <label for="service__selection">Services Provided</label>
            <ServiceOptions myRefs={myRefs} />
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={this.context.phone_number}
              placeholder="(xxx)xxx-xxxx"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={this.context.email}
              placeholder="youremail@email.com"
            />
            <div>{this.props.content}</div>
          </div>
          <button type="submit">Post New Barber</button>
        </form>
      </div>
    );
  }
}
