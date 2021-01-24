import React, { Component } from 'react';
import BarberListItem from '../components/BarberListItem/BarberListItem';
import BarberContext from '../contexts/BarberContext';
import BarberApiService from '../services/barber-api-service';
import { Section } from '../components/Utils/Utils';

export default class BarberProfile extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = BarberContext;

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('id is', id);
    // this.context.clearError();
    // BarberApiService.getBarberById(id)
    //   .then(this.context.setBarber)
    //   .catch(this.context.setError);
  }

  //   componentWillUnmount() {
  //     const { id } = this.props.match.params;
  //     BarberApiService.deleteBarber(id)
  //       .then(this.context.clearBarber)
  //       .catch(this.context.setError);
  //   }

  renderBarber() {
    const { barber } = this.context;
    console.log(barber);
    // return <BarberListItem key={barber.id} barber={barber} />;
    // return <BarberContent barber={barber} />;
  }

  render() {
    const { barber } = this.context;
    let content = this.renderBarber();
    console.log('barber is', barber);
    return <Section className="BarberPage">{content}</Section>;
  }
}

function BarberContent({ barber = [] }) {
  return (
    <ul className="BarberPage__content">
      {barber.map(barber => (
        <li key={barber.id}>
          <h2>{barber.barber_name}</h2>
        </li>
      ))}
      <li>{barber.name}</li>
      <li>{barber.services}</li>
    </ul>
  );
}
//   if (error) {
//     content = error;
//   } else if (!barber.id) {
//     content = <div className="loading" />;
//   }
