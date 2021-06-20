const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: String,
  website: String,
  type: {
    type: String,
    required: true,
  },
  interviewDate: Date,
  hrname: String,
  hremail: String,
  hrmobile: String,
  branch: [
    {
      type: String,
    },
  ],
  cgpa: Number,
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
