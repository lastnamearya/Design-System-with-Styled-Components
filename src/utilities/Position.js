import { css } from 'styled-components';

export const fixed = ({ x = 0, y = 0 }) => {
  return css`
    position: fixed;
    top: ${y};
    left: ${x};
  `;
};
