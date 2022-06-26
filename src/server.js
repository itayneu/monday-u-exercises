const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./server/middleware/logger");
const todoRouter = require("./server/routes/todoRouter");

const port = 3005;
const app = express();

app.use(logger);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", todoRouter);

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "true");
  res.status(200).json({
    health: "ok",
  });
});

app.listen(port, () => {
  console.log("Server started on port ", port);
});
