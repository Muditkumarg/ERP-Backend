const ReligionData = require("../Model/ReligionSchema");

const postReligionReq = (req, res) => {
  const { religion, status } = req.body;

  try {
    const data = ReligionData({
      religion: religion,
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
const getReligionReq = async (req, res) => {
  try {
    const data = await ReligionData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};
const updateReligionReq = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    // Assuming Session is your Mongoose model
    const data = await ReligionData.findById(id);
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
  postReligionReq,
  getReligionReq,
  updateReligionReq,
};
