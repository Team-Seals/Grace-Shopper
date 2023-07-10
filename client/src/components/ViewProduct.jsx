import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewProduct() {
  const { id } = useParams();
  const [viewProduct, setViewProduct] = useState("");

  useEffect(() => {
    async function fetchSinglePost() {
      const response = await fetchSinglePost(id);
      console.log("Single post:", response);
    }
  }, []);

  return (
    <div>
      <h1>Single Post</h1>
    </div>
  );
}
