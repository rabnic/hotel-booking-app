import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

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
import Home from "./pages/guests/home";
import Booking from "./pages/guests/booking";
import Confirmation from "./pages/guests/confirmation";
import Contact from "./pages/guests/contact";
import Facilites from "./pages/guests/facilities";

function AppGuests() {
  // testAdd();
  useEffect(() => {
    // getAllRooms();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/room" element={<Room />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="booking" element={<Booking />} />
        <Route path="booking/confirmation" element={<Confirmation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="facilities" element={<Facilites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppGuests;
