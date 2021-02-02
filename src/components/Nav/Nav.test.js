import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { BrowserRouter, Route } from 'react-router-dom';

describe('Nav component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/locate-barber'} component={Nav} />
        <Route path={'/register-barber'} component={Nav} />
        <Route path={'/about'} component={Nav} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
