import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const auth = useAuth();
  console.log("user:", auth);

  const categories = [
    { name: "Casual" },
    { name: "Running" },
    { name: "Lifestyle" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    categories.filter((category) => {
      return category.name.match(searchInput);
    });
  }

  return (
    <div className="Nav">
      <p>logo</p>
      <div>
        <input
          className="searchbar"
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
      <div>
        {/* {user ? (
          <h2>{`Hello ${user}`}</h2>
        ) : (
          <div>
            <Link to="/login">Login/Register</Link>
          </div>
        )} */}
        <div>
          <Link to="/checkout">Cart</Link>
        </div>
      </div>
    </div>
  );
}
