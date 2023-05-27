const mongoose = require("mongoose");
const Benefits = mongoose.model("Benefits");

module.exports = {
  createBenefits: async (req, res) => {
    try {
      const usertype = req.body.userType;
      const companyName = req.body.companyName;
      const discount = req.body.discount;
      const description = req.body.description;

      const benefitObj = new Benefits({
        userType: usertype,
        companyName: companyName,
        discount: discount,
        description: description,
      });
      const benf = await benefitObj.save();
      return res.status(201).json({
        success: true,
        message: "Data Saved successfully!",
        data: benf,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  },

  getBenefits: async (req, res) => {
    try {
      if (req && req.body && req.body.role == "ADMIN") {
        //How this line is working need to ask from chetan
        const benefits = await Benefits.find({});

        res.status(200).json({
          success: true,
          message: "Fetched all Benefits successfully",
          notificationList: benefits,
        });
      } else {
        const benefits = await Benefits.find({
          $or: [{ userType: "All" }, { userType: req.body.userType }],
        });
        res.status(200).json({
          success: true,
          message: "Fetched all Benefits successfully",
          notificationList: benefits,
        });
      }
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  },

  deleteBenefits: async (req, res) => {
    try {
      // if (req) {
      //     if (req.body.notificationId) {
      //         const notificationID = req.body.notificationId;
      //         await Notification.deleteOne({ _id: notificationID });
      //         res.status(200).json({
      //             success: true,
      //             message: "Notification Deleted Successfuly!!",
      //         })
      //     } else {
      //         res.status(404).json({
      //             success: false,
      //             message: "Not found notificationId",
      //         })
      //     }
      // } else {
      await Benefits.deleteMany({});
      res.status(200).json({
        success: true,
        message: "Benefits Deleted Successfuly!!",
      });
      // }
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  },
};
