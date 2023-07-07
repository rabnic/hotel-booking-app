import { useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/admin/Navbar";
import NotFound from "./pages/NotFound";
import NewRoom from "./pages/admin/NewRoom";
import Rooms from "./pages/admin/Rooms";

import { addNewRoom, getAllRooms } from "./services/hotel.service";

function App() {

  // testAdd();
  useEffect(()=>{
    getAllRooms();
  },[])

  return (
    <>
    <Navbar />
    {/* <Rooms /> */}
    <NewRoom />
    <Footer />
    </>
  );
}

export default App;
