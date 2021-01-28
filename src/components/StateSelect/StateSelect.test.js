import React from 'react';
import ReactDOM from 'react-dom';
import StateSelect from './StateSelect';
import { BrowserRouter, Route } from 'react-router-dom';

describe('ServiceOption component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/find-barber'} component={StateSelect} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
