import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ lat, lon }) => {

  const [temp, setTemp] = useState();
  const [wind_speed, setWind_Speed] = useState();
  const [wind_direction, setWind_Direction] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {

    getWeather(lat, lon);

  }, [lat, lon]);

  const getWeather = (lat, lon) => {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "56cf0c8e9d8b40b18119dfe197da70ea";

    let url = apiUrl + 'lat=' + lat + '&lon=' + lon + '&units=metric' + '&appid=' + apiKey;
    console.log(url);
    axios.get(url).then(response => {

      const result = response.data;
      setTemp(result.main.temp);
      setWind_Speed(result.wind.speed);
      setWind_Direction(result.wind.deg);
      setDescription(result.weather[0].description);
      setIcon('https://openweathermap.org/img/wn/' + result.weather[0].icon + '@2x.png');

    })
  }

  return (
    <div>
      <h3>Weather at your location</h3>
      <p>{temp} C&#176;</p>
      <p>{wind_speed} m/s {wind_direction} degrees</p>
      <p>{description}</p>
      <img src={icon} alt='' />
    </div>
  );
};

export default Weather;