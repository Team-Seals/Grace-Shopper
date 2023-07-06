import React, { useEffect, useState } from "react";
import { fetchAllCategories } from "../api/categories";
import useAuth from "../hooks/useAuth";
import { fetchMe } from "../api/auth";
import { fetchAllProducts } from "../api/products";

export default function Homepage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { user, setUser } = useAuth();

  useEffect(() => {
    async function fetchCategories() {
      const result = await fetchAllCategories();
      setCategories(result);
    }
    fetchCategories();
  }, []);

  // The user is already being fetching in the AuthContext, so you can read the user from the useAuth hook
  // useEffect(() => {
  //   async function fetchUser() {
  //     const userResult = await fetchMe();
  //     setUser(userResult);
  //     console.log("fetching user...", userResult);
  //   }
  //   fetchUser();
  // }, []);

  useEffect(() => {
    async function fetchProducts() {
      const productResult = await fetchAllProducts();
      setProducts(productResult);
      console.log("Products on HP", productResult);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <p className="welcome-text">welcome to SNRKS!</p>
      <div className="homepage">
        <div className="categories">
          <h2>categories</h2>
          {categories.length > 0 &&
            categories.map((category) => (
              <div key={category.id}>
                <h4 className="category">{category.name}</h4>
              </div>
            ))}
        </div>
        <div className="products">
          <h2>Products</h2>
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.id}>
                <h4>{product.title}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
