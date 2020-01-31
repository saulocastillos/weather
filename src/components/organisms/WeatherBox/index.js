import React from 'react';

import { Container } from './styles';

import WeatherMain from '../../atoms/WeatherMain';
import TempBox from '../../molecules/TempBox';

export default function WeatherBox({weather}) {
  return (
    <Container>
      {
        (typeof weather !== "undefined")
        ? (<>
            <TempBox>
              {Math.round(weather.main.temp)}°c
            </TempBox>
            <WeatherMain>
              {weather.weather[0].main}
            </WeatherMain>
          </>)
        : (<></>)
      }
    </Container>
  );
}
