const express = require('express')
const app = express();
const cors = require('cors')
const userRoutes = require("./routes/user.route")


app.use(express.json());
app.use(cors()); // enabling cors for all origins

app.get("/", (req, res) => {
    res.status(200).send("Hello from ToDo App")
})

app.use("/api/users", userRoutes)
// app.use("/api/todos", todoRoutes)


module.exports = { app }