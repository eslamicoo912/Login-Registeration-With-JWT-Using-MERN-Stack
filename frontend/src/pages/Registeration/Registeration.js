import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/users";

const Registeration = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createUser(formData));
    setFormData({ username: "", password: "" });
    window.location = "/login";
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
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registeration;
