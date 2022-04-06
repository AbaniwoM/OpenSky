import React, { useState, useEffect } from 'react'

// var BaseUrl = "https://opensky-network.org/api/";

const Data = () => {
  const [flights, setFlights] = useState([]);

  const getAll = "https://opensky-network.org/api/"
  const airportArrivals = 'https://opensky-network.org/api/'

  console.log(flights)
  console.table(flights.states)

  useEffect(() => {
    flightDetails();
  }, []);

  async function flightDetails() {
    try {
        const res = await fetch("https://opensky-network.org/api/states/all");
        const data = await res.json();
        setFlights(data);
    } catch (err) {
        console.error(err);
    }
  }
  
  return (
    <div className="Data">
        {/* {flights.map((flight, index) => ( */}
            {/* <div key={index}> */}
              {/* Airport */}
              {/* <h2></h2> */}

              {/* Current Time */}
              {/* <h2></h2> */}

              {/* Number of Flights Arriving */}
              {/* <h2></h2> */}

              {/* Number of Flights Departing */}
              {/* <h2></h2> */}
               {/* <h2>{flight.states}</h2> */}
            {/* </div> */}
        {/* ))}   */}
    </div>
  )
}

export default Data

        
        