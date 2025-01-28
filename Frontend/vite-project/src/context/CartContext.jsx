import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{},{},{}]

  // Adding Product to Cart
  // const addProductstoCart = (newItem) => {
  //   setCart((prev) => [...prev, newItem]);
  // };

  const addProductstoCart = (newItem) => {
    setCart((prev) => {
      // check items exits
      const exitsItems = prev.findIndex((items) => items.id === newItem.id);

      console.log(exitsItems);

      if (exitsItems !== -1) {
        console.log(exitsItems);

        return prev.map((items, index) => {
          if (index === exitsItems) {
            return { ...items, quantity: (items.quantity || 1) + 1 };
          }
          return items
        });
      } else {
        return [...prev, newItem];
      }
    });
  };

  // Reading Data from Cart - cart

  // Update a Data in Cart
  const updateCart = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
  };

  // Removing Items From Cat
  const removeItemsFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Delete a All Data from Cart
  const deleteAllDataFromCart = () => {
    setCart([]);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addProductstoCart,
          deleteAllDataFromCart,
          removeItemsFromCart,
          updateCart,
        }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
