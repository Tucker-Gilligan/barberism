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
          <div className="get__started__link">
            <Link to="/locate-barber">Locate a Barber</Link>
          </div>
          <div className="get__started__link">
            <Link to="/register-barber">Register a Barber</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
