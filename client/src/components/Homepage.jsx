import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { fetchAllCategories } from "../api/categories";

export default function Homepage() {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    async function fetchCategories() {
      const result = await fetchAllCategories();
      setCategories(result);
    }
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>HOME PAGE!!!</h1>
      <div>
        <NavBar />
      </div>
      <p>welcome to the home page</p>
      <div className="homepage">
        <div className="categories">
          <h3>categories</h3>
          {categories.length > 0 &&
            categories.map((category) => (
              <div>
                <h4>{category.name}</h4>
                <p></p>
              </div>
            ))}
          <p>1</p>
          <p>2</p>
        </div>
        <div className="products">
          <h3>Products</h3>
          <p>1</p>
          <p>2</p>
        </div>
      </div>
    </div>
  );
}
