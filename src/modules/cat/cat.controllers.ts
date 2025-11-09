import { Request, Response } from "express";
import prisma from "../config/prisma";

const getAllCat = async (req: Request, res: Response) => {
  const user = await prisma.cats.findMany();
  try {
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllData: ${error}`,
    });
  }
};

const postCat = async (req: Request, res: Response) => {
  try {
    const { name, age, color, sale, price, paws, url} =
      req.body;

    const oneCat = await prisma.cats.findMany();

    // if (!age || !name || !color || !price || !paws || !url) {
    //   return res.status(400).json({
    //     message: "Заполните поля!",
    //   });
    // }

    // if (
    //   oneCat.some(
    //     (el) =>
    //       el.name === name &&
    //       el.color === color &&
    //       el.age === age &&
    //       el.price === price
    //   )
    // ) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Такой кот уже сушествует в списке",
    //   });
    // }

    const post = await prisma.cats.create({
      data: {
        name,
        age,
        color,
        paws,
        sale,
        price,
        url,
      },
    });

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in postAllData: ${error}`,
    });
  }
};

const patchCat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "ID is required",
      });
    }

    const { name, age } = req.body;

    const dataToUpdate: { name?: string; age?: number } = {};
    if (name !== undefined) dataToUpdate.name = name;
    if (age !== undefined) dataToUpdate.age = age;

    if (Object.keys(dataToUpdate).length === 0) {
      return res.status(400).json({
        success: false,
        error: "No fields provided to update",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: dataToUpdate,
    });

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in patchData: ${error}`,
    });
  }
};

const updateCat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age, breed } = req.body;

    if (!id)
      return res.status(400).json({ success: false, error: "ID is required" });

    const dataToUpdate: { name?: string; age?: number; breed?: string } = {};
    if (name !== undefined) dataToUpdate.name = name;
    if (age !== undefined) dataToUpdate.age = age;
    if (breed !== undefined) dataToUpdate.breed = breed;

    if (Object.keys(dataToUpdate).length === 0) {
      return res.status(400).json({
        success: false,
        error: "No fields to update",
      });
    }

    const updatedCat = await prisma.cats.update({
      where: { id },
      data: dataToUpdate,
    });

    res.status(200).json({
      success: true,
      data: updatedCat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in updateCat: ${error}`,
    });
  }
};

const deleteCat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "ID is required",
      });
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in deleteData: ${error}`,
    });
  }
};

export default {
  getAllCat,
  postCat,
  patchCat,
  updateCat,
  deleteCat,
};
