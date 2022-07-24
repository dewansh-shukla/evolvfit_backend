import { FoodItem } from "../models/index.js"

const addfooditem = (req, res) => {
  const body = req.body
  //want to add multiple food item at time
  if (Array.isArray(body)) {
    body.forEach((item) => {
      var singleItem = new FoodItem({
        name: item.name,
        calories: item.calories,
        protein: item.protein,
        carbs: item.carbs,
        fat: item.fat,
        accessible: item.accessible,
        itemWeight: item.itemWeight,
      })
      singleItem.save()
    })
    res.json({ message: "Items added successfully" })
  } //single item at time
  else {
    var singleItem = new FoodItem(body)
    singleItem.save((err, doc) => {
      if (err) {
        res.json({ message: "Not added ", error: err })
      } else {
        console.log(doc)
        res.json({ message: "Added successfully", data: doc })
      }
    })
  }
}

export { addfooditem }
