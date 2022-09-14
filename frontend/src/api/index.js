import axios from "axios";

const url = "http://localhost:5000";

export const createUser = (newUser) => axios.post(`${url}/users`, newUser);
export const loginUser = (userData) =>
  axios.post(`${url}/users/login`, userData);
export const editUser = (id, newData) => axios.post(`${url}/${id}`, newData);
export const getUser = (username) => axios.get(`${url}/${username}`);
