import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 100;

  @media screen and (min-width: 768px) {
    max-width: 130px;
  }

  div {
    position: relative;
  }

  svg {
    position: absolute;
    top: 50%;
    margin-top: -12px;
    left: 20px;
    z-index: 2;

    @media screen and (max-width: 768px) {
      fill: #ccc;
      margin-top: -9px;
    }
  }

  input {
    width: 100%;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 20px;
    font-size: 0.8rem;
    padding-left: 3.5rem;
    position: relative;
    background: transparent;
    z-index: 1;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
      background: #0f0f0f;
    }
  }

  ul {
    position: absolute;
    background: #fff;
    width: 100%;
    padding: 1rem 1rem 1rem 1rem;
    overflow-y: auto;
    max-height: 385px;
    border-radius: 0 0 1rem 1rem;
    margin: 0 !important;
    margin-top: -18px !important;
    display: block !important;

    li {
      border: none !important;
      padding: 0 !important;
      margin: 0;
      color: #888;
      text-transform: none;
      font-size: 0.8rem;
      P {
        font-family: 'Crimson Text', serif;
      }

      &:first-child {
        border-top: 1px solid #f4f4f4;
        margin-top: .2rem;
        padding-top: 1.5rem;
        padding: 0;
        margin-left: 0;
      }
    }

    a {
      padding: .7rem 0.5rem;
      color: #111;
      display: flex;
      border: none;
      text-transform: none;
      margin: 0;
      border-radius: 0;
      font-weight: normal;
      transition: all 300ms ease-out;

      &:hover {
        color: #111;
        background: #f4f4f4;
      }

      img {
        border-radius: 50%;
        margin-right: 1rem;
        height: 70px;
        width: 70px;
        object-fit: cover;
        flex-shrink: 0;
        border: 1px solid ${transparentize(0.8, '#111')};

        @media screen and (max-width: 768px) {
          height: 40px;
          width: 40px;
        }
      }

      strong {
        margin-bottom: 0.5rem;
        display: block;
        font-weight: normal;
        font-size: 1rem;
        color: #111;
        text-transform: none !important;
      }

      p {
        font-size: 0.8rem;
        opacity: 0.8;
        text-transform: none !important;
        font-weight: normal;
        color: #111;
      }

      .er_highlight {
        color: #111;
        font-weight: bold;
      }
    }
  }

  ${(props) => props.nav && css`
    margin-top: 0;
    max-width: 365px;
    margin: 0;
    margin-right: 2rem;

    @media screen and (max-width: 768px) {
      display: none;
    }

    input {
      background: #111;
      font-size: .9rem;
      padding: 0.8rem 1.2rem;
      padding-left: 3rem;
      color: #fff;
    }

    ul {
      margin-left: 0 !important;
      display: block !important;
      margin-top: -18px !important;

      li {
        border: none !important;
        &:first-child {
          border-top: 1px solid #f4f4f4 !important;
        }
      }

      a {
        margin: 0 !important;
        padding: .7rem 0.5rem !important;
        border: none !important;
        border-radius: 0 !important;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  `};

  ${(props) => props.inputFocus && css`
    max-width: 100%;
    width: 400px;

    @media screen and (min-width: 768px) {
      max-width: 400px;
    }

    input {
      background: #fff !important;
      color: #888;
    }
    ul {
      box-shadow: 0 5px 10px rgba(0,0,0,.08);
    }
  `};

  ${(props) => props.drawer && css`
    @media screen and (max-width: 768px) {
      max-width: 100%;
      display: block;
      margin-bottom: 1.5rem;

      input {
        background: #111;
      }
    }
  `};
`;
