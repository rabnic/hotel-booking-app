import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
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
import AppAdmin from "./AppAdmin";
import AppGuests from "./AppGuests";


function App() {
  // testAdd();
  useEffect(() => {
    // getAllRooms();
  }, []);

  return (
    <>
    <BrowserRouter>
    {false ?
        <AppAdmin />
        :
        <AppGuests />}
    </BrowserRouter>
    </>
  );
}

export default App;
