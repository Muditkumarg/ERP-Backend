const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userData = require("../Model/LoginSchema.js");
const SECRET_KEY = "ERP";

const RegisterRequest = async (req, res) => {
  const { name, email, password, conpassword } = req.body;
  try {
    const existingUser = await userData.findOne({ email: email });
    if (existingUser) {
      return res.json({ message: "User Already Exist", success: false });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const signUpUser = await userData.create({
        name: name,
        email: email,
        password: hashedPassword,
        conpassword: conpassword,
      });

      const token = jwt.sign({ email: signUpUser.email }, SECRET_KEY);
      res.status(201).json({
        message: "Registration Successfully",
        success: true,
        token: token,
      });
    }
  } catch (error) {
    res.json({ message: "Something went wrong", success: false });
  }
};

const LoginRequest = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userData.findOne({ email: email });
    if (!existingUser) {
      return res.json({ message: "user not found", success: false });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.json({ message: "Invalid Credential", success: false });
    }
    const token = jwt.sign({ email: existingUser }, SECRET_KEY);
    res.json({ message: "Login successfully", success: true, token: token });
  } catch {
    res.json({ message: "something went wrong" });
  }
};

const VerifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(501).json({
      message: "Authentication failed: No token provided",
      success: false,
    });
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Authentication failed: Invalid token" });
    }
    req.user = decoded;
    next();
  });
};
const getUserData = async (req, res) => {
  try {
    const data = await userData.find({});
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { RegisterRequest, LoginRequest, VerifyToken, getUserData };
