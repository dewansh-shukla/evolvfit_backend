import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calorieRequirement: { type: Number, required: true },
  mealPlan: [
    {
      date: { type: Date, required: true, default: Date.now },
      meals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meal" }],
    },
  ],
})

const User = mongoose.model("User", UserSchema)
export default User
