import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Heading = styled.h1`
  font-size: 2rem;
`;

// A Variable in Styled Component
const color = "white";

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  background: ${({ type }) => type === 'cancel' ? 'tomato' : 'indigo'}
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Styled Components
        </Heading>
        <Button>Save</Button>
        <Button type="cancel">Cancel</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
