import { Route, Switch } from 'react-router-dom';
import AboutPage from '../../routes/AboutPage/AboutPage';
import BarberListPage from '../../routes/BarberListPage/BarberListPage';
import RegisterNewBarber from '../../routes/RegisterNewBarber/RegisterNewBarber';
import EditBarberPage from '../../routes/EditBarberPage/EditBarberPage';
import LandingPage from '../../routes/LandingPage/LandingPage';

const Routes = () => {
  return (
    <main className="app__main">
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/about'} component={AboutPage} />
        <Route path={'/locate-barber'} component={BarberListPage} />
        <Route path={'/register-barber'} component={RegisterNewBarber} />
        <Route path={'/edit-barber/:barber_id'} component={EditBarberPage} />
      </Switch>
    </main>
  );
};

export default Routes;
