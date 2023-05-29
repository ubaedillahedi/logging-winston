const express = require("express");
const app = express();
const expressWinston = require("express-winston");
const { transports, format } = require("winston");

app.use(
  expressWinston.logger({
    transports: [new transports.Console()],
    format: format.json(),
  })
);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(5001);
