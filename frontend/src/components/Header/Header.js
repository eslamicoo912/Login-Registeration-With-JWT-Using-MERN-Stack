import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const tokenItem = localStorage.getItem("currentToken");
  return (
    <div className="header d-flex justify-content-between">
      <h1>JWT Practice</h1>
      {!tokenItem && (
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="register">Sign up</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
