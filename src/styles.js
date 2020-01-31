import { createGlobalStyle } from 'styled-components';

import cold from './assets/cold-bg.jpg'
import warm from './assets/warm-bg.jpg'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'montserrat',sans-serif;
  }
  .app {
    background-image: url(${cold});
    background-size: cover;
    background-position: bottom;
    transition: 0.9 ease-out;
  }
  
  .app.warm {
    background-image: url(${warm});
  }
  
  main {
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.75));
    padding: 25px;
  }
`;