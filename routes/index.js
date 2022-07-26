import express from "express"
import foodItemRoute from "./foodItemRoute.js"
import userRoute from "./userRoutes.js"
import mealRoutes from "./mealRoutes.js"
const router = express.Router()

router.use("/fooditems", foodItemRoute)
router.use("/meal", mealRoutes)
router.use("/user", userRoute)

export default router
