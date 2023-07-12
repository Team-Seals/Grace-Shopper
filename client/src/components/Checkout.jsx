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

  // async function handleDelete(id) {
  //   try {
  //     const response = await deleteCartItem(id);
  //     console.log("response in handleDelete:", response);

  //     const updatedCartItem = await getCartItems();
  //     console.log("result from deleting cart item:", updatedCartItem);

  //     if (Array.isArray(updatedCartItem)) {
  //       setCartItems([...updatedCartItem]);
  //     } else {
  //       console.log("Invalid response for cart items.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div>
      <h1 className="Title">Order Review</h1>
      <div>
        <h3 className="Item-list">Your Items</h3>
        {/* {cart &&
          cart.products.map((product) => (
            <div>
              <h1>{product.title}</h1>
            </div>
          ))} */}

        {/* {cart && cart.products.map((p) => <p>{p.title}</p>)} */}
      </div>
    </div>
  );
}
