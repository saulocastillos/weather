import React from 'react';

import { Container, Input } from './styles';

export default function SearchBox({setQuery, query, fetchAPI, location}) {

  const search = evt => {
    if(evt.key === 'Enter'){
      fetchAPI();
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
