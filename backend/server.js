import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API Working"));

app.listen(port, console.log("server running"));
// mongodb+srv://waleedbinkhalidch:mernfood@cluster0.nsxn1eo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0