const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "classesData",
  //     required: true,
  //   },
  state: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const StateData = mongoose.model("States", stateSchema);

module.exports = StateData;
