import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  margin: 0 auto;

  ul {
    li {
      min-height: 110px;
      figure {
        width: 40%;
      }
      h1 {
        margin-bottom: 0.5rem;
      }
      p {
        display: none;
      }
      &:nth-child(3n) {
        p { 
          display: block; 
        }
      }
    }
  }
`;
