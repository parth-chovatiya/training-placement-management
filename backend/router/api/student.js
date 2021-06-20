const express = require("express");
const router = express.Router();
const Student = require('../../model/Student')
const crypto = require("crypto");

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
    const userExist = await Student.findOne({roll: roll})
    if(userExist){
      return res.status(422).json({error: "Student Already Exist."})
    }
    else{
      let password = crypto.randomBytes(4).toString('hex');
      const student = new Student({ roll, password, name, branch, email, contact, cgpa })
      console.log("Your Password is : ", password);
      // password hash
      const studentRegister = await student.save()
  
      // console.log(`${user} successfully registered.`)
      // console.log(userRegister)
  
      if(studentRegister){
        res.status(201).json({message: "User Registered Successfully"})
      }else{
        res.status(500).json({message: "Fail to Register"})
      }
    }
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
  res.send("student add.");
});

module.exports = router;
