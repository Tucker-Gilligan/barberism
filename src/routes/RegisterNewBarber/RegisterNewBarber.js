import React, { Component } from 'react';
import BarberContext from '../../contexts/BarberContext';
import BarberApiService from '../../services/barber-api-service';
import './RegisterNewBarber.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default class RegisterNewBarber extends Component {
  static contextType = BarberContext;

  constructor(props) {
    super(props);
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
    for (const key in this.myRefs) {
      let ref = this.myRefs[key];
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
        this.context.setBarber(res);
        return this.props.history.push(`/locate-barber`);
      })
      .catch(error => this.context.setError(error));
  };
  render() {
    const { error } = this.context;
    let content;
    if (error) {
      content = <p>something went wrong, please try again</p>;
    }
    return (
      <RegistrationForm
        handleSubmit={this.handleSubmit}
        myRefs={this.myRefs}
        content={content}
      />
    );
  }
}
