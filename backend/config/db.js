const mongoose = require('mongoose');
const colors = require('colors');


const connectDB = async() => {
   
   const conn = await mongoose.connect("mongodb://localhost:27017/training-placement",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify : false,
    useUnifiedTopology: true

});
console.log(`MongooDB Connected: ${conn.connection.host} !!!`.green.underline.bold.italic)
}

module.exports = connectDB;