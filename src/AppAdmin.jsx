import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { addNewRoom, getAllRooms } from "./services/hotel.service";

import "./App.css";
import Footer from "./components/Footer";
// import Navbar from "./components/admin/Navbar_";

import NotFound from "./pages/NotFound";
import NavbarAdmin from "./components/admin/NavbarAdmin";
import NewRoomAdmin from "./pages/admin/NewRoomAdmin";
import HomeAdmin from "./pages/admin/HomeAdmin";
import RoomsAdmin from "./pages/admin/RoomsAdmin";
import UpdateRoomAdmin from "./pages/admin/UpdateRoomAdmin";




function AppAdmin() {
    // testAdd();
    useEffect(() => {
        // getAllRooms();
    }, []);

    return (
        <>
            <NavbarAdmin />
            <Routes>
                <Route path='admin' element={<HomeAdmin />} />
                <Route path='admin/rooms' element={<RoomsAdmin />} />
                <Route path='admin/rooms/new' element={<NewRoomAdmin />} />
                <Route path='admin/rooms/update' element={<UpdateRoomAdmin />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default AppAdmin;
