"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../config/prisma"));
const getAllData = async (req, res) => {
    const user = await prisma_1.default.favorite.findMany();
    try {
        res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllCat: ${error}`,
        });
    }
};
const getAllOne = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).json({
                success: false,
                error: "ID is required",
            });
        const cat = await prisma_1.default.favorite.findUnique({ where: { id } });
        if (!cat)
            return res.status(404).json({
                success: false,
                error: "Cat not found",
            });
        res.status(200).json({ success: true, data: cat });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getCatById: ${error}`,
        });
    }
};
const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                error: "ID is required",
            });
        }
        const deletedUser = await prisma_1.default.favorite.delete({
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
            error: `Error in deleteCat: ${error}`,
        });
    }
};
exports.default = {
    getAllData,
    getAllOne,
    deleteData,
};
//# sourceMappingURL=favorite.controllers.js.map