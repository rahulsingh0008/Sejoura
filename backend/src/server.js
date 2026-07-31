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

app.set("trust proxy", 1);

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
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Sejoura Backend API is running 🚀",
    version: "1.0.0",
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/ai", aiRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});