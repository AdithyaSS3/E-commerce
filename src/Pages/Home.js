import React from 'react';
import ProductList from '../Components/ProductList';

const Home = () => {
  const handleProductSelect = (product) => {

    console.log('Selected product:', product);
  };

  return (
    <div>
      <h1>Welcome to Fruit & Vegetable Seller</h1>
      <ProductList onProductSelect={handleProductSelect} />
    </div>
  );
};

export default Home;
