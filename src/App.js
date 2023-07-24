import React, { useEffect, useState, createContext, useContext } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUser } from "./services/hotel.service";

import "./App.css";

import AppAdmin from "./AppAdmin";
import AppGuests from "./AppGuests";
// import FullScreenLoader from "./compoments/FullScreenLoader";

const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
}

function App() {
  const [currentUser, setCurrentUser] = useState();
  
  currentUser && console.log(currentUser);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await getUser(user.email)
          .then((result) => {
            setCurrentUser(result);
            console.log("user in", result);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else {
        // No user is signed in
        console.log("user out", user);
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  
  currentUser && console.log(currentUser);

  if (currentUser && currentUser.role === "admin") {
    return (
      <AuthContext.Provider value={currentUser}>
        <AppAdmin user={currentUser} />;
      </AuthContext.Provider>
    )
  }

  return (
    <AuthContext.Provider value={currentUser}>
      <AppGuests />;
    </AuthContext.Provider>
  )
}
export {useAuthContext};
export default App;
