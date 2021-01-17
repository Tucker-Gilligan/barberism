import React from 'react';
import { Link } from 'react-router-dom';

export default function Barbers(props) {
  return (
    <div className="barberLogin">
      <h3>Welcome Barber!</h3>
      <h4>Thank you for joining us!</h4>
      <fieldset>
        <legend>Log In</legend>
        <form>
          <label>Username: </label>
          <input type="text"></input>
          <label>Password: </label>
          <input type="text"></input>
          <Link to="/profile">
            <button type="submit">Log In</button>
          </Link>
        </form>
        <Link to="/new-user">Create an account</Link>
      </fieldset>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}
