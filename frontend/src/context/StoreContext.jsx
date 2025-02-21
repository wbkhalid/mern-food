import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [cartItem, setCartItem] = useState({});
  const [food_list, setFood_list] = useState();

  const URL = "http://localhost:4000";

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    };
    loadData();
  }, []);

  const fetchFoodList = async () => {
    const response = await axios.get(`${URL}/api/food/list`);
    setFood_list(response?.data?.data);
  };

  const addToCart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        `${URL}/api/cart/add`,
        { itemId },
        { headers: { token } }
      );
    }
  };
  const removeToCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        `${URL}/api/cart/remove`,
        { itemId },
        { headers: { token } }
      );
    }
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      `${URL}/api/cart/get`,
      {},
      { headers: { token } }
    );
    setCartItem(response?.data?.cartData);
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeToCart,
    getTotalCartAmount,
    token,
    setToken,
    URL,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
