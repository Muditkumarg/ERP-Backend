const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ERPProject")
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch(() => {
    console.log("DataBase Not Connected");
  });

module.exports = mongoose;
