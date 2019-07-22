import styled from 'styled-components';
import { fixedTop } from '../utilities';

const color = 'white';

// Styled Component ~ Button

export const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
`;

// Extending a Styled Component ~ CancelButton from Button

export const CancelButton = styled(Button)`
  background: tomato;

  ${'' /* Using Mixins */}
  ${fixedTop};
`;
