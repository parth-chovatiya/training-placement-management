const jwt = require("jsonwebtoken");
const config = require("config");
const Student = require('../model/Student')

const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.redirect("/api/student/login");
    // return res.status(401).json({ msg: "No token, authorization denied!" });
  }

  try {
    //verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    console.log(decoded);
    //  req.user = decoded._id;
    const rootUser = await Student.findOne({ _id: decoded._id });
    console.log(rootUser);
    next();
  } catch (err) {
    console.log(err)
    res.status(401).json({
      msg: "Token is not Valid!1",
    });
  }
};

module.exports = auth;
