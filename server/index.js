import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./database/connectDB.js";
import router from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
// app.use(cors());
app.use(cookieParser());

app.use("/auth", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log("Server is running..");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
