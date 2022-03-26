const express = require("express");
const controller = require("./controller");
const config = require("./config");

const app = express();
app.use(express.json());

// routes
app.post("/schedule", controller.scheduleEvent);

app.listen(config.PORT, () =>
    console.info(`[Info] Server running on port ${config.PORT}`)
);
