const classSectionData = require("../Model/classSectionSchema");
const classesData = require("../Model/classSchema");

const postClassSectionReq = async (req, res) => {
  const { id, section } = req.body;
  try {
    const classData = await classesData.findOne({ _id: id });
    if (!classData) {
      res.json({ message: "data not found", success: false });
    }
    const data = await classSectionData({
      id,
      section,
      status: "1",
    });
    data.save();
    res.json({ message: "Section Added Successfully ", success: true });
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};

const getClassSectionReq = async (req, res) => {
  try {
    const data = await classSectionData.find({});
    return res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};

const UpdateClassSectionReq = async (req, res) => {
  const { _id, status } = req.body;
  try {
    const data = await classSectionData.findByIdAndUpdate(_id, {
      status: status,
    });
    return res.json({ success: true, message: "Updated successfully" });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};

module.exports = {
  postClassSectionReq,
  getClassSectionReq,
  UpdateClassSectionReq,
};
