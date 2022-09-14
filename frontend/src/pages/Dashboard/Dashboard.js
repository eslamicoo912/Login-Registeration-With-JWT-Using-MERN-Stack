import React from "react";
import { useDispatch } from "react-redux";

const Dashboard = ({ id, username }) => {
  const dispatch = useDispatch();

  const edit = () => {
    dispatch();
  };

  if (id && username) {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h4 className="card-title my-3 text-muted">{id && `id: ${id}`}</h4>
          <h4 className="card-title my-3 text-muted">
            {username && `username: ${username}`}
          </h4>
          <button className="btn btn-danger my-3" onClick={() => edit}>
            Edit Username
          </button>
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
