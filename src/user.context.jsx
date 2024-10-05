import React, { useReducer, createContext } from "react";
import UserReducer from "./UserReducer";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
