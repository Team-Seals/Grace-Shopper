import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewPost } from "../api/products";

export default function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchSinglePost() {
      const response = await viewPost(id);
      console.log("Single Product:", response);
      setProduct(response);
    }
    fetchSinglePost();
  }, []);

  return (
    <div>
      <h1>Single Post</h1>
      <div>
        {product && (
          <div>
            <img src={product.imageUrl} alt="product image" />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button>Add To Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}
