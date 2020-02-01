import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from './config/api'

import ButtonBox from './components/organisms/ButtonBox';
import WeatherBox from './components/organisms/WeatherBox';
import LocalizationBox from './components/organisms/LocalizationBox';
import SearchBox from './components/organisms/SearchBox';

require('dotenv').config();

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");

  async function fetchAPI() {
    await fetch(`${api.base}weather?q=${query || location}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
            });
  }

  function handleClick() {
    fetchAPI();
  }

  useEffect(()=>{
    async function search() {
      const ip = await (await axios.get('https://api.ipify.org?format=json')).data;
      const response = await axios.get(`https://geolocation-db.com/jsonp/${ip}`);
      const data = await JSON.parse(response.data.replace("callback(","").replace(")",""));
      setLocation(`${data.city}, ${data.country_name}`)
      setCity(data.city);
    } 
    search();
  },[location])

  return (
    <div className={(typeof weather.main != "undefined") 
        ? ((weather.main.temp > 16) 
        ? 'app warm' : 'app') 
        : 'app'} >
      <main>
        <SearchBox 
          setQuery={setQuery}
          query={query}
          api={api}
          setWeather={setWeather}
          location={location}
          fetchAPI={fetchAPI}
        />
        <ButtonBox handleClick={e => handleClick()}>What's my location temperature?</ButtonBox>  
        {(typeof weather.main != "undefined") ? (
          <>
            <LocalizationBox 
              weather={weather}
            />
            <WeatherBox 
              weather={weather}
            />
          </>
          ):(<></>)}     
      </main>
    </div>
  );
}

export default App;
