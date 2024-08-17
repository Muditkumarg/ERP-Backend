const StateData = require("../Model/StateSchema");
const postStateReq = async (req, res) => {
  const { state, status } = req.body;

  try {
    const matchedState = await StateData.find({ state: state });
    if (matchedState) {
      res.json({ success: false, message: "State Already exist" });
    } else {
      const data = await StateData({
        state: state,
        status: status,
      }).save();
      return res.json({
        message: "Record added successfully",
        success: true,
      });
    }
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};
const getStateReq = async (req, res) => {
  try {
    const data = await StateData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};
const updateStateStatusReq = async (req, res) => {
  const { _id, state, status } = req.body[0];
  console.log(_id);
  try {
    // Assuming classesData is a valid Mongoose model
    const data = await StateData.findByIdAndUpdate(_id, {
      state: state,
      status: status,
    });
    if (!data) {
      // If no document was found with the specified _id
      return res
        .status(404)
        .json({ success: false, message: "Record not found" });
    }
    res.json({ success: true, message: "Record Updated Successfully" });
  } catch (error) {
    // Handle specific errors, log them, and provide a general error message
    console.error("Error updating record:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
module.exports = {
  postStateReq,
  getStateReq,
  updateStateStatusReq,
};
