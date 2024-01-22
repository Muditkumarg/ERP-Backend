const MaritalStatusData = require("../Model/MaritalStatusSchema");

const PostMaritalStatusReq = (req, res) => {
  const { maritalStatus, status } = req.body;

  try {
    const data = MaritalStatusData({
      maritalStatus: maritalStatus,
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
const getMaritalStatusReq = async (req, res) => {
  try {
    const data = await MaritalStatusData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};
const updateMaritalStatusReq = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    // Assuming Session is your Mongoose model
    const data = await MaritalStatusData.findById(id);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, error: "Marital Status not found" });
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

module.exports = {
  PostMaritalStatusReq,
  getMaritalStatusReq,
  updateMaritalStatusReq,
};
