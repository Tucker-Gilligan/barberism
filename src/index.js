import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { BarberListProvider } from './contexts/BarberListContext';
import { BarberProvider } from './contexts/BarberContext';
import history from './history';

ReactDOM.render(
  <Router history={history}>
    <BarberListProvider>
      <BarberProvider>
        <App />
      </BarberProvider>
    </BarberListProvider>
  </Router>,
  document.getElementById('root')
);
