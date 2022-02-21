import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/Shared/header.module.scss";
import { admin, defaultUser, location, dynamic, users } from "../Images/img";
import { logout } from "../../thunks";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <div className={`row centered sp_btw ${styles.header}`}>
      <div className={`row ${styles.user_role}`}>
        <div className={`row centered ${styles.img}`}>
          <img src={user?.isAdmin ? admin : defaultUser} alt="img" />
        </div>
        <h3>{user.name}</h3>
      </div>
      <div className={`row centered ${styles.links}`}>
        <Link to="/">
          {"Profiles"}
          <img src={location} alt="img" />
        </Link>

        {user.isAdmin && (
          <>
            <Link to="/dashboard">
              {"Dashboard"}
              <img src={dynamic} alt="img" />
            </Link>
            <Link to="/users">
              {"Users"}
              <img src={users} alt="img" />
            </Link>
          </>
        )}

        <Button style={{ margin: "auto" }} onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
