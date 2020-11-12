import styled from 'styled-components';
import { darken } from 'polished';

import { fontSansSerif } from '../Layout';

export const FeedTileWrapper = styled.li`
  height: auto;
  margin-bottom: 1.5rem;
  // padding-bottom: 2rem;
  border-bottom: 1px solid #e5e5e5;
  min-height: 100px;

  @media screen and (min-width: 992px) {
    min-height: 160px;
  }
  &:last-child {
    margin: 0;
  }
  > div {
    cursor: pointer;
    height: auto;
    min-height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #111;
    position: relative;

    figure {
      position: relative;
      margin-bottom: 0.8rem;
      float: left;
      flex-shrink: 0;
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
        height: 80px;

        @media screen and (min-width: 992px) {
          height: 140px;
        }
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
        font-weight: 800;
      }
    }

    p {
      display: none;
      font-size: 1rem;
      line-height: 1.3;
      margin-bottom: 0.5rem;
      opacity: 0.8;

      @media screen and (min-width: 992px) {
        display: block;
      }
    }

    span {
      display: block;
      font-family: ${fontSansSerif};
      font-size: 0.6rem;
      padding-bottom: 1rem;
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
      display: flex;
      flex-direction: column;
      figure {
        display: block;
        margin-right: 0.8rem;
        margin-bottom: 1.2rem;
        width: 100%;

        img {
          height: auto;
        }
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
