const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  release_on: {
    type: Date,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Movie", MoviesSchema);
