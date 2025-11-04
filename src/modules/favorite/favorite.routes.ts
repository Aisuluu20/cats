import express from "express";
import catControllers from "../favorite/favorite.controllers";

const router = express.Router();

router.get("/fav-cats", catControllers.getAllData);
router.get("/deletes", catControllers.deleteData);

export default router;
