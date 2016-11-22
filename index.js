import express from 'express';
import authors from './server/controllers/authors';

const app = express();

app.get('/authors', authors.index);
app.get('/authors/:id', authors.show);
app.post('/authors', authors.create);
app.put('/authors', authors.update);
app.delete('/authors', authors.delete);

app.get('/books', books.index);
app.get('/books/:id', books.show);
app.post('/books', books.create);
app.delete('/books', books.delete);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('App listening on port', app.get('port'));
});
