"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const favorite_controllers_1 = __importDefault(require("../favorite/favorite.controllers"));
const router = express_1.default.Router();
router.get("/fav-cats", favorite_controllers_1.default.getAllData);
router.get("/deletes", favorite_controllers_1.default.deleteData);
exports.default = router;
//# sourceMappingURL=favorite.routes.js.map