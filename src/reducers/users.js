const usersReducer = (users = null, action) => {
  switch (action.type) {
    case "INIT_USERS":
      return action.payload;
    default:
      return users;
  }
};

export default usersReducer;
