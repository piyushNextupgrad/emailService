const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Piyush:Nextupgrad@cluster0.akvcs4v.mongodb.net/emailService?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err.message));
