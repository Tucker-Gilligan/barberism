import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="barberProfile">
      <fieldset>
        <legend>Barber Profile</legend>
        <p>Name: Joe Barber</p>
        <p>Location: Barbertown, NJ</p>
        <p style={{ fontWeight: "bold" }}>Services Offered</p>
        <ol>
          <li>In-home haircuts</li>
          <li>In-shop "quiet hours"</li>
          <li>Scissors only haircuts</li>
          <li>Follow-up option as needed</li>
        </ol>
        <p>Trainings/Certifications: N/A</p>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </fieldset>
      <div>
        <Link to="/edit-profile">
          <button>Edit Profile</button>
        </Link>
        <Link to="/">
          <button>Return Home</button>
        </Link>
      </div>
    </div>
  );
}
