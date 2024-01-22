const SchoolInfo = require("../Model/SchoolInfoSchema");

const SchoolInfoPostReq = async (req, res) => {
  try {
    const {
      schoolName,
      address,
      state,
      pinCode,
      phoneNumber,
      FeeCollectionMethod,
      registrationFee,
      schoolShortName,
      affiliatedTo,
      email,
      website,
      affiliationCode,
      schoolCode,
    } = req.body;

    const SchoolData = new SchoolInfo({
      schoolName,
      address,
      state,
      pinCode,
      phoneNumber,
      FeeCollectionMethod,
      registrationFee,
      schoolShortName,
      affiliatedTo,
      email,
      website,
      affiliationCode,
      schoolCode,
    });

    if (req.files.schoolLogo) {
      const schoolLogo = req.files.schoolLogo[0].filename;
      SchoolData.schoolLogo = schoolLogo; // Correct assignment to SchoolData
    }

    const saveData = await SchoolData.save();

    return res.status(200).json({
      success: true,
      message: "School information updated successfully",
      data: saveData,
    });
  } catch (error) {
    console.error("Error updating school information:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const SchoolInfoGetReq = async (req, res) => {
  try {
    // Use await to wait for the asynchronous operation to complete
    const data = await SchoolInfo.find({});

    if (!data || data.length === 0) {
      return (
        res
          // .status(404)
          .json({ message: "No school information found.", success: false })
      );
    }

    // Send a successful response with the retrieved data
    return res.json({ success: true, data: data });
  } catch (error) {
    // Handle any errors that might occur during the database query
    console.error("Error fetching school information:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const SchoolInfoUpdateReq = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      schoolName,
      address,
      state,
      pinCode,
      phoneNumber,
      FeeCollectionMethod,
      registrationFee,
      schoolShortName,
      affiliatedTo,
      email,
      website,
      affiliationCode,
      schoolCode,
    } = req.body;

    let updateFields = {
      schoolName: schoolName,
      address: address,
      state: state,
      pinCode: pinCode,
      phoneNumber: phoneNumber,
      FeeCollectionMethod: FeeCollectionMethod,
      registrationFee: registrationFee,
      schoolShortName: schoolShortName,
      affiliatedTo: affiliatedTo,
      email: email,
      website: website,
      affiliationCode: affiliationCode,
      schoolCode: schoolCode,
    };

    if (req.files.schoolLogo) {
      const schoolLogo = req.files.schoolLogo[0].filename;
      updateFields.schoolLogo = schoolLogo;
    }

    const updatedSchool = await SchoolInfo.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedSchool) {
      return res
        .status(404)
        .json({ error: "School not found", success: false });
    }

    return res.status(200).json({
      message: "School information updated successfully",
      // data: updatedSchool,
      success: true,
    });
  } catch (error) {
    console.error("Error updating school information:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", success: flase });
  }
};

module.exports = { SchoolInfoPostReq, SchoolInfoGetReq, SchoolInfoUpdateReq };
