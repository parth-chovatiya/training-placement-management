const express = require("express");
const router = express.Router();
const Student = require("../../model/Student");
const crypto = require("crypto");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const config = require("config");
const auth = require("../../middleware/student_auth");


router.get("/", (req, res) => {
  res.send("Hello Word from student");
});

router.post("/add", async (req, res) => {
  const { roll, name, branch, email, contact, placed, company, cgpa } =
    req.body;
  if (!roll || !name || !branch || !email || !contact || !cgpa) {
    return res.status(422).json({ error: "Please Fill all fields." });
  }
  try {
    const userExist = await Student.findOne({ roll: roll });
    if (userExist) {
      return res.status(422).json({ error: "Student Already Exist." });
    } else {
      let password = crypto.randomBytes(4).toString("hex");
      const student = new Student({
        roll,
        password,
        name,
        branch,
        email,
        contact,
        cgpa,
      });
      console.log("Your Password is : ", password);
      // password hash
      const studentRegister = await student.save();

      if (studentRegister) {
        res.status(201).json({ message: "User Registered Successfully" });
      } else {
        res.status(500).json({ message: "Fail to Register" });
      }
    }
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
  res.send("student add.");
});

router.post("/login", async (req, res) => {
  try {
    const { roll, password } = req.body;
    console.log(roll);
    console.log(password);
    if (!roll || !password) {
      return res.status(400).json({ error: "Please Fill all fields." });
    }
    const studentLogin = await Student.findOne({ roll: roll })
    // console.log(studentLogin)
    if (!studentLogin) {
      res.json({ error: "Student Not Exist." });
    } else {
      const isMatch = await bcrypt.compare(password, studentLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        let token = jwt.sign({_id: studentLogin._id}, config.get("jwtSecret"))
        console.log(token);
        res.cookie("jwttoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({ message: "Login Successfully.", user: studentLogin });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/dashboard', auth, (req, res) => {
  res.status(200).send("Student dashboard")
})

module.exports = router;
