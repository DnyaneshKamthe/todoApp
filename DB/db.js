const mongoose = require("mongoose");


const MONGODB_URI = process.env.MONGODB_URI


const db = mongoose.connect(MONGODB_URI).then(()=> console.log('Connected to MongoDB')).catch((err) => {
    console.log(err)
})


module.exports = { db }