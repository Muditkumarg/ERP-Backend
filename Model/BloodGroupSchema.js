const mongoose = require("mongoose");

const bloodGroupSchema = mongoose.Schema({
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "classesData",
  //     required: true,
  //   },
  bloodGroup: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const bloodGroupData = mongoose.model("BloodGroup", bloodGroupSchema);

module.exports = bloodGroupData;
