const UserReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "SET_CURRENT_USER":
        return {
          ...state,
          currentUser: payload,
        };
      default:
        throw new Error(`Unhandled type ${type}`);
    }
  };
  
  export default UserReducer;