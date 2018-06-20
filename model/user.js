const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
  firstName:  String,
  lastName:  String,
  gender:  String,
  dob: { type: Date, default: Date.now },
  startDate : { type: Date, default: Date.now },
  endDate : { type: Date, default: Date.now },
  ethnicity : String
});

module.exports = mongoose.model('Users', userSchema);