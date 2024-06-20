const express = require("express");
const admin = require("../models/adminModel.js");
const route = express.Router();
const cors = require("cors");

let corsOptions = {
  orgin: ["http://localhost:4200"],
};
route.post("/addadmin", cors(corsOptions), (req, res) => {
  const a = new admin(req.body);
  a.save();
  res.status(201).json(a);
});
route.post("/login", cors(corsOptions), async (req, res) => {
  const adminlogin = await admin.findOne(req.body);
  if (adminlogin) {
    res.status(201).json(adminlogin);
  } else {
    res.status(500).json("Login Failed");
  }
});
module.exports = route;
