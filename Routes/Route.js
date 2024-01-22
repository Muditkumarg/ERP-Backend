const express = require("express");
const {
  RegisterRequest,
  LoginRequest,
  VerifyToken,
  getUserData,
} = require("../Controller/login.js");
const logoUpload = require("../File/SchoolLogo.js");
const {
  SchoolInfoPostReq,
  SchoolInfoGetReq,
  SchoolInfoUpdateReq,
} = require("../Controller/SchoolInfo.js");

const {
  SessionPostReq,
  GetSessionReq,
  sessionStatusUpdateReq,
} = require("../Controller/Session.js");
const {
  FeeLocationPostReq,
  feeLocationGetReq,
} = require("../Controller/Feelocation.js");
const {
  postClassReq,
  getClassReq,
  updateClassReq,
} = require("../Controller/class.js");
const {
  postSectionReq,
  getSectionReq,
  updateSectionReq,
} = require("../Controller/section.js");
const {
  postClassSectionReq,
  getClassSectionReq,
  UpdateClassSectionReq,
} = require("../Controller/ClassSection.js");
const {
  PostBloodGroup,
  getBloodGroup,
  bloodGroupStatusUpdate,
} = require("../Controller/BloodGroup.js");
const {
  PostCastReq,
  getCastReq,
  castStatusUpdate,
} = require("../Controller/CastCategory.js");
const {
  PostMaritalStatusReq,
  getMaritalStatusReq,
  updateMaritalStatusReq,
} = require("../Controller/MaritalStatus.js");
const {
  postReligionReq,
  getReligionReq,
  updateReligionReq,
} = require("../Controller/Religion.js");
const {
  postStateReq,
  getStateReq,
  updateStateStatusReq,
} = require("../Controller/States.js");
const {
  postStateCityReq,
  getStateCityReq,
  updateStateCityReq,
} = require("../Controller/stateCity.js");

const router = express.Router();

router.post("/sign-up", RegisterRequest);
router.post("/login", LoginRequest);
router.post("/token-verify", VerifyToken);
router.get("/get-user/data", VerifyToken, getUserData);
router.post("/save/school-data", VerifyToken, logoUpload, SchoolInfoPostReq);
router.get("/get/school-data", VerifyToken, SchoolInfoGetReq);
router.post("/post/session", VerifyToken, SessionPostReq);
router.get("/get/session", VerifyToken, GetSessionReq);
router.put("/update/status/session/:id", VerifyToken, sessionStatusUpdateReq);

router.put(
  "/update/school-data/:id",
  VerifyToken,
  logoUpload,
  SchoolInfoUpdateReq
);

router.post("/post/fee-location", FeeLocationPostReq);
router.get("/get/fee-location", VerifyToken, feeLocationGetReq);
router.post("/post/class", VerifyToken, postClassReq);
router.get("/get/class", VerifyToken, getClassReq);
router.put("/update/class", VerifyToken, updateClassReq);

router.post("/post/section", VerifyToken, postSectionReq);
router.get("/get/section", VerifyToken, getSectionReq);
router.put("/update/section/", VerifyToken, updateSectionReq);
router.post("/add/class-wise/section", VerifyToken, postClassSectionReq);
router.get("/get/class-wise/section", VerifyToken, getClassSectionReq);
router.put("/update/class-wise/section", UpdateClassSectionReq);
router.post("/post/blood/group", VerifyToken, PostBloodGroup);
router.get("/get/blood/group", VerifyToken, getBloodGroup);
router.put(
  "/update/status/blood/group/:id",
  VerifyToken,
  bloodGroupStatusUpdate
);
router.post("/post/cast", VerifyToken, PostCastReq);
router.get("/get/cast", VerifyToken, getCastReq);
router.put("/update/status/cast/:id", VerifyToken, castStatusUpdate);
router.post("/post/marital/status", VerifyToken, PostMaritalStatusReq);
router.get("/get/marital/status", VerifyToken, getMaritalStatusReq);
router.put("/update/status/marital/:id", VerifyToken, updateMaritalStatusReq);
router.post("/post/religion", VerifyToken, postReligionReq);
router.get("/get/religion", VerifyToken, getReligionReq);
router.put("/update/religion/:id", VerifyToken, updateReligionReq);

router.post("/post/states", VerifyToken, postStateReq);
router.get("/get/states", VerifyToken, getStateReq);
router.put("/update/states", VerifyToken, updateStateStatusReq);

router.post("/post/state/city", VerifyToken, postStateCityReq);
router.get("/get/state/city", VerifyToken, getStateCityReq);
router.put("/update/states", VerifyToken, updateStateStatusReq);
module.exports = router;
