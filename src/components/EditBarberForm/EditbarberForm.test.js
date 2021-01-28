import React from 'react';
import ReactDOM from 'react-dom';
import EditBarberForm from './EditBarberForm';
import { BrowserRouter, Route } from 'react-router-dom';

describe('EditBarberForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit-barber'} component={EditBarberForm} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
