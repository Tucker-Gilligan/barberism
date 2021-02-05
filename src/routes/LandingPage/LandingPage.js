import './LandingPage.css';
import { Link } from 'react-router-dom';
export default function LandingPage() {
  return (
    <div className="Landing__page">
      <h2>
        Welcome to <span>Barberism</span>
      </h2>
      <h3>Connecting you to barbers to meet your individualized needs.</h3>
      <div className="get__started">
        <h4>Get Started</h4>
        <div className="get__started__links">
          <Link to="/locate-barber">
            <div className="get__started__link">
              <p className="get__started__text"> Locate a Barber</p>
            </div>
          </Link>
          <Link to="/register-barber">
            <div className="get__started__link">
              <p className="get__started__text"> Register a Barber</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
