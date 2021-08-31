import React from 'react';

const Header = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('stick', window.scrollY > 0);
  });
  return (
    <React.Fragment>
      <header>
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
