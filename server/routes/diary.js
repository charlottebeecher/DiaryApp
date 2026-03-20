const { Router } = require("express")
const diaryController = require("../controller/diary")

const diaryRouter = Router()


diaryRouter.get("/", diaryController.getAll)
diaryRouter.post("/", diaryController.createEntry)

module.exports = diaryRouter