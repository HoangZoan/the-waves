const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const routes = require("./routes");
const passport = require("passport");
const { jwtStrategy } = require("./middleware/passport");

const { handleError, convertToApiError } = require("./middleware/apiError");

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri);

// Body parse
app.use(express.json());

// Sanitize
app.use(xss());
app.use(mongoSanitize());

// Passport
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// Routes
app.use("/api", routes);

// Handle errors

/* Handle if the error is not recognizable */
app.use(convertToApiError);

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
