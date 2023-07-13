import React, { useEffect, useState } from "react";
import { deleteCartItem, getCartItems } from "../api/cart_items";
import { getUserCart } from "../api/orders";

export default function Checkout() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function fetchCartItems() {
      const result = await getUserCart();
      console.log("this should be cart: ", result);
      setCart(result);
    }
    fetchCartItems();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await deleteCartItem(id);
      console.log("response in handleDelete:", response);

      const updatedCart = await getUserCart();
      setCart(updatedCart);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Checkout">
      {cart ? (
        <>
          <h1 className="cart-title">Your Cart</h1>
          <div className="cart-container">
            {cart?.products.map((p) => (
              <div className="single-cart-container" key={p.id}>
                <img
                  src={p.image_url}
                  alt="product image"
                  className="cart-img"
                />
                <h1 className="cart-product-title">{p.title}</h1>
                <h4 className="cart-product-price">${p.price}</h4>
                <h3 className="cart-product-qty">Qty:{p.quantity}</h3>
                <button onClick={() => handleDelete(p.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="order-div">
            <button className="cart-order-button">Order</button>
          </div>
        </>
      ) : (
        <p>Loading cart...</p>
      )}
    </div>
  );
}
