const jwt = require("jsonwebtoken");
const config = require("config");
const Student = require("../model/Student");

const student_auth = async (req, res, next) => {
  // const token = req.header("x-auth-token");
  // console.log("--------------------------")
  const token = req.cookies.jwttoken;
  // console.log("token ---> ", token)

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

    if (!rootUser) {
      // return res.redirect("/api/student/login");
      throw new Error("User Not Found.");
    }

    req.rootUser = rootUser;
    // console.log("rootUser---->",rootUser);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "Token is not Valid!",
    });
  }
};

module.exports = student_auth;
