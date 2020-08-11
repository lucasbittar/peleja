import styled from 'styled-components';

export const Wrapper = styled.section`
  display: block;
  width: 100%;

  section {
    padding: 5em 0;
    background: #f4f4f4;

    &:nth-child(even) {
      background: #fff;
    }

    @media screen and (max-width: 768px) {
      padding: 3em 0;
    }
  }

  header {
    margin-top: -3rem;
    height: 70vh;
    max-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/assets/header-bg.jpg');
    background-size: cover;
    background-position: center;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      text-align: center;
      font-weight: 300;
      color: #fff;
      b {
        font-weight: 700;
      }
    }

    @media screen and (max-width: 768px) {
      height: 45vh;

      h1 {
        font-size: 1.5rem;
        padding: 0 2rem;
      }
    }
  }

  h2 {
    font-weight: 400;
    color: #f406dc;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      font-size: 1.15rem;
    }

    svg {
      margin-right: 0.6rem;

      @media screen and (max-width: 768px) {
        transform: scale(0.8);
        margin-right: 0.4rem;
      }
    }

    div {
      margin-left: auto;

      a {
        color: #f406dc;
        font-size: 0.95rem;
        text-transform: uppercase;
        opacity: 0.8;
        transition: all 300ms ease-out;

        &:hover {
          opacity: 1;
        }

        display: flex;
        align-items: center;

        @media screen and (max-width: 768px) {
          font-size: 0.85rem;
        }

        svg {
          margin: 0;
          margin-left: 0.4rem;
        }
      }
    }
  }

  hr {
    margin: 3rem 0;
    border: none;
    border-bottom: 2px solid #f4f4f4;
  }
`;
