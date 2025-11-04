"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../config/prisma"));
const getAllCat = async (req, res) => {
    const user = await prisma_1.default.cats.findMany();
    try {
        res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllData: ${error}`,
        });
    }
};
const postCat = async (req, res) => {
    try {
        const { name, age, color, sale, price, image, url } = req.body;
        const oneCat = await prisma_1.default.cats.findMany();
        if (!age || !name || !color || !price || !image || !url) {
            return res.status(400).json({
                message: "Заполните поля!",
            });
        }
        if (oneCat.some((el) => el.name === name &&
            el.color === color &&
            el.age === age &&
            el.price === price)) {
            return res.status(400).json({
                success: false,
                message: "Такой кот уже сушествует в списке",
            });
        }
        const post = await prisma_1.default.cats.create({
            data: {
                name,
                image,
                age,
                color,
                sale,
                price,
                url,
            },
        });
        res.status(200).json({
            success: true,
            data: post,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in postAllData: ${error}`,
        });
    }
};
const patchCat = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                error: "ID is required",
            });
        }
        const { name, age } = req.body;
        const dataToUpdate = {};
        if (name !== undefined)
            dataToUpdate.name = name;
        if (age !== undefined)
            dataToUpdate.age = age;
        if (Object.keys(dataToUpdate).length === 0) {
            return res.status(400).json({
                success: false,
                error: "No fields provided to update",
            });
        }
        const updatedUser = await prisma_1.default.user.update({
            where: { id },
            data: dataToUpdate,
        });
        res.status(200).json({
            success: true,
            data: updatedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in patchData: ${error}`,
        });
    }
};
const updateCat = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, breed } = req.body;
        if (!id)
            return res.status(400).json({ success: false, error: "ID is required" });
        const dataToUpdate = {};
        if (name !== undefined)
            dataToUpdate.name = name;
        if (age !== undefined)
            dataToUpdate.age = age;
        if (breed !== undefined)
            dataToUpdate.breed = breed;
        if (Object.keys(dataToUpdate).length === 0) {
            return res.status(400).json({
                success: false,
                error: "No fields to update",
            });
        }
        const updatedCat = await prisma_1.default.cats.update({
            where: { id },
            data: dataToUpdate,
        });
        res.status(200).json({
            success: true,
            data: updatedCat,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in updateCat: ${error}`,
        });
    }
};
const deleteCat = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                error: "ID is required",
            });
        }
        const deletedUser = await prisma_1.default.user.delete({
            where: { id },
        });
        res.status(200).json({
            success: true,
            data: deletedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in deleteData: ${error}`,
        });
    }
};
exports.default = {
    getAllCat,
    postCat,
    patchCat,
    updateCat,
    deleteCat,
};
//# sourceMappingURL=cat.controllers.js.map