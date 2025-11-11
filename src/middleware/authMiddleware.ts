import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../modules/config/token";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        message: "Токен не представлен",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token as string);

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Неверный или просроченный токен",
    });
  }
};

export default authMiddleware;
