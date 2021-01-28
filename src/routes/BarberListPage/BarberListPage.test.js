import React from 'react';

import ReactDOM from 'react-dom';
import BarberListPage from './BarberListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BarberListPage />, div);

  ReactDOM.unmountComponentAtNode(div);
});
