import React, { useEffect, useState } from "react";
import { fetchAllCategories } from "../api/categories";
import useAuth from "../hooks/useAuth";
import { fetchMe } from "../api/auth";

export default function Checkout() {
  return (
    <div>
      return(
      <div>
        <p className="cart-text">SNRKS CHECKOUT!</p>
        <div className="checkout">
          <div className="cart_items">
            <h2>Cart Items</h2>
            {categories.length > 0 &&
              categories.map((category) => (
                <div key={category.id}>
                  <h4 className="cart_items">{category.name}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
      );
    </div>
  );
}
