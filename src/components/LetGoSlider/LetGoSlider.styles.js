import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RangeSymbol = styled.div`
  cursor: pointer;
  background: ${({ theme }) => theme.cardBorder};
  border-radius: 999px;
  width: 22px;
  height: 22px;
  margin: 0 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  height: 0.5rem;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 30px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 999px;
    width: 1rem;
    height: 1rem;
    ${({ value }) =>
      value > 7
        ? css`
            background: ${({ theme }) => theme.positive};
          `
        : value < 7
        ? css`
            background: ${({ theme }) => theme.negative};
          `
        : css`
            background-image: linear-gradient(
              to right,
              ${({ theme }) => theme.negative},
              ${({ theme }) => theme.positive}
            );
          `}
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 1.5rem;
    height: 1.5rem;
    ${({ value }) =>
      value > 7
        ? css`
            background: ${({ theme }) => theme.positive};
          `
        : value < 7
        ? css`
            background: ${({ theme }) => theme.negative};
          `
        : css`
            background-image: linear-gradient(
              to right,
              ${({ theme }) => theme.negative},
              ${({ theme }) => theme.positive}
            );
          `}
    cursor: pointer;
  }
`;
