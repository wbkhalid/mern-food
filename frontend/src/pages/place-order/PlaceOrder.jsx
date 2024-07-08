import { useContext, useState } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItem, URL } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    county: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    const orderItems = [];
    food_list?.map((item) => {
      if (cartItem[item?._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item?._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(`${URL}/api/order/place`, orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.href = session_url;
    } else {
      alert("Error");
    }
  };

  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={data.firstName}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={data.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={data.email}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          value={data.street}
          onChange={onChangeHandler}
        />
        <div className="multi-field">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={data.city}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={data.state}
            onChange={onChangeHandler}
          />
        </div>
        <div className="multi-field">
          <input
            type="text"
            placeholder="Zip Code"
            name="zipCode"
            value={data.zipCode}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Country"
            name="county"
            value={data.county}
            onChange={onChangeHandler}
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={data.phone}
          onChange={onChangeHandler}
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
              </p>
            </div>
          </div>
          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
