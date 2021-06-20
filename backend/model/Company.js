const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const CompanySchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  orgname: {
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
  hremail: {
    type: String,
    required: true,
    unique: true
  },
  hrmobile: {
    type: Number,
    required: true
  },
  branch: [
    {
      type: String,
    },
  ],
  cgpa: Number,
});

CompanySchema.pre("save", async function(next) {
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12);
  }
  next()
})

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
