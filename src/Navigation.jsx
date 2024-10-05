import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { UserContext } from "./user.context";
import { signOutAuthUser } from "./firebase";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutAuthUser(navigate, setCurrentUser);
  }

  return (
    <div className="nav">
      <Link className="name" to="/">
        DEV@Deakin
      </Link>
      <input type="search" placeholder="Search..." />
      <div className="links">
        
        <Link className="link" to="/post">
          Post
        </Link>
        {currentUser ? (
          <span className="link" onClick={handleSignOut}>
            Logout
          </span>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
