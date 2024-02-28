const mongoose = require("mongoose");
const schema = mongoose.Schema;

const jobSchema = schema(
  {
    jobName: { type: String, required: true },

    jobHeading: { type: String, required: true },
    jobLocation: { type: String, required: true },
    jobMedia: { type: String },
    jobSalary: { type: String },
    jobExp: { type: String },
    jobApplicants: { type: Number },
  },
  { timestamps: true }
);

const model = mongoose.model("jobs", jobSchema);

module.exports = model;
