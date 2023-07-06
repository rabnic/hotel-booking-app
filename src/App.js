import './App.css';

import Navbar from './components/admin/Navbar';
import NotFound from './pages/NotFound';
import NewRoom from './pages/admin/NewRoom';
import Rooms from './pages/admin/Rooms';

function App() {

  return (
    <>
    <Navbar />
    <Rooms />
    <NewRoom />
    <NotFound />
    </>
  );
}

export default App;
