import React from "react";
import CardUsers from "../Cards/CardUsers";
import styles from "../../styles/Pages/users.module.scss";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Users = () => {
  const users = useSelector((store) => store.users);
  const user = useSelector((store) => store.user);

  return (
    <div className={`${styles.wrapperUsers}`}>
      <h1 className={styles.text}>Users:</h1>
      <div className={`row ${styles.users}`}>
        {users?.map((user) => (
          <CardUsers userToDisplay={user} />
        ))}
      </div>
      {!user && <Navigate to="/login" />}
    </div>
  );
};

export default Users;
