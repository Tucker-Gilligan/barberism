import React from "react-router-dom";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contactPage">
      <fieldset>
        <legend>Contact Joe Barber</legend>
        <form className="contactForm">
          <div className="formEntry">
            <label>Name: </label>
            <input
              type="text"
              id="contactEmail"
              className="contactFormInput"
            ></input>
          </div>
          <div className="formEntry">
            <label>Email: </label>
            <input
              type="text"
              id="contactName"
              className="contactFormInput"
            ></input>
          </div>
          <div className="formRequests">
            <label>Special Requests: </label>
            <br />
            <textarea id="contactEmail" className="contactFormInput"></textarea>
          </div>
        </form>
        <button type="submit">Submit</button>
      </fieldset>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}
