import React from 'react';

const Header = ({ scrolled, handleClickMenu }) => {
  return (
    <React.Fragment>
      <header className={`${scrolled ? 'stick' : ''}`}>
        <div className="left">
          <i class="bx bx-menu btn bx-md" onClick={handleClickMenu}></i>
          <a href="/" className="logo" alt="logo">
            LOGO
          </a>
        </div>
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
