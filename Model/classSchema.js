const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
  {
    classes: {
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

const classesData = mongoose.model("classes", classSchema);

module.exports = classesData;
