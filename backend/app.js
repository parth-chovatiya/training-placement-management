const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
connectDB();

app.use(express.json({extended:false}));
app.use(morgan('dev'))


app.get("/", (req, res) => res.send("API Running"));

//route files
app.use("/api/student", require("./router/api/student"));
app.use("/api/company", require("./router/api/company"));

app.get("/logout", (req, res) => {
  console.log("Logout Page From Server.")
  res.clearCookie('jwttoken', {path: '/'})
  res.clearCookie('login', {path: '/'})
  res.status(200).send("User Logout");
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgBlack.bold.italic);
});
