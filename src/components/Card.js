import React, { useState, useEffect } from 'react';
import {
  faEye,
  faHeart,
  faShoppingCart,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

const Card = ({ item, handleClickAddToCart }) => {
  const [isInCart, setIsInCart] = useState(false);
  const cartList = useSelector((state) => state.products.cart);
  const array = new Array(5).fill(false);
  for (var i = 0; i < Math.round(item.rating.rate); i++) {
    array[i] = true;
  }
  useEffect(() => {
    if (cartList) {
      setIsInCart(cartList.some((i) => i.id === item.id));
    }
  }, [cartList, item.id]);

  return (
    <div className="card">
      <div className="imgBox">
        <img src={item.image} alt="headphone" />
        <ul className="action">
          <li>
            <FontAwesomeIcon icon={faHeart} color="#000" />
            <span>Add to Wishlist</span>
          </li>
          <li
            className={isInCart ? 'disabled' : ''}
            onClick={() => handleClickAddToCart(item)}
          >
            {isInCart ? (
              <>
                <i className="bx bxs-trash-alt"></i>
                <span>Remove from Cart</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faShoppingCart} color="#000" />
                <span>Add to Cart</span>
              </>
            )}
          </li>
          <li>
            <FontAwesomeIcon icon={faEye} color="#000" />
            <span>Product Details</span>
          </li>
        </ul>
      </div>
      <div className="card-content">
        <div className="product-name">
          <h3>{item.title}</h3>
        </div>
        <div className="price-rating">
          <h2>${item.price}</h2>
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
