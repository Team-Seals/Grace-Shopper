import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { viewPost } from "../api/products";
import { addItemToCart } from "../api/cart_items";

export default function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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
    navigate("/checkout");
  };

  return (
    <div>
      <div className="container">
        {product && (
          <div className="single-product-container">
            <img
              src={product.image_url}
              alt="product image"
              className="single-product-img"
            />
            <h1 className="single-product-title">{product.title}</h1>
            <h4 className="single-product-price">Price:${product.price}</h4>
            <button
              className="single-product-button"
              onClick={() => handleClick()}
            >
              Add To Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
