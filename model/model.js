const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyId: {
    required: false,
    type: Number,
  },
  companyName: {
    required: true,
    type: String,
  },
  companyAddress: {
    required: true,
    type: String,
  },
  // coordinates: {
  //   required: false,
  //   type: Number,
  // },
  location: {
    type: Array,
    // coordinates: [-73.856077, 40.848447],
  },
});

const userSchema = new mongoose.Schema({
  userId: {
    required: false,
    type: Number,
  },
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  designation: {
    required: true,
    type: String,
  },
  // dateOfBirth: {
  //   required: false,
  //   type: Date,
  // },
  dateOfBirth: {
    required: true,
    type: String,
  },
  active: {
    required: false,
    type: Boolean,
  },
});

Company = mongoose.model("companyDetails", companySchema);
User = mongoose.model("userDetails", userSchema);

module.exports = {
  Company,
  User,
};
