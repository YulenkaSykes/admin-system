import React, { useState, useEffect, useCallback } from "react";
import { TextField } from "@mui/material";
import styles from "../../styles/Pages/registration.module.scss";
import { Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../thunks";

const Registration = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({ isAdmin: false });

  useEffect(() => {}, [formData]);

  const onChange = useCallback(
    (fild, value) => {
      setFormData({ ...formData, [fild]: value });
    },
    [formData]
  );

  return (
    <div className={`col centered ${styles.registration}`}>
      <h1>Create your account</h1>
      <div className={`col centered ${styles.boxInput}`}>
        <TextField
          id="standard-basic"
          type="text"
          label="Username"
          variant="standard"
          placeholder="Username"
          className={styles.input}
          onChange={(e) => onChange("name", e.target.value)}
        />

        <TextField
          id="standard-basic"
          type="email"
          label="Email"
          variant="standard"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => onChange("email", e.target.value)}
        />

        <TextField
          id="standard-basic"
          type="password"
          label="Password"
          variant="standard"
          placeholder="Password"
          className={styles.input}
          onChange={(e) => onChange("password", e.target.value)}
        />
        <div className={` row centered ${styles.box}`}>
          <div
            className={`${styles.boxCheckbox}`}
            onClick={() => {
              setToggle(!toggle);
              onChange("isAdmin", !formData.isAdmin);
            }}
          >
            {toggle && <div className={styles.checkbox}></div>}
          </div>
          <p>is admin</p>
        </div>

        <button onClick={() => dispatch(register(user, formData))}>
          Sign up
        </button>

        <div className={`${styles.footer}`}>
          <span>If you have an account</span>
          <Link className={styles.link} to="/login">
            Sign in
          </Link>
        </div>

        {user && <Navigate to="/profiles" />}
      </div>
    </div>
  );
};

export default Registration;
