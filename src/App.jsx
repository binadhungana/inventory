import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

import { CartProvider } from "./Pages/CartContext";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <ToastContainer position="top-center" />
          <Routes>
            <Route path="/viewcart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
