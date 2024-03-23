const initialRouter = (app) => {
  app.use("/", (req, res) => {
    return res.send("Server on");
  });
};

module.exports = initialRouter;
