import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.nav`
  background: #f4e229;
  display: flex;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;

  img {
    width: 80px;
  }

  .anticon {
    font-size: 1.2rem;
    color: ${darken(0.2, '#f4e229')};
  }

  @media screen and (min-width: 992px) {
    padding: 2rem 2rem;

    img {
      width: auto;
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
        border-right: 1px solid #111;
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
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    color: #111;
    text-transform: uppercase;
  }

  .nav-desktop {
    display: none;

    @media screen and (min-width: 992px) {
      display: flex;
    }
  }
`;
