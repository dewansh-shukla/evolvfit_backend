import express from "express"
import foodItemRoute from "./foodItemRoute.js"
import mealRoutes from "./mealRoutes.js"
const router = express.Router()

router.use("/foodItems", foodItemRoute)
router.use("/meal", mealRoutes)

export default router
