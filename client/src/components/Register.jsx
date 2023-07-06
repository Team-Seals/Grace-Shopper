import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("username and password:", newUsername, newPassword);

    if (newPassword.length < 8) {
      console.log("Password should be at least 8 characters long.");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
      });
      const result = await response.json();
      console.log("REGISTER RESULT:", result);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <div className="login-container">
        <h2 className="login-title">Register</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="label" htmlFor="email">
            E-mail
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="button">Submit</button>
          <Link className="signup-link" to="/login">
            Already have an accout? Login now!
          </Link>
        </form>
      </div>
    </div>
  );
}
