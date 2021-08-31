import React from 'react';
import { Navbar, Preloader } from 'components';
import { useSelector } from 'react-redux';

const BaseLayout = ({ Component }) => {
  const showLoader = useSelector((state) => state.app.loader);
  return (
    <>
      <Preloader show={showLoader} />
      <Navbar />
      <main className={`content`}>
        <Component />
      </main>
    </>
  );
};

export default BaseLayout;
