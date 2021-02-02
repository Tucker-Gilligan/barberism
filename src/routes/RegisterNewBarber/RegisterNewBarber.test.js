import React from 'react';

import ReactDOM from 'react-dom';
import RegisterNewBarber from './RegisterNewBarber';
import { BrowserRouter, Route } from 'react-router-dom';

describe('RegisterNewBarber component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/register-barber'} component={RegisterNewBarber} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
