import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-500 flex justify-around p-2 sticky top-0 ">
      <div className="text-5xl">Logo</div>
      <div className="flex gap-12 text-3xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex gap-10">
        <Button>Login</Button>
        <Button>Sign Up</Button>
        <NavLink to="/ViewCart">
          <Button>View Cart</Button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
