const dotenv = require("dotenv");
const app = require("./app");

const connectDatabase = require("./config/database");

dotenv.config({ path: "./config/config.env" });

connectDatabase();

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port: ${process.env.PORT} `);
});

