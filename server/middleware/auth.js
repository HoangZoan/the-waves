const passport = require("passport");
const { ApiError } = require("./apiError");
const httpStatus = require("http-status");
const { roles } = require("../config/roles");

const verify = (req, res, resolve, reject, rights) => async (err, user) => {
  if (err || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, "Sorry, unauthorized"));
  }

  req.user = user;

  // Verify the authorization of access of user
  if (rights.length > 0) {
    const action = rights[0]; // createAny, readAny
    const resource = rights[1]; // dog, profile, user
    const permission = roles.can(req.user.role)[action](resource);

    if (!permission.granted) {
      return reject(
        new ApiError(httpStatus.FORBIDDEN, "Sorry, you don't have enough right")
      );
    }

    // Set the data in response according to the permission of user
    res.locals.permission = permission;
  }

  resolve();
};

const auth =
  (...rights) =>
  async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verify(req, res, resolve, reject, rights)
      )(req, res, next);
    })
      .then(() => next())
      .catch((error) => next(error));
  };

module.exports = auth;
