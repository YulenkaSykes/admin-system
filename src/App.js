import "./App.scss";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { storage, storaageAdult, storageAdult } from "./thunks";

import SignIn from "./Components/Pages/SignIn";
import Registration from "./Components/Pages/Registration";
import Users from "./Components/Pages/Users";
import Profiles from "./Components/Pages/Profiles";
import Dashboard from "./Components/Pages/Dashboard";
import Header from "./Components/Shared/Header";

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {}, [user]);

  useEffect(() => {
    dispatch(storageAdult(user));
  }, [user]);

  useEffect(() => {
    dispatch(storage(dispatch));
  }, []);

  return (
    <Router>
      <div className="col wrapper">
        {user && <Header />}

        <Routes>
          <Route path="/" element={<Registration />}></Route>

          <Route path="/login" element={<SignIn />}></Route>

          <Route path="/profiles" element={<Profiles />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
