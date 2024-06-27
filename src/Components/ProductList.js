import React, { useState, useEffect } from 'react';
import ProductService from '../Services/ProductService';


const ProductList = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await ProductService.getProducts();
        setProducts(products);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onProductSelect(product)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
