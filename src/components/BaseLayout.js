import React, { useState, useEffect } from 'react';
import { Navbar, Preloader } from 'components';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const BaseLayout = ({ Component }) => {
  const showLoader = useSelector((state) => state.app.loader);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    return window.onscroll;
  }, []);

  return (
    <>
      <Preloader show={showLoader} />
      <Navbar scrolled={scrolled} />
      <Sidebar scrolled={scrolled} />
      <main className={`content`}>
        <Component />
      </main>
    </>
  );
};

export default BaseLayout;
