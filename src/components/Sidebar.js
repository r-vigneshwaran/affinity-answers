import {
  getCategories,
  getProductsBasedOnCategories,
  getProductsList
} from 'actions/productActions';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const iconMap = {
  electronics: <i class="bx bx-laptop"></i>,
  jewelery: <i class="bx bxs-diamond"></i>,
  "men's clothing": <i class="bx bx-male-sign"></i>,
  "women's clothing": <i class="bx bx-female-sign"></i>
};

const Sidebar = ({ scrolled, active, setSelectedCategory, setActive }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const categoriesList = useSelector((state) => state.products.categories);

  useEffect(() => {
    if (!categoriesList) {
      dispatch(getCategories());
    } else {
      setCategories(categoriesList);
    }
  }, [categoriesList, dispatch]);

  const handleClickCategory = (item) => {
    if (item) {
      dispatch(getProductsBasedOnCategories(item));
      setSelectedCategory(item);
    } else {
      dispatch(getProductsList());
      setSelectedCategory('All Products');
    }
  };

  return (
    <div className={scrolled ? `sidebar ${active ? 'open' : ''}` : 'd-none'}>
      <div className="logo_content"></div>
      <ul className="nav_list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search for Product" />
        </li>
        {categories.length &&
          categories.map((item, index) => (
            <li key={index} onClick={() => handleClickCategory(item)}>
              <span alt="icon" className="icon">
                {iconMap[item]}
                <span>{item}</span>
              </span>
              {!active && <span className="tool-tip">{item}</span>}
            </li>
          ))}
        <li onClick={() => handleClickCategory('')}>
          <span alt="icon" className="icon">
            <i class="bx bx-grid-alt"></i>
            <span>All Category</span>
          </span>
          {!active && <span className="tool-tip">All Category</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
