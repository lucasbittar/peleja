import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  margin: 0 auto;

  ul {
    li {
      min-height: 100px;

      @media screen and (min-width: 992px) {
        min-height: 124px;
      }
      figure {
        width: 40%;

        img {
          height: 80px;

          @media screen and (min-width: 992px) {
            height: 90px;
          }
        }
      }
      h1 {
        margin-bottom: 0.5rem;
      }
      p {
        display: none;
      }
      &:nth-child(3n) {
        figure {
          img {
            height: auto;
          }
        }
        p { 
          display: block; 
        }
      }
    }
  }
`;
