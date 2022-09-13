import React from "react";
import { useState, useEffect } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="register text-center">
      <form onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        <input
          className="form-control w-25 my-4 m-auto"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          className="form-control w-25 my-4 m-auto"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button className="btn btn-dark" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
