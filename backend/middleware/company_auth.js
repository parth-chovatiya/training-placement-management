const jwt = require("jsonwebtoken");
const config = require("config");
const Company = require('../model/Company')

const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).json({ msg: "No token, authorization denied!" });
  }
  try {
    //verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    console.log(decoded);
    //  req.user = decoded._id;
    const rootUser = await Company.findOne({ _id: decoded._id });
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
