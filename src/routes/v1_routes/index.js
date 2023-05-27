"use strict";
const router = require("express").Router();
const user = require("../../app/controller/user");
const isAuthenticated = require("./../../middlewares/isAuthenticated");
const notification = require("../../app/controller/notification");
const benefits = require("../../app/controller/benefits");
const shorts = require("../../app/controller/shorts");
const cunsultant = require("../../app/controller/consultant");

router.post("/login", user.login);
router.post("/signUp", user.signUp);

router.post(
  "/profile/changePassword",
  isAuthenticated(["USER", "PROVIDER"]),
  user.changePasswordProfile
);

router.post("/getProfile", user.getProfile);
router.post("/updateProfile", user.updateProfile);

//notification Route
router.post("/createNotification", notification.createNotification);
router.post("/getNotification", notification.getNotification);
router.post("/deleteNotification", notification.deletenotification);

//Benifits Route
router.post("/createBenefits", benefits.createBenefits);
router.post("/getBenefits", benefits.getBenefits);
router.post("/deleteBenefits", benefits.deleteBenefits);

//shorts
router.post("/create-shorts", shorts.createShorts);
router.get("/get-shorts", shorts.getShorts);

//consultants
router.post("/add-consultant", cunsultant.addConsulant);
router.get("/get-consultants", cunsultant.getConsulants);

module.exports = router;
