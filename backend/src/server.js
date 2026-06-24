const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const queryRoutes = require("./routes/queryRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/queries", queryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});