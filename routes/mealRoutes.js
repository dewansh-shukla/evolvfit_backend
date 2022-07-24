import express from "express"
import { allMeals } from "../controller/index.js"
const router = express.Router()

router.get("/allmeals", allMeals)

export default router
