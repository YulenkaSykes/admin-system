import React from "react";
import styles from "../../styles/Cards/cardUsers.module.scss";

const CardUsers = ({ userToDisplay }) => {
  return (
    <div className={`row ${styles.wrapperCard}`}>
      <div className={`col centered ${styles.card}`}>
        <p>{userToDisplay.name}</p>
        <p>{userToDisplay.email}</p>
        <p>{userToDisplay.profiles.length} profiles</p>
      </div>
    </div>
  );
};

export default CardUsers;
