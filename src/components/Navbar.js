import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ scrolled, handleClickMenu, banner, isShowSidebar }) => {
  const count = useSelector((state) => state.products.count);
  return (
    <React.Fragment>
      <header className={`${scrolled ? 'stick' : ''}`}>
        <div className="left">
          {isShowSidebar && scrolled && (
            <i
              className="bx bx-menu text-black btn bx-md"
              onClick={handleClickMenu}
            ></i>
          )}
          <Link to="/" className="logo">
            <i class="bx bx-shopping-bag"></i> LOGO
          </Link>
        </div>
        <ul>
          <li className={`cart ${scrolled ? 'primary' : ''}`}>
            <span className="count">{count}</span>
            <Link to="/cart" className="logo">
              <i className="bx bx-cart"></i>
            </Link>
          </li>
          <li>
            <Link to="/product" className="logo">
              <i className="bx bx-user"></i>
            </Link>
          </li>
        </ul>
      </header>
      {banner && <section className="banner"></section>}
    </React.Fragment>
  );
};

export default Header;
