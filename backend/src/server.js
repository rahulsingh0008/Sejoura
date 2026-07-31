const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const cors = require("cors");

const queryRoutes = require("./routes/queryRoutes");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes");
const passport = require("passport");
const session = require("express-session");
const aiRoutes = require("./routes/aiRoutes");

require("./config/passport");



const app = express();

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL, // Local frontend
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/ai", aiRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});