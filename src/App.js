import { useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/admin/Navbar";
import NotFound from "./pages/NotFound";
import NewRoom from "./pages/admin/NewRoom";
import Rooms from "./pages/admin/Rooms";

import { addNewRoom, getAllRooms } from "./services/hotel.service";
import Login from "./pages/guests/Login";
import Register from "./pages/guests/Register";

function App() {

  // testAdd();
  useEffect(()=>{
    getAllRooms();
  },[])

  return (
    <>
    <Navbar />
    {/* <Rooms /> */}
    {/* <NewRoom /> */}
    {/* <Login /> */}
    <Register />
    <Footer />
    </>
  );
}

export default App;
