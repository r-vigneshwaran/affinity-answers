import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsList } from 'actions/productActions';
import Card from 'components/Card';

const Landing = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const productsList = useSelector((state) => state.products.productsList);

  useEffect(() => {
    if (!productsList) {
      dispatch(getProductsList());
    } else {
      setProducts(productsList);
    }
  }, [dispatch, productsList]);

  return (
    <div className="main-content-area">
      <div className="container">
        {products.length > 0 &&
          products.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imgSource={item.image}
              rating={Math.round(item.rating.rate)}
            />
          ))}
      </div>
    </div>
  );
};

export default Landing;
