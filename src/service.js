const schedule = require("node-schedule");

/**
 * Schedule a task for a particular time in future
 * @param {Date} date
 * @param {Function} callback
 */
function scheduleTask(date, callback, ...args) {
    console.info("[Info] scheduled task to run at :", date);
    const job = schedule.scheduleJob(date, function () {
        console.debug("[Debug] Running task at :", date);
        callback(...args);
    });
    return job;
}

module.exports = { scheduleTask };
