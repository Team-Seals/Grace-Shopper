import React, { useEffect, useState } from "react";
import { fetchAllCategories } from "../api/categories";
import useAuth from "../hooks/useAuth";
import { fetchMe } from "../api/auth";
import { fetchAllProducts } from "../api/products";

export default function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  useEffect(() => {
    async function fetchUser() {
      const userResult = await fetchMe();
      setUser(userResult);
      console.log("fetching user...", userResult);
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const productResult = await fetchAllProducts();
      setProducts(productResult);
      console.log("Products on HP", productResult);
    }
    fetchProducts();
  }, []);

  console.log("Selected Category", selectedCategory);
  const filteredProducts = products.filter(
    (product) => product.category_id === selectedCategory
  );
  const productsToDisplay = filteredProducts.length
    ? filteredProducts
    : products;
  return (
    <div>
      <p className="welcome-text">welcome to SNRKS!</p>
      <div className="homepage">
        <div className="categories">
          <h2>categories</h2>
          <div>
            <h4 onClick={() => setSelectedCategory(null)} className="category">
              All Categories
            </h4>
          </div>
          {categories.length > 0 &&
            categories.map((category) => (
              <div
                onClick={() => setSelectedCategory(category.id)}
                key={category.id}
              >
                <h4 className="category">{category.name}</h4>
              </div>
            ))}
        </div>
        <div className="products">
          <h2>Products</h2>
          {productsToDisplay.map((product) => (
            <div key={product.id}>
              <h4>{product.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
