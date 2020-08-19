import styled from 'styled-components';
import { darken } from 'polished';

import { fontSansSerif } from '../Layout';

export const FeedTileWrapper = styled.li`
  height: auto;
  margin-bottom: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e5e5;
  min-height: 125px;
  &:last-child {
    margin: 0;
  }
  > div {
    cursor: pointer;
    height: auto;
    min-height: auto;
    display: block;
    color: #111;
    position: relative;

    figure {
      position: relative;
      margin-bottom: 0.8rem;
      float: left;
      display: inline-block;
      margin-right: 0.8rem;
      margin-bottom: 1.2rem;
      width: 30%;

      @media screen and (min-width: 992px) {
        width: 30%;
      }

      &:before {
        content: none;
      }

      img {
        width: 100%;
        object-fit: cover;
      }

      small {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        font-size: 0.6rem;

        @media screen and (min-width: 992px) {
          font-size: 0.8rem;
        }
      }
    }

    &:before {
      content: none;
    }

    h1 {
      font-size: 0.9rem;
      text-transform: none;
      font-family: ${fontSansSerif};
      font-weight: 700;
      transition: all 300ms ease-out;

      @media screen and (min-width: 992px) {
        font-size: 1.2rem;
        margin-top: 0.5rem;
        font-weight: 800;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.3;
      opacity: 0.8;
      display: none;

      @media screen and (min-width: 992px) {
        display: block;
      }
    }

    span {
      font-family: ${fontSansSerif};
      font-size: 0.6rem;
      position: absolute;
      strong {
        color: ${darken(0.3, '#f4e229')};
      }
      @media screen and (min-width: 992px) {
        font-size: 0.8rem;
      }
    }

    &:hover {
      h1 {
        color: ${darken(0.3, '#f4e229')};
      }
    }
  }

  &:nth-child(3n) {
    > div {
      position: relative;
      figure {
        margin-right: 0.8rem;
        margin-bottom: 1.2rem;
        width: 100%;
      }
      h1,
      span {
        // position: absolute;
      }
    }
  }

  /*
  ${(props) =>
    props.highlight &&
    css`
      a {
        position: relative;
        figure {
          margin-right: 0.8rem;
          margin-bottom: 1.2rem;
          width: 100%;
        }
        h1,
        span {
          // position: absolute;
        }
      }
    `};
  */
`;
