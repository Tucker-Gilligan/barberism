import React from "react";
import { Link } from "react-router-dom";

export default function Customer() {
  return (
    <div className="locateBarber">
      <fieldset>
        <legend>Locate a Barber</legend>
        <form class="customer-form">
          <label for="location-search">Search By Location</label>
          <input type="text" id="location-search"></input>
          <button type="button">
            <Link to="/barber-list">
              <button>Search</button>
            </Link>
          </button>
        </form>
      </fieldset>
    </div>
  );
}
