const auth = require("./auth");
const initialRouter = (app) => {
  app.use("/api/v1/auth", auth);
  app.use("/", (req, res) => {
    return res.send("Server on");
  });
};

module.exports = initialRouter;
