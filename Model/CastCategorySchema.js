const mongoose = require("mongoose");

const CastSchema = mongoose.Schema({
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "classesData",
  //     required: true,
  //   },
  cast: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const castCategoryData = mongoose.model("CastCategory", CastSchema);

module.exports = castCategoryData;
