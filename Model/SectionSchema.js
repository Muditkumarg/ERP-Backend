const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema(
  {
    section: {
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

const sectionsData = mongoose.model("sections", sectionSchema);

module.exports = sectionsData;
