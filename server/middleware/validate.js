const validateDto = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      mes: error.details[0].message.replaceAll(`\"`, ""),
    });
  }
  next();
};
module.exports = validateDto;
