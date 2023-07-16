import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logout } from "../api/auth";

export default function NavBar({ setSearchInput }) {
  const { user, setLoggedIn, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const logoutResult = await logout();
      console.log("Logout result:", logoutResult);
      setUser({ id: null, username: "Guest" });
      setLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
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
        onChange={(e) => setSearchInput(e.target.value)}
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
