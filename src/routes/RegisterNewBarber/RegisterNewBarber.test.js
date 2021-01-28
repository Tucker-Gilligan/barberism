import React from 'react';

import ReactDOM from 'react-dom';
import RegisterNewBarber from './RegisterNewBarber';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<RegisterNewBarber />, div);

  ReactDOM.unmountComponentAtNode(div);
});
