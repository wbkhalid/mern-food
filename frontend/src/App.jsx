import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/place-order/PlaceOrder'
import NavBar from './components/navbar/NavBar'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
   {/* <Routes>
        <Route Component='/' element={<Home />} />
        <Route Component='/cart' element={<Cart />} />
        <Route Component='/place-order' element={<PlaceOrder />} />
      </Routes> */}
    </div>
  )
}

export default App
