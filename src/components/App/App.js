import './App.css';
import React from 'react';
import Routes from '../Router/Routes';
import Nav from '../Nav/Nav';
import { withRouter } from 'react-router-dom';

const App = ({ location }) => {
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav />}
      <Routes />
    </div>
  );
};

export default withRouter(App);
