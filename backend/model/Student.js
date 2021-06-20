const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  roll: {
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
  branch: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  placed: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    default: "Not Placed",
  },
  cgpa: Number,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
