import React from 'react';
import './Result.css';

const Result = (props) => {

  const { date, err, city, sunrise, sunset, temp, pressure, wind } = props.weather

  let content = null;

  if (!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div class="card">
        <h3>Wyniki wyszukiwanie dla <em>{city} </em> </h3>
        <h4>Dane dla dnia i godziny: {date} </h4>
        <h4>Aktualna temperarua : {temp} &#176;C</h4>
        <h4>Wschód słońca dzisaj o {sunriseTime}</h4>
        <h4>Zachód słońca dzisaj o {sunsetTime}</h4>
        <h4>Aktualna siła wiatru {wind} m/s</h4>
        <h4>Aktualne ciśnienie {pressure} hPa</h4>
      </div>
    )
  }

  return (
    <div className="result">
      {err ? `Nie mamy w bazie: ${city}` : content}
    </div>


  );
}

export default Result;