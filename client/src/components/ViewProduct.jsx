import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewPost } from "../api/products";
import { addItemToCart } from "../api/cart_items";

export default function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchSinglePost() {
      const response = await viewPost(id);
      console.log("Single Product:", response);
      setProduct(response);
    }
    fetchSinglePost();
  }, []);

  const handleClick = async () => {
    console.log("adding to cart!");
    const response = await addItemToCart(product.id, 1);
    setCartItems(response);
  };

  return (
    <div>
      <h1>Single Post</h1>
      <div>
        {product && (
          <div>
            <img src={product.image_url} alt="product image" />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button onClick={() => handleClick()}>Add To Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}
