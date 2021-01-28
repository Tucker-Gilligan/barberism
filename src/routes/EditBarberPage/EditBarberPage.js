import React, { Component } from 'react';
import EditBarberForm from '../../components/EditBarberForm/EditBarberForm';

export default class EditBarberPage extends Component {
  onBarberEditSuccess = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <>
        <button onClick={() => this.onBarberEditSuccess}>Back</button>
        {/* <button>Back</button> */}
        <EditBarberForm
          {...this.props}
          // onBarberEditSuccess={this.onBarberEditSuccess}
        />
      </>
    );
  }
}

// render(){
//     return (

//     )
// }
