"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cat_controllers_1 = __importDefault(require("./cat.controllers"));
const router = (0, express_1.Router)();
router.get("/get", cat_controllers_1.default.getAllCat);
router.post("/post", cat_controllers_1.default.postCat);
router.patch("/patch/:id", cat_controllers_1.default.patchCat);
router.put("/put/:id", cat_controllers_1.default.updateCat);
router.delete("/delete", cat_controllers_1.default.deleteCat);
exports.default = router;
//# sourceMappingURL=cat.routes.js.map