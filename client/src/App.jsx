import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar";

function App() {
  const [healthMsg, setHealthMsg] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch("/api/health");
        if (!response.ok) {
          throw {
            message: "Api is Down 😭",
          };
        }
        const { message } = await response.json();
        setHealthMsg(message);
      } catch (error) {
        setErr(error.message);
      }
    }
    checkHealth();
  }, []);

  return (
    <div>
      <header>
        <h1>SNRKS</h1>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
