const mongoose = require("mongoose");
const Shorts = mongoose.model("Shorts");

module.exports = {
  createShorts: async (req, res) => {
    try {
      // Create blogs in db

      const short = new Shorts({
        url: req.body.url,
        // posteddate: new Date()
      });
      const shorts = await short.save();
      return res.status(201).json({
        success: true,
        message: "Data Saved successfully!",
        data: shorts,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  },

  getShorts: async (req, res) => {
    try {
      //How this line is working need to ask from chetan
      const shorts = await Shorts.find({});

      res.status(200).json({
        success: true,
        message: "Fetched all shorts successfully",
        shorts,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  },
};
