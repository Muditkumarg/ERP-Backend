const sectionsData = require("../Model/SectionSchema");

const postSectionReq = async (req, res) => {
  const { section, status } = req.body;

  try {
    const data = sectionsData({
      section: section,
      status: status,
    }).save();
    return res.json({ message: "section added successfully", success: true });
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};

const getSectionReq = async (req, res) => {
  try {
    const data = await sectionsData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {}
};

const updateSectionReq = async (req, res) => {
  const { _id, section, status } = req.body[0];
  console.log(_id);

  try {
    // Assuming classesData is a valid Mongoose model
    const data = await sectionsData.findByIdAndUpdate(_id, {
      section: section,
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

module.exports = { postSectionReq, getSectionReq, updateSectionReq };
