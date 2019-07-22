import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Heading = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 2rem;
  ${'' /* First Way to Style a Button */}
  ${'' /* ${props => props.type === 'cancel' && 'background: tomato'}; */}

  ${'' /* Second Way  */}
  background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')};
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <Button>Save</Button>
        <Button type="cancel">Cancel</Button>
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
    </div>
  );
}

export default App;
