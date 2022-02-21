import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Pages/dashboard.module.scss";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const users = useSelector((store) => store.users);
  const user = useSelector((store) => store.user);

  const countProfiles = useCallback(() => {
    return users.reduce((acc, user) => (acc += user.profiles.length), 0);
  }, [users]);


  const countAdultUsers = useCallback(() => {
    return users?.reduce(
      (acc, user) =>
        (acc += user.profiles.filter(
          (profile) =>
            +new Date(Date.now()).getFullYear() -
              +profile.birthdate.split("-")[0] >
            17
        ).length),
      0
    );
  }, [users]);

  return (
    <div className={styles.wrapperDashboard}>
      <h1 className={styles.text}>Dashboard:</h1>
      {users && (
        <div className={`row ${styles.dashboard}`}>
          <div className={` col centered ${styles.card}`}>
            <h2>Users:</h2>
            <h1>{users?.length}</h1>
          </div>
          <div className={` col centered ${styles.card}`}>
            <h2>Profiles:</h2>
            <h1>{users && countProfiles()}</h1>
          </div>
          <div className={` col centered ${styles.card}`}>
            <h2>Profiles over 18 years old:</h2>
            <h1>{users && countAdultUsers()}</h1>
          </div>
        </div>
      )}
      {!user && <Navigate to="/login" />}
    </div>
  );
};

export default Dashboard;
