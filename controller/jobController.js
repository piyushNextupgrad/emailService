const jobModel = require("../model/jobModel");
const formModel = require("../model/formModle");
const { connectToQueue } = require("../db/rabbitmqConnection");
const emailjs = require("@emailjs/nodejs");
require("dotenv").config();

const contactConfig = {
  YOUR_SERVICE_ID: "service_enew15g",
  YOUR_TEMPLATE_ID: "template_bmlkhgp",
  YOUR_USER_ID: "w5ZtM1A0Wjxmg2bJV",
  YOUR_EMAIL: "developer11.nextupgrad@gmail.com",
};

const postData = async (req, resp) => {
  try {
    const templateParams = {
      from_name: req.body.email,
      user_name: req.body.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: req.body.message,
    };
    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log("SUCCESS");
          console.log(result.text);
        },
        (error) => {
          console.log("ERROR");
          console.log(error.text);
        }
      );
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { postData };
