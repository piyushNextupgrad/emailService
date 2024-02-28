const mongoose = require("mongoose");
const schema = mongoose.Schema;

const formSchema = schema({
  username: { type: String, required: true },
  date: { type: Date, required: true },
  experience: { type: Number, required: true },
  role: { type: String, required: true },
  technologies: [{ technology: { type: String } }],
  notice: { type: Number, required: true },
});

const model = mongoose.model("forms", formSchema);

module.exports = model;
