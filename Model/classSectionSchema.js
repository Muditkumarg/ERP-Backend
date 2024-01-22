const mongoose = require("mongoose");

const classSectionSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classesData",
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const classSectionData = mongoose.model("classSection", classSectionSchema);

module.exports = classSectionData;
