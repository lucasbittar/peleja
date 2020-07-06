import styled, { css } from 'styled-components';
import { darken } from 'polished';

const padding = '0.5rem';
const highlight = '#d63450';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const SidebarWrapper = styled.aside`
  margin: 0 auto;
  width: 100%;
  border-top: solid 4px #f4e229;
  padding-top: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Raleway', sans-serif;
  }
`;

export const ArticlesFeedWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  border-top: solid 4px #f4e229;
  padding-top: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Raleway', sans-serif;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  padding: 0 1rem;

  @media screen and (min-width: 992px) {
    font-size: 2rem;
    padding: 0;
  }
`;

export const HightlightsWrapper = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 992px) {
    margin-top: 2rem;
  }
`;

export const FeedTile = styled.div`
  height: auto;
  margin-bottom: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e5e5;
  min-height: 100px;
  &:last-child {
    margin: 0;
  }
  a {
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
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
      transition: all 300ms ease-out;

      @media screen and (min-width: 992px) {
        font-size: 1.2rem;
        margin-top: 0.5rem;
        font-weight: 900;
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
      font-family: 'Raleway', sans-serif;
      font-size: 0.6rem;
      position: absolute;
      strong {
        color: ${darken(0.3, '#f4e229')};
      }
      @media screen and (min-width: 992px) {
        font-size: 0.8rem;
      }
    }

    small {
      font-family: 'Raleway', sans-serif;
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
`;

export const Hightlight = styled.div`
  height: 100%;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 992px) {
    // margin-bottom: 0;
  }

  a {
    color: #111;
    width: 100%;
    height: 100%;
    min-height: 320px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;

    @media screen and (min-width: 992px) {
      min-height: auto;
      margin-bottom: 0;
    }

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
      padding: 0.5rem;
      z-index: 2;

      @media screen and (min-width: 992px) {
        padding: 2rem;
      }

      > div {
        span {
          font-size: 0.6rem;
          @media screen and (min-width: 992px) {
            font-size: 0.8rem;
          }
        }
      }

      p {
        color: #fff;
        padding: 0.5rem;
        margin: 0;
        font-size: 1rem;
        line-height: 1.3;
        display: none;

        @media screen and (min-width: 992px) {
          display: block;
        }
      }

      h1 {
        margin-left: 0.5rem;
        max-width: 550px;
        line-height: 0.5;
        margin-bottom: 0.2rem;
        span {
          font-family: 'Raleway', sans-serif;
          font-weight: 900;
          font-size: 1.2rem;
          display: inline;
          background: ${highlight};
          color: white;
          padding: 0.2rem;
          padding-left: 0;
          padding-right: 0;
          line-height: 1;
          -webkit-box-decoration-break: clone;
          -ms-box-decoration-break: clone;
          -o-box-decoration-break: clone;
          box-decoration-break: clone;
          box-shadow: ${padding} 0 0 ${highlight}, -${padding} 0 0 ${highlight};
          transition: all 300ms ease-out;
        }

        @media screen and (min-width: 992px) {
          margin-bottom: 0.8rem;
          span {
            font-size: 2rem;
            line-height: normal;
            padding: ${padding};
          }
        }
      }

      > div {
        display: block;
      }

      small,
      span {
        padding: 0.5rem;
        font-family: 'Raleway', sans-serif;
      }

      small {
        display: inline-block;
        text-transform: uppercase;
        background: #fff;
        font-weight: bold;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 0.2rem;
        font-size: 0.6rem;
        padding: 0.4rem 0.4rem;
        line-height: normal;

        @media screen and (min-width: 992px) {
          font-size: 0.8rem;
        }
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
      height: auto;
      margin-bottom: 1.5rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #e5e5e5;
      min-height: 100px;
      &:last-child {
        margin: 0;
      }
      a {
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
          width: 40%;

          @media screen and (min-width: 992px) {
            float: none;
            display: block;
            margin: 0;
            width: 100%;
          }

          &:before {
            content: none;
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
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          transition: all 300ms ease-out;

          @media screen and (min-width: 992px) {
            font-size: 1.2rem;
            margin-top: 0.5rem;
            font-weight: 900;
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
          font-family: 'Raleway', sans-serif;
          font-size: 0.6rem;
          position: absolute;
          strong {
            color: ${darken(0.3, '#f4e229')};
          }
          @media screen and (min-width: 992px) {
            font-size: 0.8rem;
          }
        }

        small {
          font-family: 'Raleway', sans-serif;
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

  ${(props) =>
    props.small &&
    css`
      padding-bottom: 1.2rem;
      min-height: 100px;
      @media screen and (min-width: 992px) {
        min-height: 125px;
      }
      a {
        h1 {
          font-size: 0.9rem;
          @media screen and (min-width: 992px) {
            font-size: 1rem;
          }
        }
        figure {
          float: left;
          display: inline-block;
          margin-right: 0.8rem;
          margin-bottom: 1.2rem;
          width: 40%;

          @media screen and (min-width: 992px) {
            width: 50%;
          }
        }
      }
    `};
`;
