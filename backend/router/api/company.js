const express = require("express");
const router = express.Router();
const Company = require("../../model/Company");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/company_auth");



router.get("/", (req, res) => {
  res.send("Hello Word from student");
});

router.post("/add", async (req, res) => {
  const {
    hremail,
    orgname,
    address,
    website,
    type,
    interviewDate,
    hrname,
    hrmobile,
    branch,
    cgpa,
  } = req.body;
  if (
    !hremail ||
    !orgname ||
    !address ||
    !website ||
    !type ||
    !interviewDate ||
    !hrname ||
    !hrmobile ||
    !branch ||
    !cgpa
  ) {
    return res.status(422).json({ error: "Please Fill all fields." });
  }
  try {
    const userExist = await Company.findOne({ hremail: hremail });
    if (userExist) {
      return res.status(422).json({ error: "Student Already Exist." });
    } else {
      let password = crypto.randomBytes(4).toString("hex");
      const company = new Company({
        hremail,
        password,
        orgname,
        address,
        website,
        type,
        interviewDate,
        hrname,
        hrmobile,
        branch,
        cgpa,
      });
      console.log("Your Password is : ", password);
      // password hash
      const companyRegister = await company.save();

      if (companyRegister) {
        res.status(201).json({ message: "Company Registered Successfully" });
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
    const { hremail, password } = req.body;
    console.log(hremail);
    console.log(password);
    if (!hremail || !password) {
      return res.status(400).json({ error: "Please Fill all fields." });
    }
    const companyLogin = await Company.findOne({ hremail: hremail });
    if (!companyLogin) {
      res.json({ error: "Company Not Exist." });
    } else {
      const isMatch = await bcrypt.compare(password, companyLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        let token = jwt.sign({ _id: companyLogin._id }, config.get("jwtSecret"));
        console.log(token);
        res.cookie("jwttoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({ message: "Login Successfully." });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/dashboard', auth, (req, res) => {
  res.status(200).send("Company Deshboard.")
})

module.exports = router;
