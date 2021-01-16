import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <h2>Welcome to Barberism!</h2>
      <Link to="/barbers">
        <button>I am a Barber</button>
      </Link>
      <Link to="/customer">
        <button>I am looking for a Barber</button>
      </Link>
    </div>
  );
}
