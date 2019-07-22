import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { social } from '../utilities';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default styled(Header)`
  background: ${social.facebook};
  padding: 10px 5%;
  .logo {
    width: 60px;
  }
`;
