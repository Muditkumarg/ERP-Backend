const mongoose = require("mongoose");

const ReligionSchema = mongoose.Schema(
  {
    religion: {
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

const ReligionData = mongoose.model("Religions", ReligionSchema);

module.exports = ReligionData;
