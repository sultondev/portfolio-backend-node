const express = require("express");
const app = express();
const morgan = require("morgan");
const projectRoutes = require("./routes/projectRoutes");





app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/projects", projectRoutes);

module.exports = app;
