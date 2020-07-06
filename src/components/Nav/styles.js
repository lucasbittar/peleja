import styled from 'styled-components';

export const Wrapper = styled.nav`
  background: #f4e229;
  display: flex;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;

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
  }

  ul {
    margin: 0;
    margin-left: 2rem;
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 1rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
