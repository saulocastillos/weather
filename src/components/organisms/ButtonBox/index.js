import React from 'react';

import { Container, Button } from './styles';

export default function ButtonBox({handleClick}) {
  return (
    <Container>
      <Button onClick={handleClick}>Qual a temperatura agora?</Button>
    </Container>
  );
}
