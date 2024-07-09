import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/place-order/PlaceOrder";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
import Verify from "./pages/verify/Verify";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <> </>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
