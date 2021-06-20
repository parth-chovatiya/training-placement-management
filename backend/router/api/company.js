const express = require('express')
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Hello Word from auth");
})


module.exports = router