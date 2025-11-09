import cors from "cors";
import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import catRoutes from "../modules/cat/cat.routes";

const globalRouter = Router();

const corsConfig = cors({
  origin: ["http://localhost:3000", "https://cat-store-szm4.onrender.com"],

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
});

globalRouter.use(corsConfig);

globalRouter.use("/cats", catRoutes);
globalRouter.use("/auth", authRoutes);

export default globalRouter;
