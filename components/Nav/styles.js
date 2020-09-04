import styled from 'styled-components';
import { darken } from 'polished';

import { fontSansSerif } from '../Layout';

export const Wrapper = styled.nav`
  background: #111;
  display: flex;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;

  img {
    width: 60px;
  }

  .anticon {
    font-size: 0.8rem;
    color: ${darken(0.2, '#fff')};

    @media screen and (min-width: 375px) {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 375px) {
    img {
      width: 80px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 2rem 2rem;

    img {
      width: 115px;
    }
  }

  > div {
    width: 100%;
    max-width: 1110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  aside {
    display: flex;
    align-items: center;

    ul {
      &:first-child {
        border-right: 1px solid #fff;
        padding-right: 1.5rem;
      }
    }

    > div {
      display: block;
      margin-left: 2rem;

      @media screen and (min-width: 992px) {
        display: none;
      }
    }
  }

  ul {
    margin: 0;
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 1rem;
    font-size: 0.95rem;
    font-family: ${fontSansSerif};
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;

    a {
      transition: all 300ms ease-out;
      color: #fff;
      opacity: 0.7;
    }

    &:hover {
      a {
        opacity: 1;
      }
    }
  }

  .nav-desktop {
    display: none;

    @media screen and (min-width: 992px) {
      display: flex;
      li {
        padding-right: 1.5rem;
        border-right: 1px solid ${darken(0.1, '#f4e229')};

        &:last-child {
          border: none;
          margin-right: 0;
          padding-right: 0;
        }
      }
    }
  }
`;

