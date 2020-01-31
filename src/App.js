import React, { useState } from 'react';

import WeatherBox from './components/organisms/WeatherBox';
import LocalizationBox from './components/organisms/LocalizationBox';
import SearchBox from './components/organisms/SearchBox';

require('dotenv').config();

const api = {
  key: process.env.local ? process.env.local.REACT_APP_KEY : process.env.REACT_APP_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

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
        />
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
