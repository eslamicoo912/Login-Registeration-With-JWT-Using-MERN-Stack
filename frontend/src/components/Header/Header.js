import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const tokenItem = localStorage.getItem("token");
  return (
    <div className="header d-flex justify-content-between">
      <h1>JWT Practice</h1>
      {!tokenItem && (
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="register">Sign up</Link>
        </div>
      )}
      {tokenItem && (
        <Link
          to="/"
          onClick={() => {
            localStorage.clear();
            window.location = "/login";
          }}
        >
          Logout
        </Link>
      )}
    </div>
  );
};

export default Header;
