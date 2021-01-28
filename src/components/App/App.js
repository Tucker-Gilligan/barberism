import './App.css';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../../routes/AboutPage/AboutPage';
import BarberListPage from '../../routes/BarberListPage/BarberListPage';
import RegisterNewBarber from '../../routes/RegisterNewBarber/RegisterNewBarber';
import Nav from '../Nav/Nav';
import EditBarberPage from '../../routes/EditBarberPage/EditBarberPage';

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <main className="app__main">
        <Switch>
          <Route exact path={'/'} component={AboutPage} />
          <Route path={'/find-barber'} component={BarberListPage} />
          <Route path={'/register-barber'} component={RegisterNewBarber} />
          <Route path={'/edit-barber/:barber_id'} component={EditBarberPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
