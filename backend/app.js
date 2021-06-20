const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();
connectDB();
app.use(cookieParser());

dotenv.config({ path: "./config.env" }); // give path of config.env file
// const User = require('./model/userSchema')

app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("API Running"));

//route files
// app.use("/api/student", require("./router/api/student"));
app.use("/api/company", require("./router/api/company"));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
