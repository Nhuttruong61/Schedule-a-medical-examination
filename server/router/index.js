const auth = require("./auth");
const user = require("./user");
const department = require("./department");
const doctor = require("./doctor");
const blog = require("./blog");

const initialRouter = (app) => {
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/user", user);
  app.use("/api/v1/department", department);
  app.use("/api/v1/doctor", doctor);
  app.use("/api/v1/blog", blog);

  app.use("/", (req, res) => {
    return res.send("Server on");
  });
};

module.exports = initialRouter;
