import styled from 'styled-components';

import { fontSansSerif } from '../Layout';

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    margin: 0 0.5rem;
  }

  a {
    color: #fff;
    background: #111;
    font-family: ${fontSansSerif};
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0.4rem 0.6rem;
  }
`;
