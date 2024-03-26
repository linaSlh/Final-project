// require("dotenv/config");
require('dotenv').config();
require("./db");
const express = require("express");
const { isAuthenticated } = require("./middleware/jwt.middleware");
//added by me
const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
require("./config")(app);

// 👇 Start handling routes here
// const allRoutes = require("./routes");
// app.use("/api", allRoutes);

// const projectRouter = require("./routes/project.routes");
// app.use("/api", isAuthenticated, projectRouter);

// const taskRouter = require("./routes/task.routes");
// app.use("/api", isAuthenticated, taskRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

// require("./error-handling")(app);

module.exports = app;