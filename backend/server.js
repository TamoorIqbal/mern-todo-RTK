const dotenv = require("dotenv");
const app = require("./app.js");
const path = require("path");

const connectDatabase = require("./config/database.js");

dotenv.config({ path: "./config/config.env" });

connectDatabase();

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port: ${process.env.PORT} `);
});

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
if (process.env.PORT === "production") {
  app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'),function (err) {
          if(err) {
              res.status(500).send(err)
          }
      });
  })

}

