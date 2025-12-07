import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.mjs";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://egspillay.vercel.app",
      "https://egscollege.vercel.app"
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);




// ROUTES
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server Connected on", PORT);
});
