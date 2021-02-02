import React from 'react';
import ReactDOM from 'react-dom';
import ServiceOptions from './ServiceOptions';
import { BrowserRouter, Route } from 'react-router-dom';

describe('ServiceOption component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/locate-barber'} component={ServiceOptions} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
