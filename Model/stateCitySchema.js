const mongoose = require("mongoose");

const stateCitySchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StateData",
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const StateCityData = mongoose.model("StatesAndCity", stateCitySchema);

module.exports = StateCityData;
