// eslint-disable-next-line import/no-anonymous-default-export
export default (users = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...users, action.payload];
    case "LOGIN":
      return action.payload;
    case "EDIT":
      return action.payload;
    default:
      return users;
  }
};
