import { css } from 'styled-components';

// Creating Media Query Breakpoints in Styled-Components using css function

const size = {
  small: 400,
  med: 960,
  large: 1140,
};

export const above = Object.keys(size).reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (...args) => css`
    @media (min-width: ${size[currentValue] / 16}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const below = Object.keys(size).reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (...args) => css`
    @media (max-width: ${size[currentValue] / 16}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
