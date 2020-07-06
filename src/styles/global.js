import { createGlobalStyle } from 'styled-components';

import Bg from '~/assets/bg.jpg';

export default createGlobalStyle`

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
    background: url(${Bg});
    background-attachment: fixed;
  }

  body {
    font: 16px 'Crimson Text', serif;
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

  .ant-col {
    margin-top: 1rem;
    @media screen and (min-width: 992px) {
      margin-top: 0;
    }
  }
`;
