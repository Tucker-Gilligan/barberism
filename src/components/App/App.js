import './App.css';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../../routes/AboutPage';
import Header from '../Header/Header';
import BarberListPage from '../../routes/BarberListPage';
import RegisterNewBarber from '../../routes/RegisterNewBarber';

function App() {
  return (
    <div className="App">
      <Header />
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
