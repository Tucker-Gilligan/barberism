import React from 'react';

import ReactDOM from 'react-dom';
import BarberListPage from './BarberListPage';
import { BrowserRouter, Route } from 'react-router-dom';

// it('renders without crashing', () => {
//   const div = document.createElement('div');

//   ReactDOM.render(<BarberListPage />, div);

//   ReactDOM.unmountComponentAtNode(div);
// });

describe('BarberListPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/locate-barber'} component={BarberListPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
