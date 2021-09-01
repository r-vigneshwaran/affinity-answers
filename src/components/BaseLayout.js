import React, { useState, useEffect } from 'react';
import { Navbar, Preloader } from 'components';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const BaseLayout = ({ Component }) => {
  const showLoader = useSelector((state) => state.app.loader);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'unset';
    }
  }, [showLoader]);
  
  useEffect(() => {
    const banner = document.querySelector('.banner');
    window.onscroll = () => {
      if (window.pageYOffset > banner.clientHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    return window.onscroll;
  }, []);

  const handleClickMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <Preloader show={showLoader} />
      <Navbar scrolled={scrolled} handleClickMenu={handleClickMenu} />
      <Sidebar scrolled={scrolled} active={active} setActive={setActive} />
      <main className={`content ${active ? 'active' : ''}`}>
        <Component />
      </main>
    </>
  );
};

export default BaseLayout;
