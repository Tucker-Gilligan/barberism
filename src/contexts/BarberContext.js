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

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setBarber = barber => {
    this.setState({ barber });
  };

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
