const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const CompanySchema = new mongoose.Schema({
  hremail: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  orgname: {
    type: String,
    required: true,
  },
  website: String,
  hrname: String,
  hrcontact: {
    type: Number,
    required: true
  },
  address1: String,
  address2: String,
  city: String,
  state: String,
  zipcode: String,
  country: String,
  interviewDate: String,
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
