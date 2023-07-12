import React, { useEffect, useState } from "react";
import { deleteCartItem, getCartItems } from "../api/cart_items";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      const result = await getCartItems();
      console.log("cart-items:", result);
      setCartItems(result);
    }
    fetchCartItems();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await deleteCartItem(id);
      console.log("response in handleDelete:", response);

      const updatedCartItem = await getCartItems();
      console.log("result from deleting cart item:", updatedCartItem);

      if (Array.isArray(updatedCartItem)) {
        setCartItems([...updatedCartItem]);
      } else {
        console.log("Invalid response for cart items.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1 className="Title">Order Review</h1>
      <div>
        <h3 className="Item-list">Your Items</h3>

        {cartItems.length > 0 &&
          cartItems.map((cartItem) => (
            <div className="cart-container" key={cartItem.id}>
              <div className="cart-item">
                <h2 className="cart-item-title">{cartItem.title}</h2>
                <img
                  src={cartItem.image_url}
                  alt="product image"
                  className="cart-img"
                />
                <p>${cartItem.price}</p>
                <button onClick={() => handleDelete(cartItem.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
