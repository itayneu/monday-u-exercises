const express = require("express");
const port = 8080;
const app = express();

app.use("/static", express.static("public"));

app.listen(port, () => {
  console.log("Server started on port ", port);
});
