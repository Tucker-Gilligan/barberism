import React, { Component } from 'react';

export default class ServiceOptions extends Component {
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

  render() {
    return (
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
    );
  }
}
