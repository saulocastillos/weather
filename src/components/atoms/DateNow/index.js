import React from 'react';

import { Container } from './styles';

export default function DateNow() {

  const dateBuilder = d => {
    let months = ["January","February","March","April","May","June","July"
                 ,"August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  }

  return (
    <Container>
      {dateBuilder(new Date())}
    </Container>
  );
}
