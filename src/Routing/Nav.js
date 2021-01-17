import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/customer">
            Find Barber
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/barbers">
            Register Barber
          </Link>
        </li>
      </ul>
    </nav>
  );
}
