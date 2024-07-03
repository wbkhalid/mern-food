import { placeOrder } from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

const orderRoute = express.Router();

orderRoute.post("/place", authMiddleware, placeOrder);

export default orderRoute;
