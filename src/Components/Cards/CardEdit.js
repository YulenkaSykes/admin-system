import { Icon } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/Cards/cardEdit.module.scss";
import ModalComponent from "../Shared/ModalComponent";
import { deleteProfile } from "../../thunks";

const CardEdit = ({ profileDisplay }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`row ${styles.wrapperCard}`}>
      <div className={`col ${styles.card}`}>
        <div className="col centered">
          <p>{profileDisplay.name}</p>
          <p>{profileDisplay.gender}</p>
          <p>{profileDisplay.birthdate}</p>
          <p>{profileDisplay.city}</p>
        </div>

        <div className={`row ${styles.cardButton}`}>
          <button
            className={`row centered ${styles.buttonLeft}`}
            onClick={() => setToggle(!toggle)}
          >
            Edit
            <Icon style={{ margin: "5px" }} fontSize="small">
              edit
            </Icon>
          </button>
          <button
            className={`row centered ${styles.buttonRight}`}
            onClick={() => dispatch(deleteProfile(user, profileDisplay.name))}
          >
            Delete
            <Icon style={{ margin: "5px" }} fontSize="small">
              delete
            </Icon>
          </button>
        </div>
      </div>
      {toggle && (
        <ModalComponent
          open={toggle}
          setOpen={setToggle}
          profile={profileDisplay}
        />
      )}
    </div>
  );
};

export default CardEdit;
