const ToDo = require("../models/Todo.model")
const User = require("../models/User.model")
const { validateToDoCreation, validateUpdateTodo } = require("../validations/todo.validation")


const addToDo = async(req, res, next) => {
    try {
        const { title, description, dueDate, completed} = req.body;
        const userId = req.user.id;

        let error = validateToDoCreation(title, description, dueDate);
        if(error){
            const err = new Error(error);
            err.status = 400; 
            return next(err);
        }

        const userExists = await User.findById(userId);
        if (!userExists) {
        const err = new Error("User not found");
        err.status = 404; // Not found
        return next(err); // Pass error to errorHandler middleware
        }

        
        //add to do
        let newTodo = new ToDo({
            title,
            description,
            dueDate,
            completed,
            userId
        })
        await newTodo.save();
        res.status(201).json({message : "Added new todo",newTodo});
    } catch (error) {
        next(error)
    }
}

const getToDo = async(req, res, next) => {
    try {
        let result = await ToDo.find().populate('userId');
        if(result.length === 0){
            const err = new Error('No to do found');
            err.status = 400; 
            return next(err);
        }
        return res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const getToDoById = async(req, res, next) => {
    try {
        let id = req.params.id;
        let result = await ToDo.findById(id);
        if(!result){
            const err = new Error('No to do found');
            err.status = 404; 
            return next(err);
        }
        return res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const updateToDo = async(req, res, next) => {
    try {
        let id = req.params.id;
        const { title, description, dueDate, completed } = req.body;
        let error = validateUpdateTodo(req.body); // Call your validation function here
        if (error) {
            const err = new Error(error);
            err.status = 400; // Bad Request
            return next(err);
        }
        // update todo by id
        let result = await ToDo.findByIdAndUpdate(id, req.body, {new : true});
        if(!result){
            const err = new Error('No to do found');
            err.status = 404; 
            return next(err);
        }
        return res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const deleteToDo = async(req, res, next) => {
    try {
        //delete to do
        let id = req.params.id;
        let result = await ToDo.findByIdAndDelete(id);
        if(!result){
            const err = new Error('No to do found');
            err.status = 404; 
            return next(err);
        }
        return res.status(200).json({message : "Deleted todo"})
    } catch (error) {
        next(error)
    }
}


module.exports = { addToDo, getToDo, getToDoById, updateToDo, deleteToDo}