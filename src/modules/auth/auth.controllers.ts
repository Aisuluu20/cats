import express, { Request, Response } from "express";
import prisma from "../config/prisma";
import bcrypt from "bcryptjs";
import generateToken from "../config/token";

const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, "10");

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const userId = String(user.id);
    const token = generateToken(userId, user.email);
    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in register: ${error}`,
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Такой пользователь не существует!",
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(401).json({
        success: false,
        message: "Неверный пароль!",
      });
    }

    const token = generateToken(user.id, user.name);

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in login: ${error}`,
    });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      success: true,
      message: "Вы успешно вышли!!!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in logout: ${error}`,
    });
  }
};

export default {
  register,
  login,
  logout,
};
