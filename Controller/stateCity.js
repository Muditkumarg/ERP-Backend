const StateCityData = require("../Model/stateCitySchema");
const StateData = require("../Model/StateSchema");
const postStateCityReq = async (req, res) => {
  const { state, city, status } = req.body;

  try {
    const stateData = await StateData.findOne({ state: state });
    if (!stateData) {
      res.json({ success: false, message: "Data not found" });
    }
    const data = await StateCityData({
      id: stateData._id,
      state: state,
      city: city,
      status: status,
    }).save();
    return res.json({
      message: "Record added successfully",
      success: true,
    });
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};
const getStateCityReq = async (req, res) => {
  try {
    const data = await StateCityData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};
const updateStateCityReq = async (req, res) => {
  const { _id, city, status } = req.body[0];
  console.log(_id);
  try {
    // Assuming classesData is a valid Mongoose model
    const data = await StateCityData.findByIdAndUpdate(_id, {
      city: city,
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
  postStateCityReq,
  getStateCityReq,
  updateStateCityReq,
};
