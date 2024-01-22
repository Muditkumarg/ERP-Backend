const castCategoryData = require("../Model/CastCategorySchema");

const PostCastReq = (req, res) => {
  const { cast, status } = req.body;

  try {
    const data = castCategoryData({
      cast: cast,
      status: status,
    }).save();
    return res.json({
      message: "cast added successfully",
      success: true,
    });
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};
const getCastReq = async (req, res) => {
  try {
    const data = await castCategoryData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};
const castStatusUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    // Assuming Session is your Mongoose model
    const data = await castCategoryData.findById(id);
    if (!data) {
      return res.status(404).json({ success: false, error: "cast not found" });
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

module.exports = { PostCastReq, getCastReq, castStatusUpdate };
