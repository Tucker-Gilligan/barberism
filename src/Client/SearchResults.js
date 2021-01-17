import React from 'react';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SearchResults() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [barbers, setBarbers] = useState([]);
  const API_URL = 'http://8000';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBarbers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {barbers.map((barber) => (
          <li key={barber.id}>
            {barber.name} {barber.location} {barber.email} {barber.phone}
          </li>
        ))}
      </ul>
    );

    //   }
    //   return (
    //     <div>
    //       <ul className="barberList">
    //         <li className="barberListItem">
    //           <p>Name: Joe Barber</p>
    //           <p>Location: Barbertown, NJ</p>
    //           <p style={{ fontWeight: "bold" }}>Services Offered</p>
    //           <ol>
    //             <li>In-home haircuts</li>
    //             <li>In-shop "quiet hours"</li>
    //             <li>Scissors only haircuts</li>
    //             <li>Follow-up option as needed</li>
    //           </ol>
    //           <Link to="/contact">
    //             <button>Contact</button>
    //           </Link>
    //         </li>
    //       </ul>
    //       <Link to="/">
    //         <button>Return Home</button>
    //       </Link>
    //     </div>
    //   );
  }
}
