const express = require("express");
const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use("/static", express.static("public"));

app.use("/todo", api);

app.get("/", (req, res) => {
  res.status(200).json({
    health: "ok",
  });
});

app.post("/error", async (req, res, next) => {
  try {
    let error = Error("Error");
    error.statusCode = 400;
    throw error;
  } catch (e) {
    next(e);
  }
});

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port ", port);
});
