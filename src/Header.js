import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Barbers from "./Barbers";
import About from "./About";
import Customer from "./Customer";

export default function Header() {
  return (
    <header>
      <h1>Barberism</h1>
      <h2>Connecting you to Barbers to meet individualized needs!</h2>
      {/* <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/barbers" component={Barbers} />
        <Route path="/about" component={About} />
      </Router> */}
    </header>
  );
}
