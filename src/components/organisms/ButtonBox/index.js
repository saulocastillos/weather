import React from 'react';

import { Container, Button } from './styles';

export default function ButtonBox({handleClick, children = ""}) {
  return (
    <Container>
      <Button onClick={handleClick}>{children}</Button>
    </Container>
  );
}
