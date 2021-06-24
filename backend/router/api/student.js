const express = require("express");
const router = express.Router();
const Student = require("../../model/Student");
const Company = require('../../model/Company')
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const student_auth = require("../../middleware/student_auth");
const Cookies = require('js-cookie');

router.get("/", (req, res) => {
  res.send("Hello Word from student");
});

router.post("/add", async (req, res) => {
  const {values} = req.body
  const {
    fullName,
    studentId,
    enrolementNo,
    aadhaarNo,
    email,
    contact,
    dob,
    gender,
    religion,
    address1,
    address2,
    city,
    state,
    zipcode,
    country,
    coursetype,
    department,
    passingyear,
    cgpa,
  } = values;
  console.log(req.body)
  if (
    !fullName ||
    !studentId ||
    !enrolementNo ||
    !aadhaarNo ||
    !email ||
    !contact ||
    !dob ||
    !gender ||
    !religion ||
    !address1 ||
    !city ||
    !state ||
    !zipcode ||
    !country ||
    !coursetype ||
    !department ||
    !passingyear ||
    !cgpa
  ) {
    return res.status(422).json({ error: "Please Fill all fields." });
  }
  try {
    const userExist = await Student.findOne({ studentId: studentId });
    if (userExist) {
      return res.status(422).json({ error: "Student Already Exist." });
    } else {
      let password = crypto.randomBytes(4).toString("hex");
      const student = new Student({
        studentId,
        password,
        fullName,
        enrolementNo,
        aadhaarNo,
        email,
        contact,
        dob,
        gender,
        religion,
        address1,
        address2,
        city,
        state,
        zipcode,
        country,
        coursetype,
        department,
        passingyear,
        cgpa,
      });
      // save in cookie 
      console.log("Your Password is : ", password);
      // password hash
      Cookies.set('pass', password);
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
    const { studentId, password } = req.body;
    console.log(studentId);
    console.log(password);
    if (!studentId || !password) {
      return res.status(400).json({ error: "Please Fill all fields." });
    }
    const studentLogin = await Student.findOne({ studentId: studentId });
    // console.log(studentLogin)
    if (!studentLogin) {
      res.status(400).json({ error: "Student Not Exist." });
    } else {
      const isMatch = await bcrypt.compare(password, studentLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        let token = jwt.sign(
          { _id: studentLogin._id },
          config.get("jwtSecret")
        );
        console.log(token);
        res.cookie("jwttoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        Cookies.set('login', 'student');
        res.status(200).json({ message: "Login Successfully.", user: studentLogin });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/login", (req, res) => {
  res.status(200).send("Student login GET");
});

router.get("/dashboard", student_auth, async (req, res) => {
  // res.status(200).send("Student dashboard");
  const student = req.rootUser;
  console.log("student:--> ",student)
  // department: {$contains: student.department}, 
  const dt = await Company.find({branch: {$in: [student.department]}, cgpa : {$lte: student.cgpa}})
  console.log(dt)
  res.status(200).send(dt)
  // res.send(req.rootUser);
});

module.exports = router;
