const http = require("http");

const getTimeAfterSeconds = (offset) => new Date(Date.now() + 1000 * offset);

const events = [
    { time: getTimeAfterSeconds(10), text: "Call me 0" },
    { time: getTimeAfterSeconds(5), text: "Call me 1" },
    { time: getTimeAfterSeconds(1), text: "Call me 2" },
    { time: getTimeAfterSeconds(12), text: "Call me 3" },
    { time: getTimeAfterSeconds(4), text: "Call me 4" },
    { time: getTimeAfterSeconds(9), text: "Call me 5" },
    { time: getTimeAfterSeconds(8), text: "Call me 6" },
    { time: getTimeAfterSeconds(7), text: "Call me 7" },
    { time: getTimeAfterSeconds(6), text: "Call me 8" },
    { time: getTimeAfterSeconds(5), text: "Call me 9" },
];

/**
 * @type {http.RequestOptions}
 */
const requestOptions = {
    host: "localhost",
    path: "/schedule",
    port: 3000,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

events.forEach((event) => {
    const req = http.request(requestOptions, (res) => {
        console.log(`StatusCode: ${res.statusCode}`);

        res.on("data", (d) => {
            process.stdout.write(d + "\n");
        });
    });
    req.write(JSON.stringify(event));
    req.end();
});
