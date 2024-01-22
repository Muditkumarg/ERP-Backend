const express = require("express");
const cors = require("cors");
const router = require("./Routes/Route.js");
const DataBase = require("./DataBase/db.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("HTTP Method " + req.method + "URL" + req.url);
  next();
});

app.use("/", router);
app.use("/schoollogo", express.static("./SchoolLogoUpload"));

app.listen(5000, () => {
  console.log("Port 5000 activate");
});
