import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewPost } from "../api/products";

export default function ViewProduct() {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    async function fetchSinglePost() {
      const response = await viewPost(id);
      console.log("Single post:", response);
      setProducts(response);
    }
    fetchSinglePost();
  }, []);

  return (
    <div>
      <h1>Single Post</h1>
      <div>
        {/* {products.map((product) => (
          <div>
            <h2>{product.name}</h2>
          </div>
        ))} */}
      </div>
    </div>
  );
}
