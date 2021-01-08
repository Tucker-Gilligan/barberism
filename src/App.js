import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Barbers from "./Barbers";
import Customer from "./Customer";
import SearchResults from "./SearchResults";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/barbers" component={Barbers} />
        <Route path="/customer" component={Customer} />
        <Route path="/barber-list" component={SearchResults} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
