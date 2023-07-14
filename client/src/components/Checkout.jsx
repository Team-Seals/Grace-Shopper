import React, { useEffect, useState } from "react";
import { deleteCartItem, getCartItems } from "../api/cart_items";
import { getUserCart } from "../api/orders";

export default function Checkout() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function fetchCartItems() {
      const result = await getUserCart();
      setCart(result);
    }
    fetchCartItems();
  }, []);

  async function handleDelete(product_id, order_id) {
    try {
      const response = await deleteCartItem(product_id, order_id);
      console.log("response in handleDelete:", response);

      const updatedCart = await getUserCart();
      setCart(updatedCart);
    } catch (error) {
      console.error(error);
    }
  }
  console.log("cart:", cart);
  return (
    <div>
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-container">
        {cart?.products?.length ? (
          cart.products.map((p) => (
            <div key={p.id} className="single-cart-container">
              <img src={p.image_url} alt="product image" className="cart-img" />
              <h1 className="cart-product-title">{p.title}</h1>
              <h4 className="cart-product-price">${p.price}</h4>
              <h3 className="cart-product-qty">Qty:{p.quantity}</h3>
              <button onClick={() => handleDelete(p.product_id, cart.id)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div className="order-div">
        <button className="cart-order-button">Order</button>
      </div>
    </div>
  );
}
