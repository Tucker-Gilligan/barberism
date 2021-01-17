import { Route } from 'react-router-dom';
import Barbers from '../Barber/Barbers';
import Customer from '../Client/Customer';
import SearchResults from '../Client/SearchResults';
import Contact from '../Client/Contact';
import Profile from '../Barber/Profile';
import Home from '../Home';
export default function Routing() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/barbers" component={Barbers} />
      <Route path="/customer" component={Customer} />
      <Route path="/barber-list" component={SearchResults} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="/new-user" component={NewBarber} />
  <Route path="/edit-profile" component={MakeProfile} /> */}
      <Route path="/profile" component={Profile}></Route>{' '}
    </>
  );
}
