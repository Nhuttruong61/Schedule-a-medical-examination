const auth = require("./auth");
const user = require("./user");
const department = require("./department");

const initialRouter = (app) => {
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/user", user);
  app.use("/api/v1/department", department);

  app.use("/", (req, res) => {
    return res.send("Server on");
  });
};

module.exports = initialRouter;
