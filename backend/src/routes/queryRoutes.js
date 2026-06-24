const express = require("express");

const router = express.Router();

const {
  getAllQueries,
  getQueryById,
  createQuery,
  updateQuery,
  deleteQuery,
  searchQueries,
} = require("../controllers/queryController");

router.get("/", getAllQueries);

router.get("/search", searchQueries);

router.get("/:id", getQueryById);

router.post("/", createQuery);

router.put("/:id", updateQuery);

router.delete("/:id", deleteQuery);

module.exports = router;