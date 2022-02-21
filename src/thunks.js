export const register = (user, formData) => {
  return async (dispatch) => {
    const create = await fetch("/registration", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST",
    });
    const json = await create.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.createdUser });
  };
};

export const registLogin = (formData) => {
  return async (dispatch) => {
    const login = await fetch("/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST",
    });
    const json = await login.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.createdUser });
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const usersAll = await fetch("/users", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const json = await usersAll.json();
    dispatch({ type: "INIT_USERS", payload: json.allUsers });
  };
};

export const deleteProfile = (user, name) => {
  return async (dispatch) => {
    const profile = await fetch("/deleteProfile", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, name }),
      method: "DELETE",
    });
    const json = await profile.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.updatedUser });
  };
};

export const editProfile = (user, formData, profile) => {
  return async (dispatch) => {
    const edit = await fetch("/editProfile", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        profile: formData,
        oldName: profile.name,
      }),
      method: "PATCH",
    });

    const json = await edit.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.updatedUser });
  };
};

export const createProfile = (user, formData) => {
  return async (dispatch) => {
    const create = await fetch("/createProfile", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, profile: formData }),
      method: "PATCH",
    });
    const json = await create.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.updatedUser });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("user", null);
  };
};

export const storageAdult = (user) => {
  return () => {
    user &&
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, createdAt: new Date().getMonth() })
      );
  };
};

export const storage = () => {
  return (dispatch) => {
    if (localStorage.getItem("user")) {
      const localUser = JSON.parse(localStorage.getItem("user"));
      +localUser?.createdAt === +new Date(Date.now()).getMonth() &&
        dispatch({
          type: "LOGIN/REGISTER",
          payload: localUser,
        });
    }
  };
};
