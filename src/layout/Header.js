import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default styled(Header)`
  background: #524763;
  padding: 10px 5%;
  .logo {
    width: 60px;
  }
`;
