import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/users";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(formData));
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
        <h2>Sign In</h2>
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
