const express = require("express");

const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const {
  getAllQueries,
  getQueryById,
  createQuery,
  updateQuery,
  deleteQuery,
  searchQueries,
} = require("../controllers/queryController");

router.get("/", verifyToken, getAllQueries);

router.get("/search", verifyToken, searchQueries);

router.get("/:id", verifyToken, getQueryById);

router.post("/", verifyToken, createQuery);

router.put("/:id", verifyToken, updateQuery);

router.delete("/:id", verifyToken, deleteQuery);

module.exports = router;