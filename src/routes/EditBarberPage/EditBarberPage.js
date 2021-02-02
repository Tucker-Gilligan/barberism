import React, { Component } from 'react';
import EditBarberForm from '../../components/EditBarberForm/EditBarberForm';
import './EditBarberPage.css';

export default class EditBarberPage extends Component {
  render() {
    return (
      <>
        <EditBarberForm {...this.props} />
      </>
    );
  }
}
