const mongoose = require("mongoose");
const Session = require("../Model/SessionSchema");

const SessionPostReq = async (req, res) => {
  const { session, status } = req.body;

  try {
    const data = Session({ session: session, status: status }).save();
    return res.json({ message: "session add successfully", success: true });
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};

const GetSessionReq = async (req, res) => {
  try {
    const data = await Session.find({});
    return res.json({ success: true, data: data });
  } catch (error) {}
};
const sessionStatusUpdateReq = async (req, res) => {
  try {
    const id = req.params.id;
    // Assuming Session is your Mongoose model
    const session = await Session.findById(id);
    if (!session) {
      return res
        .status(404)
        .json({ success: false, error: "Session not found" });
    }

    // Toggle the status field
    session.status = session.status === "1" ? "0" : "1";

    // Save the updated session
    await session.save();

    res.json({ message: "Status updated", success: true });
  } catch (error) {
    // Handle errors here
    console.error("Error occurred:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = { SessionPostReq, GetSessionReq, sessionStatusUpdateReq };
