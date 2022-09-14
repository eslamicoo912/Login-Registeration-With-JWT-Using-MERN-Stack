import * as api from "../../api";

export const createUser = (newUser) => async (dispatch) => {
  try {
    const response = await api.createUser(newUser);
    const action = { type: "CREATE", payload: response.data };
    alert("User created successfully");
    dispatch(action);
    window.location = "/login";
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  const response = await api.loginUser(userData);
  try {
    const action = { type: "LOGIN", payload: response.data };
    localStorage.setItem("id", response.data.id);
    localStorage.setItem("username", response.data.username);
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
    alert("Logged in successfully");
    dispatch(action);
    window.location = "/";
  } catch (error) {
    alert(response.data.message);
  }
};

export const editUser = (id, newData) => async (dispatch) => {
  const response = await api.editUser(id, newData);
  try {
    const action = { type: "EDIT", payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
