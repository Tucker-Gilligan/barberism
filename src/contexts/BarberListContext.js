// import React, { useState } from 'react';

// const BarberListContext = React.createContext({
//   barberList: [],
//   error: null,
//   setError: () => {},
//   clearError: () => {},
//   setBarberList: () => {},
// });
// export default BarberListContext;

// export function BarberListProvider({ children }) {
//   const [barberList, setBarberList] = useState([]);
//   const [error, setError] = useState(null);

//   const set_barber_list = barber => {
//     setBarberList(barber);
//   };

//   const set_error = () => {
//     console.error(error);
//     setError(error);
//   };

//   const clear_error = () => {
//     setError(null);
//   };

//   const value = {
//     barberList: barberList,
//     error: set_error,
//     setError: set_error,
//     clearError: clear_error,
//     setBarberList: set_barber_list,
//   };
//   console.log(value);

//   return (
//     <BarberListContext.Provider value={value}>
//       {children}
//     </BarberListContext.Provider>
//   );
// }
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
