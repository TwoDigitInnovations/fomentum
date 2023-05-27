"use strict";
const mongoose = require("mongoose");
const shortsSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

shortsSchema.set("toJSON", {
  getters: true,
  virtuals: false,
  transform: (doc, ret, options) => {
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Shorts", shortsSchema);
