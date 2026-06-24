let queries = require("../data/queries");

const getAllQueries = (req, res) => {
  res.status(200).json(queries);
};

const getQueryById = (req, res) => {
  const id = parseInt(req.params.id);

  const query = queries.find((q) => q.id === id);

  if (!query) {
    return res.status(404).json({
      message: "Query not found",
    });
  }

  res.status(200).json(query);
};

const createQuery = (req, res) => {
  const { guestName, query, status } = req.body;

  const newQuery = {
    id: queries.length + 1,
    guestName,
    query,
    status,
  };

  queries.push(newQuery);

  res.status(201).json(newQuery);
};

const updateQuery = (req, res) => {
  const id = parseInt(req.params.id);

  const index = queries.findIndex((q) => q.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Query not found",
    });
  }

  queries[index] = {
    ...queries[index],
    ...req.body,
  };

  res.status(200).json(queries[index]);
};

const deleteQuery = (req, res) => {
  const id = parseInt(req.params.id);

  const query = queries.find((q) => q.id === id);

  if (!query) {
    return res.status(404).json({
      message: "Query not found",
    });
  }

  queries = queries.filter((q) => q.id !== id);

  res.status(200).json({
    message: "Query deleted successfully",
  });
};

const searchQueries = (req, res) => {
  const status = req.query.status;

  const filtered = queries.filter(
    (q) => q.status.toLowerCase() === status.toLowerCase()
  );

  res.status(200).json(filtered);
};

module.exports = {
  getAllQueries,
  getQueryById,
  createQuery,
  updateQuery,
  deleteQuery,
  searchQueries,
};