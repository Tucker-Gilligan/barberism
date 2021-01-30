import React, { Component } from 'react';
const BarberListContext = React.createContext({
  barberList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setBarberList: () => {},
  removeFromBarberList: () => {},
});
export default BarberListContext;

export class BarberListProvider extends Component {
  state = {
    barberList: [],
    error: null,
  };

  setBarberList = barberList => {
    console.log('set barber list firing', barberList);
    this.setState({ barberList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  removeFromBarberList = barber_id => {
    this.setState({
      barberList: this.state.barberList.filter(barber => {
        return barber.barber_id !== barber_id;
      }),
    });
  };

  render() {
    const value = {
      barberList: this.state.barberList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBarberList: this.setBarberList,
      removeFromBarberList: this.removeFromBarberList,
    };
    return (
      <BarberListContext.Provider value={value}>
        {this.props.children}
      </BarberListContext.Provider>
    );
  }
}
