import { css } from 'styled-components';

// Now our fixed function will accept a default object as an argument.

export const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => css`
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;

export const absolute = ({ x = 0, y = 0 } = {}) => css`
  position: absolute;
  top: ${y};
  left: ${x};
`;
