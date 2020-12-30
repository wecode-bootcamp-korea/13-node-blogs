const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());

// NOTE error handler
app.use((err, req, res, next) => {
  const { status, message } = err;
  console.log(err);
  res.status(status || 500).json({ message });
});

app.use(routes);

module.exports = app;
