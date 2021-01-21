import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { BarberListProvider } from './contexts/BarberListContext';

ReactDOM.render(
  <Router>
    <BarberListProvider>
      <App />
    </BarberListProvider>
  </Router>,
  document.getElementById('root')
);
