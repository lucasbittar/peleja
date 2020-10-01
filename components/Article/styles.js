import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { fontSansSerif } from '../Layout';

export const ArticlesContentWrapper = styled.article`
  margin-top: -2rem;
  h2 {
    font-family: ${fontSansSerif};
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: ${fontSansSerif};
    font-size: 1.2rem;
    opacity: 0.8;
    margin-top: 1rem;
    color: ${darken(0.3, '#f4e229')};
  }

  h4 {
    font-family: ${fontSansSerif};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  hr {
    border: none;
    border-bottom: 1px solid #f4e229;
    margin-bottom: 1.5rem;
  }

  img {
    width: 100%;
  }

  blockquote {
    font-family: ${fontSansSerif};
    margin: 2rem 0 4rem;
    font-size: 1.1rem;
    position: relative;
    display: inline-block;
    width: 50%;
    margin-left: 0;
    color: ${darken(0.3, '#f4e229')};
    float: left;

    &:after {
      position: absolute;
      display: block;
      content: ' – ' attr(cite);
      right: 40px;
      margin-top: 1rem;
      font-size: 1.1rem;
      font-family: 'Grimson Text', serif;
    }
  }

  figure {
    margin: 0;
    height: 100%;
    margin-bottom: 1.5rem;
  }

  figcaption {
    border-bottom: 1px solid #e5e5e5;
    color: #111;
    font-family: ${fontSansSerif};
    font-size: 0.6rem;
    opacity: 0.8;
    padding: 0.5rem;
    text-transform: uppercase;
  }

  .article-image {
    max-width: 50%;

    &--left {
      float: left;
    }

    &--right {
      float: right;
    }

    @media screen and (min-width: 992px) {
      float: none;
      max-width: 100%;
    }
  }

  p {
    font-size: 1.3rem;
    line-height: 1.5;
    color: #111;

    &:first-child {
      &:first-letter {
        color: ${darken(0.3, '#f4e229')};
        float: left;
        font-size: 5rem;
        line-height: 60px;
        padding-top: 8px;
        padding-right: 12px;
        padding-left: 3px;
      }
    }
  }

  ${(props) => props.episode && css`
      margin-top: 0;
  `};

  @media screen and (min-width: 992px) {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    figcaption {
      font-size: 0.8rem;
    }

    p {
      font-size: 1.3rem;
      line-height: 1.5;
      &:first-child {
        &:first-letter {
          font-size: 5rem;
          line-height: 60px;
          padding-top: 8px;
          padding-right: 12px;
          padding-left: 3px;
        }
      }
    }

    blockquote {
      width: 50%;
      margin-left: -5%;
      font-size: 1.3rem;
      &:after {
        right: 40px;
        margin-top: 1rem;
        font-size: 1.3rem;
      }
    }
  }
`;

export const Header = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  margin-top: 2rem;
  color: #111;
  width: 100%;

  ul {
    margin: 0;
  }

  small {
    font-size: 0.8rem;
  }

  h1 {
    font-family: ${fontSansSerif};
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > div {
    small,
    span {
      font-family: ${fontSansSerif};
      font-size: 0.8rem;
      strong {
        color: ${darken(0.3, '#f4e229')};
      }
    }

    span {
      color: #111;
    }
  }

  em {
    opacity: 0.6;
    font-size: 0.9rem;
    margin-left: 0.5rem;
    font-family: 'Crimson Text', serif;
  }

  @media screen and (min-width: 992px) {
    min-height: auto;
    margin-bottom: 3rem;
    margin-bottom: 0;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    small {
      font-size: 1rem;
    }

    > div {
      margin-bottom: 2rem;
      small,
      span {
        font-size: 1rem;
      }
    }
  }
`;
