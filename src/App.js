import React, { useState, useEffect } from 'react'

import Weather from './Weather';
import Position from './Position';
import './App.css';

const App = () => {

  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {

    // GeoLocation

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(Number(position.coords.latitude));
        setLon(Number(position.coords.longitude));
      }, (error) => {
        alert(error);
        setError(true);
      }
      )
    } else {

      setError(true);
      alert("Your browser sdoes not support geolocation");
    }
  }, [lat, lon]);

  return (
    <>
      { !error &&
        <div className="toCenter">
          <Position lat={Number(lat).toFixed(3)} lon={Number(lon).toFixed(3)} />
          <Weather lat={lat} lon={lon} />
        </div>
      }
    </>

  );
}
export default App;