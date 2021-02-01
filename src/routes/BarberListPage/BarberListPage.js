import React, { Component } from 'react';
import BarberListContext from '../../contexts/BarberListContext';
import BarberApiService from '../../services/barber-api-service';
import { Section } from '../../components/Utils/Utils';
import BarberListItem from '../../components/BarberListItem/BarberListItem';
import './BarberListPage.css';
import SearchOptions from '../../components/SearchOptions/SearchOptions';
// import BarberContext from '../../contexts/BarberContext';

export default class BarberListPage extends Component {
  static contextType = BarberListContext;

  state = {
    stateSelected: false,
  };

  handleSelectState = evt => {
    evt.preventDefault();
    const { barberList = [] } = this.context;
    const location = evt.target.value;
    BarberApiService.getBarberByState(location)
      .then(res => {
        this.setState({ stateSelected: true });
        this.context.setBarberList(res);
      })
      .catch(this.context.setError);
  };

  renderBarbers() {
    const { barberList = [] } = this.context;
    if (!this.state.stateSelected) {
      return <p>You must select a state</p>;
    }
    console.log('barberList is', barberList);
    return barberList.map(barber => (
      <BarberListItem key={barber.barber_id} barber={barber} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <div>
        <SearchOptions
          handleSelectState={this.handleSelectState}
          handleSelectService={this.handleSelectService}
        />
        <div>
          <Section list className="BarberListPage">
            {error ? (
              <p className="red">There was an error, try again</p>
            ) : (
              this.renderBarbers()
            )}
          </Section>
        </div>
      </div>
    );
  }
}
