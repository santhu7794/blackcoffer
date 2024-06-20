const express = require("express");
const black = require("../models/balckModel");
const route = express.Router();
const cors = require("cors");
let corsOptions = {
  orgin: ["http://localhost:4200"],
};
route.post("/addvisual", cors(corsOptions), (req, res) => {
  const visual = new black(req.body);
  visual.save();
  res.status(201).json(visual);
});
route.get("/view", cors(corsOptions), async (req, res) => {
  try {
    const viewdata = await black.find();
    res.status(201).json(viewdata);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});
route.put("/updateblack/:id", cors(corsOptions), async (req, res) => {
  const update = await black.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  res.status(201).json(update);
});
route.delete("/deletedetails/:id", cors(corsOptions), async (req, res) => {
  const deleteblack = await black.findByIdAndDelete(req.params.id);
  res.status(201).json(deleteblack);
});

module.exports = route;
