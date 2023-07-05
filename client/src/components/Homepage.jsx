import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { fetchAllCategories } from "../api/categories";
import useAuth from "../hooks/useAuth";
import { fetchMe } from "../api/auth";

export default function Homepage() {
  const [categories, setCategories] = useState([]);
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

  return (
    <div>
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
