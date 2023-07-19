import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUser } from "./services/hotel.service";

import "./App.css";

import AppAdmin from "./AppAdmin";
import AppGuests from "./AppGuests";
// import FullScreenLoader from "./compoments/FullScreenLoader";


function App() {
  const [currentUser, setCurrentUser] = useState();

  currentUser && console.log(currentUser);

  useEffect(() => {
    // getAllRooms();
    const auth = getAuth();
    const  unsubscribe =  onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        await getUser(user.email)
          .then((result) => {
            setCurrentUser(result);
            console.log("user in", result);
          })
          .catch((error) => {
            console.log(error.message);
          });
        // ...
      } else {
        // User is signed out
        console.log("user out", user);

        setCurrentUser(null);
        // ...
      }
    });
    return () => unsubscribe();
  }, []);
  currentUser && console.log(currentUser);

  if (currentUser && currentUser.role === "admin") {
    return <AppAdmin user={currentUser} />;
  }
 

  return <AppGuests />;

  // return (
  //   <>

  //       <Routes>
  //         <Route
  //           path="*"
  //           element={
  //             currentUser && currentUser.role === "admin" ? (
  //               <AppAdmin />
  //             ) : (
  //               <AppGuests />
  //             )
  //           }
  //         />
  //         <Route
  //           path="/admin/*"
  //           element={
  //             currentUser && currentUser.role === "admin" ? (
  //               <AppAdmin />
  //             ) : (
  //               <AppGuests />
  //             )
  //           }
  //         />
  //       </Routes>

  //   </>
  // );
}

export default App;
