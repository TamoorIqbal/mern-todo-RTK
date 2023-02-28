const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors());

const todo = require("./route/TodoRoute.js");
app.use("/api/v1", todo);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));
//   app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'),function (err) {
//           if(err) {
//               res.status(500).send(err)
//           }
//       });
//   })
app.get("/", (req, res) => {
  res.send("Hello world!");
});

}

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });






// app.use(express.static(path.resolve("./frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("./frontend/build/index.html"));
// });

module.exports = app;
