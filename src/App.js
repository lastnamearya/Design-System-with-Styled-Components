import React from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';
import './App.css';

// ***************************************************************** //

// Creating Media Query Breakpoints in Styled-Components using css function

const size = {
  small: 400,
  med: 960,
  large: 1140,
};

const above = Object.keys(size).reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (...args) => css`
    @media (min-width: ${size[currentValue] / 16}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

// const below = Object.keys(size).reduce((accumulator, currentValue) => {
//   accumulator[currentValue] = (...args) => css`
//     @media (max-width: ${size[currentValue] / 16}em) {
//       ${css(...args)}
//     }
//   `;
//   return accumulator;
// }, {});

// ***************************************************************** //

// CSS Mixins ~ Any piece of reusable code.

const fixedTop = css`
  position: fixed;
  top: ${({ top }) => (top ? top : 0)};
  left: 0;
`;

// ***************************************************************** //

const Heading = styled.h1`
  font-size: 2rem;
  ${above.med`
    color: blue
  `}
`;

// Variable in Styled Components

const color = 'white';

// Styled Component ~ Button

const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
`;

// Extending a Styled Component ~ CancelButton from Button

const CancelButton = styled(Button)`
  background: tomato;

  ${'' /* Using Mixins */}
  ${fixedTop};
`;

// ***************************************************************** //

// App Wrapper ~ Nesting Example

const AppWrapper = styled.div`
  header {
    background: teal;
  }

  ${'' /* Referencing a Styled-Component ~ Now all Button inside our App Wrapper are going to have a margin-bottom of 2 rem */}

  ${Button} {
    margin-bottom: 2rem;
  }
`;

// ***************************************************************** //

// A React Component ~ Note: Don't forget to assing classname prop as Styled Component use className in order to style our Components. This is the reason why sometime on extending styles won't reflect. This is the basis of a Styled System.

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
);

// ***************************************************************** //

// Reference to React Component inside a Styled Component

const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`;

// ***************************************************************** //

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <DoubleFake />
        <Fake />
        <Button>Save</Button>
        <CancelButton top="100px">Cancel</CancelButton>
        <Heading>Heading two</Heading>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  );
}

export default App;
