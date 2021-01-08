import React from "react";
import { Link } from "react-router-dom";

export default function MakeProfile() {
  return (
    <div className="makeProfile">
      <fieldset>
        <legend>Make your profile</legend>
        <label>Name:</label>
        <br />
        <input type="text"></input>
        <br />
        <br />
        <label>Location:</label>
        <br />
        <input type="text"></input>
        <br />
        <br />
        <label>Services Offered:</label>
        <br />
        <input type="text"></input>
        <br />
        <br />
        <label>Trainings/Certifications: </label>
        <input type="text"></input>
        <br />
        <br />
        <label>Contact:</label>
        <br />
        <input type="text"></input>
        <br />
        <br />
        <button>Upload Photos</button>
        <br />
        <br />
        <Link to="/profile">
          <button>Submit</button>
        </Link>
      </fieldset>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}
