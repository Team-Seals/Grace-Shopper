import React, { useEffect, useState } from "react";
import { getCartItems } from "../api/cart_items";

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

  return (
    <div>
      <h1 style="color:red; text-align: center;">Order Review</h1>
      <div>
        <h3 style="color:red; text-align: center;">Your Items</h3>

        {cartItems.length > 0 &&
          cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <h3>{cartItem.id}</h3>
              <p>{cartItem.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
