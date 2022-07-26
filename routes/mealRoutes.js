import express from "express"
import {
  allMeals,
  createMeals,
  updateMeal,
  optimizemeal,
} from "../controller/index.js"
const router = express.Router()

router.get("/allmeals", allMeals)
router.post("/create", createMeals)
router.patch("/update", updateMeal)
router.get("/optimize", optimizemeal)
export default router
