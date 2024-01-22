const multer = require("multer");

const Storage1 = multer.diskStorage({
  destination: "SchoolLogoUpload",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const SchoolLogoUpload = multer({
  storage: Storage1,
});
const logoUpload = SchoolLogoUpload.fields([{ name: "schoolLogo" }]);
module.exports = logoUpload;
