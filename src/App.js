import React, { useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/admin/Navbar";
import NotFound from "./pages/NotFound";
import NewRoom from "./pages/admin/NewRoom";
// import Rooms_ from "./pages/admin/Rooms_";

import { addNewRoom, getAllRooms } from "./services/hotel.service";
import Login from "./pages/guests/Login";
import Register from "./pages/guests/Register";
import Rooms from "./pages/guests/rooms";


function App() {
  // testAdd();
  useEffect(() => {
    // getAllRooms();
  }, []);

  return (
    <>
      <Navbar />
      {/* <Rooms /> */}
      {/* <NewRoom /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Rooms />
      <Footer />
    </>
  );
}

export default App;
