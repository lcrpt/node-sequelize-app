const authors = require('../controllers/authors');
const books = require('../controllers/books');

module.exports = (router) => {
  router.get('/authors', authors.index);
  router.get('/authors/:id', authors.show);
  router.post('/authors', authors.create);
  router.put('/authors', authors.update);
  router.delete('/authors', authors.delete);
  router.get('/books', books.index);
  router.get('/books/:id', books.show);
  router.post('/books', books.create);
  router.delete('/books', books.delete);

  return router;
};
