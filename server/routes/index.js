const express = require("express");
const authRoute = require("./auth.route");
const router = express.Router();

const routesIndex = [{ path: "/auth", route: authRoute }];

routesIndex.forEach(({ path, route }) => {
  router.use(path, route);
});

module.exports = router;
