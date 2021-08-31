import React from 'react';

const Sidebar = ({ scrolled }) => {
  return <div class={scrolled ? 'sidebar' : ''}></div>;
};

export default Sidebar;
