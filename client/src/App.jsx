import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar";
import ViewProduct from "./components/ViewProduct";
import React, { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <header>
        <NavBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ViewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
