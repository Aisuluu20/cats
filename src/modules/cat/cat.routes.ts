import { Router } from "express";
import controles from "./cat.controllers";

const router = Router();

router.get("/get", controles.getAllCat);
router.post("/post", controles.postCat);
router.patch("/patch/:id", controles.patchCat);
router.put("/put/:id", controles.updateCat);
router.delete("/delete", controles.deleteCat);

export default router;
