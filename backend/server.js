import express from "express";
import cors from "cors";
import { mongoDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

mongoDB();

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => res.send("API Working"));

app.listen(port, console.log("server running"));
// mongodb+srv://waleedbinkhalidch:mernfood@cluster0.nsxn1eo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
