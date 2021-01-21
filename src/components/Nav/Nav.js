import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav-links">
      <li>
        <Link className="nav-link" to="/">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/find-barber">
          Find Barber
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/register-barber">
          Register New Barber
        </Link>
      </li>
      {/* <li>
        <Link className="nav-link" to="/customer">
          Find Barber
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/barbers">
          Register Barber
        </Link>
      </li> */}
    </ul>
  );
}

export default Nav;
