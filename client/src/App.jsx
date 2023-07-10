import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar";
import AllProduct from "./components/AllProduct";
import ViewProduct from "./components/ViewProduct";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<AllProduct />} />
        <Route path="/product/:id" element={<ViewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
