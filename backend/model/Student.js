const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  enrolementNo: {
    type: String,
    required: true
  },
  aadhaarNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  religion: {
    type: String,
    required: true
  },
  address1: {
    type: String,
    required: true
  },
  address1: String,
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  coursetype: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  passingyear: {
    type: String,
    required: true
  },
  cgpa: {
    type: String,
    required: true
  },
  placed: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    default: "Not Placed",
  },
});

StudentSchema.pre("save", async function(next) {
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12);
  }
  next()
})

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
