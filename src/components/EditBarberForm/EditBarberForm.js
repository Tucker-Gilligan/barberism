import React, { Component } from 'react';
import BarberListContext from '../../contexts/BarberListContext';
import BarberApiService from '../../services/barber-api-service';
import StateSelect from '../StateSelect/StateSelect';
export default class EditBarberForm extends Component {
  static contextType = BarberListContext;

  state = {
    error: false,
    barber_name: '',
    barber_location: '',
    phone_number: '',
    email: '',
  };

  componentDidMount = () => {
    BarberApiService.getBarberById(this.props.match.params.barber_id).then(
      barber => {
        this.setState({
          barber_name: barber.barber_name,
          barber_location: barber.barber_location,
          phone_number: barber.phone_number,
          email: barber.email,
        });
      }
    );
  };

  handleFormChange = evt => {
    this.setState({ touched: true });
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(evt.target.value);
  };

  handleEditBarber = evt => {
    evt.preventDefault();

    const barber = {
      barber_name: this.state.barber_name,
      barber_location: this.state.barber_location,
      phone_number: this.state.phone_number,
      email: this.state.email,
      barber_id: this.state.barber_id,
    };

    BarberApiService.patchBarber(barber, this.props.match.params.barber_id)
      .then(res => {
        return this.props.history.push('/locate-barber');
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
      <div>
        <button onClick={() => this.props.history.goBack()}>Back</button>
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
          {content}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
