const bloodGroupData = require("../Model/BloodGroupSchema");

const PostBloodGroup = (req, res) => {
  const { bloodGroup, status } = req.body;

  try {
    const data = bloodGroupData({
      bloodGroup: bloodGroup,
      status: status,
    }).save();
    return res.json({
      message: "blood group added successfully",
      success: true,
    });
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};
const getBloodGroup = async (req, res) => {
  try {
    const data = await bloodGroupData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};
const bloodGroupStatusUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    // Assuming Session is your Mongoose model
    const data = await bloodGroupData.findById(id);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, error: "Session not found" });
    }

    // Toggle the status field
    data.status = data.status === "1" ? "0" : "1";

    // Save the updated session
    await data.save();

    res.json({ message: "Status updated", success: true });
  } catch (error) {
    // Handle errors here
    console.error("Error occurred:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = { PostBloodGroup, getBloodGroup, bloodGroupStatusUpdate };
