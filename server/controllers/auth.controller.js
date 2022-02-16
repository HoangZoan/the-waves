const { authService } = require("../services");
const httpStatus = require("http-status");

const authController = {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authService.createUser(email, password);
      const token = await authService.genAuthToken(user);

      // Send register email

      res
        .cookie("your-access-token", token)
        .status(httpStatus.CREATED)
        .send({ user, token });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  },

  async signIn(req, res, next) {
    try {
    } catch (error) {}
  },

  async isAuth(req, res, next) {
    try {
    } catch (error) {}
  },
};

module.exports = authController;
