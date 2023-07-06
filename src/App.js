import "./App.css";
import Footer from "./components/Footer";

import Navbar from "./components/admin/Navbar";
import NotFound from "./pages/NotFound";
import NewRoom from "./pages/admin/NewRoom";
import Rooms from "./pages/admin/Rooms";

function App() {
  return (
    <>
    <Navbar />
    {/* <Rooms /> */}
    <NewRoom />
    </>
  );
}

export default App;
