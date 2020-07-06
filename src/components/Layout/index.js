import styled, { css } from 'styled-components';
import { darken } from 'polished';

const padding = '0.5rem';
const highlight = '#d63450';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
`;

export const HightlightsWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #f4f4f4;
`;

export const Hightlight = styled.div`
  height: 100%;
  a {
    color: #111;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;
    figure {
      margin: 0;
      position: relative;
      height: 100%;
      &:before {
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(0, 0, 0);
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.5)
        );
        z-index: 1;
        transition: all 300ms ease-out;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    > div {
      position: absolute;
      padding: 2rem;
      z-index: 2;

      h1 {
        margin-left: 0.5rem;
        max-width: 550px;
        span {
          text-transform: uppercase;
          font-weight: bold;
          display: inline;
          background: ${highlight};
          color: white;
          padding: ${padding};
          padding-left: 0;
          padding-right: 0;
          line-height: 1.5;
          -webkit-box-decoration-break: clone;
          -ms-box-decoration-break: clone;
          -o-box-decoration-break: clone;
          box-decoration-break: clone;
          box-shadow: ${padding} 0 0 ${highlight}, -${padding} 0 0 ${highlight};
          transition: all 300ms ease-out;
        }
      }

      > div {
        display: block;
      }

      small,
      span {
        padding: 0.5rem;
      }

      small {
        display: inline-block;
        text-transform: uppercase;
        background: #fff;
        font-weight: bold;
        font-family: 'Roboto Condensed', sans-serif;
        margin-bottom: 0.2rem;
        padding: 0.4rem 0.4rem;
        line-height: normal;
      }

      span {
        color: #fff;
      }
    }

    &:hover {
      > div {
        h1 {
          span {
            background: ${darken(0.1, highlight)};
            box-shadow: ${padding} 0 0 ${darken(0.1, highlight)},
              -${padding} 0 0 ${darken(0.1, highlight)};
          }
        }
      }
      figure {
        &:before {
          opacity: 0.8;
        }
      }
    }
  }

  ${(props) =>
    props.secondary &&
    css`
      a {
        height: auto;
        display: block;
        color: #111;
        margin-bottom: 1.8rem;

        &:last-child {
          margin: 0;
        }

        &:before {
          content: none;
        }

        h1 {
          font-size: 1.2rem;
          text-transform: none;
          font-weight: bold;
          transition: all 300ms ease-out;
        }

        p {
          opacity: 0.7;
        }

        span {
          strong {
            color: ${darken(0.3, '#f4e229')};
          }
        }

        small {
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: bold;
          background: #f4e229;
          text-transform: uppercase;
          padding: 0.2rem 0.4rem;
          display: inline-block;
          margin-bottom: 0.4rem;
        }

        &:hover {
          h1 {
            color: ${darken(0.3, '#f4e229')};
          }
        }
      }
    `};
`;
