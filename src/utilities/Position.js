import { css } from 'styled-components';

// CSS Helper
// CSS Mixins ~ Any piece of reusable code.

export const fixedTop = css`
  position: fixed;
  top: ${({ top }) => (top ? top : 0)};
  left: 0;
`;
