import {
  faEye,
  faHeart,
  faShoppingCart,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Card = ({ title, price, imgSource, rating }) => {
  const array = new Array(5).fill(false);
  for (var i = 0; i < rating; i++) {
    array[i] = true;
  }
  return (
    <div className="card">
      <div className="imgBox">
        <img src={imgSource} alt="headphone" />
        <ul className="action">
          <li>
            <FontAwesomeIcon icon={faHeart} color="#000" />
            <span>Add to Wishlist</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faShoppingCart} color="#000" />
            <span>Add to Cart</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEye} color="#000" />
            <span>Product Details</span>
          </li>
        </ul>
      </div>
      <div className="card-content">
        <div className="product-name">
          <h3>{title}</h3>
        </div>
        <div className="price-rating">
          <h2>${price}</h2>
          <div className="rating">
            {array.map((item, index) =>
              item ? (
                <FontAwesomeIcon key={index} icon={faStar} color="#000" />
              ) : (
                <FontAwesomeIcon
                  key={index}
                  className="grey"
                  icon={faStar}
                  color="#000"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
