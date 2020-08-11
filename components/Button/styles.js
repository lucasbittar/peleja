import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  min-width: 95px;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  transition: all ease-out 300ms;
  background: #ccc;

  &:hover {
    background: ${darken(0.03, '#ccc')};
  }

  &:disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }

  svg {
    margin-right: 10px;
  }
  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 1.5rem;
      padding: 10px 25px;
      min-width: 200px;
    `};

  ${(props) =>
    props.iconOnly &&
    css`
      min-width: auto;
      padding: 10px 15px;

      svg {
        margin: 0;
      }
    `};

  ${(props) =>
    props.primary &&
    css`
      background: #f406dc;

      &:hover {
        background: ${darken(0.03, '#f406dc')};
      }
    `};
`;
