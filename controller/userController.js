import { Meal, User } from "../models/index.js"

//Post Api/user/add to add a new user

const addUser = async (req, res) => {
  const user = req.body //take username and calorie requirement from the request body
  const meals = await Meal.find({})
  const shuffle = meals.sort(() => 0.5 - Math.random())
  //Create 2 dates for the user
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)
  var alreadyExist = await User.findOne({ name: user.name })

  //Check if the user already exists
  if (alreadyExist) {
    res.json({ message: "User already exists" })
  } else {
    const newUser = new User({
      name: user.name,
      calorieRequirement: user.calorieRequirement,
      mealPlan: [
        {
          date: today,
          meals: [
            shuffle[0]._id,
            shuffle[1]._id,
            shuffle[2]._id,
            shuffle[3]._id,
            shuffle[4]._id,
          ],
        },
        {
          date: tomorrow,
          meals: [
            shuffle[0]._id,
            shuffle[1]._id,
            shuffle[2]._id,
            shuffle[3]._id,
            shuffle[4]._id,
          ],
        },
      ],
    })
    await newUser.save()
    res.json({ message: "User added" })
  }
}

//Update Meal Plan for a given User Name
const updateMealPlan = async (req, res) => {
  const userName = req.body.name
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)
  if (userName !== null) {
    const user = await User.findOne({ name: userName })
    if (user) {
      const meals = await Meal.find({})
      const shuffle = meals.sort(() => 0.5 - Math.random())
      user.mealPlan = [
        {
          date: today,
          meals: [
            shuffle[0]._id,
            shuffle[1]._id,
            shuffle[2]._id,
            shuffle[3]._id,
            shuffle[4]._id,
          ],
        },
        {
          date: tomorrow,
          meals: [
            shuffle[0]._id,
            shuffle[1]._id,
            shuffle[2]._id,
            shuffle[3]._id,
            shuffle[4]._id,
          ],
        },
      ]
      await user.save()
      res.json({ message: "Update Meal plan" })
    } else {
      res.json({ message: "User not found" })
    }
  } else {
    res.json({ message: "Enter user Name" })
  }
}
export { addUser, updateMealPlan }
