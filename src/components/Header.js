import React from 'react';
import Logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="header-items">
        <div className="cart">cart</div>
        <div className="user">user profile</div>
      </div>
    </div>
  );
};

export default Header;
