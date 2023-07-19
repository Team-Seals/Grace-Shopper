import React, { useEffect, useState } from "react";
import { fetchAllCategories } from "../api/categories";
import useAuth from "../hooks/useAuth";
import { fetchAllProducts } from "../api/products";
import { useNavigate } from "react-router-dom";

export default function Homepage({ searchInput, setSearchInput }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log("selected cat", selectedCategory);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  console.log("products", products);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      const result = await fetchAllCategories();
      setCategories(result);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const productResult = await fetchAllProducts();
      setProducts(productResult);
    }
    fetchProducts();
  }, []);

  const filteredProducts = searchInput
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchInput?.toLowerCase())
      )
    : products.filter((product) => product.category_id === selectedCategory);
  const productsToDisplay = filteredProducts.length
    ? filteredProducts
    : products;

  return (
    <div className="homepage-container">
      <p className="welcome-text">Welcome to SNRKS!</p>
      <div className="homepage">
        <div className="categories">
          <h2 className="categories-title">Categories</h2>
          <div>
            <h4 onClick={() => setSelectedCategory(null)} className="category">
              All Categories
            </h4>
          </div>
          {categories.length > 0 &&
            categories.map((category) => (
              <div
                onClick={() => {
                  setSearchInput("");
                  setSelectedCategory(category.id);
                }}
                key={category.id}
              >
                <h4 className="category">{category.name}</h4>
              </div>
            ))}
        </div>
        <div className="products">
          <h2 className="product-header">Products</h2>
          {productsToDisplay.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image_url}
                alt="product image"
                className="product-img"
              />
              <h4 className="product-title">{product.title}</h4>
              <p className="product-price">${product.price}</p>
              <button
                className="product-button"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
