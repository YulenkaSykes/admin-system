import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/Pages/profiles.module.scss";
import { Icon } from "@mui/material";
import { Navigate } from "react-router-dom";
import CardEdit from "../Cards/CardEdit.js";
import ModalComponent from "../Shared/ModalComponent";
import { getUsers } from "../../thunks";

const Profiles = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className={`${styles.wrapperProfiles}`}>
      <h1 className={styles.text}>Profiles:</h1>
      <div className={`row ${styles.profiles}`}>
        {user?.profiles.map((user) => (
          <CardEdit profileDisplay={user} />
        ))}
        <div className={`col centered ${styles.card}`}>
          <button
            className={` ${styles.cardButton}`}
            onClick={() => setToggle(!toggle)}
          >
            <Icon fontSize="large">addcircle</Icon>
          </button>
          {toggle && <ModalComponent open={toggle} setOpen={setToggle} />}
        </div>
      </div>
      {!user && <Navigate to="/login" />}
    </div>
  );
};

export default Profiles;
