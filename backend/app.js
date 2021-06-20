const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json({extended:false}));
app.use(morgan('dev'))


app.get("/", (req, res) => res.send("API Running"));

//route files
// app.use("/api/student", require("./router/api/student"));
app.use("/api/company", require("./router/api/company"));


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgBlack.bold.italic);
});
