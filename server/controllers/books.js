const Book = require('../models/').Book;

export default {
  index(req, res) {
    Book.findAll()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

  show(req, res) {
    Book.findById(req.params.id)
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
  },

  create(req, res) {
    Book.create(req.body)
    .then((newBook) => {
      res.status(200).json(newBook);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
  },

  delete(req, res) {
    Book.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((deletedBook) => {
      res.status(200).json(deletedBook);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
  },
};
