import React, { Component } from 'react';
import BarberListContext from '../../contexts/BarberListContext';
import BarberApiService from '../../services/barber-api-service';
import { Section } from '../../components/Utils/Utils';
import BarberListItem from '../../components/BarberListItem/BarberListItem';
import './BarberListPage.css';
import SearchOptions from '../../components/SearchOptions/SearchOptions';

export default class BarberListPage extends Component {
  static contextType = BarberListContext;

  state = {
    stateSelected: false,
    isLoading: true,
  };

  componentDidMount() {
    this.context.clearError();
    BarberApiService.getBarbers()
      .then(res => {
        this.context.setBarberList(res);
        this.setState({ isLoading: false });
      })
      .catch(this.context.setError);
  }

  handleSelectState = evt => {
    evt.preventDefault();
    const location = evt.target.value;
    BarberApiService.getBarberByState(location)
      .then(res => {
        this.setState({ isLoading: true });
        this.setState({ stateSelected: true });
        this.context.setBarberList(res);
        this.setState({ isLoading: false });
      })
      .catch(this.context.setError);
  };

  renderBarbers() {
    const { barberList = [] } = this.context;
    if (barberList.length === 0 && this.state.isLoading === false) {
      return (
        <p>
          Sorry, it looks like there are no barbers registered in this location.
        </p>
      );
    }

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
