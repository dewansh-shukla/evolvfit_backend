//fucntion to create 5 random meals

import { FoodItem, Meal } from "../models/index.js"
import connect from "../config/db.js"
connect()

const fetchData = async () => {
  try {
    const foodItems = await FoodItem.find({})
    return foodItems
  } catch (error) {
    console.log(error)
  }
}
const foodItems = await fetchData()

const createMeals = async (foodItems) => {
  const time = ["breakfast", "lunch", "snack", "dinner"]
  for (let i = 0; i < 5; i++) {
    const shuffle = foodItems.sort(() => 0.5 - Math.random())
    const meal = new Meal({
      category: time[i],
      name: `M${i + 1} `,
      foodItems: shuffle.slice(0, 5),
    })
    await meal.save()
  }
}
await createMeals(foodItems)
