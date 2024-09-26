const TodoController = require("../controllers/todo.controller")
const express = require('express')
const router = express.Router()
const checkAuth = require("../middlewares/checkAuth")


router.post("/", checkAuth, TodoController.addToDo)
router.get("/", checkAuth, TodoController.getToDo)
router.get("/:id", checkAuth,TodoController.getToDoById)
router.put("/:id", checkAuth, TodoController.updateToDo)
router.delete("/:id", checkAuth, TodoController.deleteToDo)


module.exports = router; 