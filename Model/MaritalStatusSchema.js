const mongoose = require("mongoose");

const MaritalSchema = mongoose.Schema(
  {
    maritalStatus: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MaritalStatusData = mongoose.model("MaritalStatus", MaritalSchema);

module.exports = MaritalStatusData;
