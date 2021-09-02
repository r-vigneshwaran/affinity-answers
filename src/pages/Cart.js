import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from 'components/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const cartList = useSelector((state) => state.products.cart);

  useEffect(() => {
    if (cartList || cartList?.length > 0) {
      setCartItems(cartList);
      setSubTotal(cartList.reduce((a, b) => a + (b['price'] || 0), 0));
    }
  }, [cartItems, cartList]);

  return (
    <div
      className={`cart-container ${
        cartList || cartList?.length > 0 ? '' : 'empty'
      }`}
    >
      <h5 className="title">Your Shopping Bag</h5>
      <div className="container flex-col">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="empty-cart">
            <h4>Empty Cart</h4>
          </div>
        )}
        {subTotal > 0 && (
          <div className="checkout flex-row w-100">
            <Link to="/" className="back flex-row flex-center">
              <i class="bx bx-arrow-back"></i>
              <p>Back to Shop</p>
            </Link>
            <div className="sub-total flex-row">
              <p>Subtotal</p>&nbsp; : &nbsp; <p>{subTotal}</p>
              <Link to="/checkout" className="btn-checkout">
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
