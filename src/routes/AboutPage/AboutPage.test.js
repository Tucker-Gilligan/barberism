import React from 'react';

import ReactDOM from 'react-dom';
import AboutPage from './AboutPage';
import { BrowserRouter, Route } from 'react-router-dom';

describe('AboutPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/about'} component={AboutPage} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
