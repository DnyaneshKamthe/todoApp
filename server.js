const { app } = require('./index')
require("dotenv").config()

let PORT = process.env.PORT;

 // import db connection
const db = require("./DB/db")
 

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`)
})