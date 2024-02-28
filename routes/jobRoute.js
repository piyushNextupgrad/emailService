const express = require("express");
const router = express.Router();
const jobModel = require("../model/jobModel");

const { postData } = require("../controller/jobController");

router.post("/api/postMail", postData);

module.exports = router;
