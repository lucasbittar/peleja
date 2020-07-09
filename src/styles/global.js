import { createGlobalStyle } from 'styled-components';

import { fontSansSerif } from '~/components/Layout';

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
  }

  body {
    font: 16px 'Crimson Text', serif;
  }

  footer {
    background: #111;
    color: #fff;
    padding: 1rem 0;
    margin-top: 1rem;

    img {
      max-width: 115px;
    }

    @media screen and (min-width: 992px) {
      margin-top: 3rem;
      padding: 2rem 0;
    }

    > div {
      width: 100%;
      max-width: 1110px;
      margin: 0 auto;
      padding: 0 1rem;

      @media screen and (min-width: 992px) {
        padding: 0;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem;
      margin-bottom: 0;

      li {
        margin-right: 1rem;
        text-transform: uppercase;
        font-family: ${fontSansSerif};
        opacity: 0.5;
        font-size: 0.6rem;
        transition: all 300ms ease-out;

        @media screen and (min-width: 992px) {
          font-size: 1rem;
          margin-right: 2rem;
        }

        &:hover {
          opacity: 1;
        }
      }
    }
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
