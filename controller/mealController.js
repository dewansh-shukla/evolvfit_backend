import e from "express"
import { FoodItem, Meal } from "../models/index.js"

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

//create 5 meals
const createMeals = async (req, res) => {
  const foodItems = await FoodItem.find({})
  const time = ["breakfast", "lunch", "snack", "dinner"]
  var count = 4
  for (let i = 0; i < 5; i++) {
    count = count - 1
    const shuffle = foodItems.sort(() => 0.5 - Math.random())
    const meal = new Meal({
      category: time[count],
      name: `M${i + 1}`,
      foodItems: shuffle.slice(0, 5),
    })
    await meal.save()
    if (count == 0) {
      count = 4
    }
  }
  res.json({ message: "Meals created" })
}

//Takes a meal name to be updated
const updateMeal = async (req, res) => {
  const mealName = req.body.name
  const foodItems = await FoodItem.find({})
  if (mealName !== null) {
    const meal = await Meal.findOne({ name: mealName })
    if (meal) {
      const shuffle = foodItems.sort(() => 0.5 - Math.random())
      meal.foodItems = shuffle.slice(0, 5)
      await meal.save()
      res.json({ message: "Meal updated" })
    }
  } else {
    res.json({ message: "meal not found" })
  }
}

//optimize meal plan for a given user
const optimizemeal = async (req, res) => {
  const calorie = req.body.calorie
  const fooditems = await FoodItem.find({})
  var score = []
  //Give the score of 20 if the food items is +/- 100 from given calorie and reduce the score respectively
  fooditems.forEach((item) => {
    if (item.calories >= calorie - 100 && item.calories <= calorie + 100) {
      score.push({ ...item, score: 20 })
    } else if (
      item.calories >= calorie - 200 &&
      item.calories <= calorie + 200
    ) {
      score.push({ ...item, score: 15 })
    } else if (
      item.calories >= calorie - 300 &&
      item.calories <= calorie + 300
    ) {
      score.push({ ...item, score: 10 })
    } else if (
      item.calories >= calorie - 400 &&
      item.calories <= calorie + 400
    ) {
      score.push({ ...item, score: 5 })
    } else if (
      item.calories >= calorie - 500 &&
      item.calories <= calorie + 500
    ) {
      score.push({ ...item, score: 1 })
    }
  })
  //Based on ammount of protein in proportion to total calories, give the score accordingly
  score.forEach((item) => {
    if (
      item.protein >= 0.2 * item.calories &&
      item.protein <= 0.3 * item.calories
    ) {
      item.score = item.score + 19
    } else if (
      item.protein >= 0.1 * item.calories &&
      item.protein <= 0.2 * item.calories
    ) {
      item.score = item.score + 9
    } else if (
      item.protein >= 0.05 * item.calories &&
      item.protein <= 0.1 * item.calories
    ) {
      item.score = item.score + 4
    }
  })
  score.sort((a, b) => b.score - a.score)
  res.json({ message: "optimize meal", optimizedMeals: score })
}

export { allMeals, createMeals, updateMeal, optimizemeal }
