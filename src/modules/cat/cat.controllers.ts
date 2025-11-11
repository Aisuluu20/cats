import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getAllCat = async (req: Request, res: Response) => {
  try {
    const cats = await prisma.cats.findMany();

    return res.status(200).json({
      success: true,
      data: cats,
    });
  } catch (error) {
    console.error("Error in getAllCat:", error);
    return res.status(500).json({
      success: false,
      error: `Error in getAllCat: ${error}`,
    });
  }
};

export const postCat = async (req: Request, res: Response) => {
  try {
    const { name, age, color, sale, price, url, paws } = req.body;

    const post = await prisma.cats.create({
      data: {
        name,
        color,
        url,
        age: Number(age),
        price: Number(price),
        paws: Number(paws),
        sale: Number(sale),
      },
    });

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

export const updateCat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ success: false, error: "ID is required" });
    }

    const allowedFields = [
      "name",
      "age",
      "breed",
      "color",
      "price",
      "sale",
      "paws",
      "url",
    ];
    const dataToUpdate: Record<string, any> = {};

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        dataToUpdate[field] = req.body[field];
      }
    }

    if (Object.keys(dataToUpdate).length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "No fields to update" });
    }

    const updatedCat = await prisma.cats.update({
      where: { id },
      data: dataToUpdate,
    });

    res.status(200).json({ success: true, data: updatedCat });
  } catch (error) {
    console.error("Error in updateCat:", error);
    res
      .status(500)
      .json({ success: false, error: `Error in updateCat: ${error}` });
  }
};

export const deleteCat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "ID is required",
      });
    }

    const deletedCat = await prisma.cats.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      data: deletedCat,
    });
  } catch (error) {
    console.error("Error in deleteCat:", error);
    res.status(500).json({
      success: false,
      error: `Error in deleteCat: ${error}`,
    });
  }
};
