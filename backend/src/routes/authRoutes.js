const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const { body } = require("express-validator");
const validate = require("../middleware/validate");
const authLimiter = require("../middleware/rateLimiter");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),

  (req, res) => {
    const token = jwt.sign(
      {
        userId: req.user.id,
        email: req.user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.redirect(
      `http://localhost:5173/login-success?token=${token}`
    );
  }
);

router.post(
  "/register",
  authLimiter,
  [
    body("email").isEmail().withMessage("Please enter a valid email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  validate,
  registerUser
);

router.post(
  "/login",
  authLimiter,
  [
    body("email").isEmail().withMessage("Please enter a valid email"),

    body("password")
      .notEmpty()
      .withMessage("Password is required"),
  ],
  validate,
  loginUser
);

module.exports = router;