/**
 * This module contains a loader component.
 * <Preloader
      show, => (boolean to decide show Overlay on screen with loader)
    </Preloader>
 */
import React from 'react';

const Preloader = function (props) {
  const { show } = props;

  return (
    <div
      className={`preloader bg-loader flex-column justify-content-center align-items-center ${
        show ? '' : 'show'
      }`}
    >
      {/* <img
        className="loader-element animate__animated animate__jackInTheBox"
        src={MangoLoader}
        height={40}
        alt="loader..."
      /> */}
    </div>
  );
};
export default Preloader;
