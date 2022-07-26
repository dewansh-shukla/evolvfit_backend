import express from "express"
import { addUser, updateMealPlan } from "../controller/index.js"
const router = express.Router()

router.post("/add", addUser)
router.patch("/updatemeal", updateMealPlan)

export default router
