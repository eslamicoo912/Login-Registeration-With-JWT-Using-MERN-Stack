import * as api from "../../api";

export const createUser = (newUser) => async (dispatch) => {
  try {
    const response = await api.createUser(newUser);
    const action = { type: "CREATE", payload: response.data };
    alert("User created successfully");
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await api.loginUser(userData);
    const action = { type: "LOGIN", payload: response.data };
    localStorage.setItem("currentToken", response.data.token);
    alert("Logged in successfully");
    dispatch(action);
  } catch (error) {
    alert("Wrong username or password");
  }
};
