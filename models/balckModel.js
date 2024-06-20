const mongoose = require('mongoose');
const dashboarads = new mongoose.Schema({
  Intensity: {
    type: String,
    require: true,
  },
  Likelihood: {
    type: String,
    require: true,
  },
  Relevance: {
    type: String,
    require: true,
  },
  Year: {
    type: String,
    require: true,
  },
  Country: {
    type: String,
    require: true,
  },
  Topics: {
    type: String,
    require: true,
  },
  Region: {
    type: String,
    require: true,
  },
  City: {
    type: String,
    require: true,
  },
  published: {
    type: String,
    require: true,
  },
  topic: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("dashboarads",dashboarads);
