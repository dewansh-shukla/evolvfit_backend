import express from "express"
import { addfooditem } from "../controller/index.js"
const router = express.Router()

router.post("/add", addfooditem)

export default router
