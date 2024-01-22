const feeLocation = require("../Model/FeelocationSchema");

const FeeLocationPostReq = async (req, res) => {
  const { location, locationCode } = req.body;

  try {
    const data = feeLocation({
      location: location,
      locationCode: locationCode,
    }).save();
    return res.json({ message: "Record added successfully", success: true });
  } catch (error) {
    res.json({ message: "something went wrong", success: false });
  }
};

const feeLocationGetReq = async (req, res) => {
  try {
    const data = await feeLocation.find({});
    return res.json({ success: true, data: data });
  } catch (error) {}
};

module.exports = { FeeLocationPostReq, feeLocationGetReq };
