const jwt = require("jsonwebtoken");
const config = require("config");
const Company = require("../model/Company");

const auth = async (req, res, next) => {
  // const token = req.header("x-auth-token");
  const token = req.cookies.jwttoken;
  // console.log("token:--->",token)
  if (!token) {
    return res.redirect("/api/company/login");
    // return res.status(401).json({ msg: "No token, authorization denied!" });
  }
  try {
    //verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    console.log(decoded);
    const rootUser = await Company.findOne({ _id: decoded._id });
    console.log(rootUser);
    if (!rootUser) {
      throw new Error("Company Not Found.");
    }
    req.rootUser = rootUser;
    console.log(rootUser);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "Token is not Valid!",
    });
  }
};

module.exports = auth;
