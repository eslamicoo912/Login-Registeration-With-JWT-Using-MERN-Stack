import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between">
      <h1>JWT Practice</h1>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="register">Sign up</Link>
      </div>
    </div>
  );
};

export default Header;
