import mongoose from "mongoose"

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number },
  carbs: { type: Number },
  fat: { type: Number },
  accessible: {
    type: String,
    enum: ["ml", "liter", "kg", "g", "item"],
    default: "item",
  },
  itemWeight: { type: Number },
})
const FoodItem = mongoose.model("FoodItem", foodItemSchema)

export default FoodItem
