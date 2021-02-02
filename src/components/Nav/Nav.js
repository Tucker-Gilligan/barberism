import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="nav__header">
      <div className="title__nav">
        <h1>Barberism</h1>
      </div>
      <ul className="nav__links">
        <li className="route__link">
          <Link className="nav__link" to="/locate-barber">
            Locate
          </Link>
        </li>
        <li className="route__link">
          <Link className="nav__link" to="/register-barber">
            Register
          </Link>
        </li>
        <li className="route__link">
          <Link className="nav__link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
