// import { useState, useEffect } from 'react';
import React from 'react';

export const nullBarber = {
  barber_id: '',
  barber_name: '',
  barber_location: '',
  services: '',
  phone_number: '',
  email: '',
};

const BarberContext = React.createContext({
  barber: nullBarber,
  error: null,
  setError: () => {},
  clearError: () => {},
  setBarber: () => {},
  clearBarber: () => {},
});

export default BarberContext;

export class BarberProvider extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    barber: nullBarber,
  };

  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   const [barber, setBarber] = useState([]);

  //   const setError = () => {
  //     setError(error)
  // }

  setError = error => {
    console.error('here is your error', error);
    this.setState({ error });
  };

  // const clearError = () => {
  //     setError(null)
  // }
  clearError = () => {
    this.setState({ error: null });
  };

  //   const setBarber = (barber) => {
  //       setBarber(barber)
  //   }

  setBarber = barber => {
    this.setState({ barber });
  };

  //   const clearBarber = () => {
  //       setBarber(nullBarber)
  //   }

  clearBarber = () => {
    this.setState({ barber: nullBarber });
  };

  render() {
    const value = {
      barber: this.state.barber,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBarber: this.setBarber,
      clearBarber: this.clearBarber,
    };

    return (
      <BarberContext.Provider value={value}>
        {this.props.children}
      </BarberContext.Provider>
    );
  }
}
