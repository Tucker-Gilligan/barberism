import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Barbers from "./Barber/Barbers";
import Customer from "./Client/Customer";
import SearchResults from "./Client/SearchResults";
import Contact from "./Client/Contact";
import NewBarber from "./Barber/NewBarber";
import MakeProfile from "./Barber/MakeProfile";
import Profile from "./Barber/Profile";

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
        <Route path="/new-user" component={NewBarber} />
        <Route path="/edit-profile" component={MakeProfile} />
        <Route path="/profile" component={Profile}></Route>
      </Router>
    </div>
  );
}

export default App;
