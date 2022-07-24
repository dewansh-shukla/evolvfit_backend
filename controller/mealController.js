import { FoodItem } from "../models/index.js"

const allMeals = (req, res) => {
  const fetchData = async () => {
    try {
      const foodItems = await FoodItem.find({})
      res.status(200).json({
        status: "success",
        data: foodItems,
      })
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      })
    }
  }
  fetchData()
}
export { allMeals }
