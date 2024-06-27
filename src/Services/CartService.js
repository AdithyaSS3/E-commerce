let cartItems = [];

const CartService = {
  addToCart: (product) => {
    cartItems.push(product);
  },

  removeFromCart: (productId) => {
    cartItems = cartItems.filter(item => item.id !== productId);
  },

  getCartItems: () => {
    return cartItems;
  }
};

export default CartService;
