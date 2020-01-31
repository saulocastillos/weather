import React from 'react';

import { Container } from './styles';

export default function WeatherMain({children}) {
  return (
    <Container>
      {children}
    </Container>
  );
}
