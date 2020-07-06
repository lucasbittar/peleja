import styled from 'styled-components';

export const Wrapper = styled.nav`
  background: #f4e229;
  display: flex;
  width: 100%;
  padding: 1rem 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
  }

  .anticon {
    font-size: 1.2rem;
    color: #fff;
  }

  @media screen and (min-width: 992px) {
    padding: 1.8rem 1rem;

    img {
      width: auto;
    }
  }

  > div {
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  aside {
    display: flex;
    align-items: center;

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
    margin-left: 2rem;
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
