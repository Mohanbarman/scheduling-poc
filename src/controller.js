const express = require("express");
const service = require("./service");
const helpers = require("./helpers");

/**
 * Controller for scheduling an event
 * @param {express.Request} req
 * @param {express.Response} res
 */
const scheduleEvent = async (req, res) => {
    /**
     * @type Date
     */
    const time = new Date(req.body.time);

    if (time < new Date()) {
        res.status(400).json({
            success: false,
            message: "Event can't be scheduled for past",
            errors: {
                time: "Time must be in future"
            }
        });
        return;
    }

    /**
     * @type string
     */
    const text = req.body.text;

    if (typeof text == "undefined") {
        res.status(400).json({
            success: false,
            message: "Some fields missing",
            errors: {
                text: "This is a required field",
            },
        });
    }

    service.scheduleTask(time, console.log, text);

    await helpers.sleep(1000 * text.length);

    res.json({ text });
};

module.exports = {
    scheduleEvent,
};
