import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const padding = '0.5rem';
export const highlight = '#d63450';
export const fontSansSerif = '"Exo 2", sans-serif';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const NotFound = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const StoriesWrapper = styled.ul`
  width: 100%;
  max-width: 1108px;
  display: flex;
  margin: 1rem auto 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;

    color: #111;
    font-size: 0.6rem;
    text-transform: uppercase;
    font-family: ${fontSansSerif};
  }

  img {
    border: 3px solid #f4e229;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.6rem;
  }

  @media screen and (min-width: 992px) {
    margin: 2rem auto;
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 0.8rem;
    }

    li {
      font-size: 0.8rem;
    }
  }

  ${(props) =>
    props.device === 'desktop' &&
    css`
      display: none;
      @media screen and (min-width: 992px) {
        display: flex;
        margin-top: 0;
      }
    `};

  ${(props) =>
    props.device === 'mobile' &&
    css`
      display: flex;
      @media screen and (min-width: 992px) {
        display: none;
      }
    `};
`;

export const HomeBannersWrapper = styled.div `
  background: transparent;
  margin: 0 0 2rem 0;

  @media screen and (min-width: 992px) {
    margin: 0 0 6rem 0;
  }

  img {
    width: 100%;
  }

`;

export const ShowsWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1110px;
  padding: 0.5rem 0;
  padding-left: 0.5rem;
  margin-bottom: 2rem;
  background: #f4e229;

  @media screen and (min-width: 992px) {
    margin-bottom: 6rem;
  }

  h2 {
    font-family: ${fontSansSerif};
    font-size: 1.5rem;
    font-weight: 800;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  a {
    color: ${darken(0.3, '#f4e229')};
    font-family: ${fontSansSerif};
    font-size: 1rem;
    text-transform: uppercase;
    display: block;
    margin-top: 1rem;
    font-size: 0.8rem;

    @media screen and (min-width: 992px) {
      font-size: 1rem;
    }
  }

  ul {
    flex-wrap: nowrap;
    display: -webkit-box;

    @media screen and (min-width: 992px) {
      flex-wrap: nowrap;
    }
  }

  li {
    font-size: 1rem;
    width: 180px;
    margin-right: 0.5rem;
    color: #111;

    @media screen and (min-width: 992px) {
      margin-right: 1.5rem;
      width: 180px;
      max-width: 180px;
    }

    p {
      display: none;
    }

    &:last-child {
      margin: 0;
    }
    a {
      margin-top: 0;
    }
    img {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 1.5rem 0;
    li {
      p {
        display: block;
      }
    }
  }
`;

export const CategoryTag = styled.small`
  font-family: ${fontSansSerif};
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.2rem 0.4rem;
  display: inline-block;
  margin-bottom: 0.4rem;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};

  a {
    color: ${(props) => props.textColor};
  }
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const SectionHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  border-top: solid 4px #f4e229;
  padding-top: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: ${fontSansSerif};
    margin-bottom: 1.5rem;
  }
`;

export const SidebarWrapper = styled.aside`
  margin: 0 auto;
`;

export const ArticlesFeedWrapper = styled.div`
  margin: 0 auto;
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
  margin-bottom: 2rem;
  padding-bottom: 0;

  @media screen and (min-width: 992px) {
    margin-top: 2rem;
    padding-bottom: 3rem;
  }
`;

export const EpisodesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
`;

export const EpisodeTile = styled.li`
  height: auto;
  padding: 1rem;
  background: #f4f4f4;
  a {
    height: auto;
    min-height: auto;
    display: block;
    position: relative;

    figure {
      position: relative;
      float: left;
      display: inline-block;
      margin-bottom: 1.2rem;

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
      color: ${(props) => props.showColor};
      font-weight: 700;
      transition: all 300ms ease-out;

      @media screen and (min-width: 992px) {
        font-size: 1.2rem;
        font-weight: 800;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.3;
      opacity: 0.8;
      display: none;
      color: #111;

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
        color: ${darken(0.3, '#111')};
      }
    }
  }

  /*
  &:nth-child(3n) {
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
  }
  */
`;

export const FeedTile = styled.li`
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

export const VideoTile = styled.div`
  height: auto;
  margin-bottom: 1.5rem;
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
      width: 100%;

      &:before {
        content: none;
      }

      img {
        width: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        background: #f4e229;
        border-radius: 50%;
        padding: 0.5rem;
      }

      small {
        top: 0.5rem;
        right: 0.5rem;
        position: absolute;
        font-size: 0.8rem;
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

    &:hover {
      h1 {
        color: ${darken(0.3, '#f4e229')};
      }
    }
  }
`;

export const Highlight = styled.div`
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
          font-family: ${fontSansSerif};
          font-weight: 800;
          font-size: 1.2rem;
          display: inline;
          background: ${highlight};
          color: white;
          padding: 0.2rem;
          padding-left: 0;
          padding-right: 0;
          line-height: 1.6;
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
            line-height: 1.5;
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
        font-family: ${fontSansSerif};
      }

      small {
        display: inline-block;
        font-weight: bold;
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

  section {
    display: flex;
    flex-direction: column;
  }

  ${(props) =>
    props.secondary &&
    css`
      height: auto;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid #e5e5e5;
      &:last-child {
        margin: 0;
      }
      a {
        align-items: flex-start;
        height: auto;
        min-height: auto;
        display: flex;
        color: #111;
        position: relative;

        @media screen and (min-width: 992px) {
          display: block;
        }

        figure {
          position: relative;
          margin-bottom: 0.8rem;
          float: left;
          display: inline-block;
          flex-shrink: 0;
          margin-right: 0.8rem;
          margin-bottom: 1.2rem;
          width: 30%;

          @media screen and (min-width: 992px) {
            float: none;
            display: block;
            margin: 0;
            margin-bottom: 1rem;
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
          font-family: ${fontSansSerif};
          font-weight: 700;
          transition: all 300ms ease-out;

          @media screen and (min-width: 992px) {
            font-size: 1.2rem;
            margin-top: 0;
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
          padding-bottom: 1rem;
          strong {
            color: ${darken(0.3, '#f4e229')};
          }
          @media screen and (min-width: 992px) {
            font-size: 0.8rem;
          }
        }

        small {
          font-family: ${fontSansSerif};
          font-weight: bold;
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
      @media screen and (min-width: 992px) {
        min-height: 125px;
      }
      a {
        @media screen and (min-width: 992px) {
          display: flex;
        }
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
          width: 30%;

          @media screen and (min-width: 992px) {
            width: 50%;
          }
        }
      }
    `};
`;
