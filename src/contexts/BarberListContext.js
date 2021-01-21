import React, { Component } from 'react';

const BarberListContext = React.createContext({
  barberList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setBarberList: () => {},
});
export default BarberListContext;

export class BarberListProvider extends Component {
  state = {
    barberList: [],
    error: null,
  };

  setBarberList = (barberList) => {
    console.log(barberList);
    this.setState({ barberList });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      barberList: this.state.barberList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBarberList: this.setBarberList,
    };
    return (
      <BarberListContext.Provider value={value}>
        {this.props.children}
      </BarberListContext.Provider>
    );
  }
}
