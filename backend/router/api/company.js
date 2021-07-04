const express = require("express");
const router = express.Router();
const Company = require("../../model/Company");
const Student = require("../../model/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const company_auth = require("../../middleware/company_auth");

router.get("/", (req, res) => {
  res.send("Hello Word from student");
});

router.post("/add", async (req, res) => {
  const { values, password } = req.body;
  const {
    hremail,
    orgname,
    website,
    hrname,
    hrcontact,
    address1,
    address2,
    city,
    state,
    zipcode,
    country,
    interviewDate,
    computerEngineering,
    civilEngineering,
    electricalEngineering,
    electronicsEngineering,
    eandcEngineering,
    mechanicalEngineering,
    productionEngineering,
    informationTechnology,
    cgpa,
  } = values;
  console.log(values);
  if (
    !hremail ||
    !orgname ||
    !website ||
    !hrname ||
    !hrcontact ||
    !address1 ||
    !city ||
    !state ||
    !zipcode ||
    !country ||
    !interviewDate ||
    !cgpa
  ) {
    return res.status(422).json({ error: "Please Fill all fields." });
  }
  try {
    const userExist = await Company.findOne({ hremail: hremail });
    if (userExist) {
      return res.status(422).json({ error: "Company Already Exist." });
    } else {
      const branch = [
        computerEngineering && "Computer Engineering",
        civilEngineering && "Civil Engineering",
        electricalEngineering && "Electrical Engineering",
        electronicsEngineering && "Electronics Engineering",
        eandcEngineering && "Electronics and Communication Engineering",
        mechanicalEngineering && "Mechanical Engineering",
        productionEngineering && "Production Engineering",
        informationTechnology && "Information Technology",
      ];
      console.log(branch);

      const company = new Company({
        hremail,
        password,
        orgname,
        website,
        hrname,
        hrcontact,
        address1,
        address2,
        city,
        state,
        zipcode,
        country,
        interviewDate,
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
    console.log("company login ----> ", companyLogin)
    if (!companyLogin) {
      res.status(400).json({ error: "Company Not Exist." });
    } else {
      const isMatch = await bcrypt.compare(password, companyLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        let token = jwt.sign(
          { _id: companyLogin._id },
          config.get("jwtSecret")
        );
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

router.get("/dashboard", company_auth, async (req, res) => {
  // res.status(200).send(req.company)
  const company = req.rootUser;
  console.log("company:--> ", company);
  // department: {$contains: student.department},
  const dt = await Student.find({
    department: { $in: company.branch },
    cgpa: { $gte: company.cgpa },
  });
  console.log(dt);
  res.status(200).send(dt);
  res.send(req.rootUser);
});

router.get('/profile', company_auth, (req, res) => {
  const company = req.rootUser;
  res.status(200).send(company);
})

module.exports = router;
