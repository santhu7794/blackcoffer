const mongoose = require('mongoose');
const dashboarads = new mongoose.Schema({
  
  intensity: {
    type: String,
    require: true,
  },
  likelihood: {
    type: String,
    require: true,
  },
  relevance: {
    type: String,
    require: true,
  },
  start_year: {
    type: String,
    require: true,
  },
  end_year: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  topic: {
    type: String,
    require: true,
  },
  region: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  published: {
    type: String,
    require: true,
  },
  sector:{
    type:String,
    require:true,
  },
  pestle:{
    type:String,
    require:true,
  },
  source:{
    type:String,
    require:true,
  }
 
});
module.exports = mongoose.model("dashboarads",dashboarads);
