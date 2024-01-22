const mongoose = require("mongoose");

const SessionSchema = mongoose.Schema(
  {
    session: {
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

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
