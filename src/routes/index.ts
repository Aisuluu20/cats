import cors from "cors";
import express, { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import catRoutes from "../modules/cat/cat.routes";
const globalRouter = Router();

const server = express();

const corsConfig = {
  origin: [
    "http://localhost:5001",
    "http://localhost:3000",
    "https://cat-store-szm4.onrender.com",
    "https://dashboard.render.com/web/srv-d44tggi4d50c73epptvg",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

server.use(cors(corsConfig));
server.options("*", cors(corsConfig));

server.use(express.json());

globalRouter.use("/cats", catRoutes);
globalRouter.use("/auth", authRoutes);

export default globalRouter;
