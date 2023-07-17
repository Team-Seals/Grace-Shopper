import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { setLoggedIn, setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      console.log("Please enter username and password");
      return;
    }
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log("response in Login:", response);

      if (response.ok) {
        //successful login
        const user = await response.json();
        setUser(user.user);
        setLoggedIn(true);
        console.log("Login is a success!");
        navigate("/");
      } else {
        //Login failed, display an error message to the user
        console.log("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="label" htmlFor="email">
            E-mail
          </label>
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button">Submit</button>
          <Link className="signup-link" to="/register">
            Don't have an account? Register now!
          </Link>
        </form>
      </div>
    </div>
  );
}
