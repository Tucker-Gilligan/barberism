import React, { Component } from 'react';
import BarberListContext from '../contexts/BarberListContext';
import BarberApiService from '../services/barber-api-service';
import { Section } from '../components/Utils/Utils';
import BarberListItem from '../components/BarberListItem/BarberListItem';
import './BarberListPage.css';

export default class BarberListPage extends Component {
  static contextType = BarberListContext;

  componentDidMount() {
    this.context.clearError();
    BarberApiService.getBarbers()
      .then((res) => this.context.setBarberList(res))
      .catch(this.context.setError);
  }

  renderBarbers() {
    const { barberList = [] } = this.context;
    return barberList.map((barber) => (
      <BarberListItem key={barber.id} barber={barber} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="BarberListPage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderBarbers()
        )}
      </Section>
    );
  }
}
