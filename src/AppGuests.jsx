import React, { useEffect } from "react";

import Footer from "./components/Footer";
// import Navbar from "./components/admin/Navbar_";
import Navbar from "./components/guests/Navbar";
import NotFound from "./pages/NotFound";
import NewRoom from "./pages/admin/NewRoomAdmin";
// import Rooms_ from "./pages/admin/Rooms_";

import { addNewRoom, getAllRooms } from "./services/hotel.service";
import Login from "./pages/guests/Login";
import Register from "./pages/guests/Register";
import Rooms from "./pages/guests/rooms";
import Room from "./pages/guests/room";


function AppGuests() {
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
      {/* <Rooms /> */}
      <Rooms />
      <Footer />
    </>
  );
}

export default AppGuests;
