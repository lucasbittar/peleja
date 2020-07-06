import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700&family=Roboto+Condensed:wght@700&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body {
    font: 14px 'Merriweather', serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .ant-row {
    margin: 0 !important;
  }
`;
