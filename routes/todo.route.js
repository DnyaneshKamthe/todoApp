const TodoController = require("../controllers/todo.controller")
const express = require('express')
const router = express.Router()


router.post("/", TodoController.addToDo)
router.get("/", TodoController.getToDo)
router.get("/:id",TodoController.getToDoById)
router.put("/:id", TodoController.updateToDo)
router.delete("/:id", TodoController.deleteToDo)


module.exports = router; 