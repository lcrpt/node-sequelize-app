import express from 'express';
import authors from './server/controllers/authors';

const app = express();

app.get('/authors', authors.index);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('App listening on port', app.get('port'));
});
