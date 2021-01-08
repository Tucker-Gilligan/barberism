import React from "react";
import { Link } from "react-router-dom";

export default function NewBarber() {
  return (
    <div className="newBarber">
      <fieldset>
        <legend>Register</legend>
        <form>
          <label>Name: </label>
          <input type="text"></input>
          <br />
          <label>Email: </label>
          <input type="text"></input> <br />
          <br />
          <label>Upload a photo of your license</label>
          <br />
          <input type="text"></input>
          <br />
          <Link to="/edit-profile">
            <button>Submit</button>
          </Link>
        </form>
      </fieldset>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}
