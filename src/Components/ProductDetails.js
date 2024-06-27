import React, { useState, useEffect } from 'react';
import ProductService from '../Services/ProductService' 
import CartService from '../Services/CartService';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await ProductService.getProductById(productId);
        setProduct(product);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      CartService.addToCart(product);
      alert('Product added to cart');
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
