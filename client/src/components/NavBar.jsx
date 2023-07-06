import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logout } from "../api/auth";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const { user, setLoggedIn, setUser } = useAuth();
  console.log("user is: ", user);
  const navigate = useNavigate();

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
      setUser({ id: null, username: "Guest" });
      setLoggedIn(false);
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="Nav">
      <h1 className="main">
        <Link to="/">SNRKS</Link>
        </h1>
      <input
        className="searchBar"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <h3 className="links">
        <div>
          {user.id ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <div>
              <Link to="/login">Login/Register</Link>
            </div>
          )}
        </div>
        <div>
          <Link to="/checkout">Cart</Link>
        </div>
      </h3>
    </div>
  );
}

{
  /* <div className="search-wrapper">
        <div className="input=holder">
          <input
            type="text"
            className="search-input"
            placeholder="Type to search"
            value={searchInput}
            onChange={handleChange}
          />
          <button className="search-icon" onClick="searchToggle(this,event)">
            <span></span>
          </button>
        </div>
        <span className="close" onClick="searchToggle(this, event)"></span>
      </div> */
}
