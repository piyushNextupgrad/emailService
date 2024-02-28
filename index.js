const express = require("express");
const cors = require("cors");
const app = express();
require("./db/connection");
const jobRouter = require("./routes/jobRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//......

app.use("/jobs", jobRouter);

app.get("/", (req, resp) => {
  console.log("hello from job service");
  resp.send("<h3>hello from job service</h3>");
});

app.use((req, resp) => {
  resp.json({ success: false, msg: "no route found 404" });
});

app.listen("5000", (req, resp) => {
  console.log("listening on port 5000");
});
