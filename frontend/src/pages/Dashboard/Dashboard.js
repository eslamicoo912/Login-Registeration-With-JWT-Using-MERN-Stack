import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser, getUser } from "../../redux/actions/users";

const Dashboard = ({ id, username }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [inputs, setInputs] = useState(false);

  const edit = () => {
    setInputs((state) => !state);
  };

  const done = (e) => {
    e.preventDefault();
    dispatch(editUser(id, formData));
    edit();
  };
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  if (id && username) {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h4 className="card-title my-3 text-muted">{id && `id: ${id}`}</h4>
          <h4 className="card-title my-3 text-muted">
            {username && `username: ${username}`}
          </h4>
          <button className="btn btn-danger my-3" onClick={edit}>
            Edit
          </button>
          {inputs && (
            <div className="inputs">
              <form onSubmit={done}>
                <input
                  className="w-25 form-control my-3"
                  type="text"
                  placeholder="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <input
                  className="w-25 form-control my-3"
                  type="password"
                  placeholder="passworrd"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button className="btn btn-dark my-2" type="submit">
                  Done
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 text-center">
      <h2>Login to access our features</h2>
    </div>
  );
};

export default Dashboard;
