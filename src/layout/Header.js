import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const AppHeader = styled.header`
  background: #524763;
  padding: 10px 5%;
  .logo {
    width: 60px;
  }
`;

const Header = () => {
  return (
    <AppHeader>
      <img src={logo} alt="logo" className="logo" />
    </AppHeader>
  );
};

export default Header;
