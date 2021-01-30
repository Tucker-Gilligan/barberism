import React, { Component } from 'react';
import BarberListContext from '../../contexts/BarberListContext';
import BarberApiService from '../../services/barber-api-service';
import StateSelect from '../StateSelect/StateSelect';
export default class EditBarberForm extends Component {
  static contextType = BarberListContext;

  // constructor(props) {
  //   super(props);
  //   console.log('constructor is running');
  //   this.myRefs = {
  //     sensory: React.createRef(),
  //     scissor: React.createRef(),
  //     longer_appointments: React.createRef(),
  //     home_haircuts: React.createRef(),
  //   };
  // }

  state = {
    error: false,
    barber_name: '',
    barber_location: '',
    // services: [],
    phone_number: '',
    email: '',
  };

  componentDidMount() {
    console.log('look here!', this.props.match.params.barber_id);
    BarberApiService.getBarberById(this.props.match.params.barber_id).then(
      barber => {
        this.setState({
          barber_name: barber.barber_name,
          barber_location: barber.barber_location,
          // services: barber.services,
          phone_number: barber.phone_number,
          email: barber.email,
        });
      }
    );
  }

  handleFormChange = evt => {
    console.log(evt.target.name, evt.target.value);
    this.setState({ touched: true });
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleEditBarber = evt => {
    evt.preventDefault();

    const services = [];
    if (this.state.sensory === true) {
      services.push(1);
    }

    if (this.state.scissors === true) {
      services.push(2);
    }

    if (this.state.longer_appointments === true) {
      services.push(3);
    }

    if (this.state.home_haircuts === true) {
      services.push(4);
    }

    // console.log('this.refs', this.myRefs);
    // for (const key in this.myRefs) {
    //   let ref = this.myRefs[key];
    //   console.log('ref is', ref.current);
    //   if (ref.current.checked) {
    //     services.push(ref.current.value);
    //   }
    // }

    const barber = {
      barber_name: this.state.barber_name,
      barber_location: this.state.barber_location,
      services: services,
      phone_number: this.state.phone_number,
      email: this.state.email,
      barber_id: this.state.barber_id,
    };

    BarberApiService.patchBarber(barber, this.props.match.params.barber_id)
      .then(res => {
        res
          ? this.props.onBarberEditSuccess()
          : this.setState({
              error: 'looks like something went wrong, please try again.',
            });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    // console.log(this.state);
    return (
      <form id="edit_barber" onSubmit={evt => this.handleEditBarber(evt)}>
        <div className="editField">
          <label htmlFor="barber_name">Barber Name:</label>
          <input
            value={this.state.barber_name}
            type="text"
            name="barber_name"
            id="barber_name"
            required
            onChange={evt => this.handleFormChange(evt)}
          />
        </div>

        <div className="editField">
          <label htmlFor="barber_location">Barber Location</label>

          <select
            name="barber_location"
            id="barber_location"
            className="barber_location"
            form="edit_barber"
            value={this.state.barber_location}
            onChange={evt => this.handleFormChange(evt)}
          >
            <StateSelect />
          </select>
        </div>

        <div className="editField">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            className="phone_number"
            value={this.state.phone_number}
            placeholder="(xxx)xxx-xxxx"
            onChange={evt => this.handleFormChange(evt)}
          />
        </div>

        <div className="editField">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="email"
            value={this.state.email}
            onChange={evt => this.handleFormChange(evt)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
