import React from "react";
import { Link } from "react-router-dom";

export default function SearchResults() {
  return (
    <div>
      <ul className="barberList">
        <li className="barberListItem">
          <p>Name: Joe Barber</p>
          <p>Location: Barbertown, NJ</p>
          <p style={{ fontWeight: "bold" }}>Services Offered</p>
          <ol>
            <li>In-home haircuts</li>
            <li>In-shop "quiet hours"</li>
            <li>Scissors only haircuts</li>
            <li>Follow-up option as needed</li>
          </ol>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </li>
      </ul>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}
