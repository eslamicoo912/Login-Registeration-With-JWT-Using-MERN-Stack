import axios from "axios";

const url = "http://localhost:5000";

export const createUser = (newUser) => axios.post(`${url}/users`, newUser);
export const loginUser = (userData) =>
  axios.post(`${url}/users/login`, userData);
export const editUser = (id, newData) =>
  axios.post(`${url}/users/${id}`, newData);
export const getUser = (id) => axios.get(`${url}/users/${id}`);
