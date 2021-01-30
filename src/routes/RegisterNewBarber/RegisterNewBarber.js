import React, { Component } from 'react';
import BarberContext from '../../contexts/BarberContext';
import BarberApiService from '../../services/barber-api-service';
// import { Section } from '../components/Utils/Utils';
// import BarberListItem from '../components/BarberListItem/BarberListItem';
import './RegisterNewBarber.css';
import StateSelect from '../../components/StateSelect/StateSelect';
export default class RegisterNewBarber extends Component {
  static contextType = BarberContext;

  onRegisterBarberSuccess = () => {
    this.props.history.goBack();
  };

  constructor(props) {
    super(props);
    console.log('constructor is running');
    this.myRefs = {
      sensory: React.createRef(),
      scissor: React.createRef(),
      longer_appointments: React.createRef(),
      home_haircuts: React.createRef(),
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const services = [];
    console.log('this.refs', this.myRefs);
    for (const key in this.myRefs) {
      let ref = this.myRefs[key];
      console.log('ref is', ref.current);
      if (ref.current.checked) {
        services.push(ref.current.value);
      }
    }

    const barber = {
      barber_name: evt.target.barber_name.value,
      barber_location: evt.target.barber_location.value,
      services: services,
      phone_number: evt.target.phone_number.value,
      email: evt.target.email.value,
    };

    BarberApiService.postNewBarber(barber)
      .then(res => {
        this.context.clearError();
        return this.context.setBarber(res);
        // return <p>...submitting barber</p>;
      })
      .catch(error => {
        this.context.setError(error);
        return <p>there was an error, {error}</p>;
      });
  };

  render() {
    const { error } = this.context;
    return (
      <div className="registration__page">
        <form className="NewBarberForm" onSubmit={this.handleSubmit}>
          <div className="enter_new_barber">
            <label htmlFor="name">Barber Name</label>
            <input
              type="text"
              id="name"
              name="barber_name"
              value={this.context.barber_name}
              placeholder="Joe Barber"
            />
            <label htmlFor="barber_location">Location</label>
            <br />
            <select
              id="barber_location"
              name="barber_location"
              value={this.context.barber_location}
              className="select__field"
            >
              <StateSelect />
            </select>
            <br />
            <label htmlFor="service__selection" className="Services__label">
              Services Provided
            </label>
            <br />
            {/* <select
              id="services"
              name="services"
              value={this.context.services}
              className="select__field"
            > */}
            {/* <option value="">Select service</option> */}
            <ul className="service__selection" id="service__selection">
              <li className="service__option">
                <input
                  type="checkbox"
                  ref={this.myRefs.sensory}
                  id="sensory"
                  name="services"
                  value="1"
                  className="select__field"
                />
                <label htmlFor="sensory_hours" className="Service__label">
                  Sensory Hours
                </label>
              </li>
              <li className="service__option">
                <input
                  type="checkbox"
                  ref={this.myRefs.scissor}
                  id="scissors"
                  name="scissors"
                  value="2"
                  className="select__field"
                />
                <label htmlFor="sensory_hours" className="Service__label">
                  Scissor cuts
                </label>
              </li>
              <li className="service__option">
                <input
                  type="checkbox"
                  ref={this.myRefs.longer_appointments}
                  id="longer_appointments"
                  name="services"
                  value="3"
                  className="select__field"
                />
                <label htmlFor="longer_appointments" className="Service__label">
                  Longer Appointments
                </label>
              </li>
              <li className="service__option">
                <input
                  type="checkbox"
                  ref={this.myRefs.home_haircuts}
                  id="home_haircuts"
                  name="services"
                  value="4"
                  className="select__field"
                />
                <label htmlFor="home_haircuts" className="Service__label">
                  Home Haircuts
                </label>
              </li>
            </ul>
            {/* <option value="scissor_cuts">Scissor cuts</option>
              <option value="long_apt">Longer appointments </option> */}
            {/* </select> */}
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
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <button type="submit">Post New Barber</button>
        </form>
      </div>
    );
  }
}
