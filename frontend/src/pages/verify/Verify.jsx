import { useNavigate, useSearchParams } from "react-router-dom";
import "./verify.css";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { URL } = useContext(StoreContext);
  const verifyPayment = async () => {
    const response = await axios.post(`${URL}/api/order/verify`, {
      success,
      orderId,
    });

    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className="verify">
      <h1>Payment Verification</h1>
      <p>Payment has been verified successfully</p>
    </div>
  );
};

export default Verify;
