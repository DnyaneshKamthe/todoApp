const express = require('express')
const app = express();
const cors = require('cors')
const userRoutes = require("./routes/user.route")
const todoRoutes = require("./routes/todo.route")
const requestLogger = require('./middlewares/requestLogger');
const errorHandler = require('./middlewares/errorHandler');
const checkAuth  = require("./middlewares/checkAuth")


app.use(express.json());
app.use(cors()); // enabling cors for all origins
app.use(requestLogger);

app.get("/", (req, res) => {
    res.status(200).send("Hello from ToDo App")
})



app.use("/api/users", userRoutes)
//check auth
app.use(checkAuth)
app.use("/api/todos", todoRoutes)



app.use(errorHandler);
module.exports = { app }