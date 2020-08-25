import styled from 'styled-components';

import { fontSansSerif } from '../Layout';

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    margin: 0 0.75rem;
  }

  .anticon-right,
  .anticon-left {
    transform: scale(0.8);
  }

  .anticon-left {
    margin-right: 0.4rem;
  }

  .anticon-right {
    margin-left: 0.4rem;
  }

  a {
    color: #fff;
    background: #111;
    font-family: ${fontSansSerif};
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 0.4rem 0.6rem;
  }
`;
