"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../config/prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const token_1 = __importDefault(require("../config/token"));
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcryptjs_1.default.hash(password, "10");
        const user = await prisma_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        const userId = String(user.id);
        const token = (0, token_1.default)(userId, user.email);
        res.status(201).json({
            success: true,
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in register: ${error}`,
        });
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma_1.default.user.findFirst({
            where: { email },
        });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Такой пользователь не существует!",
            });
        }
        const comparePassword = await bcryptjs_1.default.compare(password, user.password);
        if (!comparePassword) {
            return res.status(401).json({
                success: false,
                message: "Неверный пароль!",
            });
        }
        const token = (0, token_1.default)(user.id, user.name);
        res.status(200).json({
            success: true,
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in login: ${error}`,
        });
    }
};
const logout = async (req, res) => {
    try {
        res.status(201).json({
            success: true,
            message: "Вы успешно вышли!!!",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in logout: ${error}`,
        });
    }
};
exports.default = {
    register,
    login,
    logout,
};
//# sourceMappingURL=auth.controllers.js.map