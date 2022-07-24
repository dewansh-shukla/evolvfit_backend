import express from "express"
import dotenv from "dotenv"
import connect from "./config/db.js"
import bodyParser from "body-parser"
import router from "./routes/index.js"
dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

connect()

app.use(bodyParser.json(), urlencodedParser)

app.use("/api/v1/", router)

app.get("*", (req, res) => {
  res.send("Page not found")
})
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
