import React from "react";
import { useState, useEffect } from "react";

const Registeration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
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
    <div className="register text-center mt-5 pt-5">
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
        <input
          className="form-control w-25 my-4 m-auto"
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          placeholder="confirm password"
        />
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registeration;
