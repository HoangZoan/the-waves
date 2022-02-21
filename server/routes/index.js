const express = require("express");
const authRoute = require("./auth.route");
const usersRoute = require("./users.route");
const brandsRoute = require("./brand.route");
const productRoute = require("./product.route");
const siteRoute = require("./site.route");
const router = express.Router();

const routesIndex = [
  { path: "/auth", route: authRoute },
  { path: "/users", route: usersRoute },
  { path: "/brands", route: brandsRoute },
  { path: "/products", route: productRoute },
  { path: "/site", route: siteRoute },
];

routesIndex.forEach(({ path, route }) => {
  router.use(path, route);
});

module.exports = router;
