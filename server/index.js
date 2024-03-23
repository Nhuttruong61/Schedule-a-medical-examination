const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const initialRouter = require("./router");
const dbConnect = require("./config/dataBase.config");

require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

initialRouter(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port` + " " + process.env.PORT);
});
dbConnect();
