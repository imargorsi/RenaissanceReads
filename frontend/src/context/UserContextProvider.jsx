import UserContext from "./userContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  // crated a provider to provide the values

  const [isLoggedIn, setisLoggedIn] = useState(false); // state to store the user

  return (
    // value is the object that we want to provide
    <UserContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
