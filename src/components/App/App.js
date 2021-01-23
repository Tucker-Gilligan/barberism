import './App.css';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../../routes/AboutPage';
import BarberListPage from '../../routes/BarberListPage';
import RegisterNewBarber from '../../routes/RegisterNewBarber';
import Nav from '../Nav/Nav';

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
        </Switch>
      </main>
    </div>
  );
}

export default App;
