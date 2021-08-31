import React from 'react';

const Header = ({ scrolled }) => {
  return (
    <React.Fragment>
      <header className={`${scrolled ? 'stick' : ''}`}>
        <a href="/" className="logo" alt="logo">
          LOGO
        </a>
        <ul>
          <li>
            <a href="/cart" alt="cart">
              Cart
            </a>{' '}
          </li>
          <li>
            {' '}
            <a href="/user" alt="cart">
              username
            </a>{' '}
          </li>
        </ul>
      </header>
      <section className="banner"></section>
    </React.Fragment>
  );
};

export default Header;
