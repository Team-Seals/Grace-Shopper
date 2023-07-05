import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logout } from "../api/auth";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const { user, setLoggedIn } = useAuth();
  const navigate = useNavigate();
  console.log("user in nav", user);

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

  //Loggout result is saying undefined, need the login/register link to show if logged out
  const handleLogout = async () => {
    try {
      const logoutResult = await logout();
      console.log("Logout result:", logoutResult);
      setLoggedIn(false);
      navigate("/");
    } catch (error) {}
  };

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
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <div>
            <Link to="/login">Login/Register</Link>
          </div>
        )}
        <div>
          <Link to="/checkout">Cart</Link>
        </div>
      </div>
    </div>
  );
}
