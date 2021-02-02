import React from 'react';
import ReactDOM from 'react-dom';
import { Section } from './Utils';
import { BrowserRouter, Route } from 'react-router-dom';

describe('ServiceOption component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/locate-barber'} component={Section} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
