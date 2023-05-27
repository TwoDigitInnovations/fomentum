"use strict";
const mongoose = require("mongoose");
const consultantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
      default: "https://ionicframework.com/docs/img/demos/avatar.svg",
    },
  },
  {
    timestamps: true,
  }
);

consultantsSchema.set("toJSON", {
  getters: true,
  virtuals: false,
  transform: (doc, ret, options) => {
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Consultants", consultantsSchema);
