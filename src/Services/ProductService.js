
const ProductService = {
    getProducts: async () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const products = [
            { id: 1, name: 'Apple', price: 1.99, description: 'Fresh apples from local farm' },
            { id: 2, name: 'Banana', price: 0.99, description: 'Organic bananas' },
            { id: 3, name: 'Orange', price: 1.49, description: 'Juicy oranges' }
          ];
          resolve(products);
        }, 1000); 
      });
    },
  
    getProductById: async (productId) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const product = {
            id: productId,
            name: 'Apple',
            price: 1.99,
            description: 'Fresh apples from local farm'
          };
          resolve(product);
        }, 500); 
      });
    }
  };
  
  export default ProductService;
  