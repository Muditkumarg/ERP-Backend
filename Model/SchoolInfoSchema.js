const mongoose = require("mongoose");

const SchoolInfoSchema = new mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    FeeCollectionMethod: {
      type: String,
      required: true,
    },
    registrationFee: {
      type: String,
      required: true,
    },
    schoolLogo: {
      type: String,
    },
    schoolShortName: {
      type: String,
      required: true,
    },
    affiliatedTo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    affiliationCode: {
      type: String,
      required: true,
    },
    schoolCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const SchoolInfo = mongoose.model("SchoolInfo", SchoolInfoSchema);
module.exports = SchoolInfo;
