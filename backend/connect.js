import express from "express";
import 'dotenv/config'; // ES Modules import syntax
import http from "http";
import {Server} from "socket.io";
import cors from "cors";
import {initializeClient} from "./telegram/client.js";
import { setupMessageHandler } from './telegram/messageHandler.js';
import {connectCloudinay} from "./config/cloudinary.js";
import connectDB from './config/mongodb.js';
import dealsRouter from "./routes/dealsRouter.js";



const app = express();
const port = process.env.PORT || 4000;



// Setup server + socket
const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Frontend connected:", socket.id);
});


// App config
await connectCloudinay();
await connectDB();
const client = await initializeClient();
await setupMessageHandler(client, io);


// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/deals" , dealsRouter);



app.get("/" , (req, res) => {
    res.send("App working fine");
})



server.listen(5000, () => {
  console.log("Socket server running on port 5000");
});

app.listen(port , () => console.log("App started on port " + port));