import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Orders from "./pages/orders/Orders";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />

      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
