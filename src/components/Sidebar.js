import React, { useState } from 'react';

const Sidebar = ({ scrolled, setActive, active }) => {
  return (
    <div className={scrolled ? `sidebar ${active ? 'open' : ''}` : 'd-none'}>
      <div className="logo_content">
        {/* <div className="logo">
          <i class="bx bxl-c-plus-plus"></i>
          <div className="logo_name">Coding LAb</div>
        </div> */}
      </div>
      <ul className="nav_list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search for Product" />

          {/* <span>DashBoard</span> */}
        </li>
        <li>
          <a href="/" alt="icon">
            <i className="bx bx-grid-alt"></i>
            <span>Dashboard</span>
          </a>
          {/* <span>DashBoard</span> */}
        </li>
        <li>
          <a href="/" alt="icon">
            <i className="bx bx-grid-alt"></i>
            <span>category 1</span>
          </a>
          {/* <span>DashBoard</span> */}
        </li>
        <li>
          <a href="/" alt="icon">
            <i className="bx bx-grid-alt"></i>
            <span>category 2</span>
          </a>
          {/* <span>DashBoard</span> */}
        </li>
        <li>
          <a href="/" alt="icon">
            <i className="bx bx-grid-alt"></i>
            <span>category 3</span>
          </a>
          {/* <span>DashBoard</span> */}
        </li>
        <li>
          <a href="/" alt="icon">
            <i className="bx bx-grid-alt"></i>
            <span>category 4</span>
          </a>
          {/* <span>DashBoard</span> */}
        </li>
        <li>
          <a href="/" alt="icon">
            <i className="bx bx-grid-alt"></i>
            <span>category 5</span>
          </a>
          {/* <span>DashBoard</span> */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
