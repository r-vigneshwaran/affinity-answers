import React, { useState } from 'react';

const CartItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const handleClickPlus = () => {
    if (count >= 10) return;
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={item.image} className="responsive" alt="cart-img" />
      </div>
      <div className="cart-title">
        <p>{item.title}</p>
        <small>{item.category}</small>
      </div>
      <div className="cart-category">
        <p>{item.category}</p>
      </div>
      <div className="item-count">
        <div className="count">{count}</div>
        <div className="count-icons">
          <i onClick={handleClickPlus} className="bx bxs-plus-circle"></i>
          <i onClick={handleClickMinus} className="bx bxs-minus-circle"></i>
        </div>
      </div>
      <div className="price">
        <p>$ {item.price}</p>
      </div>
      <div className="remove">
        <i class="bx bx-x"></i>
      </div>
    </div>
  );
};

export default CartItem;
