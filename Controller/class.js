const classesData = require("../Model/classSchema");

const postClassReq = async (req, res) => {
  const { classes, status } = req.body;

  try {
    const data = classesData({
      classes: classes,
      status: status,
    }).save();
    return res.json({ message: "class added successfully", success: true });
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};
const getClassReq = async (req, res) => {
  try {
    const data = await classesData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};
const updateClassReq = async (req, res) => {
  const { _id, classes, status } = req.body[0];
  console.log(_id);
  try {
    // Assuming classesData is a valid Mongoose model
    const data = await classesData.findByIdAndUpdate(_id, {
      classes: classes,
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

module.exports = { postClassReq, getClassReq, updateClassReq };
