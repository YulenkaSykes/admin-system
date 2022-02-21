import React, { useState, useEffect, useCallback } from "react";
import { TextField } from "@mui/material";
import styles from "../../styles/Pages/signIn.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { registLogin } from "../../thunks";

const SignIn = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  useEffect(() => {}, [formData]);

  const onChange = useCallback(
    (fild, value) => {
      setFormData({ ...formData, [fild]: value });
    },
    [formData]
  );

  return (
    <div className={`col centered ${styles.sign}`}>
      <div className={styles.header}>
        <h1>Sing in</h1>
      </div>

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

      <button onClick={() => dispatch(registLogin(formData))}>Sign in</button>

      <div className={`${styles.footer}`}>
        <span>If you don`t have an account</span>
        <Link className={styles.link} to="/">
          Sign up
        </Link>
      </div>

      {user && <Navigate to="/profiles" />}
    </div>
  );
};

export default SignIn;
