import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

// Styled Components behind the scenes use className, so always assign className as props and attributes to reflect the styles with Styled Components.
const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a Fake Component</h2>
  </div>
)

const Heading = styled.h1`
  font-size: 2rem;
`;

// A Variable in Styled Component
const color = "white";

const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  background: indigo;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background: tomato;
`;

const AppWrapper = styled.div`
  header {
    background: teal;
  }
  /* Variable Referencing in Styled Components */
  ${Button} {
    margin-bottom: 2rem;
  }
`;

// Referencing and Extendig a Component
const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Styled Components
        </Heading>
        <DoubleFake />
        <Fake />
        <Button>Save</Button>
        <CancelButton>Cancel</CancelButton>
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
