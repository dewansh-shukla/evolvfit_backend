import mongoose from "mongoose"

const mealSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["breakfast", "lunch", "snack", "dinner"],
  },
  name: { type: String },
  foodItems: { type: Array },
})

const Meal = mongoose.model("Meal", mealSchema)
export default Meal
