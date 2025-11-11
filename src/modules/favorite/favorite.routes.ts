import express from "express";
import catController from "./favorite.controller";

const router = express.Router();

router.get("/fav-cats", catController.getAllData);
router.get("/fav-one", catController.getAllOne);
router.get("/deletes", catController.deleteData);

export default router;
