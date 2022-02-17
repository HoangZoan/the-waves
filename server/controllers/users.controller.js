const { userService } = require("../services");
const httpRequest = require("http-status");
const { ApiError } = require("../middleware/apiError");

const usersController = {
  async profile(req, res, next) {
    try {
      const user = await userService.findUserById(req.user._id);
      if (!user) {
        throw new ApiError(httpRequest.NOT_FOUND, "User not found");
      }

      res.json(res.locals.permission.filter(user._doc));
    } catch (error) {
      next(error);
    }
  },

  async updateProfile(req, res, next) {
    try {
      const user = await userService.updateUserProfile(req);
      res.json(res.locals.permission.filter(user._doc));
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usersController;
