import cors from "cors";
import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import catRoutes from "../modules/cat/cat.routes";
const globalRouter = Router();

const corsConfig = {
  origin: [
    "http://localhost:5001",
    "http://localhost:3000",
    "https://github.com/Aisuluu20/catback",
    "https://catback.onrender.com",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

globalRouter.use("/cats", cors(corsConfig), catRoutes);
globalRouter.use("/auth", cors(corsConfig), authRoutes);

export default globalRouter;
