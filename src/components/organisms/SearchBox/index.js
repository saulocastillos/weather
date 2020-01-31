import React from 'react';

import { Container, Input } from './styles';

export default function SearchBox({setQuery, query, api, setWeather}) {
  
  const search = evt => {
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }
  
  return (
    <Container>
      <Input 
        type="text"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </Container>
  );
}
