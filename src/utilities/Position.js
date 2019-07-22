import { css } from 'styled-components';

// Now our fixed function will accept a default object as an argument.

export const fixed = ({ x = 0, y = 0 } = {}) => {
  return css`
    position: fixed;
    top: ${y};
    left: ${x};
  `;
};
