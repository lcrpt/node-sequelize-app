const Author = require('../models/').Author;
const Book = require('../models').Book;

module.exports = {
  index(req, res) {
    Author.findAll({
      include: Book,
    })
    .then((authors) => {
      res.status(200).json(authors);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

  show(req, res) {
    Author.findById(req.params.id, {
      include: Book,
    })
    .then((author) => {
      res.status(200).json(author);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

  create(req, res) {
    Author.create(req.body, {
      include: Book,
    })
    .then((newAuthor) => {
      res.status(200).json(newAuthor);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

  update(req, res) {
    Author.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedAuthor) => {
      res.status(200).json(updatedAuthor);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

  delete(req, res) {
    Author.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((deletedAuthor) => {
      res.status(200).json(deletedAuthor);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },
};
