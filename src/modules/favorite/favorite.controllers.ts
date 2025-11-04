import { Request, Response } from "express";
import prisma from "../config/prisma";

const getAllData = async (req: Request, res: Response) => {
  const user = await prisma.favorite.findMany();
  try {
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllCat: ${error}`,
    });
  }
};

const getAllOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({
        success: false,
        error: "ID is required",
      });

    const cat = await prisma.favorite.findUnique({ where: { id } });
    if (!cat)
      return res.status(404).json({
        success: false,
        error: "Cat not found",
      });

    res.status(200).json({ success: true, data: cat });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getCatById: ${error}`,
    });
  }
};

const deleteData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "ID is required",
      });
    }

    const deletedUser = await prisma.favorite.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in deleteCat: ${error}`,
    });
  }
};
export default {
  getAllData,
  getAllOne,
  deleteData,
};
