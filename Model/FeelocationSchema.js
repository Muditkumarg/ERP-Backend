const mongoose = require("mongoose");

const feeLocationSchema = mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    locationCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const feeLocation = mongoose.model("FeeLocation", feeLocationSchema);

module.exports = feeLocation;
