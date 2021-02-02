import React from 'react';
import ReactDOM from 'react-dom';
import BarberListItem from './BarberListItem';
import { BrowserRouter, Route } from 'react-router-dom';

describe('EditGiftPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/locate-barber'} component={BarberListItem} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
