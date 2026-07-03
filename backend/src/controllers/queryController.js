const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET ALL
const getAllQueries = async (req, res) => {
  try {
    const queries = await prisma.guestQuery.findMany({
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE
const getQueryById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const query = await prisma.guestQuery.findUnique({
      where: { id },
    });

    if (!query) {
      return res.status(404).json({
        message: "Query not found",
      });
    }

    res.status(200).json(query);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE
const createQuery = async (req, res) => {
  try {
    const { guestName, query, status } = req.body;

    const newQuery = await prisma.guestQuery.create({
      data: {
        guestName,
        query,
        status,
      },
    });

    res.status(201).json(newQuery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateQuery = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await prisma.guestQuery.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        message: "Query not found",
      });
    }

    const updated = await prisma.guestQuery.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteQuery = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await prisma.guestQuery.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        message: "Query not found",
      });
    }

    await prisma.guestQuery.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Query deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH
const searchQueries = async (req, res) => {
  try {
    const status = req.query.status;

    const queries = await prisma.guestQuery.findMany({
      where: {
        status: {
          equals: status,
          mode: "insensitive",
        },
      },
    });

    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllQueries,
  getQueryById,
  createQuery,
  updateQuery,
  deleteQuery,
  searchQueries,
};