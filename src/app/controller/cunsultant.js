const mongoose = require("mongoose");
const Consultants = mongoose.model("Consultants");

module.exports = {
  addConsulant: async (req, res) => {
    try {
      // Create blogs in db

      const consultant = new Consultants({
        name: req.body.name,
        img:
          req?.body?.img ||
          "https://ionicframework.com/docs/img/demos/avatar.svg",
        description: req.body.discription,
        // posteddate: new Date()
      });
      const consultants = await consultant.save();
      return res.status(201).json({
        success: true,
        message: "Data Saved successfully!",
        data: consultants,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  },

  getConsulants: async (req, res) => {
    try {
      //How this line is working need to ask from chetan
      const consultants = await Consultants.find({});

      res.status(200).json({
        success: true,
        message: "Fetched all Consultants successfully",
        consultants,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  },

  //   deletenotification: async (req, res) => {
  //     try {
  //       // if (req) {
  //       //     if (req.body.notificationId) {
  //       //         const notificationID = req.body.notificationId;
  //       //         await Notification.deleteOne({ _id: notificationID });
  //       //         res.status(200).json({
  //       //             success: true,
  //       //             message: "Notification Deleted Successfuly!!",
  //       //         })
  //       //     } else {
  //       //         res.status(404).json({
  //       //             success: false,
  //       //             message: "Not found notificationId",
  //       //         })
  //       //     }
  //       // } else {
  //       await Notification.deleteMany({});
  //       res.status(200).json({
  //         success: true,
  //         message: "Notification Deleted Successfuly!!",
  //       });
  //       // }
  //     } catch (e) {
  //       return res.status(500).json({
  //         success: false,
  //         message: e.message,
  //       });
  //     }
  //   },
};
