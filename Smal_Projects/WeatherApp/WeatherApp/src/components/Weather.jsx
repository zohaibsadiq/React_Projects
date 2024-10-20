import React, { useEffect, useState } from 'react';
import Search from './Search';

export default function Weather() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=fed1eba4aa338a647289346da56eda88`
      );
      const data = await response.json();
      if (data) {
        console.log(data);
        setWeatherData(data);
        setLoading(false);
      }
    } catch {
      setLoading(false);
      console.error('Error fetching weather data');
    }
  }

  useEffect(() => {
    fetchWeatherData('lahore');
  }, []);

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='Weather'>
      <h1>Weather App</h1>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {weatherData && (
        <div className='Weather-data'>
          <h1>
            <span>City</span> : {weatherData.name}
          </h1>
          <h2>
            {' '}
            <span>Description</span> : {weatherData.weather[0].description}
          </h2>
          <h3>
            {' '}
            <span>Temperature</span> :{' '}
            {Math.round(weatherData?.main?.temp - 273.15)}°C
          </h3>
          <h4>
            {' '}
            <span>Data</span> : {getCurrentDate()}
          </h4>
          <h5>
            {' '}
            <span>Humidity</span> : {weatherData?.main?.humidity}%
          </h5>
          <h6>
            <span>Wind Speed</span> :{' '}
            {weatherData?.wind?.speed
              ? (weatherData.wind.speed * 3.6).toFixed(2)
              : 'N/A'}{' '}
            km/h
          </h6>
        </div>
      )}
    </div>
  );
}
