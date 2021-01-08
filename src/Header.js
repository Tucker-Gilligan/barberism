import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Barbers from "./Barber/Barbers";
import About from "./About";
import Customer from "./Client/Customer";

export default function Header() {
  return (
    <header>
      <h1>Barberism</h1>
      <h2>Connecting you to Barbers to meet individualized needs!</h2>
      {/* <Router>
        <Nav />
      
      </Router> */}
    </header>
  );
}
