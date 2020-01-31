import React from 'react';

import { Container } from './styles';

import Location from '../../atoms/Location';
import DateNow from '../../atoms/DateNow';

export default function LocalizationBox({weather}) {
  return (
    <Container>
      {
        (typeof weather !== "undefined")
        ? <>
          <Location>{weather.name}, {weather.sys.country}</Location>
          <DateNow />
        </>
        : <></>
      }
    </Container>
  );
}
